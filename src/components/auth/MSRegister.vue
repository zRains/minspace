<template>
  <div class="MSRegister">
    <!-- Email -->
    <div class="InputBanner">Email</div>
    <MSInput
      v-model:value="registerModule.email"
      :invalid="!registerModule.isEmailValid"
      :width="250"
      cleanable
      size="large"
      input-type="text"
    >
      <template #left-icon>
        <Icon icon="tabler:mail" />
      </template>
    </MSInput>

    <!-- Password -->
    <div class="InputBanner">Password</div>
    <MSInput
      v-model:value="registerModule.password"
      :invalid="!registerModule.isPasswordValid"
      :width="250"
      size="large"
      input-type="password"
    >
      <template #left-icon>
        <Icon icon="tabler:lock" />
      </template>
    </MSInput>

    <!-- Password confirm -->
    <div class="InputBanner">Password confirm</div>
    <MSInput
      v-model:value="registerModule.passwordConfirm"
      :invalid="!registerModule.isPasswordConfirmValid"
      :width="250"
      size="large"
      input-type="password"
    >
      <template #left-icon>
        <Icon icon="tabler:lock-square" />
      </template>
    </MSInput>

    <MSButton class="RegisterConfirm" :loading="isLoading" @click="registerHandle">
      <template #left-icon><Icon icon="tabler:box" /></template>
      <template #text>Create account</template>
    </MSButton>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import MSInput from '../ui/MSInput.vue'
import MSButton from '../ui/MSButton/MSButton.vue'
import { register } from '../../apis/auth.api'
import storage from '../../utils/storage'
import router from '../../routers'
import useToast from '../../composes/toast'

const isLoading = ref(false)
const Toast = useToast()

const registerModule = reactive({
  email: '',
  password: '',
  passwordConfirm: '',
  isEmailValid: true,
  isPasswordValid: true,
  isPasswordConfirmValid: true
})

function checkRegisterValid() {
  const invalidArr: string[] = []

  registerModule.isEmailValid = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(registerModule.email)
  if (!registerModule.isEmailValid) invalidArr.push('Invalid email')

  registerModule.isPasswordValid = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(registerModule.password)
  if (!registerModule.isPasswordValid) invalidArr.push('Invalid password')

  registerModule.isPasswordConfirmValid = registerModule.password === registerModule.passwordConfirm
  if (!registerModule.isPasswordConfirmValid) invalidArr.push('Confirm passwords do not match')

  if (invalidArr.length !== 0) Toast.error('Please check your message', { content: invalidArr, position: 'TopCenter' })

  return invalidArr.length === 0
}

async function registerHandle() {
  if (checkRegisterValid()) {
    isLoading.value = true
    const { succeed, data } = await register(registerModule)
    isLoading.value = false

    if (succeed) {
      storage.set('user', data)
      router.push({ name: 'space-page' })
    }
  }
}
</script>

<style lang="scss"></style>
