<style>
.cont {
    margin: 10rem;

}

table {
    border: 0px solid;
    width: 50rem;
    height: 20rem;
    padding: auto;
}

td {
    height: 5rem;
    border: 2px solid black;
    padding: auto;
}

th {
    height: 5rem;
    border: 2px solid black;
    padding: auto;
}

tr {
    height: 5rem;
    border: 2px solid black;
}

button {
    font-size: 1.5rem;
    background: skyblue;
    width: 8rem;
    color: white;
    border-radius: 2rem;
    border: 0px solid;
}
</style>

<script>
import axios from 'axios';
export default {
    name: 'Product',
    data() {
        return {
            name: '',
            email: ''
        }
    },
    methods: {
        back() {
            localStorage.clear()
            this.$router.push({ name: 'Login' });
        }
    },
    inject: ['name', 'email'],
    mounted() {
        let user = localStorage.getItem('user-info')
        if (user) {
            let res = JSON.parse(user)
            this.name = res.name,
                this.email = res.email
        }
    }
}
</script>

<template>
    <div class="cont">
        <button v-on:click="back">
            Back
        </button>
        <h2>
            name:{{ this.name }}
        </h2>
        <h2>
            email:{{ this.email }}
        </h2>
        <table>
            <tr>
                <th>Product Name</th>
                <th>Cost</th>
            </tr>
            <tr>
                <td>Samsung</td>
                <td>30000</td>
            </tr>
            <tr>
                <td>Vivo</td>
                <td>10000</td>
            </tr>
            <tr>
                <td>Redmi</td>
                <td>20000</td>
            </tr>
        </table>


    </div>
</template>