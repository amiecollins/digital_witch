export default {
    data: function () {
        return {
            
        }
    },
    
    methods: {
        
    },

    props: [
        "results"
    ],

    template: `
    <section class="results">
        <h3 class="hidden">Search Results</h3>
        <div class="results-contents">
            <div v-for="product in results" class="result">
                <img class="product-image" :src="product.image" :alt="'Image of ' + product.name">
                <div class="product-info">
                    <div class="product-title" v-text="product.name"></div>
                    <div class="product-details">
                        <a class="product-button" :href="product.link"><div class="product-button">Buy</div></a>
                        <div class="product-price" v-text="'CA$' + product.price"></div>
                    </div>
                    <div class="product-desc" v-text="product.description"></div>
                    <ul class="product-includes">
                        <li v-for="item in product.includes" v-text="item"></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `
}