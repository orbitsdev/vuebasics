


<template>


    <div class="parent">
                <base-card>
                <div class="child">
                    
                    <slot name="title">
                        <h1>
                            Show Smethin Here
                            
                        </h1>
                    </slot>

                    <hr>
                    <div class="footer">

                        <slot name="footer">
                            
                            button here
                            
                        </slot>
                    </div>
                </div>

            </base-card>        
    </div>
    
</template>


<script>
import BaseCard from './BaseCard.vue';
    export default{
        components: {
    BaseCard
},
    }
</script>
<style scoped>
.parent{
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: rgba(0,0,0,0.2);
}

.footer{

}


</style>

