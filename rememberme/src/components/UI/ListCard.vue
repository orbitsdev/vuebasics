<template>
 <nav>
    <BaseCard>
        <div class="title">
            <h1> {{resource.title }}</h1>
            <slot resourc></slot>
            <button @click="removeResource(itemIndex)">Delete</button>
        </div>
        <p> {{ resource.description }}</p>
        <a :href="resource.link"> View Resource </a>
    </BaseCard>
        
    </nav>   

</template>

<script>
import BaseCard from './BaseCard.vue';
    export default {
    inject:["removeResource"],
    props: {
        itemIndex: {
            type:Number,
        },
        resource: {
            type: Object,
        },
    },
    components: { BaseCard }
}
</script>

<style scoped>
    
    nav {
        margin: 32px 0px;

      }

    .title{
        display:flex;
        justify-content: space-between;

    }
      
      .title {
        display: flex;
        justify-content: space-between;
      }
      
      h1 {
        font-size: 24px;
      }
      p {
        margin: 10px 0px;
      }
      a {
        color: orangered;
        text-decoration: none;
      }
</style>