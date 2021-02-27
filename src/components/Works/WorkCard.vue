<template>
    <v-col cols="12" md="4">
        <v-img :src="work.src" class="mb-4" height="275" max-width="100%"></v-img>

        <h3 class="font-weight-black mb-4 text-uppercase text-center" v-text="work.name" ></h3>

        <div class="font-weight-light desc mt-5" v-html="work.desc" height="200px"></div>

        <v-btn :href="work.link" class="ml-n4 font-weight-black " block text target="_blank">
            VIEW MORE
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
<style scoped>
.desc {
    display: block;
    height: 90px;
}
</style>
