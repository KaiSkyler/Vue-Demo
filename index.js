import Vue from 'vue/dist/vue.common.js';
import VueLazyload from 'vue-lazyload';
import slider from 'vue-concise-slider';// 引入slider组件
import Viewer from 'v-viewer';
// import 'viewerjs/dist/viewer.css';

Vue.use(VueLazyload, {
	error:'../static/images/error.png',
    loading:'../static/images/load.gif',
    preLoad:1.3,
    attempt: 1
 })

Vue.use(Viewer, {
    defaultOptions: {
        zIndex: 9999
    }
})

var vm = new Vue({
  el:'#app',
  data:{
  	item:[],
  },
  methods:{
  	getImg:function(page){
  		var that = this,length = page*9;
  		for(var i = length-9; i < length; i++){
  	    var j = i+1;
      that.item.push({imgUrl:"../static/images/img/IMAGE("+j.toString()+").jpg"}) 
  		}
  	}
  }
})

layui.use('flow', function(){
  var flow = layui.flow;
 
  flow.load({
    elem: '#app' //流加载容器
    ,done: function(page, next){ //执行下一页的回调
      //模拟数据插入
      setTimeout(function(){
        next( vm.getImg(page) , page < 2); 
      }, 500);
    }
  });
  
});
