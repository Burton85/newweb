<template>
    <v-app>
        <!-- <AppBar/> -->
        <v-main>
            <Banner />

            <AboutMe />

            <WorkExp :list="experience" />

            <Stats :stats="stats" />

            <Skill />

            <Works :works="works" />

            <GetInTouch />
        </v-main>
        <Footer />
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Footer from './components/Footer/Footer.vue';
import AboutMe from './components/AboutMe.vue';
import WorkExp from './components/WorkExp.vue';
import Works from './components/Works/Works.vue';
import Stats from './components/Stats.vue';
import Banner from './components/Banner.vue';
import Skill from './components/Skill.vue';
import GetInTouch from './components/GetInTouch.vue';

export default Vue.extend({
    name: 'App',
    components: {
        Banner,
        AboutMe,
        WorkExp,
        Stats,
        Works,
        Skill,
        Footer,
        GetInTouch,
    },
    data() {
        return {
            works: [
                {
                    src:
                        'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                    title: 'Mobile first & Responsive',
                    text:
                        'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
                },
                {
                    src:
                        'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                    title: 'Think outside the box',
                    text:
                        'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
                },
                {
                    src:
                        'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
                    title: 'Small changes, big difference',
                    text:
                        'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
                },
            ],
            experience: [
                {
                    icon: 'mdi-account-group-outline',
                    title: 'Vibrant Community',
                    text:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
                },
                {
                    icon: 'mdi-update',
                    title: 'Frequent Updates',
                    text:
                        'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
                },
                {
                    icon: 'mdi-shield-outline',
                    title: 'Long-term Support',
                    text:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
                },
            ],
            stats: [
                ['24k', 'Github Stars'],
                ['330+', 'Releases'],
                ['1m', 'Downloads/mo'],
                ['5m', 'TotalDownloads'],
            ],
        };
    },
    mounted() {
        this.$store.dispatch('GetBanner');
        this.$store.dispatch('GetAbout');
    },
});
</script>
<style lang="stylus">
#app{
    button.align-self-end {
        background-color :transparent;
        color :#aaaaaa
    }
}
</style>