<template>
  <div :class="{ MSInput: true, MSInputInvalid: invalid }" :style="inputStyles">
    <!-- Left icon -->
    <div class="InputLeftIcon"><slot name="left-icon"></slot></div>

    <!-- Input -->
    <div class="InputContainer">
      <input
        :type="showPassword ? 'text' : inputType"
        :placeholder="placeholder"
        @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
        :value="value"
        ref="inputRef"
      />
    </div>

    <!-- Right icon -->
    <div class="InputRightIcon">
      <slot name="right-icon">
        <Icon
          v-if="inputType === 'password'"
          @mousedown="showPassword = true"
          @mouseup="
            () => {
              showPassword = false
              focusInput()
            }
          "
          :icon="showPassword ? 'tabler:eye-off' : 'tabler:eye'"
        />
        <Icon
          v-else-if="cleanable && value"
          @click="
            () => {
              $emit('update:value', '')
              focusInput()
            }
          "
          icon="tabler:wash-dryclean-off"
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, PropType, ref } from 'vue'

defineEmits(['update:value'])

const props = defineProps({
  size: {
    type: String as PropType<'large' | 'middle' | 'small'>,
    required: false,
    default: 'middle'
  },
  width: {
    type: Number,
    required: false
  },
  backgroundColor: {
    type: String,
    required: false,
    default: 'var(--c-bg)'
  },
  borderColor: {
    type: String,
    required: false,
    default: 'var(--c-divider)'
  },
  inputType: {
    type: String as PropType<'text' | 'number' | 'password' | 'search'>,
    required: false,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  },
  cleanable: {
    type: Boolean,
    required: false,
    default: false
  },
  invalid: {
    type: Boolean,
    required: false,
    default: false
  },
  value: {
    type: String,
    required: true
  }
})

const sizeRefer = {
  large: 7,
  middle: 5,
  small: 3
}

const inputRef = ref<HTMLInputElement>()
const showPassword = ref(false)
const focusInput = () => {
  nextTick(() => {
    const valueLen = inputRef.value!.value.length
    inputRef.value!.focus()
    inputRef.value!.setSelectionRange(valueLen * 2, valueLen * 2)
  })
}
const inputStyles = computed(() => ({
  padding: `${sizeRefer[props.size]}px`,
  '--input-icon-margin': `${sizeRefer[props.size]}px`,
  '--input-background-color': props.backgroundColor,
  '--input-border-color': props.borderColor,
  fontSize: `calc(0.9rem + ${(sizeRefer[props.size] - 6) * 0.01}rem)`,
  width: props.width ? `${props.width}px` : 'unset'
}))

defineExpose({
  focusInput
})
</script>

<style lang="scss">
.MSInput {
  display: flex;
  align-self: center;
  border: 1px solid var(--input-border-color);
  border-radius: 5px;
  background-color: var(--input-background-color);
  transition: border var(--u-dur), background-color var(--u-dur);

  .InputLeftIcon,
  .InputRightIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(100% + 0.2rem);
    color: var(--c-text-2);
    transition: color var(--u-dur);

    &.InputLeftIcon .iconify {
      margin-right: var(--input-icon-margin);
    }

    &.InputRightIcon .iconify {
      margin-left: var(--input-icon-margin);
    }

    &.InputRightIcon {
      cursor: pointer;
    }
  }

  .InputContainer {
    flex-grow: 1;

    input {
      display: block;
      margin: 0;
      padding: 0;
      outline: none;
      border: none;
      width: 100%;
      font-family: var(--f-r);
      font-size: inherit;
      background-color: var(--input-background-color);
      transition: color var(--u-dur), background-color var(--u-dur);

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &[type='number'] {
        -moz-appearance: textfield;
      }

      &[type='search'] {
        &::-webkit-search-decoration,
        &::-webkit-search-cancel-button,
        &::-webkit-search-results-button,
        &::-webkit-search-results-decoration {
          -webkit-appearance: none;
        }
      }
    }
  }

  &.MSInputInvalid {
    border: 1px solid var(--c-red);

    .InputLeftIcon,
    .InputRightIcon,
    .InputContainer input {
      color: var(--c-red);
    }
  }
}
</style>
