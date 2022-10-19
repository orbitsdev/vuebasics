<template>
  <form @submit.prevent="submitForm">
    <BaseModal @close="closeModal" :title="'Something went wrong'" :show="!!error">
      {{ error }}
    </BaseModal>
    <BaseCard>
      <div class="spinner-card" v-if="isLoading">
        <BaseSpinner></BaseSpinner>
        <p>Authenticating ....</p>
      </div>
      <div v-else>
        <div class="form-control">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" />
        </div>
        <p v-if="!formIsValid">
          Please Enter a avalid email and password must atlease 6 chracter longs
        </p>
        <BaseButton> {{ submitButtonCaption }}</BaseButton>
      </div>
      <BaseButton @click="switchMode" type="button" mode="flat">
        {{ switchModeButtonCaption }}</BaseButton
      >
    </BaseCard>
  </form>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import BaseCard from "@/components/Ui/BaseCard";
import BaseSpinner from "@/components/Ui/BaseSpinner";
import BaseModal from "@/components/Ui/BaseModal.vue";

export default {
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Login";
      } else {
        return "Signup";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "Signup instead";
      } else {
        return "Login instead";
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  components: {
    BaseButton,
    BaseCard,
    BaseSpinner,
    BaseModal,
  },

  methods: {
    closeModal() {
      this.error = null;
    },
    async submitForm() {
      if (this.email === "" && !this.email.includes("@") && this.password.length < 6) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;
      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      if (this.mode === "login") {
        
        try {
          await this.$store.dispatch("login", actionPayload);
        } catch (e) {
          this.error = e.message || "Failed to login";
        }
        const redirectUrl = '/' + (this.$route.query.redirect|| 'coaches');

        this.$router.replace(redirectUrl);
        
    } else {
        
        try {
            await this.$store.dispatch("signup", actionPayload);
        } catch (e) {
          this.error = e.message || "Failed to login";
        }
        this.$router.replace('/coaches');
        


      }
      this.isLoading = false;
    },
    switchMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.spinner-card {
  padding: 20px;
  text-align: center;
}
</style>
