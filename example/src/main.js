import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import JsonSchemaEditor from '../../dist/json-schema-editor.min.js';
import App from './App.vue';
import JsonViewer from 'vue-json-viewer'


Vue.use(ElementUI, { size: 'small' });
Vue.use(JsonSchemaEditor);
Vue.use(JsonViewer)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
