<template>
    <nav>
        <a href="#"> Galaxie</a>
        <a href="#"> Chatbot</a>
        <a href="#"> People in your network({{NetowrokStore.network.length}})</a>
    </nav>
</template>

<script>

import NetworkStore from "../stores/NetworkStore"

export default {
    data(){
        return {
            NetowrokStore: NetworkStore.data};
    }
}
</script>

<style scoped>
    nav{
        background-color: blue;
        color: white;
        margin-bottom: 20px;
        padding: 20px 10%;
        width: 80%;
        text-align: center;
    }
    a{
        color: antiquewhite;
    }
</style>
