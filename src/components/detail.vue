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

  </div>
</template>

<script>
import {category, items} from '../productData'
import $ from 'jquery'

export default {
  name: 'detail',
  data () {
    return {
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
      }
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
