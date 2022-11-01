<template>
    <Header></Header>
    <MenuLateral></MenuLateral>
    <FormIniciarProceso></FormIniciarProceso>
    <Footer></Footer>
</template>


<script>
    import Header from '@/components/Header'
    import MenuLateral from  '@/components/MenuLateral'
    import FormIniciarProceso from '@/components/FormIniciarProceso'
    import Footer from '@/components/Footer'

    export default {
        name: 'IniciarProceso',
        components: {
            Header,
            MenuLateral,
            FormIniciarProceso,
            Footer
        }
  }

</script>