<template>
    <section id="works">
        <div class="py-12"></div>

        <v-container>
            <h2 class="display-2 font-weight-normal mb-3 text-uppercase text-center">Works</h2>

            <v-responsive class="mx-auto mb-12" width="56">
                <v-divider class="mb-1"></v-divider>

                <v-divider></v-divider>
            </v-responsive>

            <v-row>
                <WorkCard v-for="(item, i) in list" :key="i" :work="item"/>
            </v-row>
        </v-container>

        <div class="py-12"></div>
    </section>
</template>
<script>
import WorkCard from './WorkCard.vue';

export default {
    name: 'Works',
    components: {
        WorkCard,
    },
    // props: {
    //     works: {
    //         type: Array,
    //         default: [],
    //     },
    // },
    data(){
        return{
            list:this.$store.state.Works
        }
    }
};
</script>
