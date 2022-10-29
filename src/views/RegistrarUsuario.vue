<template>
   <Header></Header>
   <MenuLateral></MenuLateral>
   <FormUsuario></FormUsuario>
   <Footer></Footer>
</template>

<script>

    import Header from '@/components/Header'
    import MenuLateral from  '@/components/MenuLateral'
    import FormUsuario from '@/components/FormUsuario'
    import Footer from '@/components/Footer'

     export default {
        name: 'RegistrarUsuario',
        components: {
            Header,
            MenuLateral,
            FormUsuario,
            Footer
        }
  }
</script>
