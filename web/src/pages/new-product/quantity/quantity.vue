<template>
  <div class="page quantity">
    <h2 class="text-center">Antal</h2>
    <div class="big-number__incrementer">
      <i class="fas fa-minus" @click="change(-1)"></i>
      <div class="big-circle__indicator">
        <input type="number" :value="getQuantity" @change="input" maxlength="3" minlength="1"/>
      </div>
      <i class="fas fa-plus" @click="change(1)"></i>
    </div>

    <div class="page__action">
      <p-button type="secondary" to="/purchases/add/products/add/price">
        <span>NÄSTA</span>
      </p-button>
    </div>
  </div>
</template>

<script lang="ts" src="./quantity.ts"></script>
<style lang="scss" src="./quantity.scss"></style>
