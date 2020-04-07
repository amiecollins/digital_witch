import search from '../components/search.js'

export default {
    data: function () {
        return {
            query: "See All",
            title: "Shop Products"
        }
    },

    methods: {

    },
    
    components: {
        search
    },

    template: `
    <section id="products">
        <h2 class="products-title" v-text="title"></h2>
        <search :defaultq="query"></search>
    </section>
    `
}