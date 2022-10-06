


function getRandomNumber(max, min){
    return Math.floor(Math.random() * (max - min )) + min;
}


const app = Vue.createApp({
    data(){
        return {
            monsterHealth: 100,
           playerHealth: 100,
           isPlayerWin : null,
        }
    },

    computed:{

        monsterBarStyle(){
            return {width: this.monsterHealth +'%'}
        },
        playerBarStyle(){
            return {width: this.playerHealth + '%'}
        },
    },

    methods: {
        attackMonster(){
        
            const damage =   getRandomNumber(12,5);

            if(this.monsterHealth > 0){
                this.monsterHealth -= damage; 
                this.attackPlayer();
                
            }
            
            if(this.monsterHealth <=0 ){
                this.monsterHealth = 0; 
                this.isPlayerWin = true;
            }
            
            
        },
        
        attackPlayer(){
            
            const attackDamage = getRandomNumber(15,12);
            // console.log("monster damage" +attackDamage );
            if(this.playerHealth > 0 ){
                
                
                this.playerHealth -= attackDamage;
            }
            if(this.playerHealth <= 0){
                this.playerHealth = 0;
                this.isPlayerWin = false;

            }
            
        },
        specialAttack(){
            const specialAttackDamage = getRandomNumber(10, 20);
            if(this.monsterHealth > 0){

                this.monsterHealth -= specialAttackDamage;
                this.attackPlayer();


            }

            if(this.monsterHealth <=0){
                this.monsterHealth = 0;
                this.isPlayerWin = true;

            }
        },
        heal(){
            const healValue = getRandomNumber(8,20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth =100;
            }else{

                this.playerHealth += healValue;
            }

        },
        surrender(){

            if(this.playerHealth > 0){
                this.playerHealth = 0;
                this.isPlayerWin = false;
            }

        },
        restartGame(){
            
            this.isPlayerWin = null;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        }
    },
});
app.mount("#app");


