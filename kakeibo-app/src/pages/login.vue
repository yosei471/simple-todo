<template>
  <div class="login-page">
    <h1>ログイン</h1>
    <input v-model="email" type="email" placeholder="メールアドレス" />
    <input v-model="password" type="password" placeholder="パスワード" />
    <button @click="login">ログイン</button>
    <button @click="signup">新規登録</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabase'
import { useRouter } from 'vue-router' 

const email = ref('')
const password = ref('')
const error = ref('')

const router = useRouter()   // ← ここで useRouter を呼ぶ


const login = async () => {
  const { data, error: err } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (err) {
    error.value = err.message
  } else {
    error.value = ''
    router.push('/dashboard') // ← ログイン成功したら遷移
  }
}


const signup = async () => {
  const { data, error: err } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
  if (err) {
    error.value = err.message
  } else {
    error.value = ''
    alert('登録成功！メールを確認してください')
  }
}
</script>

<style scoped>
input { display:block; margin:10px 0; padding:5px; }
button { margin-right:10px; }
</style>