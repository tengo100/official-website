<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <swiper
      id="swiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :navigation="false"
      lazy
      loop
      autoplay
      :pagination="{
        clickable: true
      }"
    >
      <swiper-slide
        class="banner-swiper"
        v-for="(item, index) in swiperList"
        :key="index"
      >
        <div class="kv" :style="{'background':'url('+item.img+') no-repeat center center'}">
          <div class="swiper-slide-title">
            <h1>{{ item.title }}</h1>
            <p>{{ item.content }}</p>
          </div>
          <img class="swiper-lazy subimg" :data-src="item.subimg" alt="轮播图" />

        </div>
<!--        <div class="swiper-lazy-preloader"></div>-->

      </swiper-slide>
    </swiper>
     <!--微服务架构-->
    <div id="micro-service" class="micro-service" :style="{'background':'url('+microbg+') no-repeat center center'}" >
      <div class="title">微服务架构-低代码开发-AI 赋能 为开发者和企业提供了强大的能力和创新的机会</div>
      <div class="content-title" style="margin-top: 100px">微服务架构</div>
      <div class="micro-service-content">
        <div class="micro-service-item">
          <img class="micro-service-icon" :src="microservices">
          <h1>独立性和灵活性</h1>
          <p>在微服务架构中，每个服务都是独立部署的，这意味着每个服务都可以根据需要进行单独的扩展。如果一个服务的负载增加，我们可以单独增加这个服务的实例数量，而不需要对整个应用进行扩展。这种细粒度的扩展能力使得资源分配更加灵活和高效。</p>
        </div>
        <div class="micro-service-item">
          <img class="micro-service-icon" :src="microservices">
          <h1>故障隔离和可靠性</h1>
          <p>由于微服务架构中的每个服务都是独立的，一个服务的故障不会影响到其他服务的正常运行。通过负载均衡、服务发现和容错机制，微服务架构可以实现高可用性。当某个服务实例出现故障时，其他实例可以继续处理请求，确保系统的稳定运行。</p>
        </div>
        <div class="micro-service-item">
          <img class="micro-service-icon" :src="microservices">
          <h1>可扩展性和适应性</h1>
          <p>对于负载较高的服务，可以增加更多的实例来处理请求；而对于负载较低的服务，可以减少实例以节省资源。随着业务的发展和市场环境的变化，系统可能需要不断地进行迭代和更新。微服务架构使得这些变化更加容易实现，因为每个服务都可以独立地进行修改和升级，而无需影响整个系统的稳定性。</p>
        </div>
      </div>
    </div>
     <!--低代码开发-->
    <div id="low-code" class="low-code" :style="{'background':'url('+lowcodebg+') no-repeat center center'}">
      <div class="content-title" style="margin-top: 80px">低代码开发</div>
      <div class="lowcode-content">
        <div class="lowcode-text">低代码平台是一种开发工具，它通过可视化拖放和少量编码，使开发过程更加简单、快速和可靠。它使非专业开发者能够参与软件开发，减少了繁琐的手动编码工作，加速了应用程序的开发周期，提高了开发效率。</div>
        <div class="lowcode-pic" :style="{'background':'url('+lowcodeqj+') no-repeat center center'}">
          <div class="lowcode-btn lowcode-btn1">减少错误和缺陷</div>
          <div class="lowcode-btn lowcode-btn2">降低技术门槛</div>
          <div class="lowcode-btn lowcode-btn3">灵活性和可定制性</div>
          <div class="lowcode-btn lowcode-btn4">提高开发效率</div>
          <div class="lowcode-btn lowcode-btn5">集成性和可扩展性</div>
          <div class="lowcode-btn lowcode-btn6">快速开发和部署</div>
          <div class="lowcode-btn lowcode-btn7">成本效益</div>
        </div>
      </div>
    </div>
    <!--AI赋能-->
    <div id="ai" class="ai" :style="{'background':'url('+aibg+') no-repeat center center'}">
      <div class="content-title" style="margin-top: 57px">AI赋能</div>
      <div class="ai-content">
        <img class="ai-pic" :src="aiqj">
        <div class="ai-text">
          人工智能（AI）技术在各个领域展现出巨大的潜力。它可以处理和分析大量的数据，从中提取有价值的信息和洞察，并自动化执行复杂的任务。AI技术可以为应用程序增加智能功能，如自然语言处理、图像识别、预测分析等，为用户提供更加智能化和个性化的体验。
        </div>
      </div>
    </div>
    <!--问答社区-->
    <div id="answer" class="answer" :style="{'background':'url('+answerbg+') no-repeat center center'}">
      <div class="content-title" style="margin-top: 50px">问答社区</div>
      <div class="answer-content">
        <div class="answer-text">
            <div class="answer-text-wp">
                 <div class="answer-text-item">
                   <img class="problem" :src="problem">
                   <h3>问题名称信息问题名称信息问题名称信息问题名称信息问题名称信息问题名称信息</h3>
                   <p>答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息……</p>
                 </div>
            </div>
          <div class="answer-text-wp">
            <div class="answer-text-item">
              <img class="problem" :src="problem">
              <h3>问题名称信息问题名称信息问题名称信息问题名称信息问题名称信息问题名称信息</h3>
              <p>答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息……</p>
            </div>
          </div>
          <div class="answer-text-wp" style="margin-bottom: 0">
            <div class="answer-text-item">
              <img class="problem" :src="problem">
              <h3>问题名称信息问题名称信息问题名称信息问题名称信息问题名称信息问题名称信息</h3>
              <p>答案信息答案信息答案信息答案信息答案信息答案信息答案信息案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息答案信息……</p>
            </div>
          </div>
        </div>
        <div class="answer-pic">
          <div class="answer-pic-item">
           <img :src="sql">
            <p>SQL知识</p>
          </div>
          <div class="answer-pic-item">
            <img :src="business">
            <p>业务知识</p>
          </div>
          <div class="answer-pic-item">
            <img :src="theory">
            <p>理论知识</p>
          </div>
          <div class="answer-pic-item">
            <img :src="case1">
            <p>案例解析</p>
          </div>
          <div class="answer-pic-item" style="margin-bottom: 0">
            <img :src="environment">
            <p>环境问题</p>
          </div>
          <div class="answer-pic-item" style="margin-bottom: 0">
            <img :src="other">
            <p>其他</p>
          </div>
        </div>
      </div>
      <div class="go-btn" style="margin-top: 30px">进入社区 ></div>
    </div>
    <!--客户案例-->
    <div id="customer" class="customer" :style="{'background':'url('+customerbg+') no-repeat center center'}">
      <div class="content-title" style="margin-top: 50px">客户案例</div>
      <div class="customer-content">
        <div class="customer-item">
          <div class="customer-logo">
            <img :src="customer1">
          </div>
          <div class="customer-name">河北省人民医院</div>
          <div class="customer-description">客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍</div>
        </div>
        <div class="customer-item">
          <div class="customer-logo">
            <img :src="customer2">
          </div>
          <div class="customer-name">河北省儿童医院</div>
          <div class="customer-description">客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍</div>
        </div>
        <div class="customer-item">
          <div class="customer-logo">
            <img :src="customer3">
          </div>
          <div class="customer-name">河南省红十字血液中心</div>
          <div class="customer-description">客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍</div>
        </div>
        <div class="customer-item">
          <div class="customer-logo">
            <img :src="customer4">
          </div>
          <div class="customer-name">南阳市第二人民医院</div>
          <div class="customer-description">客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍客户信息介绍</div>
        </div>
      </div>
    </div>
    <div id="development" class="development" :style="{'background':'url('+developmentbg+') no-repeat center center'}">
      <div class="content-title" style="margin-top: 55px">开放平台</div>
      <div class="development-text" style="margin-top: 33px">创新驱动，开发者之家</div>
      <div class="go-btn" style="margin-top: 30px">了解更多 ></div>
    </div>
  </div>
