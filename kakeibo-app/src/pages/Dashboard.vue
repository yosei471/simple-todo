<template>
  <div>
    <h1>家計簿ダッシュボード</h1>

    <!-- 収支登録フォーム -->
    <div>
      <select v-model="type">
        <option value="income">収入</option>
        <option value="expense">支出</option>
      </select>
      <input v-model="category" placeholder="カテゴリ" />
      <input v-model.number="amount" type="number" placeholder="金額" />
      <input v-model="memo" placeholder="メモ" />
      <input v-model="date" type="date" />
      <button @click="addTransaction">登録</button>
    </div>

    <!-- 登録済み一覧 -->
    <ul>
      <li v-for="t in transactions" :key="t.id">
        {{ t.date }} - {{ t.type }} - {{ t.category }} - {{ t.amount }}円
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabase'

const type = ref('expense')
const category = ref('')
const amount = ref(0)
const memo = ref('')
const date = ref(new Date().toISOString().slice(0,10))

const transactions = ref([])

// 収支を追加
const addTransaction = async () => {
  const user = supabase.auth.user()
  if (!user) return alert('ログインしてください')

  const { data, error } = await supabase.from('transactions').insert([{
    user_id: user.id,
    type: type.value,
    category: category.value,
    amount: amount.value,
    memo: memo.value,
    date: date.value
  }])

  if (error) alert(error.message)
  else transactions.value.push(...data)
}

// 既存データを取得
const fetchTransactions = async () => {
  const user = supabase.auth.user()
  if (!user) return
  const { data } = await supabase
    .from('transactions')
    .select('*')
    .order('date', { ascending: false })
  transactions.value = data
}

onMounted(fetchTransactions)
</script>