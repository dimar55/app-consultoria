<template>
    <Header></Header>
    <MenuLateral></MenuLateral>
    <FormVerTerceraFase></FormVerTerceraFase>
    <Footer></Footer>
</template>


<script>
 import Header from '@/components/Header';
 import MenuLateral from '@/components/MenuLateral';
 import FormVerTerceraFase from '@/components/FormVerTerceraFase';
 import Footer from '@/components/Footer';


    export default{
        name: 'TerceraFase',
        components:{
            Header,
            MenuLateral,
            FormVerTerceraFase,
            Footer
        } 
    }
</script>