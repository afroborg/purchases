<template>
  <div class="page price">
    <h2 class="text-center">Pris</h2>
    <div class="big-number__incrementer">
      <div class="big-circle__indicator">
        <input type="number" :value="getPrice.value" @change="input" maxlength="3" minlength="1"/>
        <span class="indicator__suffix" @click="changeCurrency">{{getPrice.currency}}</span>
      </div>
    </div>

    <div class="page__action">
      <p-button type="secondary" to="/purchases/add/products/add/summary">
        <span>NÄSTA</span>
      </p-button>
    </div>
  </div>
</template>

<script lang="ts" src="./price.ts"></script>
<style lang="scss" src="./price.scss"></style>
