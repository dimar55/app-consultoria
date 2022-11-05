<template>
    <Header></Header>
    <MenuLateralUsu></MenuLateralUsu>
    <FormVerProcesosUsu></FormVerProcesosUsu>
    <Footer></Footer>
</template>



<script>
import Header from '@/components/Header'
import MenuLateralUsu from '@/components/MenuLateralUsu'
import FormVerProcesosUsu from '@/components/FormVerProcesosUsu'
import Footer from '@/components/Footer'

export default{
    name: 'VerProcesosUsu',
    components: {
        Header,
        MenuLateralUsu,
        FormVerProcesosUsu,
        Footer
    }
}
</script>