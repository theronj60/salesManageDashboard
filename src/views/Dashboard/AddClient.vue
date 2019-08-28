<template>
    <v-stepper v-model="e1" alt-labels class="steps align-self-md-start">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Client Information</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Products</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Billing Information</v-stepper-step>
    </v-stepper-header>

    <v-form v-model="valid">

        <v-stepper-items>
        <v-stepper-content step="1">
            <v-card
            class="mb-12"
            fill-height
            >

                <v-container>

                    <v-row>

                        <v-col cols="12" sm="4">
                            <v-text-field
                                v-model="firstname"
                                :rules="nameRules"
                                :counter="10"
                                label="First name"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="lastname"
                                :rules="nameRules"
                                :counter="10"
                                label="Last name"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="Email"
                                required
                            ></v-text-field>
                        </v-col>
                        
                        <v-col cols="12" sm="4">
                            <v-text-field
                                v-model="addressOne"
                                label="Address 1"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="addressTwo"
                                label="Address 2"
                            ></v-text-field>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                    v-model="city"
                                    label="City"
                                    required
                                ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-select
                                    v-model="state"
                                    :items="states"
                                    menu-props="auto"
                                    label="Select a State"
                                    hide-details
                                    single-line
                                    required
                                    >
                                </v-select>   
                                </v-col>
                                <v-col>
                                    <v-text-field
                                    v-model="zip"
                                    label="Zip Code"
                                    required
                                ></v-text-field>
                                 
                                </v-col>
                            </v-row>
                        </v-col>

                        <v-col cols="12" sm="4">
                            <v-text-field
                                    v-model="primaryPhone"
                                    label="Primary Phone"
                                    required
                                ></v-text-field>
                                <v-text-field
                                    v-model="mobilePhone"
                                    label="Mobile Phone"
                                    required
                                ></v-text-field>
                                <v-text-field
                                    v-model="fax"
                                    label="Fax"
                                    required
                                ></v-text-field>
                                <v-select
                                    v-model="timeZone"
                                    menu-props="auto"
                                    hide-details
                                    single-line
                                    required
                                    :items="zones"
                                    label="Select A Time Zone"
                                    >
                                </v-select>   
                        </v-col>
                        
                    </v-row>
                    
                    
                </v-container>

            </v-card>

            <v-btn
            color="primary"
            @click="e1 = 2"
            >
            Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
            <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
            >
            
            </v-card>

            <v-btn
            color="primary"
            @click="e1 = 3"
            >
            Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
            <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
            >
            
            </v-card>

            <v-btn
            color="primary"
            @click="e1 = 1"
            >
            Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
        </v-stepper-content>
        </v-stepper-items>

    </v-form>

  </v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        e1: 0,
        valid: false,
        // Client Info
        firstname: '',
        lastname: '',
        nameRules: [
            v => !!v || 'Name is Required',
            v => v.length <= 10 || 'Name must be less than 10 Characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        addressOne: '',
        addressTwo: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        primaryPhone: '',
        mobilePhone: '',
        fax: '',
        timeZone: '',
        zones: [
            "Pacific Standard Time",
            "Mountain Standard Time",
            "Eastern Standard Time",
            ],
        // state info
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
        ],

        // Products

        // Billing Info
      }
    },
  }
</script>

<style>
    .steps {
        /* height: 750px; */
        width: 100%;
    }
</style>