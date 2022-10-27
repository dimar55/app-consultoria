<template>
    <div>
       <div class="title">
            <div class="btn_menu">
                    <label for="btn-menu"><img src="../assets/icon_menu.png" alt=""/></label>
                </div> 
                <div>
                    <h1>CONSULTORÍA JURÍDICA</h1>
                </div>  
                  
        </div>

        <input type="checkbox" id="btn-menu">

        <div class="container-menu">
            <div class="cont-menu">
                <nav>
                    <a href="">Registrar Usuario</a>
                    <a href="">Registrar Empresa</a>
                    <a href="">Registrar Proceso</a>
                    <a href="">Ver Proceso</a>
                    <a href=""> Acomodar Fechas</a>
                </nav>
            <label for="btn-menu"><img src="../assets/icons_X.png" alt=""></label>
            </div>
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
        </div>
    </div>
</template>

<script>
    export default {
    name: 'Options'
    }
</script>


<style>

    .ctn{
        text-align: center;
    }

    .title{
        display: flex;
        justify-content: space-evenly;
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

    #btn-menu{
        display: none;
    }

    .container-menu{
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100vh;
        top: 0; left: 0;
        transition: all 500ms ease;
        opacity: 0;
        visibility: hidden;
    }

    #btn-menu:checked ~ .container-menu{
        opacity: 1;
        visibility: visible;
    }

    .cont-menu{
        width: 100%;
        max-width: 250px;
        background: #1c1c1c;
        height: 100vh;
        position: relative;
        transition: all 500ms ease;
    }

    .cont-menu nav{
        transform: translateY(15%);
    }
    .cont-menu nav a{
        display: block;
        text-decoration: none;
        padding: 20px;
        color: #c7c7c7;
        border-left: 5px solid transparent;
        transition: all 400ms ease;
    }

    .cont-menu nav a:hover{
        border-left: 5px solid #c7c7c7;
        background: #1f1f1f;

    }

    .cont-menu label{
        position: absolute;
        right: 5px;
        left: 10px;
        cursor: pointer;
    }


</style>