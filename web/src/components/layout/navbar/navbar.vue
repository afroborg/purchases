<template>
  <div class="navbar">
    <div class="navbar__menu-icon" @click="toggleMenu">
      <i :class="toggled ? 'far fa-times' : 'far fa-bars'" />
    </div>
    <div class="navbar__logo">
      <router-link to="/purchases"><img src="@/assets/header-logo.png"/></router-link>
    </div>
    <div class="navbar__menu" :class="{ 'navbar__menu--toggled': toggled }">
      <router-link
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        class="navbar__menu__item"
        :class="{ 'navbar__menu__item--active': route.path === currentRoute }"
        @click.native="toggleMenu"
      >
        <span>{{ route.name }}</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./navbar.ts"></script>
<style lang="scss" src="./navbar.scss"></style>
