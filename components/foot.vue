<template>
  <footer class="footer">
    <div class="content has-text-centered mt-[16px]">
      <v-container>
        <v-row>
          <v-col cols="12" sm="3" class="my-auto mx-auto text-center">
            <img class="h-[170px] rounded-pill my-auto mx-auto mb-1" src="https://res.cloudinary.com/duboggqno/image/upload/v1722417041/logoboga_zqwl2s.jpg"/>
            <p>Varra Cattum - Catering & Tumpeng</p>
          </v-col>
          <v-col cols="12" sm="3" class="my-auto text-center">
        <a href="#" target="_blank" class="">
          <font-awesome-icon :icon="['fas', 'mobile-screen']" class="mb-2 mx-auto h-10 whitee contact-icon" />
            <p class="whitee">(+00) 1234 5678</p>
        </a>
          </v-col>
          <v-col cols="12" sm="3" class=" my-auto text-center">
        <a href="#" target="_blank" class="">
            <font-awesome-icon :icon="['fas', 'envelope']" class="mb-2 whitee mx-auto h-10 contact-icon" />
            <p class="whitee">info@email.com</p>
        </a>
          </v-col>
          <v-col cols="12" sm="3" class="my-auto text-center">
        <a href="#" target="_blank" class="">
          <font-awesome-icon :icon="['fas', 'map-location-dot']" class="mb-2 whitee mx-auto h-10 contact-icon" />
            <p class="whitee">Jl. Tarudan, Sewon, Bantul</p>
        </a>
          </v-col>
        </v-row>
      </v-container>
      <v-divider style="max-width: 80%; width: 100%;"  class="mb-10 white mx-auto"></v-divider>
      <div class="social-icons">
        <a href="https://instagram.com/nrfntr" target="_blank">
          <font-awesome-icon class="mx-auto cursor-pointer text-white hover:text-blue-300"  :icon="['fab', 'instagram']" style="height: 28px;" />
        </a>
        <a href="https://x.com/nrfntr" target="_blank">
          <font-awesome-icon class="mx-auto cursor-pointer text-white hover:text-blue-300" :icon="['fab', 'x-twitter']" style="height: 28px;" />
        </a>
        <a href="https://youtube.com/@M0R6" target="_blank">
          <font-awesome-icon class="mx-auto cursor-pointer text-white hover:text-blue-300" :icon="['fab', 'youtube']" style="height: 28px;" />
        </a>
        <a href="https://youtube.com/@M0R6" target="_blank">
          <font-awesome-icon class="mx-auto cursor-pointer text-white hover:text-blue-300" :icon="['fab', 'whatsapp']" style="height: 28px;" />
        </a>
      </div>
      <p>
        &copy; 2024 | Authored by <a href="https://morgann.me/" target="_blank"><span class="whiteex">MORG</span></a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {                         
    };
  },
};
</script>


<style scoped>

.footer {
  background-color: #212121;
  color: #fff;
  padding: 1rem 0;
  width: 100%;
  bottom: 0;
  left: 0;
  text-align: center;
}
.whitee{
  color: white !important;
}
.whiteex{
  color: white !important;
}
.whiteex:hover{
  color: #93c5fd !important;
}
.whitee:hover{
  opacity: 0.7;
}
.social-icons {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}
.social-icons a {
  color: #fff;
  margin: 0 0.5rem;
  transition: color 0.3s;
}
.social-icons a:hover {
  color: #1da1f2;  /*Change this to your desired hover color */
}
.social-icon {
  font-size: 200px; /* Adjust this value as needed */
}
.contact-info p {
  margin: 0.5rem 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
}
.contact-icon {
  font-size: 24px;
  color: #1da1f2;
  margin-bottom: 8px;
}
</style>
