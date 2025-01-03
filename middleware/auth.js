export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth();

  if (to.meta.requiresAuth && !auth.isAuthenticated.value) {
    console.log("not authenticated");
    return navigateTo("/login");
  }
});
