<template>
  <div class="page-auth">
    <div class="container">
      <Form v-bind:title="'Authorization'"/>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form";

export default {
  components: {
    Form
  }
}
</script>

<style lang="scss">
.page-auth {
  height: 100%;
  width: 100%;
  background-image: url("@/assets/bg.jpeg");
  background-size: cover;
  background-repeat: no-repeat;

  .form {
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;

    .button {
      margin: 0 auto;
      display: block;
      width: 100%;
      max-width: 300px;
    }
  }
}
</style>