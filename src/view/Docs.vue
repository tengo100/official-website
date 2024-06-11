<template>
  <div>
    <div class="doc-kv" :style="{'background':'url('+docbg+') no-repeat center center'}">
        <div class="doc-title">文档中心</div>
        <img class="doc-pic" :src="docqj">
    </div>
    <div class="doc-white">
      <div class="doc-white-title">白皮书</div>
      <div class="doc-white-sub">技术中心的白皮书通常是一份详细的技术文档，旨在提供关于特定技术、解决方案或产品的深入信息和指导。</div>
      <div class="doc-white-content-wp">
          <div class="doc-white-content">
             <img class="book" :src="book">
            <div class="doc-white-item-wp">
              <div class="doc-white-item">
                <div class="doc-white-item-title">概述</div>
                <div class="doc-white-item-description">对于技术、解决方案或产品的简介和总体概述。</div>
              </div>
              <div class="doc-white-item">
                <div class="doc-white-item-title">技术原理</div>
                <div class="doc-white-item-description">详细解释技术的工作原理、基本概念和核心机制。</div>
              </div>
              <div class="doc-white-item">
                <div class="doc-white-item-title">架构设计</div>
                <div class="doc-white-item-description">介绍技术的整体架构设计，包括组件、模块和交互方式等。</div>
              </div>
              <div class="doc-white-item">
                <div class="doc-white-item-title">实施指南</div>
                <div class="doc-white-item-description">提供实施该技术或解决方案的详细步骤和指导，包括环境配置、安装和设置等。</div>
              </div>
              <div class="doc-white-item">
                <div class="doc-white-item-title">使用案例</div>
                <div class="doc-white-item-description">展示该技术或解决方案在真实场景中的应用案例，描述如何解决特定问题或满足特定需求。</div>
              </div>
              <div class="doc-white-item">
                <div class="doc-white-item-title">性能评估</div>
                <div class="doc-white-item-description">对技术或解决方案的性能进行评估和测量，包括吞吐量、响应时间和可扩展性等方面的数据和指标。</div>
              </div>
              <div class="doc-white-item">
                <div class="doc-white-item-title">安全性和隐私</div>
                <div class="doc-white-item-description">讨论技术或解决方案的安全性措施和隐私保护机制，包括身份验证、数据加密和访问控制等。</div>
              </div>
              <div class="doc-white-item">
                <div class="doc-white-item-title">故障排除和故障恢复</div>
                <div class="doc-white-item-description">对技术或解决方案的性能进行评估和测量，包括吞吐量、响应时间和可扩展性等方面的数据和指标。</div>
              </div>
              <div class="doc-white-item">
                <div class="doc-white-item-title">安全性和隐私</div>
                <div class="doc-white-item-description">讨论技术或解决方案的安全性措施和隐私保护机制，包括身份验证、数据加密和访问控制等。</div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="doc-center">
      <div class="doc-white-title">文档</div>
      <div class="doc-center-content">
          <div class="doc-center-item" v-for="item in docList" :key="item">
            <div>
              <a :href="'/develop/docs/'+item+'.doc'" :download="item+'.doc'">{{item}}</a>
            </div>
            <i>></i>
          </div>
        <div class="doc-center-item">
          <div>更新日志和版本历史</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>设计原则和架构说明</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>部署和运维文档</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>API 授权和访问控制文档</div>
          <i>></i>
        </div>

        <div class="doc-center-item">
          <div>架构设计和分布式系统文档</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>安全漏洞和漏洞修复指南</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>数据验证和输入验证文档</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>数据追踪和日志分析文档</div>
          <i>></i>
        </div>

        <div class="doc-center-item">
          <div>高可用性和容灾方案文档</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>缓存和性能优化文档</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>事件驱动架构和消息队列文档</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>API 文档的测试和文档覆盖率指南</div>
          <i>></i>
        </div>

        <div class="doc-center-item">
          <div>数据库查询优化和索引设计文档</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>国际化和本地化支持文档</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>安全编码实践和防御性编程指南</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>文档生成工具和文档自动化流程</div>
          <i>></i>
        </div>

        <div class="doc-center-item">
          <div>用户反馈和问题解决指南</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>数据隐私和GDPR合规性文档</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>连续集成和持续交付文档</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>API 文档的版本控制和迁移策略</div>
          <i>></i>
        </div>

        <div class="doc-center-item">
          <div>代码质量和静态代码分析文档</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>开发者认证和访问控制文档</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>代码库和版本控制工具文档</div>
          <i>></i>
        </div>
        <div class="doc-center-item">
          <div>API 文档的性能测试和负载测试指南</div>
          <i>></i>
        </div>
      </div>
      <a class="go-btn" style="margin-top: 8px" href="http://localhost:8080/pages/9a7ee40fc232253e/" target="_blank">更多文档 ></a>
    </div>
  </div>
