import { useSessionStore } from "#imports"

export default defineNuxtRouteMiddleware((to, from) => {
    const session = useSessionStore()
    const token = session.session
    // isAuthenticated() is an example method verifying if a user is authenticated
    if ( token != '') {
      return navigateTo('/user')
    }
  })