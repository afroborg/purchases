<template>
<div class="category">
  <h2>Kategori</h2>
  <p-list class="category__list" :items="allCategories" key-prop="id" text-prop="name" :selected-index="index" @change="categoryChanged" />
</div>
</template>

<script lang="ts" src="./category.ts"></script>