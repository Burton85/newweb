<template>
    <section id="work-exp" class="grey lighten-3">
        <div class="py-12"></div>
        <v-container class="text-center">
            <h2 class="display-2 font-weight-normal mb-3">Work Experiences</h2>

            <v-responsive class="mx-auto mb-12" width="56">
                <v-divider class="mb-1"></v-divider>

                <v-divider></v-divider>
            </v-responsive>

            <v-row>
                <v-col v-for="({ icon, title, text }, i) in list" :key="i" cols="12" md="4">
                    <v-card class="py-12 px-4" color="grey lighten-5" flat>
                        <v-theme-provider dark>
                            <div>
                                <v-avatar color="primary" size="88">
                                    <v-icon large v-text="icon"></v-icon>
                                </v-avatar>
                            </div>
                        </v-theme-provider>

                        <v-card-title class="justify-center font-weight-black text-uppercase" v-text="title"></v-card-title>

                        <v-card-text class="subtitle-1" v-text="text"> </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <div class="mt-8 d-flex justify-center">
            <MoveBtn mTarget="stats" />
        </div>
        <div class="py-12"></div>
    </section>
</template>
<script>
export default {
    name: 'WorkExp',
    props: {
        list: {
            type: Array,
            default: [],
        },
    },
};
</script>
