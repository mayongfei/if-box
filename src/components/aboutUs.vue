<template>
  <div>
    <div class="banner aboutUs">
      <div class="header-content">
        <h1>SHARE OUR STORIES</h1>
        <p>
          <a href="javascript:void(0)">
            <img src="../public/images/facebook.png">
          </a>
          <a href="javascript:void(0)">
            <img src="../public/images/twitter.png">
          </a>
          <a href="javascript:void(0)">
            <img src="../public/images/google-plus.png">
          </a>
        </p>
      </div>
    </div>
    <div id="aboutUs">
      <p>Ifboxs started up in 2016, and ever since then, we’ve been devoted to creating the finest security products for consumers and business owners. Our first product was launched in July, 2016, which received rave reviews from customers who are sensitive to both quality and service. Until now, Ifboxs has helped hundreds of thousands of people from all around the world.</p>
      <p>We have spent years looking for the perfect way to make your home and office more secure and comfortable. And with great efforts, 4 product lines with mature technology are unfolded before your eyesWe have spent years looking for the perfect way to make your home and office more secure and comfortable. We will contribute to the happiness of the people all over the world through the business activities of selling casual wear:</p>
      <ul class="disc">
        <li>We provide opportunities for employees to learn from global markets and to work safely. We aim to develop talents and become a company where “people” are valued most.</li>
        <li>Clean, beauty, lighthearted, convenient, customer friendly, simple and exciting are the things we care about. We give our every effort to make our shops and services comfortable and enjoyable for our customers. We want our customers to have the best shopping experience with us.</li>
        <li>By providing affordable, high quality and comfortable casual clothing, we hope to give people joy, happiness and satisfaction of wearing exceptional apparel.</li>
      </ul>
      <p>We aim to support people through our business who suffer from poverty and natural disasters and we aim to be a company where these actions are valued and respected.</p>
     </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'aboutUs',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .aboutUs {
    background-image: url("../public/images/about-us.jpg");
  }
  .header-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    width: 100%;
  }
  h1 {
    font-size: 26px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 15px;
    text-align: center;
    text-transform: uppercase;
  }
  ul.disc {
    list-style-type: disc;
    margin-left: 20px;
  }

  ul.disc li {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    font-weight: 400;
    color: #777;
    font-family: Quicksand;
  }
  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    font-weight: 400;
    color: #777;
    font-family: Quicksand;
  }
  #aboutUs {
    padding-top: 20px;
    padding-bottom: 40px;
    max-width: 1120px;
    margin: auto;
  }

</style>
