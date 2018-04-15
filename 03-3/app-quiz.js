// 하위 컴포넌트들 등록
Vue.component('child-cmp', {
  props: ['propsdata'],
  template: '<p> {{ propsdata }} </p>',
});

Vue.component('sibling-cmp', {
  props: ['propsdata2'],
  template: '<p> {{ propsdata2 }} </p>'
});

// 뷰 인스턴스
var app = new Vue({
 el:'#app',
 data: {
   message: 'Hello Sis! this is from Parent Comp.',
   anotherMessage: 'Hello Bro! this is from Parent Comp.'
 }
});
