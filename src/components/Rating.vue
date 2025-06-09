<template>
    <div class="wrapper">
        <span v-for="star in totalRating" :key="star" class="star" :class="{ filled: star <= value, editable: editable }" @click="setRating(star)">★</span>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    value: Number,
    totalRating: Number,
    editable: Boolean
});

const emit = defineEmits(["update-rating"]);

const setRating = (star) => {
  emit("update-rating", star);
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 2px;
}

.star {
  color: #d8d8d8;
  font-size: 1.2em;
}

.star.editable:hover
{
  cursor: pointer;
  color: orange;
}

.star.editable:active,
.star.filled {
  color: orange;
  text-shadow: 0 0 1px rgba(255, 165, 0, 0.5);
}
</style>