<template>
  <div class="MSInput" :style="inputStyles" @click="focusInput">
    <!-- 左图标 -->
    <div v-if="type === 'text'" class="InputLeftIcon"><slot name="left-icon"></slot></div>

    <!-- 输入框主体 -->
    <div class="InputContainer">
      <textarea
        v-if="type === 'textarea'"
        :rows="rows"
        :placeholder="placeholder"
        :value="value"
        :maxlength="maxlength"
        :minlength="minlength"
        :max="max"
        :min="min"
        ref="inputRef"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
      />

      <input
        v-else
        :type="type"
        :placeholder="placeholder"
        :value="value"
        :maxlength="maxlength"
        :minlength="minlength"
        :max="max"
        :min="min"
        ref="inputRef"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
      />

      <!-- 输入框边框 -->
      <div :class="{ InputBorder: true, focused: isFocused, invalid: isInvalid }"></div>
    </div>

    <!-- 右图标 -->
    <div class="InputRightIcon">
      <slot name="right-icon">
        <Icon
          v-if="type === 'password'"
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
          v-else-if="cleanable"
          @click="
            () => {
              $emit('update:value', '')
              focusInput()
            }
          "
          icon="tabler:circle-x"
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'

// Types
import type { PropType, InputHTMLAttributes } from 'vue'

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

  cleanable: {
    type: Boolean,
    required: false,
    default: false
  },
  isInvalid: {
    type: Boolean,
    required: false,
    default: false
  },
  value: {
    type: String,
    required: true
  },
  type: {
    type: String as PropType<InputHTMLAttributes['type']>,
    default: 'text'
  },
  placeholder: {
    type: String as PropType<InputHTMLAttributes['placeholder']>
  },
  maxlength: {
    type: Number as PropType<InputHTMLAttributes['maxlength']>
  },
  minlength: {
    type: Number as PropType<InputHTMLAttributes['minlength']>
  },
  max: {
    type: Number as PropType<InputHTMLAttributes['max']>
  },
  min: {
    type: Number as PropType<InputHTMLAttributes['min']>
  },
  pattern: {
    type: Object as PropType<InputHTMLAttributes['pattern']>
  },
  required: {
    type: Boolean as PropType<InputHTMLAttributes['required']>
  },
  rows: {
    type: Number,
    required: false
  }
})
const sizeRefer = {
  large: 7,
  middle: 5,
  small: 3
}
const inputRef = ref<HTMLInputElement>()
const isFocused = ref(false)
const showPassword = ref(false)
const inputStyles = computed(() => ({
  padding: `${sizeRefer[props.size]}px`,
  '--input-icon-margin': `${sizeRefer[props.size]}px`,
  '--input-background-color': props.backgroundColor,
  '--input-border-color': props.borderColor,
  fontSize: `calc(0.9rem + ${(sizeRefer[props.size] - 6) * 0.01}rem)`,
  maxWidth: props.width ? `${props.width}px` : '100%'
}))

defineEmits(['update:value'])

defineExpose({
  focusInput
})

function focusInput() {
  nextTick(() => {
    if (isFocused.value) return

    const valueLen = inputRef.value!.value.length
    inputRef.value!.focus()
    inputRef.value!.setSelectionRange(valueLen * 2, valueLen * 2)
  })
}
</script>

<style lang="scss">
.MSInput {
  position: relative;
  display: flex;
  align-self: center;
  transition: border var(--u-dur), background-color var(--u-dur);
  cursor: text;

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

    textarea,
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
      resize: vertical;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &[type='number'] {
        appearance: textfield;
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

    .InputBorder {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border: 1px solid var(--input-border-color);
      border-radius: 5px;
      background-color: var(--input-background-color);
      transition: border calc(var(--u-dur) * 0.5);
      z-index: -1;

      &.invalid {
        border: 2px solid var(--c-red);
      }

      &.focused {
        border: 2px solid var(--c-green);
      }
    }
  }

  &:hover .InputContainer .InputBorder:not(.focused, .invalid) {
    border: 2px solid var(--c-divider);
  }
}
</style>
