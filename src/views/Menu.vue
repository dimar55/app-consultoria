<template>
    <div class="ctn">
      
        <Header></Header>
        <MenuLateral></MenuLateral>
        <Opciones></Opciones>
        <Footer></Footer>
      
    </div> 

</template>


<script>
    import Header from '@/components/Header'
    import MenuLateral from  '@/components/MenuLateral'
    import Opciones from '@/components/Opciones'
    import Footer from '@/components/Footer'

     export default {
        name: 'Menu',
        components: {
            Header,
            MenuLateral,
            Opciones,
            Footer
        }
  }
</script>

