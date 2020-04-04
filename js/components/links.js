export default {
    data: function () {
        return {
            
        }
    },
    
    methods: {
        
    },

    props: [
        'links'
    ],

    template: `<ul class="link-container"><li v-for="link in links"><a :href="link.a"><img class="link" :src="link.src" :alt="link.alt"></a></li></ul>`
}