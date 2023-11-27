
<script setup lang="ts">
import useAppPreferences, { type AppTheme } from '@/composables/useAppPreferences';
const themes: Array<AppTheme> = ["default", "flat", "material"];
const appPreferences = useAppPreferences();
function toggleSidebar() {
    if (appPreferences.sidebarOpen.value) {
        appPreferences.closeSidebar();
    } else {
        appPreferences.openSidebar();
    }
}

function toggleLoginFormVisability() {
    if (appPreferences.loginFormVisible.value) {
        appPreferences.hideLoginForm();
    } else {
        appPreferences.showLoginForm();
    }
}

function toggleDarkMode() {
    appPreferences.setDarkMode(!appPreferences.darkMode.value);
}

function changeTheme(event: Event): void {
    const value = (event.target as HTMLSelectElement).value as AppTheme;
    appPreferences.changeTheme(value);
}

</script>

<template>
    <div class="buttons">
        <button @click="toggleSidebar">Toggle sidebar</button>
        <button @click="toggleDarkMode">Toggle dark mode</button>
        <button @click="toggleLoginFormVisability">Toggle login form</button>
        <label>Select Theme
            <select @change="changeTheme($event)">
                <option v-for="theme in themes" :value="theme" :key="theme">{{ theme }}</option>
            </select>
        </label>

    </div>
</template>


<style scoped>
.buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