</template>

<script setup name="HomePage">
import WOW from 'wow.js'
import { getCurrentInstance, onMounted } from 'vue'
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/lazy'
import 'swiper/css/autoplay'

import subimg1 from '@/assets/img/v1/banner1_qj.png'
import subimg2 from '@/assets/img/v1/banner2_qj.png'
const banner1 = new URL('../assets/img/v1/banner1_bj.png', import.meta.url).href
const banner2 = new URL('../assets/img/v1/banner2_bj.png', import.meta.url).href
const microbg = new URL('../assets/img/v1/microservices_bj.png', import.meta.url).href
const lowcodebg = new URL('../assets/img/v1/low_code_bj.png', import.meta.url).href
const lowcodeqj = new URL('../assets/img/v1/low_code_qj.png', import.meta.url).href
const aibg = new URL('../assets/img/v1/ai_bj.png', import.meta.url).href
const answerbg = new URL('../assets/img/v1/community_bj.png', import.meta.url).href
const customerbg = new URL('../assets/img/v1/customer_case.png', import.meta.url).href
const developmentbg = new URL('../assets/img/v1/development_platform_bj.png', import.meta.url).href
import aiqj from '@/assets/img/v1/ai_qj.png'
import sql from '@/assets/img/v1/sql.png'
import case1 from '@/assets/img/v1/case.png'
import other from '@/assets/img/v1/other.png'
import theory from '@/assets/img/v1/theory.png'
import business from '@/assets/img/v1/business.png'
import environment from '@/assets/img/v1/environment.png'
import problem from '@/assets/img/v1/problem.png'
import customer1 from '@/assets/img/v1/customers1.png'
import customer2 from '@/assets/img/v1/customers2.png'
import customer3 from '@/assets/img/v1/customers3.png'
import customer4 from '@/assets/img/v1/customers4.png'

