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
                      <li v-for="item in items">
                        <a class="nav-silder" href="/shop/#shop-wire-free" data-link="Wire-Free Security Cameras">{{item}}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="right-content">
                    <ul id="cameras" class="dn">
                      <li>
                        <a href="/product/argus-2/">
                          <img src="../public/images/products/02.2712354.jpg">
                          <h3 class="product-name" title="Reolink Argus® 2">Reolink Argus® 2</h3>
                        </a>
                      </li>
                      <li>
                        <a href="/product/reolink-go/">
                          <img src="../public/images/products/02.2712355.jpg">
                          <h3 class="product-name" title="Reolink Go">Reolink Go</h3>
                        </a>
                      </li>
                      <li>
                        <a href="/product/argus/">
                          <img src="../public/images/products/02.2712356.jpg">
                          <h3 class="product-name" title="Reolink Argus®">Reolink Argus®</h3>
                        </a>
                      </li>
                      <li>
                        <a href="/product/keen/">
                          <img src="../public/images/products/02.2712357.jpg">
                          <h3 class="product-name" title="Reolink Keen™">Reolink Keen™</h3>
                        </a>
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
                  <router-link class="nav-link" to="/software">Software & Manual</router-link>
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
              <a class="nav-icon" href=""><img src="../public/images/cart.png"/></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {category} from '../productData'

export default {
  name: 'navigator',
  data () {
    return {
      items: category
    }
  },
  methods: {
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
  .nav-dropdown a {
    color: #555;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    display: inline-block;
    line-height: 25px;
    width: 100%;
  }
  .right-content {
    margin-left: 28%;
  }
  #cameras {
    width: 85%;
  }
  .right-content ul li {
    float: left;
    width: 25%;
    text-align: center;
  }
  .right-content img {
    width: 120px;
    height: 120px;
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
