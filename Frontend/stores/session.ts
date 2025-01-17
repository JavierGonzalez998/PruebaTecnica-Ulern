import { defineStore } from 'pinia';

export const useSessionStore = defineStore('session', {
  state: () => ({
    session: '', // Dato que deseas persistir
  }),
  getters: {
    getSession: (state) => state.session,
  },
  actions: {
    setSession(access: string) {
      this.session = access;
    },
    logout() {
      this.session = '';
    },
  },
  persist: true
});
