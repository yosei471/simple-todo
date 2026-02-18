<template>
  <div>
    <h2>手順書作成</h2>

    <input v-model="title" placeholder="タイトル" />
    <textarea v-model="description" placeholder="説明"></textarea>

    <button @click="createProcedure">保存</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { api } from "../api/client.js";
import { useRouter } from "vue-router";

const title = ref("");
const description = ref("");
const router = useRouter();

const createProcedure = async () => {
  await api.post("/procedures", {
    title: title.value,
    description: description.value
  });
  router.push("/");
};
</script>
