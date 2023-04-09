<script setup>
import { onMounted, ref } from 'vue'
const payload = [
   {
      client_id: '98e2eaa2-bc34-4687-819d-cf7e5d6438fa',
      name: 'Client Secret 1',
      scopes: JSON.stringify([])
   },
   {
      client_id: '98e2eaa2-bc34-4687-819d-cf7e5d6438fa',
      name: 'Client Secret 2',
      scopes: "['list_users']"
   },
   {
      client_id: '98e2eaa2-bc34-4687-819d-cf7e5d6438fa',
      name: 'Client Secret 3',
      scopes: JSON.stringify(['*'])
   },
]

onMounted(async () => {
    
})
</script>

<template>
          <div class="flex items-center justify-center mb-4">
         <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
               <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                     <tr>
                        <th scope="col" class="px-6 py-3">
                           NAME
                        </th>
                        <th scope="col" class="px-6 py-3">
                          CLIENT ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                           SCOPES
                        </th>
                        <th scope="col" class="px-6 py-3">
                           <span class="sr-only">Edit</span>
                        </th>
                     </tr>
               </thead>
               <tbody>
                     <tr 
                        v-for="(data, index) in payload"
                        :key="index"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           {{ data.name }}
                        </th>
                        <td class="px-6 py-4">
                           {{ data.client_id }}
                        </td>
                        <td class="px-6 py-4">
                           {{ data.scopes }}
                        </td>
                        <td class="px-6 py-4 text-right">
                           <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                     </tr>
               </tbody>
            </table>
         </div>
      </div>
</template>