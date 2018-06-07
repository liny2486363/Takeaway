<template>
  <div class="shopcart">
     <div class="s-content">
         <div class="s-content-left">
             <div class="s-logo-wrapper">
                <i class="icon iconfont icon-iconset0308" ></i>
                <div class="s-count" v-show="totalCount>0">{{totalCount}}</div>
             </div>
             <div class="s-price">￥ {{totalPrice}} </div>
             <div class="s-go-price">另需配送费 ￥{{deliveryPrice}}元</div>
         </div>
         <div class="s-content-right">
             <div class="s-startpay">￥{{minPrice}}元起送</div>
         </div>
     </div>
  </div>    
</template>
<script>
export default {
    props:{
        selectFoods:{
          type:Array,   //type为Array 或者 Object的时候 default为一个函数。
          default(){  
              return [
                  {
                      price:10,
                      count:0
                  }
              ];
          }  
        },
        deliveryPrice:{
            type:Number
        },
        minPrice:{
            type:Number
        }
    },
    computed:{
        totalPrice(){
            let total=0;
            this.selectFoods.forEach((food)=> {
                total+=food.price*food.count;
            });
            return total
        },
        totalCount(){
            let counts=0;
            this.selectFoods.forEach((food)=>{
                  counts+=food.count;      
            });
            return counts;
        }

    }

}
</script>
<style>
.shopcart{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 46px;
    background:black;
}
.s-content{
    display: flex;
    background:#fff;
}
.s-content-left{
    flex: 1;
}
.s-content-right{
    flex: 0 0 105px;
}
.s-logo-wrapper{
  display: inline-block;
  padding: 7px 7px 7px 15px;
  position: relative;
}
.s-count{
  position: absolute;
  top:10px;
  left: 50px;
  font-size: 10px; 
  color:red;
}
.icon-iconset0308{
    font-size: 32px;
}
.s-price{
   display: inline-block;
   position: relative;
   top:-4px;
   padding-left: 10px;
   padding-right: 10px;
   font-size:16px;
   font-weight: 500px;
   border-right: 1px solid rgb(147,153,159);

}

.s-go-price{
   display: inline-block;
   position: relative;
   top:-4px;
   padding-left: 5px;
   font-size:12px;
}
.s-startpay{
   position: relative;
   top:3px;
   line-height: 46px;  
   font-size: 15px;
   color:#f3f5f7;
   font-weight:500px;
   background-color:rgba(147,153,159,0.5);
   text-align: center;
   }

</style>
