<template>
  <div class="main-page page purchases">
    <h1>Tidigare inköp</h1>
    <div class="purchases__list">
      <template v-if="allPurchases.length">
        <div
          v-for="purchase in allPurchases"
          :key="purchase.id"
          class="purchases__list__item"
        >
          <div class="purchase__photos">
            <img
              v-for="photo in photosStack(purchase.products)"
              :key="photo"
              :src="photo"
            />
          </div>
          <div class="purchase__date">
            {{ purchase.name || purchase.date }}
          </div>
          <div
            class="purchase__delete"
            title="Delete"
            @click="deletePurchase(purchase.id)"
          >
            <i class="far fa-trash-alt" />
          </div>
        </div>
      </template>
      <p v-else class="empty-list__text">Det finns inga köp registrerade</p>
    </div>
    <div class="page__action">
      <p-button type="secondary" to="/purchases/add">
        <i class="far fa-plus"></i>
        <span>NYTT INKÖP</span>
      </p-button>
    </div>
  </div>
</template>

<script lang="ts" src="./purchases.ts"></script>
<style lang="scss" src="./purchases.scss"></style>
