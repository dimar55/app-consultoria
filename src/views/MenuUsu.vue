<template>
    <div class="ctn">
        <Header></Header>
        <MenuLateralUsu></MenuLateralUsu>
        <OpcionesUsu></OpcionesUsu>
        <Footer></Footer>
    </div> 

</template>


<script>
    import Header from '@/components/Header'
    import MenuLateralUsu from  '@/components/MenuLateralUsu'
    import OpcionesUsu from '@/components/OpcionesUsu'
    import Footer from '@/components/Footer'

     export default {
        name: 'MenuUsu',
        components: {
            Header,
            MenuLateralUsu,
            OpcionesUsu,
            Footer
        }
  }
</script>