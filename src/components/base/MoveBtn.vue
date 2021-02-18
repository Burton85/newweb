<template>
    <v-btn class="align-self-end" fab  @click="$vuetify.goTo('#' + mTarget)">
        <v-icon>mdi-chevron-double-down</v-icon>
    </v-btn>
</template>
<script>
export default {
    name: 'MoveBtn',
    props: ['mTarget'],
};
</script>

