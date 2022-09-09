<template>
  <div class="MSInput" :style="{ padding: sizeRefer[size] + 'px', fontSize: `calc(0.9rem + ${(sizeRefer[size] - 6) * 0.01}rem)` }">
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
          @click="
            () => {
              showPassword = !showPassword
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
import { nextTick, PropType, ref } from 'vue'

defineEmits(['update:value'])

defineProps({
  size: {
    type: String as PropType<'large' | 'middle' | 'small'>,
    required: false,
    default: 'middle'
  },
  inputType: {
    type: String as PropType<'text' | 'number' | 'password'>,
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
  value: {
    type: String,
    required: true
  }
})

const sizeRefer = {
  large: 8,
  middle: 6,
  small: 4
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

// const inputValue = ref('')
// const inputType = ref(props.inputType)

// const showEyeIcon = computed(() => inputType.value === 'password' && showPassword.value)
</script>

<style lang="scss">
$ms-input-height: 30px;

.MSInput {
  display: flex;
  align-self: center;
  width: 250px;
  border: 1px solid var(--c-divider);
  border-radius: 5px;
  background-color: var(--c-bg);

  .InputLeftIcon,
  .InputRightIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(100% + 0.2rem);
    color: var(--c-text-2);

    &.InputLeftIcon {
      & > *:last-child {
        margin-right: calc(var(--u-gap) / 1.2);
      }
    }

    &.InputRightIcon {
      cursor: pointer;

      & > *:first-child {
        margin-left: calc(var(--u-gap) / 1.2);
      }
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

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &[type='number'] {
        -moz-appearance: textfield;
      }
    }
  }
}
</style>
