<template>
    <div>
        <h1>Network</h1>
        user.id = {{id}}
        user.age = {{age}}
        user.weight = {{weight}}
    </div>
</template>


<script>
export default {
    props:[
        "id",
        "age",
        "weight",
    ] 
}
</script>

<style>

</style>
