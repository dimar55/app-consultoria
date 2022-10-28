<template>
    <Header></Header>
    <MenuLateral></MenuLateral>
    <FormDocumento></FormDocumento>
    <Footer></Footer>

</template>


<script>
    import Header from '@/components/Header'
    import MenuLateral from  '@/components/MenuLateral'
    import FormDocumento from '@/components/FormDocumento'
    import Footer from '@/components/Footer'
   

    export default {
        name: 'CrearDocumento',
        components: {
            Header,
            MenuLateral,
            FormDocumento,
            Footer
        }
  }
</script>