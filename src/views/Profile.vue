<template>
  <div class="page page__profile">
    <div class="page__profile-header">
      <div class="container">
        {{ this.user.name }} {{ this.user.lastName }} {{this.loading ? 'Loading...': ''}}
      </div>
    </div>
    <section v-if="!this.loading" class="page__content">
      <div class="container">
        <h1 class="page__title">Profile</h1>
        <div class="section-warn" v-if="!this.user.name">Not found data</div>
        <div class="user-info" v-if="this.user.name">
          <div class="user-info__item">
            <span>Name: </span>
            <span>{{ this.user.name }}</span>
          </div>
          <div class="user-info__item">
            <span>Last name: </span>
            <span>{{ this.user.lastName }}</span>
          </div>
          <div class="user-info__item">
            <span>Age: </span>
            <span>{{ this.user.age }}</span>
          </div>
          <div class="user-info__item">
            <span>Email: </span>
            <span>{{ this.user.email }}</span>
          </div>
        </div>
      <Button @handleClick="logOut">Выйти</Button>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import Button from "@/components/Button";

export default {
  components: {Button},
  mounted() {
    this.getUser('getUser', null);
  },
  computed: {
    ...mapGetters('user', ['user']),
    ...mapGetters('loading', ['loading'])
  },
  methods: {
    ...mapActions('user', [
      'getUser',
    ]),
    logOut() {
      localStorage.removeItem("token");
      this.$router.push('/login');
    }
  },
  watch: {

  }
}
</script>

<style lang="scss">
  .page__profile {
    height: 100%;
    width: 100%;
    color: #FFFFFF;
    background-image: url("@/assets/profile.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .page__content {
    padding-top: 30px;

    .user-info {
      margin-top: 20px;
    }

    .button {
      margin-top: 20px;
      width: 100%;
      max-width: 200px;
    }
  }

  .page__profile-header {
    padding: 20px 0;
    font-size: 28px;
    background-color: #495e2a;
  }

  .user-info {
    width: 50%;
    background-color: rgba(0, 0, 0, .2);
    border-radius: 15px;
  }

  .user-info__item {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
  }

  .section-warn {
    margin-top: 30px;
  }

  @media(max-width: 1080px) {
    .page__content {
      .button {
        max-width: none;
      }
    }

    .user-info {
      width: 100%;
    }
  }
</style>