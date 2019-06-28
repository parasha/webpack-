
import app from './app.vue';


import router from './router/index';

// devServer 代理测试
Axios.get(API + '/v3.0.0/index/homepage').then(res => {
  console.log(res);
});

new Vue({
  render: h => h(app, {
    props: {}
  }),
  router,
}).$mount('#app');
