<template>
<v-app id="inspire">
    <v-navigation-drawer v-model="drawerRight" app clipped left>
        <Nav />
        <template v-slot:append>
            <div class="pa-2">
                <v-btn to="/" block color="error">Logout<v-icon>mdi-exit-to-app</v-icon> </v-btn>
            </div>
        </template>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="blue-grey" dark>
        <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
        <v-toolbar-title>Sales Portal</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-badge
                    overlap
                    color="red"
                    
                    >
                        <template v-slot:badge>
                            <span v-if="newMessages > 0">{{ newMessages }} </span>
                        </template>
                        <v-icon
                            large
                            color="dark-grey"
                            v-on="on"
                        >
                            notifications
                        </v-icon>
                </v-badge>
            </template>
            <v-list two-line>
                <v-list-item
                v-for="(message, index) in messages"
                :key="index"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ message.title }}</v-list-item-title>
                        <v-list-item-subtitle>{{ message.content }} - {{ message.sender }} </v-list-item-subtitle>
                        <v-divider></v-divider>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

                <div class="pa-2">
                    <v-btn to="/dashboard/messages" block color="primary">Go to Messages</v-btn>
                </div>
        
        </v-menu>
    </v-app-bar>

    <v-content>
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                <router-view></router-view>
            </v-layout>
        </v-container>
    </v-content>

    <v-footer app color="blue-grey" class="white--text">
        <span>Sales Dash Demo</span>
        <v-spacer></v-spacer>
        <span>&copy; 2020</span>
    </v-footer>
    
</v-app>
</template>

<script>

import Nav from '@/components/Nav.vue'

export default {
    name: 'dash-nav',
    components: {
        Nav,
    
    },
    data: () => ({
        drawerRight: false,
        left: false,
        showSettings: false,
        newMessages: 3,
        messages: [
            {title: 'Sales Report', content: 'Take a look at these sales.', sender: 'Manager'},
            {title: 'Lunch', content: 'Where are we eating.', sender: 'Jeff'},
            {title: 'Meeting', content: 'Meeting at 1pm, conference room.', sender: 'Manager'}
        ]
    }),
    props: {
        source: String,
    },
}
</script>