<template>
    <v-col cols="12" md="4">
        <v-img :src="work.src" class="mb-4" height="275" max-width="100%"></v-img>

        <h3 class="font-weight-black mb-4 text-uppercase" v-text="work.title"></h3>

        <div class="title font-weight-light mb-5" v-text="work.text"></div>

        <v-btn class="ml-n4 font-weight-black" text>
            vIEW MORE
        </v-btn>
    </v-col>
</template>
<script>
export default {
    name: 'WorkCard',
    props: {
        work: {
            type: Object,
            default: {},
        },
    },
};
</script>
