<template>
        <v-container>
            <v-layout>

                    <h1><v-icon x-large>mdi-account-multiple</v-icon>  Clients</h1>

                <v-spacer></v-spacer>
                <v-flex xs12 sm6 md4>
                    <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                    >
                    </v-text-field>
                </v-flex>
                </v-layout>

                <v-data-table
                :headers="headers"
                :items="clients"
                :search="search"
                single-expand
                show-expand
                
                calculate-widths
                
                >

                <template v-slot:expanded-item="{ item }">
                  <td colspan="12">
                    <v-container>
                      <v-row class="justify-end">
                        <v-spacer></v-spacer>
                        <v-col>
                          <h4>Phone Number:</h4>
                          <p>{{ item.phone }}</p>
                          <h4>Email:</h4>
                          <p>{{ item.email }}</p>
                        </v-col>
                        <v-col>
                          <h4>Address:</h4>
                          <p>{{item.address + ' ' +item.city + ', ' + item.state}}</p>
                          <h4>Recent Activity:</h4>
                          <!-- could pull last logged activity -->
                          <p>Completed Lesson 8: Blogging 8-14-19</p>
                        </v-col>
                        <v-col>
                          <h4>Next Appointment:</h4>
                          <p>{{ item.appointment }}</p>
                          <h4>Notes:</h4>
                          <p>{{ item.notes }}</p>
                        </v-col>
                        <v-col class="align-self-center text-center">
                          <v-btn to=/dashboard/view-client>
                            View Client
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </td>
                </template>
                

                <template v-slot:item.welcome="{ item }">
                  <v-icon :color="item.welcome === 'mdi-star' ? 'yellow' : '' " >{{ item.welcome }}</v-icon>
                </template>

                <template v-slot:item.firstSession="{ item }">
                  <v-icon :color="item.firstSession === 'mdi-star' ? 'green' : '' ">{{ item.firstSession }}</v-icon>
                </template>

                </v-data-table>
                
        </v-container>
</template>

<script>

  export default {
      name: 'clientTable',
      components: {
      },
    data () {
      return {
        search: '',
        headers: [
          { text: 'Id', align: 'left', value: 'id',},
          { text: 'Name', value: 'name' },
          { text: 'Status', value: 'status' },
          { text: 'Coach', value: 'coach' },
          { text: 'Register Date', value: 'date' },
          { text: 'Welcome Call', value: 'welcome' },
          { text: 'First Session', value: 'firstSession' },
        ],
        clients: [
          {
            id: '1',
            name: 'Jane Doe',
            address: '123 Main St.',
            city: 'Boise',
            state: 'Idaho',
            email:'janed@test.com',
            status: 'On hold',
            coach: 'Janet',
            date: '12/30/19',
            phone: '(789)746-7368',
            welcome: 'mdi-star',
            firstSession: 'mdi-star-outline',
            appointment: 'NA',
            notes: 'sample note'
          },
          {
            id: '2',
            name: 'Sarah Connor',
            address: '53 South 24 East',
            city: 'Hurricane',
            state: 'Utah',
            email:'connor97@test.com',
            status: 'Active',
            coach: 'Jerry',
            date: '09/15/19',
            phone: '(234)657-4563',
            welcome: 'mdi-star',
            firstSession: 'mdi-star',
            appointment: '10/01/19',
            notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          },
          {
            id: '3',
            name: 'Theresa Bagby',
            status: 'Active',
            coach: 'Sally',
            date: '02/10/19',
            phone: '(789)746-7368',
            welcome: 'mdi-star',
            firstSession: 'mdi-star-outline',
            appointment: '09/12/19',
            notes: 'sample note'
          },
          {
            id: '4',
            name: 'Rudy Smith',
            status: 'Inactive',
            coach: 'Jerry',
            date: '06/19/19',
            phone: '(678)734-2311',
            welcome: 'mdi-star',
            firstSession: 'mdi-star',
            appointment: 'NA',
            notes: 'Duis aute irure dolor in reprehenderit in voluptate velit'
          },
          {
            id: '5',
            name: 'Paddy Jenkins',
            status: 'Active',
            coach: 'Kate',
            date: '',
            phone: '(789)746-7368',
            welcome: 'mdi-star',
            firstSession: 'mdi-star',
            appointment: '',
            notes: 'sample note'
          },
          {
            id: '6',
            name: 'John Doe',
            status: 'Canceled',
            coach: 'Sally',
            date: '08/05/19',
            phone: '(789)746-7368',
            welcome: 'mdi-star-outline',
            firstSession: 'mdi-star-outline',
            appointment: 'NA',
            notes: 'sample note'
          },
          {
            id: '7',
            name: 'Sarah Connor',
            status: 'Active-Complete',
            coach: 'Luara',
            date: '',
            phone: '(234)657-4563',
            welcome: 'mdi-star',
            firstSession: 'mdi-star',
            appointment: '',
            notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          },
          {
            id: '8',
            name: 'Theresa Bagby',
            status: 'Active',
            coach: 'Luara',
            date: '',
            phone: '(789)746-7368',
            welcome: 'mdi-star',
            firstSession: 'mdi-star',
            apointment: '',
            notes: 'sample note'
          },
          {
            id: '9',
            name: 'Rudy Smith',
            status: 'Canceled',
            coach: 'Luara',
            date: '',
            phone: '(678)734-2311',
            welcome: '',
            firstSession: '',
            appointment: '',
            notes: 'Duis aute irure dolor in reprehenderit in voluptate velit'
          },
          {
            id: '10',
            name: 'Paddy Jenkins',
            status: 'Active',
            coach: 'Tom',
            date: '',
            phone: '(789)746-7368',
            welcome: '',
            firstSession: '',
            appointment: '',
            notes: 'sample note'
          },
          {
            id: '11',
            name: 'John Doe',
            status: 'Active',
            coach: 'Harry',
            date: '',
            phone: '(789)746-7368',
            welcome: '',
            firstSession: '',
            appointment: '',
            notes: 'sample note'
          },
          {
            id: '12',
            name: 'Sarah Connor',
            status: 'Active',
            coach: 'Tom',
            date: '',
            phone: '(234)657-4563',
            welcome: '',
            firstSession: '',
            appointment: '',
            notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          },
          {
            id: '13',
            name: 'Theresa Bagby',
            status: 'Active',
            coach: 'Nancy',
            date: '',
            phone: '(789)746-7368',
            welcome: '',
            firstSession: '',
            appointment: '',
            notes: 'sample note'
          },
          {
            id: '14',
            name: 'Rudy Smith',
            status: 'Active',
            coach: 'Nancy',
            date: '',
            phone: '(678)734-2311',
            welcome: '',
            firstSession: '',
            appointment: '',
            notes: 'Duis aute irure dolor in reprehenderit in voluptate velit'
          },
          {
            id: '15',
            name: 'Paddy Jenkins',
            status: 'Active',
            coach: 'Sally',
            date: '',
            phone: '(789)746-7368',
            welcome: '',
            firstSession: '',
            appointment: '',
            notes: 'sample note'
          },
          {
            id: '16',
            name: 'John Doe',
            status: 'Active',
            coach: 'Jerry',
            date: '',
            phone: '(789)746-7368',
            welcome: '',
            firstSession: '',
            appointment: '',
            notes: 'sample note'
          },
        ],
      }
    },
    
  }
</script>