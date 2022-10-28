<template>
  <div :class="`input-container ${error && 'error'}`">
    <label v-if="label">
      {{ label }}
    </label>
    <input
        class="input"
        :type="type"
        :name="name"
        :autofocus="autofocus"
        :value="value"
        :placeholder=" placeholder || 'Введите текст'"
        :disabled="disabled"
        @input="$emit('changeInput', $event)"
    />
    <span class="input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  props: ['value', 'autofocus', 'error', 'placeholder', 'label', 'name', 'disabled', 'type'],
}
</script>

<style lang="scss">
.input-container {
  padding-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 400;
    color: #FFFFFF;
  }

  .input {
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid #FFFFFF;
    outline: none;

  }


  .input__error {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 12px;
    color: #ed0231;
  }

  &.error {
    label {
      color: #ed0231;
    }
    .input {
      border-color: #ed0231;
    }
  }
}
</style>