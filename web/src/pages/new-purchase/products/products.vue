<template>
  <div class="page products">
    <h2>Produkter</h2>
    <div v-if="products.length" class="products__list">
      <div v-for="(product, i) in products" :key="product.name" class="products__list__item">
        <div class="product__delete-btn" @click="removeProduct(i)">
          <i class="far fa-times" />
        </div>
        <div class="product__image">
          <img :src="product.photos.product" />
        </div>
        <div class="product__details">
          <div class="product__info">
            <div class="product__name">Produkt {{ i + 1 }}</div>
          </div>
          <div class="product__quantity">
            <span>{{ product.quantity }}</span
            >st
          </div>
        </div>
      </div>
    </div>
    <p v-else class="empty-list__text">Inga produker tillagda</p>

    <div class="page__action">
      <p-button type="secondary" to="/purchases/add/products/add">
        <i class="far fa-plus"></i>
        <span>NY PRODUKT</span>
      </p-button>
    </div>
    <div>
      <p-button :disabled="products.length < 1" type="primary" to="/purchases/add/summary">
        <span>NÄSTA</span>
      </p-button>
    </div>
  </div>
</template>

<script lang="ts" src="./products.ts"></script>
<style lang="scss" src="./products.scss"></style>
