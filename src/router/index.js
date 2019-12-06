import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let routerArr = [
  {
      path: '/',
      redirect: '/mapBasic'
  },
  {
    path: '/mapBasic',
    name: '基础使用',
    component: resolve => require(['@/components/mapBasic'], resolve),
  },
  {
    path: '/mapMarker',
    name: 'mapMarker',
    component: resolve => require(['@/components/mapMarker'], resolve),
  },
  {
    path: '/mapGeoJson',
    name: 'mapGeoJson',
    component: resolve => require(['@/components/mapGeoJson'], resolve),
  },
  {
    path: '/mapMarkerStyle',
    name: 'mapMarkerStyle',
    component: resolve => require(['@/components/mapMarkerStyle'], resolve),
  },
  {
    path: '/mapChangeLayer',
    name: 'mapChangeLayer',
    component: resolve => require(['@/components/mapChangeLayer'], resolve),
  },
  {
    path: '/mapCitySelect',
    name: 'mapCitySelect',
    component: resolve => require(['@/components/mapCitySelect'], resolve),
  },
  {
    path: '/mapMarkercluster',
    name: 'mapMarkercluster',
    component: resolve => require(['@/components/mapMarkercluster'], resolve),
  },
  {
    path: '/mapGeoJsonInvert',
    name: 'mapGeoJsonInvert',
    component: resolve => require(['@/components/mapGeoJsonInvert'], resolve),
  }



  
]

export default new Router({
  mode: 'history',
  routes: routerArr
})
