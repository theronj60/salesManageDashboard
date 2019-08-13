<template>
    <v-speed-dial
      v-model="fab"
      direction="left"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          small
          dark
          fab
        >
          <v-icon v-if="fab">close</v-icon>
          <v-icon v-else>edit</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial>    
 </template>

 <script>
    
  export default {
    data: () => ({
      fab: '',
      transition: 'slide-y-reverse-transition',
    }),

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },
    },

    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      },
    },
  }

 </script>

<style >
    .v-speed-dial__list {
        padding: 0px;
    }
    .v-speed-dial--left {
        top: 0px;
        padding: 0px;
    }
</style>
