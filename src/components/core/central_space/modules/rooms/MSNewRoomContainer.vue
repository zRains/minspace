<template>
  <div class="MSNewRoomContainer">
    <!-- <div class="Banner">
      Meeting your new friends <br />
      in a new room<span>.</span>
    </div> -->
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.MSNewRoomContainer {
  position: relative;
  display: flex;
  flex-direction: column;

  .Banner {
    text-align: center;
    font-size: 2rem;
    font-family: var(--f-rb);

    span {
      color: var(--c-green);
    }
  }
  /* &::after {
    position: absolute;
    content: '';
    left: 0;
    top: -20px;
    height: 200px;
    width: 100%;
    background-image: url('/illustrations/new_room_bg_1.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: -1;
  } */
}
</style>
