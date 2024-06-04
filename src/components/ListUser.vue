<template>
    <div class="section">

    <div class=" flex items-center justify-center pt-24">
      <p class="text-x font-bold font-semibold leading-1 text-gray-900">Usuários</p>

    </div>

      <div class="mt-6 flex items-center justify-center gap-x-6 pt-12 ">


        <button  @click="goToAddUser" class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white 
        shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Adicionar usuário</button>
      </div>

      <ul role="list" class="divide-y divide-gray-100">
      <li v-for="person in people" :key="person.email" class="flex  justify-around gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <div class="flex-auto min-w-0 ">
            <p class="text-sm font-semibold leading-6 text-gray-900">{{ person.Nome }}</p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ person.email }}</p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ person.Endereco }}</p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ person.Cidade }}</p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ person.Estado }}</p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ person.CEP }}</p>
  
        </div>
        </div>

        <div class="flex-no w-8 h-8 cursor-pointer" >
          <PencilSquareIcon @click="goToEditUser(person.email)" />    
<XMarkIcon @click="removeUser(person.email)" />
        </div>
      </li>
    </ul>
</div>
  </template>
  
  <script >
  import { mapState } from 'vuex';

export default { 
       name: 'ListUser',
    computed: mapState({people: state=> state.people}) ,
       components:{PencilSquareIcon, XMarkIcon},
  methods:{

goToAddUser() {
    this.$router.push('/user')
  },

goToEditUser(email) {
    this.$router.push(`/edituser/${email}`)
  },
  removeUser(email){

this.$store.commit("REMOVE_USER",email)

}

}
      }
  
  import { PencilSquareIcon, XMarkIcon } from '@heroicons/vue/20/solid'
  
  </script>