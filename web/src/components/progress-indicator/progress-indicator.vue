<template>
  <div class="progress-indicator">
    <div class="progress-indicator__steps">
      <router-link v-for="(step, i) in steps" :key="step.title" :to="step.link" class="progress-indicator__steps__step" :class="`progress-indicator__steps__step--${step.status}`">
        <div class="step__name">{{ step.title }}</div>
        <i v-if="i !== steps.length - 1" class="far fa-angle-right" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./progress-indicator.ts"></script>
<style lang="scss" src="./progress-indicator.scss"></style>
