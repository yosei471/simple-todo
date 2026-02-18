<template>
  <div>
    <h2>手順書一覧</h2>

    <router-link to="/create">
      <button>＋ 新規作成</button>
    </router-link>

    <ul>
      <li v-for="proc in procedures" :key="proc.id">
        <router-link :to="`/procedures/${proc.id}`">
          {{ proc.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "../api/client.js";

const procedures = ref([]);

onMounted(async () => {
  const res = await api.get("/procedures");
  procedures.value = res.data;
});
</script>