</template>

<script setup name="Docs">
import { onMounted,ref } from 'vue'
const docbg = new URL('../assets/img/v1/document_banner_bj.png', import.meta.url).href
import docqj from '@/assets/img/v1/document_banner_qj.png'
import book from '@/assets/img/v1/book.png'
const docList=ref([
  '【钉钉OA】合同管理系统-合同结算单',
  '【钉钉OA】合同管理系统-合同签订',
  '【钉钉OA】合同管理系统-往来单位',
  '【钉钉OA】合同管理系统-中标公示',
  '【钉钉OA】全面预算管理系统-支出预算调剂单',
  '【钉钉OA】全面预算管理系统-支出预算调整单',
  '【钉钉OA】全面预算管理系统-支出预算执行单',
  '【钉钉OA】全面预算管理系统-支出预算执行申请单',
  '杏林云康单点登录对外接口文档',
  '杏林云康合同管理系统合同签订对接接口文档',
  '杏林云康合同管理系统签订申请对接接口文档',
  '杏林云康控制台-科室对外接口文档',
  '杏林云康控制台-职员对外接口文档',
  '杏林云康审批流接口对接文档',
  '杏林云康微信公众号获取access_token接口文档',
  '杏林云康资金支出管控系统与保融科技支付平台付款对接接口文档'
])
onMounted(() => {
})
</script>

<style scoped>
.doc-kv{
  height: 300px;
  padding-top: 1px;
  position: relative;
}
.doc-title{
  color: #159477;
  font-size: 48px;
  font-weight: bold;
  line-height: 300px;
  margin-left: 18.22%;
}
.doc-pic{
  position: absolute;
  width: 414px;
 bottom: 0;
  right:14.5%;
}
.doc-white{
  height: 730px;
  padding-top:1px;
  background: linear-gradient(180deg,rgba(255,255,255,0.84), #f2f3f5);
}
.doc-white-title{
  font-size: 32px;
  color: #333;
  text-align: center;
  margin-top: 48px;
  font-weight: 700;
}
.doc-white-sub{
  color: #159477;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-top: 33px;
}
.doc-white-content-wp{
  height: 420px;
  background: linear-gradient(91deg,rgba(0,155,162,0.00) 1%, rgba(0,152,144,0.81) 30%, rgba(0,142,86,0.71) 77%, rgba(0,141,79,0.00) 99%);
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.07);
  padding-top: 1px;
  margin-top: 75px;
}
.doc-white-content{
  width: 1200px;
  margin: auto;
  position: relative;
  display: flex;
}
.doc-white-item-wp{
  margin: 34px 0;
  width: 100%;
}
.doc-white-item{
  display: flex;
  background: rgba(0,0,0,0.06);
  margin-bottom: 8px;
}
.doc-white-item-title{
  min-width: 147px;
  max-width: 147px;
  line-height: 32px;
  padding-left: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}
.doc-white-item-description{
  font-weight: 400;
  color: #fff;
  font-size: 14px;
  line-height: 32px;
  border-left: 1px solid;
  padding-left: 10px;
}
.book{
  width: 379px;
  margin-top: -48px;
}
.doc-center{
  background: #f2f3f5;
  padding-top: 1px;
  padding-bottom: 24px;
}
.doc-center-content{
  width: 1200px;
  margin: 24px auto 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.doc-center-item{
  font-size: 14px;
  line-height: 80px;
  background: #fff;
  min-width: 290px;
  color: #555555;
  padding:0 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
.doc-center-item>div{
  width: 250px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.doc-center-item>div>a{
  color: #555555;
}
.doc-center-item>div>a:hover{
  text-decoration: none;
  color: #159477;
}
.doc-center-item:hover{
  color: #159477;
  font-weight: 500;
  background: url("@/assets/img/v1/hover_bj.png");
  background-size: 100% 100%;
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.07);
}
@media screen and (max-width: 768px) {
  .doc-white{
    height: auto;
  }
  .doc-kv{
    height: 200px;
  }
  .doc-title{
    font-size: 30px;
    line-height: 200px;
  }
  .doc-pic{
    width: 40%;
  }
  .doc-white-title{
    font-size: 24px;
  }
  .doc-white-sub{
    font-size: 18px;
  }
  .book{
    width: 80%;
    margin: auto;
  }
  .doc-white-content-wp{
    height: auto;
  }
  .doc-white-content{
    width: auto;
    flex-direction: column;
  }
  .doc-white-item-wp{
    width: 90%;
    margin: auto;
  }
  .doc-center-content{
    width: auto;
    justify-content: center;
  }
}
</style>

