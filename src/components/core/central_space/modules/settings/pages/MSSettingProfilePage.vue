<template>
  <div class="MSSettingProfilePage">
    <!-- 用户头像配置 -->
    <MSSettingItem class="AvatarPropertySettting" property="Avatar">
      <MSUserAvatar :src="currentUser.avatar" :alt="currentUser.username" :size="80" />

      <div class="Operations">
        <FileUploader ref="upload" v-model="files" post-action="/post.method" put-action="/put.method">
          <MSButton class="UploadBtn">
            <template #left-icon><Icon icon="tabler:photo-up" width="18" /></template>
            <template #text>Upload new photo</template>
          </MSButton></FileUploader
        >

        <MSButton class="RevertBtn">
          <template #text>Revert to identicon</template>
        </MSButton>
      </div>
    </MSSettingItem>

    <!-- 用户名配置 -->
    <MSSettingItem class="UsernamePropertySettting" property="Username">
      <MSInput v-model:value="userProfile.username" :width="200">
        <template #left-icon><Icon icon="tabler:at" /></template>
      </MSInput>
      <div class="Tip">
        <Icon icon="tabler:alert-circle" width="16" />Username may appear around MineSpace's activities where you participate in or are
        mentioned. You can remove it at any time.
      </div>
    </MSSettingItem>

    <!-- 用户签名 -->
    <MSSettingItem class="SignPropertySettting" property="Sign">
      <MSInput v-model:value="userProfile.sign" type="textarea" :width="600" :rows="4" />
    </MSSettingItem>

    <!-- README配置 -->
    <!-- TODO 待完成：用户Readme -->
    <MSSettingItem class="UsernamePropertySettting" property="Readme"> </MSSettingItem>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import useUserStore from '@store/user.store'
import MSUserAvatar from '@comp/ui/MSUserAvatar.vue'
import MSSettingItem from '../MSSettingItem.vue'
import MSButton from '@comp/ui/MSButton.vue'
import MSInput from '@comp/ui/MSInput.vue'
import FileUploader from 'vue-upload-component'

const userStore = useUserStore()
const currentUser = computed(() => userStore.currentUser!)
const userProfile = reactive({
  username: currentUser.value.username,
  sign: currentUser.value.sign
})
const files = ref([])
</script>

<style lang="scss">
.MSSettingProfilePage {
  padding: calc(var(--u-gap) * 2) calc(var(--u-gap) * 4);
  height: 100%;

  .MSSettingItem:not(:last-child) {
    margin-bottom: calc(var(--u-gap) * 4);
  }

  .AvatarPropertySettting {
    .Operations {
      display: flex;
      margin-top: calc(var(--u-gap) * 2);

      .file-uploads {
        margin-right: var(--u-gap);

        label[for='file'] {
          cursor: pointer;
        }
      }

      .MSButton {
        &.UploadBtn {
          padding: calc(var(--u-gap) * 0.5) calc(var(--u-gap) * 1.5);
          border-radius: 5px;
          font-size: 0.9rem;
          color: var(--c-white);
          background-color: var(--c-green);
        }

        &.RevertBtn {
          color: var(--c-text-2);
          font-size: 0.9rem;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .UsernamePropertySettting {
    .Tip {
      margin-top: var(--u-gap);
      font-size: 0.85rem;
      color: var(--c-text-2);

      .iconify {
        margin-right: calc(var(--u-gap) * 0.5);
        vertical-align: -0.15rem;
      }
    }
  }
}
</style>
