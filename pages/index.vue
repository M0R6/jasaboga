<template>
  <v-app>
    <v-app-bar app>
      <div class="flex w-screen">
      <img class="h-10 rounded-pill my-auto" src="https://res.cloudinary.com/duboggqno/image/upload/v1722417041/logoboga_zqwl2s.jpg"/>
      <h1 class="font-serif my-auto ml-3">Jasa Boga Andalanmu!</h1>
    </div>
    <div class="flex justify-end items-end">
      <v-card-actions>
        <v-btn color="info" elevation="7"><font-awesome-icon :icon="['fab', 'whatsapp']" class="h-5 mr-1"/>Hubungi kami</v-btn>
      </v-card-actions>
    </div>
    </v-app-bar>
    <br>
    <br>
    <v-card class="mb-[2px] mt-[10px]">
      <v-card-title primary-title>
        Katalog
      </v-card-title>
      <v-card-subtitle>
        Ragam menu lezat untukmu
      </v-card-subtitle>
  </v-card>
  <v-card>
    <v-container class="my-4" elevation="0">
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.id"
        cols="12"
        sm="6"
        md="3"
        class="mb-3"
      >
        <v-card class="catalog-card rounded-lg mr-5" elevation="10">
          <v-img
            :src="item.image"
            height="200px"
          ></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
          <v-btn :href="item.link" target="_blank" class="rounded-xl w-[160px] mb-3 mx-auto" outlined color="success"><font-awesome-icon :icon="['fas', 'cart-shopping']" class="h-4 mr-1"/><h1>Pesan</h1></v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-card>
    <foot />
  </v-app>
</template>

<style scoped>


.catalog-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 350px; /* Adjust the minimum height as needed */
}

.catalog-card-text {
  flex-grow: 1;
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Tumpeng - A',
          subtitle: 'Hidangan Khas Indonesia',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416594/nasitumpeng_oacnjb.jpg', // replace with actual image URLs
          link: 'https://bit.ly/pesan-tumpeng',
        },
        {
          id: 2,
          title: 'Tumpeng - B',
          subtitle: 'Nasi tumpeng jenis B',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416792/nasitumpengg_cxobbh.jpg',
          link: 'https://bit.ly/pesan-tumpeng',
        },
        {
          id: 3,
          title: 'Tumpeng - C',
          subtitle: 'Hidangan Khas Indonesia',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416790/nasitumpenggg_szrrpo.jpg', // replace with actual image URLs
          link: 'https://bit.ly/pesan-tumpeng',
        },
        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
          link: 'https://bit.ly/pesan-tumpeng',
        },        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
          link: 'https://bit.ly/pesan-tumpeng',
        },        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
          link: 'https://bit.ly/pesan-tumpeng',
        },        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
          link: 'https://bit.ly/pesan-tumpeng',
        },        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
          link: 'https://bit.ly/pesan-tumpeng',
        },        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
          link: 'https://bit.ly/pesan-tumpeng',
        },        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
          link: 'https://bit.ly/pesan-tumpeng',
        },        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
          link: 'https://bit.ly/pesan-tumpeng',
        },        {
          id: 4,
          title: 'Nasi Kotak - A',
          subtitle: 'Masakan Padang',
          image: 'https://res.cloudinary.com/duboggqno/image/upload/v1722416791/nasikotak_zq0a1q.jpg',
          link: 'https://bit.ly/pesan-tumpeng',
        },
        // Add more items here
      ],
    };
  },
};
</script>

