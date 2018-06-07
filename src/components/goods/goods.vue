<template>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li v-for="(item,index) in goods.goods" class="menu-item" :class="{'g-current':currentIndex === index}" @click="selectMenu(index)">
            <span class="g-text">{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul>
          <li v-for="item in goods.goods" class="food-list"> <!--food-list-hook 这个并不样式，用于JS操作-->
            <h1 class="g-title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item">
                 <div class="g-icon">
                   <img :src="food.icon" alt="" width="57px" height="57px">
                 </div>
                 <div class="g-content">
                   <h2 class="g-name">{{food.name}}</h2>
                   <p class="g-desc">{{food.description}}</p>
                   <div class="extra">
                      <span>月售:{{food.sellCount}}</span>
                      <span>好评率:{{food.rating}}%</span>
                   </div>
                   <div class="g-price">
                       <span class="now-price">￥{{food.price}}</span>
                       <span class="old-price" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                   </div>
                 </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <shopcart :deliveryPrice="goods.seller.deliveryPrice" :minPrice="goods.seller.minPrice"></shopcart>
    </div>    
</template>
<script>
import BScroll from 'better-scroll';
import shopcart from '../shopcart/shopcart'
export default {
    data(){
       return{
         goods:{},
         listHeight:[],
         scrollY:0
       }
    },
    computed:{
          //计算当前左边menu的位置
          currentIndex(){
            for(let i=0;i<this.listHeight.length;i++){
               let height1=this.listHeight[i]; //这个是遍历右边foodList的每个li的高度
               let height2=this.listHeight[i+1];
               if(!height2 || (this.scrollY>=height1 && this.scrollY<height2)){
                 return i;
               }
            }
            return 0
          }
    },
    created(){
      this.$ajax.get("../../../static/data.json")
      .then(response=>{
        this.goods=response.data;
        //在请求得到数据时执行 BScroll (initScroll执行滑动,)
        this.$nextTick(()=>{
           this.initScroll();
           this.calculateHeight();
        });
        console.log(this.goods);
      }).catch(error=>{ 
        console.log("error!")
      })
    },
    methods:{
      //实现滑动效果
      initScroll(){
       this.menuScroll=new BScroll('.menu-wrapper',{click:true}); 
       this.foodsScroll=new BScroll('.foods-wrapper',{
         probeType:3
       });

       this.foodsScroll.on('scroll',(pos)=>{
          this.scrollY=Math.abs(Math.round(pos.y)-1);
       })
    },
    calculateHeight(){
      let foodList=document.querySelector('.foods-wrapper').getElementsByClassName('food-list');
      console.log(foodList);
      let height = 0;
      this.listHeight.push(height);
      for(let i=0;i<foodList.length;i++){
        let item =foodList[i];
        height+=item.clientHeight; //通过clientHeight得到每个<li>的高度
        this.listHeight.push(height);
      }
        console.log(this.listHeight.length);
    },
    selectMenu(index){
       let foodList=document.querySelector('.foods-wrapper').getElementsByClassName('food-list');
       let el=foodList[index];
       this.foodsScroll.scrollToElement(el,100);
       
    }
 },
 components:{
        shopcart
 }
}
</script>
<style >
.goods{
  display: flex;
  position: absolute;
  top:176px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  align-items: stretch;
}
.menu-wrapper{
  flex:0 0 80px;
  height: 100%;
  background:#f3f5f7;
}
.foods-wrapper{
  flex:1 1 auto;
  height: 100%;
}
.menu-item{
  display:table;
  width: 60px;
  height: 54px;
  line-height: 14px;
  padding: 0 10px;
  border-bottom: 1px solid #d9dde1;
}
.g-current{
  background:#fff;
  color:red;
}
.g-text{
  display: table-cell;
  font-size: 12px;
  vertical-align: middle;
  text-align: center;
}
.g-title{
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 12px;
  height: 26px;
  line-height: 26px;
  border-left: 1px solid #d9dde1;
  font-size: 12px;
  color: rgb(147,153,159);
  background: #f3f5f7;
}
.food-item{
  display: flex;
  margin-left: 18px;
  margin-top: 18px;
  margin-right: 18px;
  border-bottom: 1px solid #d9dde1;
  padding-bottom: 18px;
}
.g-icon{
  flex:0 0 57px;
  margin-right: 17px;
}
.g-content{
  flex:1 1 auto;
}
.g-name{
   color: rgb(7,17,27);
   font-size: 15px;
   line-height:15px;  
   padding-bottom: 5px;
}
.extra{
   font-size: 12px;
   color: rgb(147,153,159);
   line-height: 12px;
   padding-bottom: 5px;
}
.now-price{
  font-size: 15px;
  color:sienna;
  line-height: 15px;
}
.old-price{
  font-size: 10px;
  color:rgb(147,153,159);
  text-decoration: line-through;
}
</style>
