<template>
    <Header></Header>
    <MenuLateral></MenuLateral>
    <FormPrimeraFase></FormPrimeraFase>
    <Footer></Footer>
</template>

<script>

import Header from '@/components/Header';
import MenuLateral from '@/components/MenuLateral';
import FormPrimeraFase from '@/components/FormPrimeraFase';
import Footer from '@/components/Footer';

export default{
    name: 'PrimeraFase',
    components: {
        Header,
        MenuLateral,
        FormPrimeraFase,
        Footer
    }
}
</script>