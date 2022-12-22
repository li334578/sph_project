<template>
  <div id="app">
    <Header/>
    <h1>主组件</h1>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header/index'
import Footer from './components/Footer/index'

export default {
  name: 'App',
  components: {
    Header,Footer
  }
}
</script>

<style>

</style>
