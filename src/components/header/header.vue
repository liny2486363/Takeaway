<template>
    <div id="header">
        <!--前半部的内容区域-->
        <div class="content-wrapper">
            <div class="avatar"><img :src="data.seller.avatar" alt="" width="64" height="64"></div>
            <div class="content">
                <div class="title">
                    <span class="pingpai"></span>
                    <span class="stores-name">{{data.seller.name}}</span>
                </div>
                <div class="description">{{data.seller.description}}/{{data.seller.deliveryTime}}分钟送达</div>
                <div v-if="data.seller.supports" class="support">
                    <span class="icon1"></span>
                    <span class="text">{{data.seller.supports[0].description}}</span>
                </div>
            </div>
            <div class="Bottomright" @click="showdetail">
                <span class="youhui">优惠</span>
                <i class="icon iconfont icon-31hongbao"></i> 
            </div>
        </div>
        <!--公告区-->
        <div class="bulletin-wrapper" @click="showdetail">
            <span class="bulletin-title"></span>
            <span class="bulletin-text">{{data.seller.bulletin}}</span>
            <i class="icon iconfont icon-fanhui2"></i>
        </div>
        <!--背景图-->
        <div class="background">
           <img :src="data.seller.avatar" width="100%" height="100%">
        </div>
        <!--点击优惠的时候出现的弹窗-->
        <transition name="info">
        <div class="detail" v-show="detailShow">
            <div class="detail-wrapper">
                <div class="detail-main">
                    <h1 class="name">{{data.seller.name}}</h1> 
                    <div class="title1">
                        <div class="line"></div>
                        <div class="text1">优惠信息</div>
                        <div class="line"></div>
                    </div>
                    <ul class="supports">
                        <li class="supports-item" v-for="item in data.seller.supports">
                            <span class="text2">{{item.description}}</span>
                        </li>
                    </ul> 
                    <div class="title1">
                        <div class="line"></div>
                        <div class="text1">商家公告</div>
                        <div class="line"></div>
                    </div>
                    <div class="bulletin-big">
                        <span>{{data.seller.bulletin}}</span>
                    </div>      
                </div>
            </div>
            <div class="detail-close" @click="hideDetail">
                <i class="icon iconfont icon-31guanbi"></i>
            </div>
        </div>
        </transition>
    </div>
</template>
<script>
// import star from '../star/star';
export default {
    props:{
        data:{
            type:Object
        }
    },
    data(){
        return{
            detailShow:false
        }
    },
    methods:{
        showdetail(){
            this.detailShow=true
        },
        hideDetail(){
            this.detailShow=false;
        }
    },
    components:{
         //star 待解决问题,引入star的组件会出现浏览器卡死状态...
    }
 
}
</script>
 <style>
 #header{
     color: #fff;
     background:grey;
     position: relative;
     background: rgba(7, 17,27, 0.5);
     overflow: hidden;
 }
 .content-wrapper{
     position: relative;
     padding: 24px 12px 18px 24px;
     font-size: 0
}
.avatar{
    display: inline-block;
    vertical-align: top;
}
.content{
    display: inline-block;
    font-size: 14px;
    margin-left: 16px;
}
.title{
    margin: 2px 0 8px 0
}
.pingpai{
    width: 30px;
    height: 18px;
    display: inline-block;
    background-image: url("brand@2x.png");
    background-size: 30px 18px;
    background-repeat: no-repeat;
    vertical-align: top;
}
.stores-name{
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
}
.description{
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
}
.icon1{
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 4px;
    background-image: url("decrease_1@2x.png");
    background-size: 15px 15px;
    background-repeat: no-repeat;
    vertical-align: top;
    }
.text{
    line-height: 12px;
    font-size: 12px;
}

.Bottomright{
     position: absolute;
     right: 12px;
     bottom: 13px;
     padding: 0 8px;
     height: 24px;
     text-align: center;
}
.youhui{
    display: inline-block;
    font-size: 13px;
    padding: 0 3px;
    font-weight: bold;
    color:red;
    
}

.bulletin-wrapper{
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
       /*文字显示被隐藏切呈现...*/
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7, 17,27, 0.2)
}
.bulletin-title{
    display: inline-block;
    vertical-align: middle;
    width: 22px;
    height: 12px;
    background-image: url("bulletin@2x.png");
    background-size: 22px 12px;
    background-repeat: no-repeat;   
}
.bulletin-text{
    font-size: 10px;
    margin-left:2px;
    margin-right: 4px;
}
.icon-fanhui2{
    position: absolute;
    right: 4px;
    top:2px;
    font-size: 12px;

}
.background{
   position: absolute;
   top:0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: -1;
   /*模糊效果*/
   filter:blur(10px)
}
.detail{
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    top:0px;
    left: 0px;
    overflow: auto;
    background:  rgba(7, 17,27, 0.8)
}
.detail-close{
    position: absolute;
    right: 10px;
    top:10px;
    float: right;
    font-size: 12px;
}
.detail-wrapper{
    min-height: 100%;
}
.detail-main{
    padding: 64px 20px;
}
.name{
    line-height: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 700
}
.title1{
    display: flex;
    width: 80%;
    margin: 30px auto 24px auto;
    justify-content: center;
    align-items: center;
}
.line{
    flex:1;
    border-bottom: 2px solid rgba(255,255, 255, 0.2);
}
.text1{
    flex:1;
    font-size: 14px; 
    text-align: center; 
}
.supports-item{
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    color: rgba(255,255, 255,0.8);
}
.bulletin-big{
    width: 80%;
    margin: 0px auto 0px auto;
    font-size: 12px;
    line-height: 20px;
    color: rgba(255,255, 255,0.8);
}
.info-enter, .info-leave-active{
    opacity: 0;
    background: rgba(7, 17,27, 0)
}
.info-enter-active, .info-leave-active{
     transition: all .5s;
}
</style>


