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
                <v-col v-for="(item, i) in list" :key="i" cols="12" md="4">
                    <v-card class="py-12 px-4" color="grey lighten-5" flat height="400">
                        <v-theme-provider dark>
                            <div>
                                <v-avatar color="primary" size="88">
                                    <v-icon large v-text="'mdi-account-group-outline'"></v-icon>
                                </v-avatar>
                            </div>
                        </v-theme-provider>

                        <v-card-title class="justify-center font-weight-black text-uppercase" v-text="item.name"></v-card-title>

                        <v-card-text class="subtitle-1" v-text="item.desc"> </v-card-text>
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
    data(){
        return{
            list:this.$store.state.workExp
        }
    }
};
</script>
