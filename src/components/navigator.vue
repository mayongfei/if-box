<template>
  <div id="navigator" class="nav-h-1 nav-h-2">
    <div class="row">
      <div class="col-4 col-all logo-mob">
        <div class="row">
          <div class="col-3 div-menu">
            <a href="" id="menu" v-on:click="showMobileNav">
              <img src="../public/images/icon-menu.png" alt="Menu"/>
            </a>
          </div>
          <div class="col-6">
            <a href="http://www.ifboxs.net/" id="logo"><img src="../public/images/logo.jpg" alt="Logo"/></a>
          </div>
          <div class="col-3 div-shop">
            <a href="http://www.ifboxs.net/" id="shop"><img src="../public/images/cart-mo.png" alt="Menu"/></a>
          </div>
        </div>
      </div>
      <div class="col-8 col-all">
        <div id="nav-title" class="">
          <ul>
            <li id="store">
              <router-link class="nav-link" to="/products">Store</router-link>
            </li>
            <li id="products">
              <router-link  class="nav-link" to="/products">Products</router-link>
              <div class="sub-com nav-dropdown">
                <div id="pro-panel">
                  <div class="left-nav">
                    <ul>
                      <li v-for="(item,i) in items" v-on:mouseover="resetCategory($event, item.name)" v-bind:class="{active: i==0 }">
                        <a class="nav-silder" data-link="Wire-Free Security Cameras">{{item.name}}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="right-content">
                    <ul v-for="index in Math.ceil(subItems.length/4)" class="cameras dn">
                      <li v-for="item in subItems.slice(4*(index-1), 4*index)">
                        <router-link v-bind:to="'/detail/'+selectedCategory">
                          <img v-on:click="hideSubCom()" v-bind:src="'/static/images/products/'+selectedCategory+'/'+item.src">
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li id="video">
              <router-link class="nav-link" to="/aboutUs">Video</router-link>
            </li>
            <li id="support">
              <router-link class="nav-link" to="/software">Support</router-link>
              <div class="sub-com">
                <div class="sub-com-title">
                  <router-link class="nav-link" to="/software">Manual</router-link>
                </div>
              </div>
            </li>
            <li id="company">
              <router-link class="nav-link" to="/aboutUs">Company</router-link>
              <div class="sub-com">
                <div class="sub-com-title">
                  <router-link class="nav-link" to="/aboutUs">About Us</router-link>
                </div>
                <div class="sub-com-title">
                  <router-link class="nav-link" to="/contactUs">Contact Us</router-link>
                </div>
              </div>
            </li>
            <li id="split">
              <div style="height: 80px;width: 16px;margin-left: 15px;">丨</div>
            </li>
            <li id="search">
              <a class="nav-icon" href=""><img src="../public/images/search.png"/></a>
            </li>
            <li id="user">
              <a class="nav-icon" href=""><img src="../public/images/user.png"/></a>
            </li>
            <li id="cart">
              <router-link class="nav-link nav-icon" to="/cart"><img src="../public/images/cart.png"/></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {category} from '../productData'
import $ from 'jquery'

export default {
  name: 'navigator',
  data () {
    return {
      items: category,
      selectedCategory: 'BlueNarwhal',
      subItems: category[0].children
    }
  },
  methods: {
    resetCategory: function (e, name) {
      if(e.target.nodeName === 'LI' && e.target.parentNode.nodeName === 'UL') {
        $(e.target).addClass('active').siblings().removeClass('active')
      }
      this.selectedCategory = name.replace(/[ ]+/g,'')
      //alert(this.selectedCategory)
      for(var i=0;i<this.items.length;i++) {
        if(this.items[i].name === name) {
          this.subItems = this.items[i].children
        }
      }
      //alert(this.subItems.length)
    },
    hideSubCom: function () {
      $(".sub-com").hide()
      window.location.reload()
    },
    showMobileNav: function(e) {
      e.preventDefault()
      document.getElementById('mob-nav').style.display = "block"
      document.querySelector("html").style.overflow = 'hidden'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li#support, li#company {
    position: relative;
  }
  li#products .sub-com {
    width: 100%;
    left: 0px;
    top: 120px;
  }
  #pro-panel {
    margin: auto;
  }
  .left-nav {
    float: left;
    width: 28%;
    background-color: #F7F8F9;
    padding-bottom: 20px;
  }
  .left-nav li {
    height: 60px;
    line-height: 60px;
    display: block;
    text-align: right;
  }
  .left-nav li a {
    width: 250px;
    text-align: left;
  }
  .left-nav li:hover {
    background-color: #F2F3F4;
  }
  .left-nav li:hover a {
    color: #00ade5;
  }
  .active {
    background-color: #F2F3F4;
  }
  .active a {
    color: #00ade5 !important;
  }
  .nav-dropdown a {
    color: #555;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    display: inline-block;
    line-height: 25px;
    width: 80%;
  }
  .right-content {
    margin-left: 28%;
  }
  .cameras {
    width: 85%;
    padding-top: 20px;
  }
  .right-content ul li {
    float: left;
    width: 25%;
    text-align: center;
  }
  .right-content img {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
  .right-content li h3 {
    line-height: 1.2;
    color: #777;
    font-weight: 500;
    font-size: 14px;
    margin: 0;
  }

  li#company .sub-com {
    width: 120px;
    left: -18px;
  }
  li#support .sub-com {
    width: 180px;
    left: -58px;
  }
  .sub-com {
    display: none;
    position: absolute;
    top: 80px;
    background-color: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    z-index: 1;
    opacity: 1;
    border-top: 2px solid #0088cc;
  }
  li:hover .sub-com{
    display: block;
  }
  .sub-com-title {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .sub-com-title:hover {
    background-color: #eeeeee;
  }
  .sub-com-title:hover a {
    color: #00ade5;
  }

</style>
