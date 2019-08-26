<template>
<v-list dense nav class="py-0">
    <v-list-item two-line>
        <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/85.jpg">
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title>Natalie Smith</v-list-item-title>
            <v-list-item-subtitle>Sales Manager</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item v-for="item in items" :key="item.title" :to="item.url" link>
        <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</v-list>
</template>


<script>
export default {
    name: 'dash-nav',
    data() {
        return {
            drawer: true,
            items: [{
                    title: 'Dashboard',
                    icon: 'mdi-view-dashboard',
                    url: '/dashboard'
                },
                {
                    title: 'Clients',
                    icon: 'mdi-account-multiple',
                    url: '/dashboard/client-table'
                },
                {
                    title: 'Messages',
                    icon: 'mdi-mail',
                    url: '/dashboard/messages'
                },
                {
                    title: 'Settings',
                    icon: 'mdi-settings',
                    url: '/dashboard/user-settings'
                },
                
            ],
            color: 'primary',
            colors: [
                'primary',
                'blue',
                'success',
                'red',
                'teal',
            ],

            background: false,
        }
    },
    methods: {

    },
    computed: {

    },
}
</script>


