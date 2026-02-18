<template>
  <div v-if="procedure">
    <h2>{{ procedure.title }}</h2>
    <p>{{ procedure.description }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { api } from "../api/client.js";

const route = useRoute();
const procedure = ref(null);

onMounted(async () => {
  const res = await api.get(`/procedures/${route.params.id}`);
  procedure.value = res.data;
});
</script>
