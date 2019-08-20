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
                >
               
                <template v-slot:item.action="{ item }">
                  
                      
                      <!-- <v-icon
                          small
                          class="mr-2"
                          @click="editItem(item)"
                          >
                          edit
                          </v-icon>
                          <v-icon
                          small
                          @click="deleteItem(item)"
                          >
                          delete
                      </v-icon> -->
                 <ClientActions />
                                  
                </template>
                
                </v-data-table>
                 

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on"><v-icon>add</v-icon> New Client</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">New Client</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Name"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Address"></v-text-field>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field label="City"></v-text-field>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field label="State"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Phone #"></v-text-field>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs12 sm6>
                    <v-select
                      :items="products"
                      label="Package"
                    ></v-select>
                </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Additional Notes"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text
              >Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </v-container>
</template>

<script>
import ClientActions from '@/components/ClientActions.vue';

  export default {
      name: 'clientTable',
      components: {
        ClientActions,
      },
    data () {
      return {
        search: '',
        dialog: false,
        products: [
            'basic',
            'pro',
            'ultimate'
        ],
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Address', value: 'address' },
          { text: 'City', value: 'city' },
          { text: 'State', value: 'state' },
          { text: 'Phone #', value: 'phone' },
          { text: 'Product', value: 'product' },
          { text: 'Notes', value: 'notes' },
          { text: 'Actions', value: 'action', sortable: false }
        ],
        clients: [
          {
            name: 'Jane Doe',
            address: '123 Main Street',
            city: 'New York',
            state: 'New York',
            phone: '(789)746-7368',
            product: 'Basic',
            notes: 'sample note'
          },
          {
            name: 'Sarah Connor',
            address: '789 W 23 S',
            city: 'Los Angeles',
            state: 'California',
            phone: '(234)657-4563',
            product: 'Ultimate',
            notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          },
          {
            name: 'Theresa Bagby',
            address: '19 E 234 W',
            city: 'Sandy',
            state: 'Utah',
            phone: '(789)746-7368',
            product: 'Basic',
            notes: 'sample note'
          },
          {
            name: 'Rudy Smith',
            address: '933 E 239 N',
            city: 'Henderson',
            state: 'Nevada',
            phone: '(678)734-2311',
            product: 'Pro',
            notes: 'Duis aute irure dolor in reprehenderit in voluptate velit'
          },
          {
            name: 'Paddy Jenkins',
            address: '12th Street',
            city: 'Seattle',
            state: 'Washington',
            phone: '(789)746-7368',
            product: 'Basic',
            notes: 'sample note'
          },
          {
            name: 'John Doe',
            address: '12th Avenue',
            city: 'Chicago',
            state: 'Illinois',
            phone: '(789)746-7368',
            product: 'Pro',
            notes: 'sample note'
          },
          {
            name: 'Sarah Connor',
            address: '789 W 23 S',
            city: 'Los Angeles',
            state: 'California',
            phone: '(234)657-4563',
            product: 'Ultimate',
            notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          },
          {
            name: 'Theresa Bagby',
            address: '19 E 234 W',
            city: 'Sandy',
            state: 'Utah',
            phone: '(789)746-7368',
            product: 'Basic',
            notes: 'sample note'
          },
          {
            name: 'Rudy Smith',
            address: '933 E 239 N',
            city: 'Henderson',
            state: 'Nevada',
            phone: '(678)734-2311',
            product: 'Pro',
            notes: 'Duis aute irure dolor in reprehenderit in voluptate velit'
          },
          {
            name: 'Paddy Jenkins',
            address: '12th Street',
            city: 'Seattle',
            state: 'Washington',
            phone: '(789)746-7368',
            product: 'Basic',
            notes: 'sample note'
          },
          {
            name: 'John Doe',
            address: '12th Avenue',
            city: 'Chicago',
            state: 'Illinois',
            phone: '(789)746-7368',
            product: 'Pro',
            notes: 'sample note'
          },
          {
            name: 'Sarah Connor',
            address: '789 W 23 S',
            city: 'Los Angeles',
            state: 'California',
            phone: '(234)657-4563',
            product: 'Ultimate',
            notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          },
          {
            name: 'Theresa Bagby',
            address: '19 E 234 W',
            city: 'Sandy',
            state: 'Utah',
            phone: '(789)746-7368',
            product: 'Basic',
            notes: 'sample note'
          },
          {
            name: 'Rudy Smith',
            address: '933 E 239 N',
            city: 'Henderson',
            state: 'Nevada',
            phone: '(678)734-2311',
            product: 'Pro',
            notes: 'Duis aute irure dolor in reprehenderit in voluptate velit'
          },
          {
            name: 'Paddy Jenkins',
            address: '12th Street',
            city: 'Seattle',
            state: 'Washington',
            phone: '(789)746-7368',
            product: 'Basic',
            notes: 'sample note'
          },
          {
            name: 'John Doe',
            address: '12th Avenue',
            city: 'Chicago',
            state: 'Illinois',
            phone: '(789)746-7368',
            product: 'Pro',
            notes: 'sample note'
          },
        ],
      }
    },
    methods: {
        close () {
            this.dialog = false
        }
    }
  }
</script>