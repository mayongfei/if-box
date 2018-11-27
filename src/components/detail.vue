<template>
  <div id="content">
    <div id="detail">
      <p>{{description}}</p>
      <ul v-for="index in Math.ceil(subItems.length/4)" class="cameras dn">
        <li v-for="item in subItems.slice(4*(index-1), 4*index)">
          <img v-bind:src="'/static/images/products/'+$route.params.name+'/'+item.src">
        </li>
      </ul>
    </div>
    <div class="action">
      <router-link class="nav-link nav-icon" to="/cart">
        <input type="button" value="Add to Cart" v-on:click="addToCart" class="button-add"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import {category, items} from '../productData'
import $ from 'jquery'

export default {
  name: 'detail',
  data () {
    return {
      product: {},
      description: '',
      subItems: []
    }
  },
  created: function () {
    for(var i=0;i<category.length;i++) {
      if(category[i].name.replace(/[ ]+/g,'') === this.$route.params.name) {
        this.subItems = category[i].children
      }
    }
    for(var i=0;i<items.length;i++) {
      if(items[i].name.replace(/[ ]+/g,'') === this.$route.params.name) {
        this.description = items[i].description
        this.product.name = items[i].name
        this.product.src = items[i].src
        this.product.title = items[i].title
        this.product.description = items[i].description
      }
    }
  },
  methods: {
    addToCart: function (e) {
      let productsStr = localStorage.products || '[]'
      let products = JSON.parse(productsStr)
      products.push(this.product)
      localStorage.products = JSON.stringify(products)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .action {
    margin: 20px 0;
    text-align: right;
  }
  .button-add {
    display: inline-block;
    color: #e74330;
    text-align: center;
    padding: 8px 24px;
    border-radius: 40px;
    overflow: hidden;
    font-weight: 500;
    box-sizing: border-box;
    vertical-align: middle;
    border: 2px solid #f35c43;
    background: #ffffff;
    cursor: pointer;
  }
  #detail p {
    font-size: 16px;
    font-weight: normal;
  }
  #detail ul {
    height: 460px;
  }
  #detail ul li {
    float: left;
    width: 25%;
    text-align: center;
  }
  #detail img {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }

</style>
