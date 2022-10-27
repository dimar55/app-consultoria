<template>
  <div class="ctn_login">
    <div class="logo">
            <img src="../assets/consultoria.png" alt="">
        </div>
    <FormLogin></FormLogin>
  </div>
   
</template>


<script>
    import FormLogin from '@/components/FormLogin'

    export default {
        name: 'Login',
        components: {
        FormLogin
  }
}
</script>

<style>
.ctn_login{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
   
}

.logo{
  margin-right: 8%;
  margin-left: 8%;
}

  


</style>
