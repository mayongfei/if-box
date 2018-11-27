<template>
  <div>
    <div id="content">
      <div class="cart-line">
        <h2 class="cart-left-form-title">Shopping Cart</h2>
      </div>
      <div v-if="items.length > 0">
        <div class="flex-box cart-line cart-div" v-for="item in items">
          <div style="width: 20%;">
            <router-link v-bind:to="'/detail/'+item.name.replace(/[ ]+/g,'')">
              <img v-bind:src="'/static/images/products/'+item.src" class="image">
            </router-link>
          </div>
          <div style="width: 60%;">
            <div class="name">
              {{item.name}}
            </div>
            <div class="title">
              {{item.title}}
            </div>
          </div>
          <div style="width: 20%;">

          </div>
        </div>
      </div>
      <div v-else>
        <p>Currently there is no Products in cart. Please click 'Add to Cart' button to add product.</p>
      </div>
      <div class="action">
        <input type="button" value="Checkout" class="checkout"/>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'products',
  created: function () {

  },
  data () {
    return {
      items: JSON.parse(localStorage.products || '[]')
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .name {
    line-height: 30px;
    color: #333;
    font-family: quicksand;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
  }
  .title {
    line-height: 30px;
    color: #d94429;
    font-family: quicksand;
    font-weight: 500;
    display: block;
    margin: auto;
    text-align: left;
  }
  .image {
    height: 60px;
  }
  .action {
    text-align: right;
  }
  .checkout {
    border: 0;
    color: white;
    margin: 30px 0 20px;
    background: linear-gradient(150deg, #ea3349, #f35c43);
    font-family: Quicksand;
    border-radius: 30px;
    font-size: 16px;
    text-align: center;
    height: 48px;
    width: 210px;
    padding: 0;
    text-transform: capitalize;
    line-height: 48px;
    font-weight: 500;
  }
  .flex-box {
    display: flex;
  }
  .cart-div {
    padding: 20px;
  }
  h2.cart-left-form-title {
    font-size: 22px;
    font-weight: 400;
    padding-bottom: 15px;
    margin-bottom: 0;
    font-family: quicksand;
  }
  .cart-line {
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }
</style>
