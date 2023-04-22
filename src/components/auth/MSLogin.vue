<template>
  <div class="MSLogin">
    <!-- Email -->
    <div class="InputBanner">Email</div>
    <MSInput v-model:value="loginModule.email" :is-invalid="!loginModule.isEmailValid" size="large" :width="250" type="text" cleanable>
      <template #left-icon>
        <Icon icon="tabler:mail" />
      </template>
    </MSInput>

    <!-- Password -->
    <div class="InputBanner">Password</div>
    <MSInput v-model:value="loginModule.password" :is-invalid="!loginModule.isPasswordValid" size="large" :width="250" type="password">
      <template #left-icon>
        <Icon icon="tabler:lock" />
      </template>
    </MSInput>

    <MSButton class="LoginConfirm" :loading="isLoading" @click="loginHandle">
      <template #left-icon><Icon icon="tabler:box" /></template>
      <template #text>Login</template>
    </MSButton>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import MSButton from '@comp/ui/MSButton.vue'
import MSInput from '@comp/ui/MSInput.vue'
import useToast from '@cos/toast'
import useUserStore from '@store/user.store'

// Services
import { login } from '@api/auth.api'

const isLoading = ref(false)
const Toast = useToast()
const router = useRouter()
const userStore = useUserStore()

const loginModule = reactive({
  email: '',
  password: '',
  isEmailValid: true,
  isPasswordValid: true
})

function checkLoginValid() {
  const invalidArr: string[] = []

  loginModule.isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginModule.email)
  if (!loginModule.isEmailValid) invalidArr.push('Invalid email')

  loginModule.isPasswordValid = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(loginModule.password)
  if (!loginModule.isPasswordValid) invalidArr.push('Invalid password')

  if (invalidArr.length !== 0) Toast.error('Please check your message', { content: invalidArr, position: 'TopCenter' })

  return invalidArr.length === 0
}

async function loginHandle() {
  if (checkLoginValid()) {
    isLoading.value = true
    const { succeed, data } = await login(loginModule)
    isLoading.value = false

    if (succeed) {
      userStore.setCurrentUser(data)
      router.push({ name: 'activities' })
    }
  }
}
</script>

<style lang="scss"></style>
