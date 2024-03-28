import { createRouter as _createRouter, createWebHashHistory } from 'vue-router'

// const pages = import.meta.glob('../src/pages/**/*.vue')
// const routes = Object.keys(pages).map((path)=>{
//   let name = path.match(/\/pages(.*)\.vue$/)[1].toLowerCase();
//   if(name.substring(name.length - 5) == 'index'){
//     name = name.slice(0, -5);//去掉最后的index
//   }
//   return {
//     path: name === '/home' ? '/': name,
//     component: pages[path]
//   }
// })

const routes = [
  {
    path: '/',
    name: 'PageView',
    redirect: '/home',
    component: () => import('@/view/PageView.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/view/HomePage.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/docs',
        name: 'docs',
        component: () => import('@/view/Docs.vue'),
        meta: {
          title: '文档中心'
        },
        children: [
          {
            path: '/docs/white-paper',
            name: 'WhitePaper',
            component: () => import('@/view/WhitePaper.vue'),
            meta: {
              title: '白皮书'
            }
          },
          {
            path: '/docs/doc-center',
            name: 'DocCenter',
            component: () => import('@/view/DocCenter.vue'),
            meta: {
              title: '文档中心'
            }
          }
        ]
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('@/view/Service.vue'),
        props: true,
        meta: {
          title: '相关服务'
        }
      },
      {
        path: '/servicedetail',
        name: 'serviceDetail',
        component: () => import('@/view/ServiceDetail.vue'),
        props: true,
        meta: {
          title: '相关服务-详情'
        }
      },
      {
        path: '/community',
        name: 'Community',
        component: () => import('@/view/Community.vue'),
        meta: {
          title: '社区'
        }
      },
      {
        path: '/companyintroduction',
        name: 'companyIntroduction',
        component: () => import('@/view/CompanyIntroduction.vue'),
        meta: {
          title: '公司介绍'
        }
      },
      {
        path: '/jobchance',
        name: 'jobChance',
        component: () => import('@/view/JobChance.vue'),
        meta: {
          title: '工作机会'
        }
      },
      {
        path: '/contactus',
        name: 'contactUs',
        component: () => import('@/view/ContactUs.vue'),
        meta: {
          title: '联系我们'
        }
      }
    ]
  }
]

export function createRouter() {
  return _createRouter({
    history: createWebHashHistory(),
    routes
  })
}

