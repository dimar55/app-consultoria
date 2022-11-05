<template>
    <Header></Header>
    <MenuLateral></MenuLateral>
    <FormVerSegundaFase></FormVerSegundaFase>
    <Footer></Footer>
</template>

<script>
 import Header from '@/components/Header';
 import MenuLateral from '@/components/MenuLateral';
 import FormVerSegundaFase from '@/components/FormVerSegundaFase';
 import Footer from '@/components/Footer';

export default{
    name: 'VerSegundaFase',
    components: {
        Header,
        MenuLateral,
        FormVerSegundaFase,
        Footer
    },
 
    
}
</script>

