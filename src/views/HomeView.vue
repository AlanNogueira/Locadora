<template>
  <v-main>
    <v-container>
      <v-card-title>Receitas melhores avaliadas</v-card-title>
      <v-row>
        <v-col cols="12" md="4" lg="3" v-for="item in data">{{ recipe.name }}</v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
// import recipes from '@/services/recipes';

// try {
//     const { data } = await recipes.GetRecipes();
//     console.log(data)
//   } catch (error) {
//     console.log(error);
//   }
</script>

<style scoped></style>