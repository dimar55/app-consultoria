<template>
    <Header></Header>
    <MenuLateral></MenuLateral>
    <FormFechas></FormFechas>
    <Footer></Footer>

</template>


<script>
    import Header from '@/components/Header'
    import MenuLateral from  '@/components/MenuLateral'
    import FormFechas from '@/components/FormFechas'
    import Footer from '@/components/Footer'

    export default {
        name: 'AjustarFecha',
        components: {
            Header,
            MenuLateral,
            FormFechas,
            Footer
        }
    }
</script>


<style>
</style>