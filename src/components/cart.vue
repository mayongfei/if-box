<template>
  <div>
    <div id="content">
      <div class="cart-title">

      </div>
      <div v-if="items.length > 0">
        <div class="row-responsive" v-for="item in items">
          <div class="responsive" v-for="product in item">
            <router-link v-bind:to="'/detail/'+product.name.replace(/[ ]+/g,'')">
              <img v-bind:src="'/static/images/products/' + product.src" width="250px">
            </router-link>
            <br>
            <router-link v-bind:to="'/detail/'+product.name.replace(/[ ]+/g,'')">
              {{product.name}}
            </router-link>
            <p class="p-des">{{product.title}}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Currently there is no Products in cart. Please click 'Add to Cart' button to add product.</p>
      </div>
    </div>
  </div>
</template>

<script>
import {getProducts} from '../productData'

export default {
  name: 'products',
  data () {
    return {
      items: []
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width: 100%;
    max-width: 250px;
    height: auto;
  }
  .p-des {
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
    max-width: 320px;
    font-weight: 500;
    color: #555555;
    margin-top: 8px;
    margin-bottom: 20px;
    line-height: 26px;
  }
  .cart-title {
    font-size: 22px;
    font-weight: 400;
    padding-bottom: 15px;
    margin-bottom: 0;
    font-family: quicksand;
    
  }
</style>
