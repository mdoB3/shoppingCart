<template>
<div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <ul v-if="cartItems.length >0">
      <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
        <CartListItem :cartItem="cartItem" />
      </li>
      <div class="cart-details">
        <p>Total Quantity: <span class="has-text-weight-bold">
            {{ cartQuantity }}
        </span></p>
        <p @click="removeAllCartItems(cartItems)" class="cart-remove-all--text">
          <i class="fa fa-trash"></i>Remove all
        </p>
      </div>
    </ul>
    <button :disabled="cartItems.length === 0" class="button is-primary">
      Checkout (<span class="has-text-weight-bold">${{ cartTotal }}</span>
    </button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapActions} from 'vuex'
import CartListItem from './CartItem'

export default {
    name: 'CartList',
    computed: {
        ...mapGetters([
            'cartItems',
            'cartTotal',
            'cartQuantity'
        ])
    },
    created() {
        this.$store.dispatch('getCartItems')
    },
    components: {
        CartListItem
    },
    methods: {
        ...mapActions(['removeAllCartItems'])
    }
}
</script>
<style scoped>
#cart {
  height: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-empty-text {
  padding: 10px 0;
}

.cart--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.cart-item {
  padding: 10px 0;
}

.cart-item--modify {
  cursor: pointer;
  margin: 0 1px;
}

.cart-details {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.cart-remove-all--text {
  cursor: pointer;
}

.cart-remove-all--text .fa {
  padding-right: 5px;
}
</style>