import microservices from '@/assets/img/v1/microservices.png'
const swiperList = [
  {
    img: banner1,
    subimg:subimg1,
    title: '杏林云康｜开发者中心',
    content: '让创意编织未来，开发者中心引领前沿技术'
  },
  {
    img: banner2,
    subimg:subimg2,
    title: '杏林云康｜问答社区',
    content: '汇聚智慧，畅享互动，共筑知识的问答社区'
  }
]

const modules = [Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay]

// const { proxy } = getCurrentInstance() //获取上下文实例，ctx=vue2的this
onMounted(() => {
  // console.log('mounted', proxy)
  // console.log(proxy.$wow, '------')
  /* wowjs动画 */
  new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  }).init()
})
</script>
<style>
/*重置 dot*/
.swiper-pagination-bullet-active{
  background: #00A99D!important;
}
</style>
<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 顶部轮播图 */
#swiper {
  width: 100%;
  height: 612px;
}

#swiper .banner-swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

#swiper .banner-swiper .kv {
  width: 100%;
  height: 100%;
}


#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top:50%;
  left: 18%;
  transform: translateY(-70%);
}

#swiper .banner-swiper .swiper-slide-title > h1 {
  font-size: 48px;
  color: #159477;
  margin: 0;
}

#swiper .banner-swiper .swiper-slide-title > p {
  font-size: 26px;
  color: #333333;
  margin-top: 25px;
}
#swiper .banner-swiper .subimg{
  width: 31.8%;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  right:10%;
}
/*微服务架构*/
.micro-service{
  height: 731px;
  padding-top: 1px;
}

.micro-service .title{
  line-height: 97px;
  font-size: 28px;
  color: #00A99D;
  text-align: center;
  border-bottom: 3px solid;
  width: 1200px;
  position: absolute;
  left: 0;
  right: 0;
  margin: -50px auto 0;
  z-index: 1;
  background: #fff;
  letter-spacing: 3px;
}
.content-title{
  font-size: 32px;
  text-align: center;
  font-weight: bold;
}

.micro-service-content{
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 90px auto 0;
}

.micro-service-item{
  width: 383px;
  height: 438px;
  background: rgba(255,255,255,0.90);
  border-radius: 14px;
  position: relative;
  padding: 36px;

}
.micro-service-icon{
  width: 182px;
  position: absolute;
  left: 0;
  right: 0;
  margin: -130px auto 0;
  }
