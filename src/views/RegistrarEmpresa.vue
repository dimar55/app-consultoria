<template>
    <Header></Header>
    <MenuLateral></MenuLateral>
    <FormEmpresa></FormEmpresa>
    <Footer></Footer>
 </template>
 
 <script>
 
     import Header from '@/components/Header'
     import MenuLateral from  '@/components/MenuLateral'
     import FormEmpresa from '@/components/FormEmpresa'
     import Footer from '@/components/Footer'
 
      export default {
         name: 'RegistrarEmpresa',
         components: {
             Header,
             MenuLateral,
             FormEmpresa,
             Footer
         }
   }
 </script>
 