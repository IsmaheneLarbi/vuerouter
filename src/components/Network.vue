<template>
    <div>
        <h1>Network</h1>
        <h2>Pixis' Team</h2>
        <li  v-for="person in NetworkStore.network">{{person}}</li>
        <input v-model="newPerson" v-on:keyup.13="addPerson(newPerson)"/>
    </div>
</template>

<script>

import NetworkStore from "../stores/NetworkStore"

export default {
    data()
    {
        return {
            newPerson : null,
            NetworkStore : NetworkStore.data,
        };
    },
    methods:{
        addPerson(name)
        {
            NetworkStore.methods.addPerson(name);
            this.newPerson = null;
        }
    }
}
</script>

<style>

</style>
