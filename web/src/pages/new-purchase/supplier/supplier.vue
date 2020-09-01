<template>
  <div class="supplier">
    <h2>Leverantör</h2>
    <p-list class="supplier__list" :items="allSuppliers" key-prop="id" text-prop="name" :selected-index="index" @change="supplierChanged" />
  </div>
</template>

<script lang="ts" src="./supplier.ts"></script>
<style lang="scss" src="./supplier.scss"></style>
