<template>
  <div>
    <h1>Cart</h1>
    <router-link :to="{name: 'products'}">Back to products...</router-link>
    <div>
      <ul>
        <template v-for="(product, i) in allProducts" >	
          <li v-if="(product.cnt > 0)" :key="i">
              ID) {{ product.id }}  {{productProxy(product.id).title}} Qty: {{product.cnt}} Total: {{productProxy(product.id).price * product.cnt}}
            <button class="btn btn-warning" @click="minus(product.id)">
              -1
            </button>
            <!-- <input type="text" :value="product.cnt" @change="onInput(product.id, $event)"> -->
            <button class="btn btn-success" @click="plus(product.id)">
              +1
            </button>
          </li>
        </template>  
      </ul>
    </div>
    <hr />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
	computed: {
		...mapGetters({
      allProducts: 'cart/items',
     // total: 'cart/total',
      productProxy: 'products/item'
			})
  },
  methods:{
    ...mapActions({
      plus:'cart/plus',
      minus:'cart/minus'
    })
  }
};
</script>