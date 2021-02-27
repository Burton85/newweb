<template>
    <section id="stats">
        <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        >
            <v-container fill-height>
                <v-row class="mx-auto mt-12">
                    <v-col v-for="[value, title] of stats" :key="title" cols="12" md="3">
                        <div class="text-center">
                            <div class="display-3 font-weight-black mb-4" v-text="value"></div>

                            <div class="title font-weight-regular text-uppercase" v-text="title"></div>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="d-flex justify-center">
                    <MoveBtn mTarget="works" />
                </v-row>
            </v-container>
        </v-parallax>
    </section>
</template>

<script>
export default {
    props: {
        stats: {
            type: Array,
            default: [],
        },
    },
};
</script>
