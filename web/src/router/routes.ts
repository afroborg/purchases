import { IRoute } from '@/models/IRoute';
import categories from '@/pages/categories/categories.vue';
import category from '@/pages/new-product/category/category.vue';
import newProduct from '@/pages/new-product/new-product.vue';
import photos from '@/pages/new-product/photos/photos.vue';
import price from '@/pages/new-product/price/price.vue';
import productSummary from '@/pages/new-product/product-summary/product-summary.vue';
import quantity from '@/pages/new-product/quantity/quantity.vue';
import newPurchase from '@/pages/new-purchase/new-purchase.vue';
import products from '@/pages/new-purchase/products/products.vue';
import purchaseSummary from '@/pages/new-purchase/purchase-summary/purchase-summary.vue';
import supplier from '@/pages/new-purchase/supplier/supplier.vue';
import purchases from '@/pages/purchases/purchases.vue';
import suppliers from '@/pages/suppliers/suppliers.vue';

export const routes: Array<IRoute> = [
  {
    path: '/',
    redirect: '/purchases',
  },
  {
    path: '/purchases',
    name: 'Tidigare inköp',
    component: purchases,
    inMenu: true

  },
  {
    path: '/purchases/add',
    name: 'Nytt inköp',
    component: newPurchase,
    children: [
      {
        path: '/purchases/add',
        redirect: '/purchases/add/supplier'
      },
      {
        path: '/purchases/add/supplier',
        name: 'Nytt inköp - Leverantör',
        component: supplier
      },
      {
        path: '/purchases/add/products',
        name: 'Nytt inköp - Produkter',
        component: products
      },
      {
        path: '/purchases/add/summary',
        name: 'Nytt inköp - Sammanfattning',
        component: purchaseSummary
      },
    ]
  },
  {
    path: '/purchases/add/products/add',
    name: 'Ny produkt',
    component: newProduct,
    children: [
      {
        path: '/purchases/add/products/add',
        redirect: '/purchases/add/products/add/category'
      },
      {
        path: '/purchases/add/products/add/category',
        name: 'Ny produkt - Kategori',
        component: category,
      },
      {
        path: '/purchases/add/products/add/photos',
        name: 'Ny produkt - Foton',
        component: photos,
      },
      {
        path: '/purchases/add/products/add/quantity',
        name: 'Ny produkt - Antal',
        component: quantity,
      },
      {
        path: '/purchases/add/products/add/price',
        name: 'Ny produkt - Pris',
        component: price,
      },
      {
        path: '/purchases/add/products/add/summary',
        name: 'Ny produkt - Sammanfattning',
        component: productSummary,
      },
    ]
  },
  {
    path: '/categories',
    name: 'Kategorier',
    component: categories,
    inMenu: true
  },
  {
    path: '/suppliers',
    name: 'Leverantörer',
    component: suppliers,
    inMenu: true
  },
]