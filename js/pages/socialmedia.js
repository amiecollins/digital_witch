import links from '../components/links.js'


export default {
    data: function () {
        return {
            
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
                    <div class="fb-like" data-href="https://www.facebook.com/digitalwitchdesigns/" data-width="" data-layout="button" data-action="like" data-size="small" data-share="true"></div>
                    <a href="https://twitter.com/digitalwitchdes?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
            </div>

            <div class="social-feeds">

                <div class="fb-page" data-href="https://www.facebook.com/digitalwitchdesigns/" data-tabs="timeline" data-width="300" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/digitalwitchdesigns/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/digitalwitchdesigns/">Digital Witch</a></blockquote></div>

                <div class="fb-group" data-href="https://www.facebook.com/groups/214955102933772/" data-width="300" data-show-social-context="true" data-show-metadata="true"></div>

                <a class="twitter-timeline" data-width="300" href="https://twitter.com/digitalwitchdes?ref_src=twsrc%5Etfw">Tweets by digitalwitchdes</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

            </div>

        </div>
    </section>
    `
}