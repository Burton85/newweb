<template>
    <section id="hero">
        <v-row no-gutters>
            <v-img :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'" :src=$store.state.banner[5].url>
                <v-theme-provider dark>
                    <v-container fill-height>
                        <v-row align="center" class=" mx-auto" justify="center">
                            <v-col class="white--text text-center" cols="12" tag="h1">
                                <span :class="[$vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4']" class="font-weight-bold">
                                    Hi , I am Burton.
                                </span>

                                <div class="mt-8 mb-8"></div>

                                <span :class="[$vuetify.breakpoint.smAndDown ? 'subtitle-2' : 'display-1']" class="white--text font-weight-light">
                                    click to know more about me
                                </span>
                            </v-col>

                            <MoveBtn mTarget="about-me" />
                        </v-row>
                    </v-container>
                </v-theme-provider>
            </v-img>
        </v-row>
    </section>
</template>
<script>
export default {
    name: 'Banner',
};
</script>
