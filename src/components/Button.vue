<template>
  <button class="button" @click="$emit('handleClick')">
    <slot />
  </button>
</template>

<script>

</script>

<style lang="scss">
  .button {
    padding: 10px 20px;
    border-radius: 15px;
    border: none;
    background-color: #3d4d26;
    font-weight: 700;
    color: #FFFFFF;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
      background-color: #495e2a;
    }
  }
</style>