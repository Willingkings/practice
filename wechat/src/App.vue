<template>
  <div id="app">
    {{$t('type.ceshi')}}
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    this.axios.get('/seller').then((response) => {
      console.log(response.data);
    });
  }
};
</script>

<style lang="scss" type="text/scss">
  #app {
    width: 10*$basisSize;
    background: map-get(map-get($colorMap,center),bgcolor);
    @include border_b()
  }
</style>
