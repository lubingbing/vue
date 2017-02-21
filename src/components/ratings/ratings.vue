<template>
  <div>i am ratings</div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
  export default {
    porps: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        ratings: {}
      };
    },
    created() {
      this.$http.get('/api/ratings').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.ratings = response.data;
          console.log(this.ratings);
        }
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

