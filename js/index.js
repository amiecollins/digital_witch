import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import links from './components/links.js'
import search from './components/search.js'
import home from './pages/home.js'
import products from './pages/products.js'
import socialmedia from './pages/socialmedia.js'
import contact from './pages/contact.js'

const vueIndex = (() => {

    let vm = new Vue({

        data: {
            main: {
                logo: "./media/icons/logo.svg",
                title: "Digital Witch.ca",
                pagelinks: [
                    {
                        text: "Home",
                        url: "home"
                    },
                    {
                        text: "Products",
                        url: "products"
                    },
                    {
                        text: "Contact",
                        url: "contact"
                    },
                    {
                        text: "Social Media",
                        url: "social"
                    }
                ],
                sociallinks: [
                    {
                        a: "https://www.facebook.com/digitalwitchdesigns/",
                        src: "./media/icons/facebook.svg",
                        alt: "Like the Digital Witch page on Facebook"
                    },
                    {
                        a: "https://www.etsy.com/ca/shop/DigitalWitchDesigns",
                        src: "./media/icons/etsy.svg",
                        alt: "Shop Digital Witch on Etsy"
                    },
                    {
                        a: "https://twitter.com/digitalwitchdes",
                        src: "./media/icons/twitter.svg",
                        alt: "Follow Digital Witch on Twitter"
                    },
                    {
                        a: "https://www.instagram.com/digitalwitchdesigns/",
                        src: "./media/icons/instagram.svg",
                        alt: "Follow Digital Witch on Instagram"
                    },
                    {
                        a: "https://www.facebook.com/groups/214955102933772/",
                        src: "./media/icons/more.svg",
                        alt: "Join our Facebook Group"
                    }
                ],
                socialsize: 300
            },
            burger: {
                img: "./media/icons/burger.svg",
                active: false
            },
            background: {
                src: "./media/bg.gif",
                alt: "Background Spacescape"
            }
        },

        methods: {
            setpage(page) {
                var view = document.getElementById(page);
                console.log(page);
                view.scrollIntoView();
            },
            checkSize() {
                if (window.innerWidth <= 500) {
                    this.main.socialsize = 250;
                  } else {
                    this.main.socialsize = 400;
                  }
            }
    
        },
        
        created: function () {
            this.checkSize();
            window.addEventListener('resize', this.checkSize);
        },

        components: {
            links, search, home, products, socialmedia, contact
        }

    }).$mount("#index");

})();
