<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { httpClient } from '@/client'

const username = ref(null);
const password = ref(null);
const hasError = ref(false);
const router = useRouter();

const login = async (evt) => {
  evt.preventDefault();
  try {
    const response = await httpClient().post('login', {
      username: username.value,
      password: password.value
    });

    localStorage.setItem('token', response.data.access_token);
    hasError.value = false;
    router.push('/dashboard');
  } catch (error) {
    hasError.value = true;
    console.log(error.response)
  }
}

</script>

<template>
<div class="grid place-items-center h-screen">
  <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" action="#">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                placeholder="name@company.com" 
                required
                v-model="username">
          </div>
          <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="••••••••" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                required
                v-model="password">
          </div>
          <button 
            @click="login"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Login to your account
          </button>
          <div 
            class="text-sm font-medium text-gray-500 dark:text-gray-300"
            v-if="hasError">
            Invalid credentials. Please try again.
        </div>
      </form>
  </div>
</div>
</template>

<style scoped>
</style>
