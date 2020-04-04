export default {
    data: function () {
        return {
            query: "See All",
            results: [

            ]
        }
    },

    methods: {
        
    },

    template: `
    <section id="products">
        <h2 class="products-title"></h2>
        <search v-model:query="query" v-model:results="results"></search>
        <results v-model:results="results"></results>
    </section>
    `
}