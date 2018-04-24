<template>
  <section>
    <ul>
      <li v-for="(todoItem, index) in todoItems" class="shadow">
        <i class="checkBtn fa fa-check" aria-hidden="true"></i>
        {{ todoItem }}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
          <i class = "fa fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    props: ['propsdata'],
    
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
          if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
            this.todoItems.push(localStorage.key(i));
          }
        }
      }
    },
    methods: {
      removeTodo(todoItem, index) {
        localStorage.removeItem(todoItem);
        // JS API  method: splice
        // 이걸 안쓰면 실시간으로 웹페이지 리스트 목록에서 지워지지 않고
        // 새로고침 눌러야지만 화면에서 리스트가 사라짐.
        // todoItems는 뷰 데이터 속성  - 뷰데이터에서 관리하는 애
        this.todoItems.splice(index,1);
        // console.log(this.todoItems);
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
</style>