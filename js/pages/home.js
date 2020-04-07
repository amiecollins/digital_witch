import links from '../components/links.js'
import search from '../components/search.js'
export default {
    data: function () {
        return {
            homelinks: [
                {
                    text: "Products & Services",
                    url: "products"
                },
                {
                    text: "Contact Me",
                    url: "contact"
                },
                {
                    text: "Learn More",
                    url: "social"
                }
            ],
            introduction: "",
            amie: {
                link: "www.amiecollins.ca",
                logo: "./media/icons/amie-icon.svg"
            }
        }
    },
    
    methods: {
        searchfunc: function (query) {
            $emit("searchfunc", query)
        }
    },

    props: [
        "sociallinks"
    ],

    components: {
        links, search
    },

    template: `
    <section id="home">

        <div class="home-welcome">
            <h2>Welcome to<br><span class="home-name">Digital Witch Designs</span></h2>
            <p class="introduction" v-text="introduction"></p>
            <links :links="sociallinks"></links>
        </div>

        <ul class="home-links">
            <li v-for="link in homelinks"><div class="home-link" v-text="link.text" @click="$emit('setpage', link.url)"></div></li>
        </ul>

        <div class="home-lookingfor">
            <div class="amie-trees"></div>
            <div class="amie-top">
                <div class="amie-text">
                    <h3>Are you Looking For Web Development or Graphic Design?</h3>
                    <p>Check out my portfolio at <a :href="amie.link">www.amiecollins.ca</a></p>
                </div>
                <a :href="amie.link"><img class="amie-logo" :src="amie.logo" alt="Logo for Amie Collins Holistic Web Development"></a>
            </div>
            <links :links="amie.sociallinks"></links>
        </div>

        <div class="home-new">
            <h3>Newest Arrivals</h3>
            <div class="home-results"><search defaultq="New"></search></div>
        </div>

    </section>
    `
}