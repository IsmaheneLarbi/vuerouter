<template>
    <footer>
        You have added {{NetworkStore.network.length}} people to your network! 
    </footer>
</template>

<script>

import NetworkStore from "../stores/NetworkStore"

export default {
 data()
    {
        return {
            NetworkStore : NetworkStore.data,
        };
    },    
}
</script>

<style scoped>
footer{
    background: #333;
    color: white;
    text-align: center;
    width: 100%;
}
</style>
