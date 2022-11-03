<template>
    <Header></Header>
    <MenuLateral></MenuLateral>
    <FormSegundaFase></FormSegundaFase>
    <Footer></Footer>
</template>

<script>
 import Header from '@/components/Header';
 import MenuLateral from '@/components/MenuLateral';
 import FormSegundaFase from '@/components/FormSegundaFase';
 import Footer from '@/components/Footer';

export default{
    name: 'SegundaFase',
    components: {
        Header,
        MenuLateral,
        FormSegundaFase,
        Footer
    }
}
</script>