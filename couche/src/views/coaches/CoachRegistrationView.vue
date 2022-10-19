


<template>
<div>

<section>
<CoachForm @save-data="saveData"></CoachForm>
</section>
</div>

</template>


<script>
import CoachForm from '@/components/layout/coaches/CoachForm.vue';
export default {
    

    computed: {
    
    },
    components: { CoachForm },

    methods:{
        saveData(formData){
         this.$store.dispatch('coachesModule/registerCoaches',formData );
        this.$router.replace('/coaches');
        }
    }
}
</script>
