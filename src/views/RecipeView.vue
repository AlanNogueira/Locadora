<template>
    <v-container>
        <v-row>
            <v-col>
                <v-sheet class="d-flex flex-column align-center">
                    <h1 class="mb-4">{{ recipe?.name ?? "" }}</h1>
                    <v-card width="100%" class="pa-6 mb-6">
                        <div class="text-body-1" style="white-space: pre-line">{{ recipe?.text ?? "" }}</div>
                    </v-card>
                </v-sheet>
            </v-col>
        </v-row>

        <!-- Seção de Avaliações -->
        <v-row v-if="recipe?.evaluations?.length">
            <v-col>
                <v-sheet class="pa-4">
                    <h2 class="mb-4">Avaliações</h2>
                    <v-list>
                        <v-list-item v-for="evaluation in recipe.evaluations" :key="evaluation.id" class="mb-4">
                            <v-card width="100%" class="pa-4">
                                <div class="d-flex align-center mb-2">
                                    <v-avatar color="primary" class="mr-4">
                                        <span class="text-h6 white--text">{{ evaluation?.authorName?.charAt(0) ?? 'U' }}</span>
                                    </v-avatar>
                                    <div>
                                        <div class="text-subtitle-1 font-weight-bold">{{ evaluation?.authorName ?? "Usuário Anônimo" }}</div>
                                        <Rating :value="evaluation.value" :total-rating="5" :editable="false" />
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <h3 class="text-h6 mb-2">{{ evaluation.title }}</h3>
                                    <p class="text-body-1">{{ evaluation.text }}</p>
                                </div>
                            </v-card>
                        </v-list-item>
                    </v-list>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col>
                <v-sheet class="pa-4 text-center">
                    <p class="text-subtitle-1">Nenhuma avaliação disponível ainda.</p>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import recipes from '@/services/recipes';
import { useRoute } from "vue-router";
import Rating from '@/components/Rating.vue';

const recipe = ref();

async function GetRecipes(id) {
    try {
        const { data } = await recipes.GetRecipeById(id);
        recipe.value = data;
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    const route = useRoute();
    console.log(route.params.id)
    GetRecipes(route.params.id);
})
</script>

<style scoped>
.v-list-item {
    width: 100%;
}

.text-body-1 {
    line-height: 1.8;
    letter-spacing: 0.5px;
}
</style>