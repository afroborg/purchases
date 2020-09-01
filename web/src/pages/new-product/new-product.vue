<template>
  <div class="main-page page new-product">
    <h1><i class="fas fa-angle-left page-header__back-btn " @click="$router.go(-1)" />Ny produkt</h1>
    <progress-indicator :steps="steps" />

    <router-view />
  </div>
</template>

<script lang="ts" src="./new-product.ts"></script>
<style lang="scss" src="./new-product.scss"></style>
