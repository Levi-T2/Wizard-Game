<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-white rounded elevation-3">
      <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo"
        class="rounded-circle">
      <button @click="getBossTest()" class="btn btn-success">get bosses</button>
      <div>
        {{ bosses }}
      </div>
    </div>
  </div>
</template>

<script>
import { bossService } from '../services/BossService';
import { AppState } from "../AppState";
import { computed } from 'vue';


export default {
  setup() {

    return {
      getBossTest() {
        bossService.getBosses()
      },
      bosses: computed(() => AppState.newBosses)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
