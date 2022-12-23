<template>
  <div id="app">
    <MyHeader/>
    <router-view></router-view>
    <MyFooter v-show="$route.meta.show"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/Header/index'
import MyFooter from './components/Footer/index'

export default {
  name: 'App',
  components: {
    MyHeader, MyFooter
  }
}
</script>

<style>

</style>
