import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

import { createStore } from 'vuex'





const store = createStore({
  state: {
     people: [
    
  
  
        {
            Nome: 'Leslie Alexander',
            email: 'leslie.alexander@example.com',
            Estado: 'Mato Grosso',     
            
            CEP: '78000000',
            Endereco: 'Avenida do CPA',
          },
          {
            Nome: 'Michael Foster',
            email: 'michael.foster@example.com',
            Estado: 'Mato Grosso',     
            
            CEP: '78000000',
            Endereco: 'Avenida do CPA',
          },
          {
            Nome: 'Dries Vincent',
            email: 'dries.vincent@example.com',
            Estado: 'Mato Grosso',     
            
            CEP: '78000000',
            Endereco: 'Avenida do CPA',
          },
          {
            Nome: 'Lindsay Walton',
            email: 'lindsay.walton@example.com',
            Estado: 'Mato Grosso',     
            
            CEP: '78000000',
            Endereco: 'Avenida do CPA',    },
          {
            Nome: 'Courtney Henry',
            email: 'courtney.henry@example.com',
            Estado: 'Mato Grosso',     
            
            CEP: '78000000',
            Endereco: 'Avenida do CPA',
          },
          {
            Nome: 'Tom Cook',
            email: 'tom.cook@example.com',
            Estado: 'Mato Grosso',     
            
            CEP: '78000000',
            Endereco: 'Avenida do CPA',
          }  ]
  },

  getters:{
    FILTER_USER (state,email) {
        return state.people.filter(o => o.email=== email)
      }
},
   mutations: {
    
        ADD_USER: (state, data) => {
    
          state.people.push(data)
        },
        REMOVE_USER: (state, email) => {
            state.people = state.people.filter((t)=>t.email !==email)
          },
          EDIT_USER: (state, data) => {
      
            const  objIndex=state.people.findIndex(t=> t.email== data.email)

            state.people[objIndex] = data 
          },
      }
  
})

 createApp(App).use(router).use(store).mount('#app')
