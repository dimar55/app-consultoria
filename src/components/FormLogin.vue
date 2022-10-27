<template>
        <div class="login">
            <div class="formulario">
                <div class="titleLogin">
                    <h1>INICIO DE SESIÓN</h1>
                </div>
                <div class="fields">
                    <h3>USUARIO:</h3>
                    <input type="text">
                    <h3>CONTRASEÑA:</h3>
                    <input type="password">
                    <div class="btn">
                        <button class="boton">INICIAR SESIÓN</button>
                    </div>
                </div>
            </div>
        </div>    
    
</template>

<script>
    export default {
    name: 'FormLogin'
    }
</script>

<style>

    .login{
        height:100%;
        width: 100%;
        background: linear-gradient(#0C853B, #24A321);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;   
    }

    .titleLogin{
        text-align: center;
        font-size: 25px;
        padding-bottom: 90px;
    }

    .fields{
        font-size: 30px;

    } 
    
   .formulario input{
        width: 430px;
        height: 60px;
        border-radius: 25px;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .btn{
        align-content: center;
        justify-content: center;
        text-align: center;
      
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

