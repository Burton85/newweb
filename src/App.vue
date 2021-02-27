<template>
    <v-app>
        <!-- <AppBar/> -->
        <v-main>
            <Banner />

            <AboutMe />

            <WorkExp />

            <Stats :stats="stats" />

            <!-- <Skill /> -->

            <Works />

            <!-- <GetInTouch /> -->
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
            stats: [
                ['20+', 'Github Repos'],
                ['220+', 'Completed Kata'],
                ['1+ year', 'F2E Experience'],
                ['5+', 'Side Project'],
            ],
        };
    },
    mounted() {
        this.$store.dispatch('init');
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
