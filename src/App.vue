<template>
  <div id="app">
    <MarketInfo />
  </div>
</template>

<script>
import MarketInfo from './components/MarketInfo'

export default {
  name: 'App',
  components: {
    MarketInfo
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
