<template>
    <Header></Header>
    <MenuLateral></MenuLateral>
    <FormPrograma></FormPrograma>
    <Footer></Footer>
</template>

<script>
    import Header from '@/components/Header'
    import MenuLateral from  '@/components/MenuLateral'
    import FormPrograma from '@/components/FormPrograma'
    import Footer from '@/components/Footer'
   

    export default {
        name: 'CrearPrograma',
        components: {
            Header,
            MenuLateral,
            FormPrograma,
            Footer
        }
  }
</script>