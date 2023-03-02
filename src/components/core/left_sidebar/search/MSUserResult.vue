<template>
  <div class="MSUserResult">
    <ul class="ResetList">
      <li v-for="(user, idx) in users" :key="user.uid">
        <MSSearchUserItem
          :user="user"
          :active="activeUserItem === idx"
          @active-user-item="activeUserItem = activeUserItem === idx ? -1 : idx"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type PropType, ref, watch } from 'vue'
import MSSearchUserItem from './MSSearchUserItem.vue'
import type { findUserResultDto } from '../../../../apis/user.api'

const props = defineProps({
  users: {
    type: Array as PropType<findUserResultDto[]>,
    required: true
  }
})

const activeUserItem = ref(-1)

watch(
  () => props.users,
  (u) => {
    if (u.length === 0) activeUserItem.value = -1
  }
)
</script>

<style lang="scss"></style>
