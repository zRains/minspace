<template>
  <div class="MSUserResult">
    <ul class="ResetList">
      <li v-for="user in users" :key="user.uid">
        <MSSearchUserItem :user="user" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import MSSearchUserItem from './MSSearchUserItem.vue'

// Types
import type { findUserResultScheme } from '@type/user.type'

defineProps({
  users: {
    type: Array as PropType<findUserResultScheme[]>,
    required: true
  }
})
</script>

<style lang="scss"></style>
