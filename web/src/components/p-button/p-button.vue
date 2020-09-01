<template>
  <router-link v-if="to" :to="to" class="p-button" :class="`p-button--${type} ${block ? 'p-button--block' : ''} ${disabled ? 'p-button--disabled' : ''}`">
    <slot></slot>
  </router-link>
  <a v-else-if="href" :href="href" class="p-button" :class="`p-button--${type} ${block ? 'p-button--block' : ''}  ${disabled ? 'p-button--disabled' : ''}`">
    <slot></slot>
  </a>
  <button v-else class="p-button" :class="`p-button--${type} ${block ? 'p-button--block' : ''}`" @click="click" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts" src="./p-button.ts"></script>
<style lang="scss" src="./p-button.scss"></style>
