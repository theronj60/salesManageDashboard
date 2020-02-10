<template>
    <v-card
    max-width="1366"
    width="80%"
    class="align-start"
  >

    <v-container
      class="pa-2"
      width="100%"
      fluid
    >

      <v-row>
        <v-col class="align-self-center">
          <v-card
            class="mx-auto text-center"
            color="green"
            dark
          >
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline
                  :value="value"
                  color="rgba(255, 255, 255, .7)"
                  height="100"
                  padding="24"
                  
                >
                  <template v-slot:label="item">
                    {{ item.value }}
                  </template>
                </v-sparkline>
              </v-sheet>
            </v-card-text>

            <v-card-text>
              <div class="display-1 font-weight-thin">Leads Last 24h</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="justify-center">
              <v-btn block text>Go to Report</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        
        <v-col>
          <v-card
            class="mx-auto"
            max-width="400"
            tile
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>MTD Leads</v-list-item-title>
                <v-list-item-subtitle>0</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>New Leads</v-list-item-title>
                <v-list-item-subtitle>5</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Assigned</v-list-item-title>
                <v-list-item-subtitle>
                  9
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Sold</v-list-item-title>
                <v-list-item-subtitle>
                  3
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

          </v-card>
        </v-col>

        
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <template>
        <v-container>
            <v-layout>

                    <h1><v-icon x-large>mdi-account-multiple</v-icon>Leads</h1>

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
                :items="Leads"
                :search="search"
                single-expand
                show-expand
                
                calculate-widths
                
                >

                <!-- <template v-slot:expanded-item="{ item }">
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
                  -->

                </v-data-table>
                
        </v-container>
</template>
          </v-card>
        </v-col>
      </v-row>


    </v-container>
  </v-card>
</template>

<script>
export default {
    data: () => ({
        items: [
                    {
                    color: '#1F7087',
                    src: 'https://via.placeholder.com/125',
                    title: 'Title',
                    artist: 'content',
                    },
                    {
                    color: '#952175',
                    src: 'https://via.placeholder.com/125',
                    title: 'title2',
                    artist: 'content',
                    },
                ],
        value: [
          4,
          6,
          7,
          10,
          5,
          0,
          4,
        ],
        search: '',
        headers: [
          {
            text: 'ID',
            align: 'left',
            sortable: false,
            value: 'id',
          },
          { text: 'Name', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Imported', value: 'imported' },
          { text: 'Source', value: 'source' },
          { text: 'Assigned To', value: 'assigned' },
          { text: 'View', value: 'view' }
        ],
        Leads: [
          {
            id: '1',
            name: 'Test 1',
            email: 'test1@email.com',
            imported: '2020-01-17 10:17:50',
            source: 'Source Test 1',
            assigned: 'Setter',
            view: 'mdi-magnify',
          },
        ],
    }),
}
</script>

