<template>
  <div>i am seller</div>
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
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = response.data;
          console.log(this.seller);
        }
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

