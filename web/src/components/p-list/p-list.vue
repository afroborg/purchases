<template>
  <div class="p-list">
    <div v-for="(item, i) in items" @click="change(item)" :key="`p-list__item--${item[keyProp]}`" class="p-list__item" :class="{ 'p-list__item--selected': selectedIndex === i }">
      <i v-if="selectedIndex === i" class="far fa-check" />
      {{ item[textProp] }}
    </div>
  </div>
</template>

<script lang="ts" src="./p-list.ts"></script>
<style lang="scss" src="./p-list.scss"></style>
