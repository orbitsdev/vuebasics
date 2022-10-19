

<template>
    <div>
        <ul>
            <router-link to="/home"> Home</router-link>
            <router-link to="/manage-user"> Manage User</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
ul{
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: end;
    
}

ul li{
    padding: 8px 8px;
    background: green;
    margin: 0px 1px;
     border-radius: 4px;

}

a{
    transition: all 100ms ease-in;
    text-decoration: none;
    margin: 0px 1px;
    padding: 10px;
    background: #f6f6f6;
    color: gray;
    
}


.router-link-active {

    background: purple;
    color: white;
    
}


</style>