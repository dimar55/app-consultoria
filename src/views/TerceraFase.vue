<template>
    <Header></Header>
    <MenuLateral></MenuLateral>
    <FormTerceraFase></FormTerceraFase>
    <Footer></Footer>
</template>


<script>
 import Header from '@/components/Header';
 import MenuLateral from '@/components/MenuLateral';
 import FormTerceraFase from '@/components/FormTerceraFase';
 import Footer from '@/components/Footer';


    export default{
        name: 'TerceraFase',
        components:{
            Header,
            MenuLateral,
            FormTerceraFase,
            Footer
        } 
    }
</script>