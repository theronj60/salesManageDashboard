<template>
<v-app id="inspire">
     <v-navigation-drawer v-model="drawerRight" app clipped left>
        <Nav />
        <template v-slot:append>
            <div class="pa-2">
                <v-btn to="/" block color="error">Logout</v-btn>
            </div>
        </template>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="blue-grey" dark>
        <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
        <v-toolbar-title>Sales Portal</v-toolbar-title>
        <v-spacer></v-spacer>
        right side

    </v-app-bar>

    <v-content>
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                <ClientTable />
            </v-layout>
        </v-container>
    </v-content>

    <v-footer app color="blue-grey" class="white--text">
        <span>Oracle Learning Center V.2</span>
        <v-spacer></v-spacer>
        <span>&copy; 2019</span>
    </v-footer>
</v-app>
</template>

<script>

import Nav from '@/components/Nav.vue'
import ClientTable from '@/components/ClientTable.vue'

export default {
    name: 'dash-nav',
    components: {
        Nav,
        ClientTable,
       
    },
    data: () => ({
        drawerRight: false,
        
        left: false,
    }),
    props: {
        source: String,
    },
}
</script>