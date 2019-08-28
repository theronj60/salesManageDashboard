<template>
  <v-app style="background-color: gray;">
      <v-content>
          <v-container
          fluid
          fill-height
          >
              <v-layout
              align-center
              justify-center
              >
                  <v-flex
                  xs12
                  sm8
                  md4
                  >
                      <v-card width="400" class="mx-auto mt-5" elevation="24">
                          <v-card-title class="pb-0">
                              <h3>Login</h3>
                          </v-card-title>
                          <v-card-text>
                              <v-form>
                                  <v-text-field
                                  label="Username"
                                  prepend-icon="account_circle"
                                  ></v-text-field>
                                  <v-text-field
                                      :type="showPassword ? 'text' : 'password'"
                                      label="Password"
                                      prepend-icon="lock"
                                      :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                                      @click:append="showPassword = !showPassword"
                                  ></v-text-field>
                              </v-form>
                          </v-card-text>
                          <v-divider></v-divider>
                          <v-card-actions>
                              <v-btn to="/" color="warning">Back</v-btn>
                              <v-spacer></v-spacer>
                              <v-btn color="success" to="/dashboard">Login</v-btn>
                          </v-card-actions>
                      </v-card>
                  </v-flex>
              </v-layout>
          </v-container>
      </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    showPassword: false
  }),
};
</script>
