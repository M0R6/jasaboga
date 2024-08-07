<template>
  <v-app>
    <v-app-bar app>
      <div class="flex w-screen">
        <img class="h-10 rounded-pill my-auto" src="https://res.cloudinary.com/duboggqno/image/upload/v1722521163/logoboga_zqwl2s.png"/>
        <h1 class="caveat-font my-auto ml-3 hidden-title">Varra Catttum</h1>
      </div>
    <div class="flex justify-end items-end">
      <div class="hidden-sm-and-down hidden-between">
      <v-card-actions>
        <v-btn href="#" color="info" elevation="7"><font-awesome-icon :icon="['fas', 'house-chimney']" class=" h-5 mx-1"/>Home</v-btn>
        <v-btn href="#catalog" color="info" elevation="7"><font-awesome-icon :icon="['fas', 'basket-shopping']" class="h-5 mx-1"/>Katalog</v-btn>
        <v-btn href="#info" color="info" elevation="7"><font-awesome-icon :icon="['fas', 'circle-info']" class="h-5 mx-1"/>Info</v-btn>
        <v-btn href="https://api.whatsapp.com/send?phone=6289602169000&text=halo%20Varra%20Cat" target="_blank" color="info" elevation="7"><font-awesome-icon :icon="['fab', 'whatsapp']" class="h-5 mx-1"/>Hubungi kami</v-btn>
      </v-card-actions>
      </div>
      <div class="hidden-md-and-up">
        <v-card-actions>
        <v-btn href="https://api.whatsapp.com/send?phone=6289602169000&text=halo%20Varra%20Cat" target="_blank" color="info" elevation="7"><font-awesome-icon :icon="['fab', 'whatsapp']" class="h-5 mx-1"/>Hubungi kami</v-btn>
        </v-card-actions>
      </div>
    </div>
    </v-app-bar>
    <br>
    <br>
    <v-card style="" class="mb-[2px] p-[30px] mt-[10px]">
      <v-row>
        <v-col
        cols="12"
        sm="6"
        md="4"
        class=""
        >
        <img src="https://res.cloudinary.com/duboggqno/image/upload/t_Gradient fade/v1722417041/logoboga_zqwl2s.png" class="my-auto justify-start rounded-pill mx-auto h-[400px]">
        </v-col>
        <v-col
        cols="12"
        sm="6"
        md="4"
        class="mx-auto my-auto">
      <v-card-title class="text-justify caveat-font"><span class="font-bold text-[17px]">Selamat datang di situs web resmi Varra Cattum! </span></v-card-title>
      <v-card-subtitle class="caveat-font text-justify" >Kami adalah jasa boga yang berlokasi di Sewon, Bantul, yang siap memenuhi kebutuhan kuliner Anda dengan harga yang sangat ekonomis dan terjangkau. Dengan dedikasi dan komitmen tinggi, kami hadir untuk memberikan pengalaman kuliner terbaik, baik untuk acara berskala kecil maupun besar.</v-card-subtitle>
    </v-col>
    <v-col
        cols="12"
        sm="12"
        md="4"
        class="my-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d630.782476144453!2d110.366760786685!3d-7.84800821953142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a564f2d4bfae9%3A0xaa604ac2ab768240!2sBengkel%20Modifikasi%20Motor%20%22SILUMAN%20SPEED%22!5e0!3m2!1sid!2sid!4v1722997439741!5m2!1sid!2sid" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mx-auto"></iframe>
        <v-card-subtitle class="text-center">Lokasi produksi kami</v-card-subtitle>
      </v-col>
      </v-row>
    </v-card >
    <v-card id="catalog" class="mb-[2px] mt-0">
      <v-card-title primary-title>
        Katalog
      </v-card-title>
      <v-card-subtitle>
        Ragam menu lezat untukmu
      </v-card-subtitle>
    </v-card>
  <v-card>
    <v-container class="my-4 mx-auto" elevation="0">
    <v-row class="mx-auto">
      <v-col
        v-for="item in items"
        :key="item.id"
        cols="12"
        sm="6"
        md="4"
        class="mb-3 mx-auto"
      >
        <v-card class="catalog-card rounded-lg mx-3" elevation="10">
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
    <foot id="info" />
  </v-app>
</template>

<style scoped>
/* Custom breakpoint */
@media (max-width: 701px) {
  .hidden-sm-and-down {
    display: none !important;
  }
}

@media (max-width: 345px) {
  .hidden-title {
    display: none !important;
  }
}

@media (min-width: 701px) {
  .hidden-md-and-up {
    display: none !important;
  }
}
@media (min-width: 701px) and (max-width: 1000px) {
  .hidden-between {
    display: block !important;
  }
}

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

@media (min-width: 700px) {
  .custom-breakpoint {
    display: block !important;
  }
}

@media (max-width: 699px) {
  .custom-breakpoint {
    display: none !important;
  }
}

@media (min-width: 700px) {
  .custom-breakpoint-sm {
    display: none !important;
  }
}

@media (max-width: 699px) {
  .custom-breakpoint-sm {
    display: block !important;
  }
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

