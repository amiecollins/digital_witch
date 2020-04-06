import products from '../data/products.js'


export default {
    data: function () {
        return {
            icon: "./media/icons/search.svg"
        }
    },
    
    methods: {
        search: function () {
            if (this.query === "See All") {
                this.results = products;
            } else {
                var activequery = this.break(this.query);
                var results = products;
                for (var i = 0; i < results.length; i++) {
                    results[i].relevance = 0;
                    var score = 0;
                    var data = [ ...this.break(results[i].name), ...this.break(results[i].description), ...results[i].includes, ...results[i].tags];
                    for (var x = 0; x < activequery.length; x++) {
                        if (data.includes(activequery[x])) {
                            score++;
                        }
                    }
                    results[i].relevance = score;
                }
                this.results = results.sort(function (a,b) {
                    return b["relavance"] - a["relavance"];
                });
            }
        },
        break: function (item) {
            item = item.replace(/[^a-zA-Z0-9]/g, " ");
            item = item.toLowerCase();
            item = item.split(" ");
            item = item.filter(v=>v!="");
            console.log(item);
            return item;
        }
    },
    
    created: function () {
        // this.search();
    },
    

    props: [
        "query", "results"
    ],

    template: `
    <section class="search">
        <h2 class="hidden">Search Products</h2>
        <img class="search-icon" :src="icon" alt="Click to Search Products">
        <input class="search-input" v-model="query" @change="search" type="text">
    </section>
    `
}