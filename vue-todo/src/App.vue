
<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoInput from './components/TodoInput.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'

  export default {
    data() {
      return {
        todoItems: []
      }
    },
    // 인스턴스 생성 직후에
    // 로컬 스토리지의 데이터를 ==> 뷰 데이터로 옮긴다. 
    created() {
      if (localStorage.length > 0) {
        for (var i = 0;i<localStorage.length; i++) {
          // push is JS API 
          // that adds array item at the end of array
          if(localStorage.key(i) !== "loglevel:webpack-dev-server") {
            this.todoItems.push(localStorage.key(i));
          }
        }
      }
    },
    methods: {
      addTodo(todoItem) {
        // 로컬 스토리지에 데이터를 추가하는 로직
        localStorage.setItem(todoItem, todoItem);
        this.todoItems.push(todoItem);
      },
      clearAll(){
        localStorage.clear();
        this.todoItems=[];
      },
      removeTodo(todoItem, index){
        localStorage.removeItem(todoItem);
        // JS API  method: splice
        // 이걸 안쓰면 실시간으로 웹페이지 리스트 목록에서 지워지지 않고
        // 새로고침 눌러야지만 화면에서 리스트가 사라짐.
        // todoItems는 뷰 데이터 속성  - 뷰데이터에서 관리하는 애
        this.todoItems.splice(index,1);
      }
    },
    components: {
      'TodoHeader': TodoHeader,
      'TodoInput': TodoInput,
      'TodoList': TodoList,
      'TodoFooter': TodoFooter
    }
  }
</script>

<style>
  body {
      text-align: center;
      background-color: #F6F6F8;
  }
  input {
      border-style: groove;
      width: 200px;
  }
  button {
      border-style: groove;
  }
  .shadow {
      box-shadow: 5px 10px 10px rgba(0,0,0,0.03)
  }
</style>
