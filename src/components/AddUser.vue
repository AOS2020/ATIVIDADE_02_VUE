
<template>
 <form @submit.prevent="SaveUser">
  <div class="flex items-center justify-center pt-12">  
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-1 text-gray-900">Novo usuário</h2>
  
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-6">
              <label for="Nome" class="block text-sm font-medium leading-6 text-gray-900">Nome</label>
              <div class="mt-2">
                <input  v-model="form.Nome"  type="text" name="Nome" id="Nome" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
           
  
            <div class="sm:col-span-6">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <div class="mt-2">
                <input id="email" name="email" v-model="form.email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  

  
            <div class="col-span-full">
              <label for="Endereco" class="block text-sm font-medium leading-6 text-gray-900">Endereço</label>
              <div class="mt-2">
                <input type="text" name="Endereco" v-model="form.Endereco" id="Endereco" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-2 sm:col-start-1">
              <label for="Cidade" class="block text-sm font-medium leading-6 text-gray-900">Município</label>
              <div class="mt-2">
                <input type="text" name="Cidade" id="Cidade" v-model="form.Cidade" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-2">
              <label for="Estado" class="block text-sm font-medium leading-6 text-gray-900">Estado</label>
              <div class="mt-2">
                <input type="text" name="Estado" id="Estado" v-model="form.Estado" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div class="sm:col-span-2">
              <label for="CEP" class="block text-sm font-medium leading-6 text-gray-900">CEP</label>
              <div class="mt-2">
                <input type="text" name="CEP" id="CEP" v-model="form.CEP" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
        </div>
  

      </div>'
  
      <div class="mt-6 flex items-center justify-center gap-x-6">
        <button type="button" @click="goToHome" class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Cancelar</button>
        <button type="submit" @click="SaveUser" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Salvar</button>
      </div>
  


</form> 

</template>
  
  <script>
  import {mapState} from 'vuex' 
  export default {
    
    computed: mapState({people: state=> state.people}) ,

    methods: {
    goToHome() {
      this.$router.push('/')
    },
    SaveUser(
     ){

      this.$store.commit("ADD_USER",this.form)  

  this.goToHome()

    }
  },
data(){
return {form :{ 
     Nome: "",
      email: "",
      Endereco: "",
      Cidade: "" ,
      Estado: "" ,
      CEP: "" }}
}}
  </script>