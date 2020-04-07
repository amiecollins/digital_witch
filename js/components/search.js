import productsdata from '../data/products.js'
import results from './results.js'

export default {
    data: function () {
        return {
            icon: "./media/icons/search.svg",
            query: "",
            results: productsdata
        }
    },
    
    methods: {
        search (query) {
            var results = [];
            console.log(query);
            if (query === "See All") {
                return results = productsdata;
            } else if (query === "") {
                return results;
            } else {
                var activequery = this.break(query);
                results = productsdata;
                for (var i = 0; i < results.length; i++) {
                    results[i].relevance = 0;
                    var score = 0;
                    var data = [ ...this.break(results[i].name), ...this.break(results[i].description), ...results[i].includes, ...results[i].tags ];
                    console.log(data);
                    for (var x = 0; x < activequery.length; x++) {
                        if (data.includes(activequery[x])) {
                            score++;
                        }
                    }
                    results[i].relevance = score;
                    console.log(score);
                }
                results = results.sort(function (a,b) {
                    return b["relevance"] - a["relevance"];
                });
                console.log(results);
                return results;
            }
        },
        break(item) {
            item = item.replace(/[^a-zA-Z0-9]/g, " ");
            item = item.toLowerCase();
            item = item.split(" ");
            item = item.filter(v=>v!="");
            return item;
        }
    },
    
    created: function () {
        this.query = this.defaultq;
        this.results = this.search(this.query);
    },
    

    props: [
        "defaultq"
    ],

    components: {
        results
    },

    template: `
    <section class="search-results">
        <div class="search">
            <h2 class="hidden">Search Products</h2>
            <img class="search-icon" @click="search(query)" :src="icon" alt="Click to Search Products">
            <input class="search-input" v-model="query" @change="search(query)" type="text">
        </div>
        <results v-bind:results.sync="results" v-if="results != ''"></results>
    </section>
    
    `
}