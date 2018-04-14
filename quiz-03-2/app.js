// 실습#1 todo-footer 컴포넌트 전역 등록
//<p>this is another global child component</p>를 template으로 가지는
//컴포넌트를 등록해보기

// QUESTION:
// why [Vue.component] has to be called before [var app] def ?
Vue.component('footer-global-cmp', {
    template: '<p>This is another global child component</p>'
});


var app = new Vue({
  el: "#app",
  data: {
    message: 'This is a parent component'
  }
})


// 실습#2 - todo-list 컴포넌트 지역 등록
// <p>This is another local child component</p>를 template으로 갖는
// 컴포넌트를 등록해보기

// 지역 컴포넌트 내용
var localcmp = {
  template: '<p>This is another local child component</p>'
};
new Vue({
  el: "#app2",
  components: {
    'list-local-cmp': localcmp
  }
});
