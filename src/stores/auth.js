// src/stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // 从 localStorage 中读取 token（如有）
    token: localStorage.getItem('token') || ''
  }),
  actions: {
    setToken(newToken) {
      this.token = newToken
      localStorage.setItem('token', newToken)
    },
    clearToken() {
      this.token = ''
      localStorage.removeItem('token')
    }
  }
})