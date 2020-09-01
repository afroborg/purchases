<template>
  <div class="main-page new-purchase">
    <h1><i class="fas fa-angle-left page-header__back-btn " @click="$router.go(-1)"/>Nytt inköp</h1>
    <progress-indicator :steps="steps" />

    <router-view />
  </div>
</template>

<script lang="ts" src="./new-purchase.ts"></script>
<style lang="scss" src="./new-purchase.scss"></style>
