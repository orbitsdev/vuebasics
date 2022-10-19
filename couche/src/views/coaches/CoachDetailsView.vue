


<template>
<div>

<section>
<base-card>
<h2>{{ fullName }}</h2>
<h3>${{ rate }}/hour</h3>
</base-card>
</section>

<section>
    
    <base-card>
    <header>
        <h2>Interested? Reach out now!</h2>
        <BaseButton link :to="contactLink">Contact</BaseButton>
    </header>
        <router-view></router-view>
        </base-card>

</section>
<section>
    <BaseCard>
        <base-badge v-for="area in areas" :key="area" :title="area" :type="area"></base-badge>
        
    </BaseCard>
</section>

</div>

</template>

<script>
import BaseCard from '@/components/Ui/BaseCard.vue';
import BaseButton from '@/components/BaseButton';
export default {

    data(){
        return {
            selectedCoach: null,
        }
    },
    created () {

        this.selectedCoach =  this.$store.getters['coachesModule/coaches'].find(coach=> coach.id === this.id);
    },

    computed: {
        fullName(){
            return this.selectedCoach.firstName + ' ' +this.selectedCoach.lastName;
        },

        areas(){
            return this.selectedCoach.areas;
        },

        rate(){
            return this.selectedCoach.hourlyRate;
        },

        description(){
            return this.selectedCoach.description
        },

        contactLink(){
            return this.$route.path;
        }

        
    },  
    
    props: ['id'],
    components: { BaseCard ,BaseButton},
    


}
</script>