<template>
  <v-container>
    <v-card-title>Receitas melhores avaliadas</v-card-title>
    <v-row>
      <v-col cols="12" md="4" lg="3" v-for="item in items">
        <v-card>
          <v-img class="align-end text-black"
            src="https://s2-receitas.glbimg.com/1VjEvSI2CsFJUb5LwyiRG66SP-c=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/u/u/cWwXClSFSDg92C2mVIsQ/torta-de-liquidificador-receita.jpg"
            cover>
          </v-img>
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle>{{ item.professional?.name ?? item.client?.name }}</v-card-subtitle>
          <Rating :value="item.evaluations" :total-rating="5" @update-rating="console.log($event)" style="padding-left: 16px;">
          </Rating>
          <v-card-text class="recipe-text">{{ item.text }}</v-card-text>
          <v-card-actions>
            <v-btn :to="{ name: `recipe`, params: { id: item.id } }">Ver mais</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Rating from '@/components/Rating.vue';
import recipes from '@/services/recipes';
import { ref, onMounted } from 'vue';
const items = ref();

async function GetRecipes() {
  try {
    const { data } = await recipes.GetRecipes();
    items.value = data;
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  GetRecipes();
})

</script>

<style scoped>

.recipe-text{
  min-height: 100px;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis
}

</style>