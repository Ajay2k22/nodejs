<script>

export default {
    name: 'Login',
    data() {
        return {
            result: {
                name: '',
                email: '',
                password: ''
            }
        }

    },
    methods: {
        async submitMe() {
            let user = localStorage.setItem('user-info', JSON.stringify(this.result));
            this.$router.push({ name: 'Product' })
        }

    },
    provide() {
        return {
            name: 'Ajay',
            email: this.email
        }
    },
    mounted() {

    }
}

</script>




<template>

    <div class="register">
        <h2>LOGIN</h2>
        <div class="container">
            <input type="text" placeholder="Enter name" v-model="this.result.name" />
            <input type="text" placeholder="Enter email" v-model="this.result.email" />
            <input type="text" placeholder="Enter password" v-model="this.result.password" />
            <button type="button" v-on:click="submitMe">
                Submit
            </button>
        </div>
    </div>

</template>

<style>
.register {
    width: 100vh;
    margin: 10rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.logo {
    height: 20rem;
    width: 20rem;
}

.head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.head h1 {
    font-size: 2rem;
}

.container input {
    height: 4rem;
    width: 30rem;
    margin: 1rem auto;
    margin-top: 0;
    display: block;
    border: 1px solid skyblue;
    padding-left: 1rem;
    padding-right: 1rem;
}

.container button {
    height: 4rem;
    width: 30rem;
    margin: 1rem auto;
    margin-top: 0;
    display: block;
    border: 1px solid skyblue;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    color: white;
    background: skyblue;
    cursor: pointer;
}

.container p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    gap: 1rem;
}

.router {
    color: rgba(243, 5, 5, 0.644);
}
</style>