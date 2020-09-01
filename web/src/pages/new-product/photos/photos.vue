<template>
  <div class="page photos">
    <div class="photos__viewer">
      <img v-if="getPhotos[key]" :src="getPhotos[key]" />
      <p v-else class="empty-list__text">Ingen bild tillagd</p>
    </div>
    <div class="photos__toolbar">
      <p-button v-for="button in buttons" :key="button.title" :title="button.title" :type="button.key === key ? 'primary' : 'secondary'" @click="!getPhotos[button.key] ? triggerUpload(button.key) : (key === button.key ? triggerUpload(button.key) :setKey(button.key)) ">
        <i :class="button.icon" />
      </p-button>
    </div>
    <div class="hidden__inputs">
      <input v-for="button in buttons" :key="`hidden-file-input__${button.key}`" :id="`hidden-file-input__${button.key}`" type="file" @change="(e) => fileUpload(button.key, e)" />
    </div>

    <div class="page__action">
      <p-button :disabled="!allDone" type="secondary" to="/purchases/add/products/add/quantity">
        <span>NÄSTA</span>
      </p-button>
    </div>
  </div>
</template>

<script lang="ts" src="./photos.ts"></script>
<style lang="scss" src="./photos.scss"></style>
