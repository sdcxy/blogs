<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div v-if="enabled" class="pwa-update-popup-wrapper">
      {{ message }}<br>
      <button @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'
export default {
  name: 'PwaUpdatePopup',
  components: { SWUpdatePopup }
}
</script>

<style scoped>
.pwa-update-popup-wrapper{
  
}
</style>