<template>
  <MSFullLayout class="MSAuth">
    <svg viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="MSAuthAnimeBg transition duration-300 ease-in-out delay-150">
      <path
        d="M 0,400 C 0,400 0,200 0,200 C 111.67464114832538,171.35885167464116 223.34928229665076,142.71770334928232 316,141 C 408.65071770334924,139.28229665071768 482.27751196172244,164.48803827751195 559,198 C 635.7224880382776,231.51196172248805 715.5406698564594,273.33014354066984 828,269 C 940.4593301435406,264.66985645933016 1085.5598086124403,214.1913875598086 1193,195 C 1300.4401913875597,175.8086124401914 1370.22009569378,187.9043062200957 1440,200 C 1440,200 1440,400 1440,400 Z"
        stroke="none"
        fill="var(--c-bg-mute)"
        class="transition-all duration-300 ease-in-out delay-150 path-0"
        transform="rotate(-180 720 200)"
      ></path>
    </svg>
    <div class="AuthBanner">
      <div class="AuthContainer">
        <p>START FOR FREE</p>
        <p>Welcome to minspace<span class="SpecialDot">.</span></p>
        <p>
          {{ isRegisterMode ? 'Already A Member?' : 'No account?'
          }}<MSButton @click="isRegisterMode = !isRegisterMode" class="SwitchToLoginBtn">
            <template #text>{{ isRegisterMode ? 'Log In' : 'Sign up' }}</template>
          </MSButton>
        </p>

        <!-- Register box -->
        <div v-if="isRegisterMode" class="RegisterInputForm">
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
        </div>

        <!-- Login box -->
        <div v-else class="LoginInputForm">
          <!-- Email -->
          <div class="InputBanner">Email</div>
          <MSInput
            v-model:value="loginModule.email"
            :invalid="!loginModule.isEmailValid"
            size="large"
            :width="250"
            input-type="text"
            cleanable
          >
            <template #left-icon>
              <Icon icon="tabler:mail" />
            </template>
          </MSInput>

          <!-- Password -->
          <div class="InputBanner">Password</div>
          <MSInput
            v-model:value="loginModule.password"
            :invalid="!loginModule.isPasswordValid"
            size="large"
            :width="250"
            input-type="password"
          >
            <template #left-icon>
              <Icon icon="tabler:lock" />
            </template>
          </MSInput>
        </div>

        <!-- Action!! -->
        <MSButton class="AuthConfirm" :loading="authConfirmLoading" @click="authConfirmHandle">
          <template #left-icon><Icon icon="tabler:box" /></template>
          <template #text>{{ isRegisterMode ? 'Create account' : 'Login' }}</template>
        </MSButton>
      </div>

      <div class="PublicRooms"></div>
    </div>
  </MSFullLayout>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import MSFullLayout from '../layouts/MSFullLayout.vue'
import MSInput from '../components/ui/MSInput.vue'
import MSButton from '../components/ui/MSButton/MSButton.vue'
import useToast from '../composes/toast'
import { register, login } from '../apis/auth'
import storage from '../utils/storage'

const Toast = useToast()

const registerModule = reactive({
  email: '',
  password: '',
  passwordConfirm: '',
  isEmailValid: true,
  isPasswordValid: true,
  isPasswordConfirmValid: true
})

const loginModule = reactive({
  email: '',
  password: '',
  isEmailValid: true,
  isPasswordValid: true
})

const isRegisterMode = ref(false)
const authConfirmLoading = ref(false)

function checkRegisterValid() {
  const invalidArr: string[] = []

  registerModule.isEmailValid = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(registerModule.email)
  if (!registerModule.isEmailValid) invalidArr.push('Invalid email')

  registerModule.isPasswordValid = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(registerModule.password)
  if (!registerModule.isPasswordValid) invalidArr.push('Invalid password')

  registerModule.isPasswordConfirmValid = registerModule.password === registerModule.passwordConfirm
  if (!registerModule.isPasswordConfirmValid) invalidArr.push('The two passwords do not match')

  if (invalidArr.length !== 0) Toast.error('Please check your message', { content: invalidArr })

  return invalidArr.length === 0
}

function checkLoginValid() {
  const invalidArr: string[] = []

  loginModule.isEmailValid = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(loginModule.email)
  if (!loginModule.isEmailValid) invalidArr.push('Invalid email')

  loginModule.isPasswordValid = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(loginModule.password)
  if (!loginModule.isPasswordValid) invalidArr.push('Invalid password')

  if (invalidArr.length !== 0) Toast.error('Please check your message', { content: invalidArr })

  return invalidArr.length === 0
}

async function registerHandle() {
  authConfirmLoading.value = true
  const { succeed, res } = await register(registerModule)
  authConfirmLoading.value = false

  console.log(res)

  if (succeed) {
    // return
  }

  // Toast.error('Register Error', { content: res.map((e: Record<string, string>) => e.message) })
}

async function loginHandle() {
  authConfirmLoading.value = true
  const { succeed, res } = await login(loginModule)
  authConfirmLoading.value = false

  if (succeed) {
    console.log(res)

    storage.set('user', res)
  }
}

