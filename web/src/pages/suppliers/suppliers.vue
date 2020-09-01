<template>
  <div class="main-page page suppliers">
    <h2>Leverantörer</h2>
    <div class="suppliers__list">
      <div v-for="supplier in suppliers" :key="supplier.id" class="supplier">
        <span>{{ supplier.name }}</span>
        <i class="far fa-times" @click="del(supplier.id)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./suppliers.ts"></script>
<style lang="scss" src="./suppliers.scss"></style>
