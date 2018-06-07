<template>
  <div id="app">
      <v-header :data="data"></v-header>
      <!--导航栏-->
      <div class="nav">
          <router-link tag="div" class="nav-item" to="/goods"><span>商品</span></router-link>
          <router-link tag="div" class="nav-item" to="/assess"><span>评论</span></router-link>
          <router-link tag="div" class="nav-item" to="/user"><span>商家</span></router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header';
export default {
  data(){
    return{
      data:{}
    }
  },
  components:{
     'v-header':header
  },
  created(){
    this.$ajax.get('../static/data.json')
    .then(response=>{
      this.data=response.data;
      console.log(this.data);
    }).catch(error=>{
       console.log('error!')
    })
  }
}
</script>
 
<style>
 #app{
   font-family:"Microsoft Yahei";
 }
 .nav{
   display: flex;
   width: 100%;
   height: 40px;
   line-height: 40px;
   border-bottom: 1px solid rgba(7,17,27,0.1);
 }
 .nav-item{
   flex:auto;
   text-align: center
 }
 .nav-item span{
   color: rgb(77, 85,93)
 }
.router-link-active span{
  color: rgb(240,20,20)
}
</style>
