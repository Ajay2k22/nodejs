<script>
export default {
    name: 'Signup',
    methods: {
        submitMe() {
            console.log(this.name,this.email,this.password)
        }
    },
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },

}
</script>

<template>
    <div class='container'>
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="submitMe()" >Submit</button>
    </div>
</template>

<style>
.container{
    height:30px
}
</style>