.micro-service-item h1{
  font-size: 24px;
  font-weight: normal;
  text-align:center;
  color: #00A99D;
  margin-top: 50px;
}
.micro-service-item p{
  font-size: 18px;
  line-height: 33px;
  color: #333;
}
.low-code{
  height: 635px;
  padding-top: 1px;
}
.lowcode-content{
  width: 1200px;
  margin: 50px auto 0;
  background: rgba(255,255,255,0.90);
  border-radius: 14px;
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.06);
  display: flex;
  justify-content: space-between;
  height: 360px;
}
.lowcode-text{
  width: 351px;
  font-size: 18px;
  color: #333333;
  line-height: 42px;
  margin: 81px 0 0 56px;
}
.lowcode-pic{
  width: 552px;
  background-size: cover!important;
  margin-right: 120px;
  position: relative;
}
.lowcode-btn{
  width: 150px;
  height: 45px;
  border-radius: 24px;
  text-align: center;
  line-height: 45px;
  color: #fff;
  font-size: 16px;
  position: absolute;
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.12);
}
.lowcode-btn1{
  left: 0;
  right: 0;
  margin: 38px auto 0;
  background: #15957b;
}
.lowcode-btn2{
  background: #159788;
  left: 57px;
  top: 116px;
}
.lowcode-btn3{
  background: #14926b;
  top: 116px;
  right: 57px;
}
.lowcode-btn4{
  background: #159892;
  top: 197px;
  left: -50px;
}
.lowcode-btn5{
  background: #149060;
  top: 197px;
  right: -50px;
}
.lowcode-btn6{
  background: #159ba2;
  top: 280px;
  left: -98px;
}
.lowcode-btn7{
  background: #138d4f;
  top: 280px;
  right: -98px;
}
/*AI赋能*/
.ai{
  height: 635px;
  padding-top: 1px;
}
.ai-content{
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 33px auto 0;
}
.ai-pic{
  width: 391px;
  margin-left: 50px;
}
.ai-text{
  width: 646px;
  height: 266px;
  background: linear-gradient(135deg,rgba(0,155,162,0.84) 1%, rgba(0,141,79,0.70) 100%);
  border-radius: 14px;
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.07);
  font-size: 18px;
  color: #fff;
  line-height: 42px;
  padding: 55px 33px;
  margin-top: 95px;
}
.answer{
  height: 635px;
  padding-top: 1px;
}
.answer-content{
  width: 1200px;
  margin: 35px auto 0;
  display: flex;
  justify-content: space-between;

}
.answer-text,.answer-pic{
  border: 16px solid rgba(255,255,255,0);
  border-radius: 14px;
  background: rgba(255,255,255,0.5);
}
.answer-text{
  margin-right: 16px;

}
.answer-text-wp{
  padding: 15px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 16px;
}
.answer-text-wp h3{
  font-size: 14px;
  margin-top: 0;
}
.answer-text-wp p{
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 0;
}
.answer-text-item{
  margin-left: 30px;
}
.problem{
  width: 14px;
  position: absolute;
  margin-left:-25px;
}
.answer-text-item p::before{
  content: '答：';
  position: absolute;
  color: #008D4F;
  margin-left: -25px;
}
.answer-pic{
  max-width: 400px;
}
.answer-pic-item{
  float: left;
  width: 176px;
  height: 107px;
  background: #ffffff;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.answer-pic-item:nth-child(2n+1){
  margin-right: 16px;
}
.answer-pic-item img{
  width: 40px;
  margin-bottom: 9px;
}
.customer{
  height: 635px;
  padding-top: 1px;
}
.customer-content{
  width: 1200px;
  margin: 86px auto 0;
  display: flex;
  justify-content: space-between;
}
.customer-item{
  max-width: 285px;
  background: rgba(255,255,255,0.90);
  border-radius: 14px;
  padding: 28px 20px 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .3s all;
}
.customer-item:hover{
  background: linear-gradient(135deg,rgba(0,155,162,0.84) 1%, rgba(0,141,79,0.70) 100%);
  transform: scale(1.1);
}
.customer-logo img{
  width: 80px;
}
.customer-item:hover .customer-name,.customer-item:hover .customer-description{
  color: #fff;
}
.customer-item:hover .customer-logo{
  background: #fff;
  border-radius: 8px;
}
.customer-name{
  font-size: 20px;
  margin-bottom: 14px;
  margin-top: 10px;
  color: #333;
}
.customer-description{
  font-size: 14px;
  color: #666;
}
.development{
  height: 298px;
  padding-top: 1px;
}
.development-text{
  color: #148E50;
  font-size: 28px;
  text-align: center;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }

  #bigData {
    padding: 30px;
  }

  #bigData .bigData-title {
    font-size: 20px;
  }

  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }

  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }

  #contactUs .contactUs-container {
    padding-top: 0;
  }

  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }

  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }

  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }

  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }

  #customer .customer-logo img {
    width: 48px;
    height: 48px;
  }

  #customer .customer-block {
    padding: 30px;
  }

  #customer .customer-block > div {
    padding: 30px 0;
  }

  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }

  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }

  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }

  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }

  #whyChooseUs .server-block > div {
    color: #ccc;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }

  #bigData {
    padding: 60px;
  }

  #bigData .bigData-title {
    font-size: 30px;
  }

  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }

  #contactUs {
    height: 300px;
  }

  #contactUs .contactUs-container {
    padding-top: 50px;
  }

  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }

  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }

  #customer .customer-title {
    font-size: 24px;
  }

  #whyChooseUs {
    padding: 20px 0;
  }
}
</style>

