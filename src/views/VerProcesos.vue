<template>
    <Header></Header>
    <MenuLateral></MenuLateral>
    <FormVerProcesos></FormVerProcesos>
    <Footer></Footer>
</template>



<script>
import Header from '@/components/Header'
import MenuLateral from '@/components/MenuLateral'
import FormVerProcesos from '@/components/FormVerProcesos'
import Footer from '@/components/Footer'

export default{
    name: 'VerProcesos',
    components: {
        Header,
        MenuLateral,
        FormVerProcesos,
        Footer
    }
}
</script>