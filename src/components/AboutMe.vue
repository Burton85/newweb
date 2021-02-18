<template>
    <section id="about-me">
        <div class="py-12"></div>

        <v-container class="text-center">
            <h2 class="display-2 font-weight-normal mb-3">ABOUT ME</h2>

            <v-responsive class="mx-auto mb-8" width="56">
                <v-divider class="mb-1"></v-divider>

                <v-divider></v-divider>
            </v-responsive>

            <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
                {{$store.state.aboutMe.description}}
            </v-responsive>

            <v-avatar class="elevation-12 mb-12" size="128">
                <v-img :src="$store.state.aboutMe.headShot"></v-img>
            </v-avatar>

            <div></div>

            <v-btn color="grey" href="https://github.com/Burton85" outlined large >
                <span class="grey--text text--darken-1 font-weight-bold">
                    Github Profile
                </span>
            </v-btn>

            <div class="mt-8 d-flex justify-center">
                <MoveBtn mTarget="work-exp" />
            </div>

        </v-container>

        <div class="py-12"></div>
    </section>
</template>
<script>
export default {
    name: 'AboutMe',
};
</script>
