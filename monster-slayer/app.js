function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      isPlayerWin: null,
    };
  },



  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
          this.declaireWinner('draw');
        } else if (value <= 0) {
            this.declaireWinner(false);
        }
    },
    monsterHealth(value) {
        if (value <= 0 && this.playerHealth <= 0) {
          this.declaireWinner('draw');
      } else if (value <= 0) {
        this.declaireWinner(true);
      }
    },
  },

  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
  },
 
  methods: {
    declaireWinner(winvalue) {

    
      this.isPlayerWin = winvalue;
      if(winvalue){
        this.monsterHealth = 0;
    }
    if(!winvalue){
        this.playerHealth = 0;
        
    
      }

      
      if(winvalue ==='draw'){
        this.monsterHealth = 0;
        this.playerHealth = 0;
    }

    },

    attackMonster() {
      const damage = getRandomNumber(12, 5);
      this.monsterHealth -= damage;
      this.attackPlayer();
    },

    attackPlayer() {
      const attackDamage = getRandomNumber(15, 12);
      this.playerHealth -= attackDamage;
    },
    specialAttack() {
      const specialAttackDamage = getRandomNumber(10, 20);
      this.monsterHealth -= specialAttackDamage;
      this.attackPlayer();
    },
    heal() {
      const healValue = getRandomNumber(8, 20);

      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
    },
    surrender() {
      if (this.playerHealth > 0) {
        this.isPlayerWin = false;
      }
    },
    restartGame() {
      this.isPlayerWin = null;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
  },
});
app.mount("#app");
