<template>
    <div class="ctn">
       <!--  <div class="img_logo"> 
            <img src="../assets/universidad_simon_bolivar.png" alt="">
        </div> -->
        <Header></Header>
        <Options></Options>
       <!-- <div class="title">
            <h1>CONSULTORÍA JURÍDICA</h1>
        </div>

        <div class="opciones">
            <div class="ctn_opciones">
                <h1>REGISTRO DE USUARIO</h1>
                <img src="../assets/perfil.png" alt="">
                <button class="boton">REGISTRAR</button>
            </div>
            <div class="ctn_opciones">
                <h1>REGISTRO DE EMPRESA</h1>
                <img src="../assets/rascacielos.png" alt="">
                <button class="boton">REGISTRAR</button>
            </div>
            <div class="ctn_opciones">
                <h1>REGISTRO DE PROCESO</h1>
                <img src="../assets/ley.png" alt="">
                <button class="boton">REGISTRAR</button>
            </div>
        </div> -->
    </div> 

</template>


<script>
    import Header from '@/components/Header'
    import Options from  '@/components/Options'

     export default {
        name: 'Menu',
        components: {
            Header,
            Options
        }
  }
</script>

<style>

    .ctn{
        text-align: center;
    }

    .title{
        box-sizing: border-box;
        width: 100%;
        height: 100px;
        left: 0px;
        top: 159px;
        background: #0C853B;
        border: 1px solid #000000;
        color: white;
        font-size: 30px;
        padding-top:10px ;
    }

    .opciones{
        margin-top: 100px;
        display: flex;
        justify-content: space-evenly;
    }

    .ctn_opciones{
        color: white;
        font-weight: bold;
        width: 320px;
        height: 541px;
        background: linear-gradient(180deg, #0C853B 0%, rgba(37, 145, 6, 0.85) 100%);
        box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
        border-radius: 36px;
    }

    .ctn_opciones img {
        margin: 30px;
    }

    .ctn_opciones h1 {
        margin-top: 20px;
    }

    .boton{
        height: 55px;
        width: 250px;
        border-radius: 25px;
        background-color: #EFBF25;
        border: none;
        font-size: 25px;
        color: white;
        font-weight: bold;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 20px;
    }
   



</style>