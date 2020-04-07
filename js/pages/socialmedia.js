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
        "links"
    ],

    components: {
        links
    },

    template: `         
    <section id="social">
        <div class="social-container">

            <div class="social-text">
                <h2>Interested in Digital Witch?</h2>
                <p>We are available on various social media platforms to keep updated with everything new we have to offer!</p>
                <links :links="links"></links>
                <div class="social-buttons">
                    <div class="fb-cta">Like for Latest Updates:</div>
                    <div class="fb-like" data-href="https://www.facebook.com/digitalwitchdesigns/" data-width="" data-layout="button" data-action="like" data-size="small" data-share="true"></div>
                </div>
            </div>

            <div class="social-feeds">

                <div class="fb-page" data-href="https://www.facebook.com/digitalwitchdesigns/" data-tabs="timeline" data-width="300" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/digitalwitchdesigns/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/digitalwitchdesigns/">Digital Witch</a></blockquote></div>

                <div class="fb-group" data-href="https://www.facebook.com/groups/214955102933772/" :data-width="width" data-show-social-context="true" data-show-metadata="true"></div>

            </div>

        </div>
    </section>
    `
}