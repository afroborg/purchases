<template>
  <div class="page product-summary">
    <h2>Produkt {{ purchasesCount + 1 }}</h2>
    <p class="product-summary__info">
      Leverantör: <span>{{ supplier }}</span>
    </p>
    <p class="product-summary__info">
      Kategori: <span>{{ product.category }}</span>
    </p>
    <p class="product-summary__info">
      Antal: <span>{{ product.quantity }}st</span>
    </p>
    <p class="product-summary__info">
      Pris: <span>{{ product.price.value }} {{product.price.currency}}/st</span>
    </p>
    <div class="product-summary__images">
      <div v-for="key in Object.keys(product.photos)" :key="key" class="product-summary__image">
        <img :src="product.photos[key]" />
      </div>
    </div>

    <div class="page__action">
      <p-button type="primary" @click="addToPurchase">
        <span>LÄGG TILL</span>
      </p-button>
    </div>
  </div>
</template>

<script lang="ts" src="./product-summary.ts"></script>
<style lang="scss" src="./product-summary.scss"></style>
