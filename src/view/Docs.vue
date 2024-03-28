<template>
  <div>
    <div class="doc-kv">
        <div class="doc-title">文档中心</div>
    </div>
    <div class="container text-center bg-info">
      <h1>白皮书</h1>
      <div class="content">白皮书内容</div>
    </div>
    <div class="container text-center bg-success">
      <h1>文档</h1>
      <div class="content">文档内容</div>
      <a href="http://localhost:8080/pages/9a7ee40fc232253e/" target="_blank">Go Center</a>
    </div>
<!--    <div class="row">-->
<!--      <div id="left" class="col-md-4 col-xs-12">-->
<!--        <ul class="left-container wow bounceInLeft">-->
<!--          <p>软件产品</p>-->
<!--          <li v-for="(item, index) in softwareList" :key="index">-->
<!--            <router-link :to="item.path">{{ item.name }}</router-link>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
<!--      <div id="right" class="col-md-8 col-xs-12 wow bounceInRight">-->
<!--        <router-view></router-view>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script setup name="Docs">
import WOW from 'wow.js'
import { onMounted } from 'vue'

const softwareList = [
  {
    path: '/software/smartTown',
    name: '智能小镇管理系统'
  },
  {
    path: '/software/bigData',
    name: '大数据管理系统'
  }
]
onMounted(() => {
  // var wow = new WOW()
  // wow.init()
})
</script>

<style scoped>
.doc-kv{
  height: 300px;
  background: linear-gradient(to bottom,#00A99D,#fff);
  padding-top: 60px;
  text-align: center;
}
.doc-title{
  color: #fff;
  font-size: 36px;
}
.content{
  height: 300px;
}
#left {
  margin: 50px 0;
}
.left-container {
  width: 60%;
  margin: 0 auto;
  border: 1px solid #474747;
  border-radius: 5px;
}
.left-container > p {
  text-align: center;
  line-height: 45px;
  padding: 0;
  margin: 0;
  background: #474747;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
.left-container > li {
  text-align: center;
  height: 38px;
  line-height: 38px;
  margin: 0;
  border-top: 1px solid #474747;
}
.left-container > li > a {
  text-decoration: none;
}
.left-container > li:hover {
  background: #928989;
}
#right {
  padding: 50px 0;
}
@media screen and (max-width: 768px) {
  #right {
    padding: 15px;
  }
}
</style>

