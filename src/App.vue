<template>

<navBar/>
<RouterView />

</template>



<script>
  import navBar from './components/navBar.vue'

export default {
  name: 'App',
  components:{
    navBar
  }
}
</script>
