<template>
    <v-card
    max-width="1366"
    class="mx-auto"
  >

    <v-container
      class="pa-2"
      fluid
    >

      <v-row>
        <v-col class="align-self-center">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-text class="white--text">
              <div class="headline mb-2">Title Placeholder</div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, asperiores nulla! Ad ullam molestiae alias in deleniti eaque, corporis fugit sint, quas tempora eligendi quod similique cumque nostrum nesciunt enim?
            </v-card-text>

            <v-card-actions>
              <v-btn text>button text</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
        >
          <v-card
            :color="item.color"
            dark
          >
            <v-list-item three-line>
              <v-list-item-content class="align-self-center">
                <v-list-item-title
                  class="headline mb-2"
                  v-text="item.title"
                ></v-list-item-title>

                <v-list-item-subtitle v-text="item.artist"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-list-item-avatar>
            </v-list-item>
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
    }),
}
</script>

