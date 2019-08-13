<template>
<div class="home">

    <v-app>

        <!-- Sizes your content based upon application components -->
        <v-content>

            <!-- Provides the application the proper gutter -->
            <v-container fill-height fluid>
                <v-layout align-center justify-center>
                        <v-btn to="/login-sales">Login</v-btn>
                        <!-- <router-link to="/login-sales">Login</router-link> | -->
                        <!-- <v-btn to="/">Home</v-btn> -->
                        <!-- <router-link to="/">Home</router-link> -->
                        <!-- <router-link to="/dashboard2">dashboard2</router-link> -->

                </v-layout>

            </v-container>
        </v-content>
    </v-app>
</div>
</template>

<script>
export default {
    name: 'home',
    components: {

    },
    data: () => ({

    }),
}
</script>

