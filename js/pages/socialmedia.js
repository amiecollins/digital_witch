import links from '../components/links.js'


export default {
    data: function () {
        return {
            width: 200
        }
    },
    
    methods: {
        
    },

    props: [
        "links", "socialsize"
    ],

    components: {
        links
    },

    template: `         
    <section id="social">
        <div class="social-container">

            <div class="social-text">
                <div class="social-title">
                    <h2>Interested in Digital Witch?</h2>
                    <p>We are available on various social media platforms to keep updated with everything new we have to offer!</p>
                    <div class="social-buttons">
                        <div class="fb-cta">Like for Latest Updates:</div>
                        <div class="fb-like" data-href="https://www.facebook.com/digitalwitchdesigns/" data-width="" data-layout="button" data-action="like" data-size="small" data-share="true"></div>
                    </div>
                </div>
                <links :links="links"></links>
            </div>
        </div>
    </section>
    `
}