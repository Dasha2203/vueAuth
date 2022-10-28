<template>
  <form class="form" v-on:submit.prevent="submit">
    <h3 class="form__title">{{ title }}</h3>
    <Input
        :label="'Login'"
        :value="email"
        :error="emailError"
        :name="'email'"
        :type="'email'"
        :placeholder="'Enter your email'"
        @changeInput="handleChangeInput"
    />
    <Input
        :label="'Password'"
        :value="password"
        :error="passwordError"
        :name="'password'"
        :type="'password'"
        :placeholder="'Enter your password'"
        @changeInput="handleChangeInput"
    />
    <Button @handleClick="submit">Sign in</Button>
  </form>
</template>

<script>
import axios from "@/axios";
import {REGEX_EMAIL} from "@/const";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default {
  components: {
    Input,
    Button
  },
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    }
  },
  props: {
    title: {
      type: String,
      required: false
    }
  },
  methods: {
    handleChangeInput(event) {
      this[event.target.name] = event.target.value;
    },

    validate() {
      this.emailError = '';
      this.passwordError = '';

      if (!this.email.trim()) {
        this.emailError = 'Enter your email';
        return false;
      }

      if (!REGEX_EMAIL.test(this.email)) {
        this.emailError = 'Invalid email';
        return false;
      }

      if (!this.password.trim()) {
        this.passwordError = 'Enter your password';
        return false;
      }

      return true;
    },

    async submit() {
      if (!this.validate()) return;

      try {
        let result = await axios.post('/login', {
          email: this.email,
          password: this.password
        });
        const {token} = result.data;
        this.$router.push('/')
        localStorage.setItem("token", JSON.stringify(token));

      } catch (e) {
        console.log(e);

        if (e.response.status === 401) {
          this.emailError = 'The email address or password is incorrect.'
          this.passwordError = 'The email address or password is incorrect.'
        }

      }
    }
  }
}
</script>

<style lang="scss">
.form {
  padding: 30px 15px;
  width: 100%;
  max-width: 600px;
  background-color: rgba(0, 0, 0, .2);
  border-radius: 15px;

  .form__title {
    margin-bottom: 20px;
    color: #FFF;
    font-size: 24px;
    font-weight: 700;
  }

  .input-container {
    margin-bottom: 15px;
  }
}
</style>