<template>
<div> 
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" 
@select="handleSelect" active-text-color="#F0B60A">
        <div id="logo-wrapper"><img id="logo" src="./img/logo.png"></div>
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
            <template slot="title">关于我们</template>
            <el-menu-item index="2-1">关于我们</el-menu-item>
            <el-menu-item index="2-2">我们的理念</el-menu-item>
            <el-menu-item index="2-3">我们的愿景</el-menu-item>
            <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">我们的服务</template>
            <el-menu-item index="3-1">我们的服务</el-menu-item>
            <el-menu-item index="3-2">w</el-menu-item>
            <el-menu-item index="3-3">es</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">品牌推广相关知识</el-menu-item>
        <el-menu-item index="5">合作伙伴</el-menu-item>
        <el-menu-item index="6">联系我们</el-menu-item>
    </el-menu>
</div>
</template>
<script>
export default {

  name: 'navi',  
  data() {
    return {
      activeIndex: "1"
    }
  },
  created() {
    console.log('this is');
    this.handleSelect();
    console.log('this is');
  },
  methods: {
    handleSelect: function() {
      console.log('shitonesss');
    }
  },


}
</script>
<style lang="stylus" scoped>
#logo-wrapper
  height: 60px;
 
  width: 150px;   
  float: left;
  &:visited
    border: none;
#logo
  width: 120px;
  height: 120px;  
  margin-top : -30px;
</style>
