<template>
  <div class="page purchase-summary">
    <input type="text" v-model="name" placeholder="Namn" />
    <p class="purchase-summary__info">
      Leverantör: <span>{{ purchase.supplier }}</span>
    </p>
    <p class="purchase-summary__info" v-if="cost">
      Pris totalt: <span>{{ cost.total }} {{ cost.currency }}</span>
    </p>
    <div class="page__action">
      <p-button type="primary" @click="save">
        <i class="far fa-save"></i>
        <span>SPARA INKÖP</span>
      </p-button>
    </div>
  </div>
</template>

<script lang="ts" src="./purchase-summary.ts"></script>
<style lang="scss" src="./purchase-summary.scss"></style>
