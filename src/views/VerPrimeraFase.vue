<template>
    <Header></Header>
    <MenuLateral></MenuLateral>
    <FormVerPrimeraFase></FormVerPrimeraFase>
    <Footer></Footer>
</template>


<script>
 import Header from '@/components/Header';
 import MenuLateral from '@/components/MenuLateral';
 import FormVerPrimeraFase from '@/components/FormVerPrimeraFase';
 import Footer from '@/components/Footer';

export default{
    name: 'VerPrimeraFase',
    components: {
        Header,
        MenuLateral,
        FormVerPrimeraFase,
        Footer
    },
   
}
</script>