function authConfirmHandle() {
  if (isRegisterMode.value && checkRegisterValid()) {
    registerHandle()
    return
  }

  if (!isRegisterMode.value && checkLoginValid()) {
    loginHandle()
  }
}
</script>

<style lang="scss">
.MSAuth {
  position: relative;
  display: flex;
  background-repeat: no-repeat;

  .AuthBanner {
    display: flex;
    margin: 0 auto;
    padding: 10rem var(--u-gap) 0 var(--u-gap);
    height: 100vh;

    .AuthContainer {
      & > p {
        margin: 0;
        font-family: var(--f-rb);
        color: var(--c-text-2);

        .SpecialDot {
          color: var(--c-brand);
        }

        .SwitchToLoginBtn {
          margin-left: var(--u-gap);
          color: var(--c-text-1);
          text-decoration: underline;
        }

        &:nth-child(2) {
          margin: 0.8rem 0;
          font-size: 3rem;
          color: var(--c-text-1);
        }

        &:nth-child(3) {
          display: flex;
          font-size: 0.95rem;
          font-family: var(--f-r);
        }
      }

      .RegisterInputForm,
      .LoginInputForm {
        margin: 1.5rem 0;

        .InputBanner {
          user-select: none;
          font-size: 0.9rem;
          margin-bottom: var(--u-gap);
        }

        .MSInput:not(:last-child) {
          margin-bottom: calc(var(--u-gap) * 2);
        }
      }

      .AuthConfirm {
        display: inline-flex;
        padding: var(--u-gap) calc(var(--u-gap) * 2);
        background-color: var(--c-brand);
        border-radius: 5px;
        color: var(--c-bg);
      }
    }

    .PublicRooms {
      margin-left: auto;
    }
  }

  .MSAuthAnimeBg {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;

    .path-0 {
      animation: pathAnim-0 8s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    @keyframes pathAnim-0 {
      0% {
        d: path(
          'M 0,400 C 0,400 0,200 0,200 C 111.67464114832538,171.35885167464116 223.34928229665076,142.71770334928232 316,141 C 408.65071770334924,139.28229665071768 482.27751196172244,164.48803827751195 559,198 C 635.7224880382776,231.51196172248805 715.5406698564594,273.33014354066984 828,269 C 940.4593301435406,264.66985645933016 1085.5598086124403,214.1913875598086 1193,195 C 1300.4401913875597,175.8086124401914 1370.22009569378,187.9043062200957 1440,200 C 1440,200 1440,400 1440,400 Z'
        );
      }
      25% {
        d: path(
          'M 0,400 C 0,400 0,200 0,200 C 91.87559808612443,214.99521531100478 183.75119617224885,229.99043062200957 277,211 C 370.24880382775115,192.00956937799043 464.87081339712915,139.03349282296648 551,159 C 637.1291866028708,178.96650717703352 714.7655502392344,271.8755980861244 818,271 C 921.2344497607656,270.1244019138756 1050.066985645933,175.4641148325359 1158,148 C 1265.933014354067,120.5358851674641 1352.9665071770335,160.26794258373207 1440,200 C 1440,200 1440,400 1440,400 Z'
        );
      }
      50% {
        d: path(
          'M 0,400 C 0,400 0,200 0,200 C 66.03827751196172,168.8133971291866 132.07655502392345,137.6267942583732 239,133 C 345.92344497607655,128.3732057416268 493.73205741626793,150.30622009569382 591,167 C 688.2679425837321,183.69377990430618 734.9952153110049,195.14832535885162 818,183 C 901.0047846889951,170.85167464114838 1020.2870813397128,135.10047846889955 1130,134 C 1239.7129186602872,132.89952153110045 1339.8564593301435,166.44976076555022 1440,200 C 1440,200 1440,400 1440,400 Z'
        );
      }
      75% {
        d: path(
          'M 0,400 C 0,400 0,200 0,200 C 102.92822966507177,176.0287081339713 205.85645933014354,152.05741626794256 311,144 C 416.14354066985646,135.94258373205744 523.5023923444976,143.79904306220098 608,156 C 692.4976076555024,168.20095693779902 754.1339712918661,184.74641148325355 852,207 C 949.8660287081339,229.25358851674645 1083.961722488038,257.2153110047847 1188,257 C 1292.038277511962,256.7846889952153 1366.019138755981,228.39234449760764 1440,200 C 1440,200 1440,400 1440,400 Z'
        );
      }
      100% {
        d: path(
          'M 0,400 C 0,400 0,200 0,200 C 111.67464114832538,171.35885167464116 223.34928229665076,142.71770334928232 316,141 C 408.65071770334924,139.28229665071768 482.27751196172244,164.48803827751195 559,198 C 635.7224880382776,231.51196172248805 715.5406698564594,273.33014354066984 828,269 C 940.4593301435406,264.66985645933016 1085.5598086124403,214.1913875598086 1193,195 C 1300.4401913875597,175.8086124401914 1370.22009569378,187.9043062200957 1440,200 C 1440,200 1440,400 1440,400 Z'
        );
      }
    }
  }
}
</style>
