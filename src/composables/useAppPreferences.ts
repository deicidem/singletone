import { reactive, readonly, toRefs } from 'vue'

export type AppTheme = 'default' | 'material' | 'flat'

type State = {
  darkMode: boolean
  sidebarOpen: boolean
  loginFormVisible: boolean
  theme: AppTheme
}

const state = reactive<State>({
  darkMode: false,
  sidebarOpen: false,
  loginFormVisible: false,
  theme: 'default'
})

export default () => {
  const { darkMode, sidebarOpen, loginFormVisible, theme } = toRefs(state)

  function openSidebar() {
    sidebarOpen.value = true
  }

  function closeSidebar() {
    sidebarOpen.value = false
  }

  function setDarkMode(value: boolean) {
    darkMode.value = value
  }

  function showLoginForm() {
    loginFormVisible.value = true
  }

  function hideLoginForm() {
    loginFormVisible.value = false
  }

  function changeTheme(newTheme: AppTheme) {
    theme.value = newTheme
  }

  return {
    darkMode: readonly(darkMode),
    sidebarOpen: readonly(sidebarOpen),
    loginFormVisible: readonly(loginFormVisible),
    theme: readonly(theme),
    openSidebar,
    closeSidebar,
    setDarkMode,
    showLoginForm,
    hideLoginForm,
    changeTheme
  }
}
