export const useAuth = () => {
  const token = useState("token", () => null);

  const login = async (username, password) => {
    try {
      const { data } = await useFetch("/api/admin/login", {
        method: "POST",
        body: { username, password },
      });
      token.value = data.token;
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const isAuthenticated = computed(() => !!token.value);

  return { token, login, isAuthenticated };
};
