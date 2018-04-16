var app = new Vue({
    el: '#app',
    data: { 
        message: 'Hello, this is Quiz!',
        uid: 10,
        flag: true
    },
    methods: {
        changeUid() {
            this.uid = this.uid+10;
            return this.uid;
        },
        clickThis() {
            console.log("Hey I clicked this");
            return alert("메롱");
        },
        changeFlag() {
            this.flag = !this.flag;
            return this.flag;
        }
    }

});