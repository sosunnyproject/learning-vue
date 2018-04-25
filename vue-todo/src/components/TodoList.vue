<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
        <i class="checkBtn fa fa-check" aria-hidden="true"></i>
        {{ todoItem }}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
          <i class = "fa fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group> <!--애니메이션 추가할때 사용되는 html tag-->
  </section>
</template>

<script>
  export default {
    props:['propsdata'],
    // 그전에 있던 todoitems data는 삭제. 
    // App에서 넘어오는 propsdata가 대체한다.
    
    // 여기 있던 created()는 App.vue 로 옮긴다. 

    methods: {
      //할일 개별 삭제
      removeTodo(todoItem, index) {
        this.$emit('removeTodo',todoItem, index);
      }
    }
  }
</script>

<style>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height:50px;
    line-height: 50px;
    height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .checkBtn {
    line-height: 50px;
    color: #6478FB;
    margin-right: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
  .list-item{
    display: inline-block;
    margin-right: 10px;
  }
  .list-move{
    transition: transform 1s;
  }
  .list-enter-active, .list-leave-active{
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>