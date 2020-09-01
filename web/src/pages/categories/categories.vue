<template>
  <div class="main-page page categories">
    <h2>Kategorier</h2>
    <div class="categories__list">
      <div v-for="category in categories" :key="category.id" class="category">
        <span>{{ category.name }}</span>
        <i class="far fa-times" @click="del(category.id)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./categories.ts"></script>
<style lang="scss" src="./categories.scss"></style>
