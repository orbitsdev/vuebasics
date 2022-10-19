

<template>
    <header>
        <nav>
            <h1> <router-link to="/" > Find Coach</router-link></h1>
            <ul>
                <li> 
                    <router-link to="/coaches"> Coaches</router-link>
                </li>
                <li v-if="!isAuthenticated"> 
                    <router-link to="/login"> Login</router-link>
                </li>
                <li v-if="isAuthenticated"> 
                    <router-link to="/request"> Request</router-link>
                </li>
                <li v-if="isAuthenticated"> 
                    <BaseButton  @click="logout" mode="outline">Logout</BaseButton>
                </li>
            </ul>
        </nav>
    </header>
</template>


<script>
import {mapGetters} from 'vuex';
import BaseButton from '@/components/BaseButton';
export default {
    methods: {
     async logout(){
        await this.$store.dispatch('logout');
        this.$router.replace('/login');
      }  
    },
    components: {
        BaseButton,
    },
    computed: {
        ...mapGetters(['isAuthenticated'])
    }
}
</script>


<style scoped>
header{
    padding:20px;
    background: purple;
    display:flex;

}
header nav{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
header h1 a{
flex: 1;
text-decoration: none;
color: white;
}
header nav ul{
    margin: 0;
    display: flex;
    flex: 2;
    list-style: none;
    justify-content: end;
    align-items: center;

}


header nav ul li a{
    padding:8px;
    text-decoration: none;
    cursor: pointer;
    margin: 0px 2px;
    border:1px solid transparent ;
    color:white;
    transform: scale(0.90);
    
}

.router-link-active{
    transform: scale(1);
    transition: all 100ms ease; 
    color: pink;
    border:1px solid pink;
}
</style>