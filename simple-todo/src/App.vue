<template>
  <div>
    <h1>タスク管理アプリ</h1>

    <!-- 新規タスク作成 -->
    <input v-model="newTask" placeholder="新しいタスクを入力" />
    <button @click="addTask">追加</button>

    <hr />

    <!-- タスク一覧 -->
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" v-model="task.completed" @change="saveTasks" />
        <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
          {{ task.title }}
        </span>
        <button @click="deleteTask(task.id)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// 入力用
const newTask = ref("");
// タスク一覧
const tasks = ref([]);

// localStorage とのやりとり
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
}

function loadTasks() {
  tasks.value = JSON.parse(localStorage.getItem("tasks") || "[]");
}

// 初回読み込み
onMounted(() => {
  loadTasks();
});

// CRUD操作
function addTask() {
  if (!newTask.value.trim()) return;
  tasks.value.push({
    id: Date.now(),
    title: newTask.value,
    completed: false,
  });
  newTask.value = "";
  saveTasks();
}

function deleteTask(id) {
  tasks.value = tasks.value.filter(t => t.id !== id);
  saveTasks();
}
</script>

<style>
body {
  font-family: sans-serif;
  padding: 20px;
}
input[type="text"] {
  padding: 5px;
  margin-right: 5px;
}
button {
  margin-left: 5px;
}
ul {
  padding-left: 0;
  list-style: none;
}
li {
  margin: 5px 0;
}
</style>
