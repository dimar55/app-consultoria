<template>
   <div class="ctn">
        <div class="img_logo"> 
            <img src="../assets/universidad_simon_bolivar.png" alt="">
        </div>

        <div class="title">
            <h1>REGISTRAR USUARIO</h1>
        </div>

        <div class="opciones">
            <div class="formulario">
                <p>NOMBRE COMPLETO</p>
                <input type="text">
                <p>FECHA DE NACIMIENTO</p>
                <input type="text">
                <p>TIPO DE DOCUMENTO</p>
                <input type="checkbox" name="" id="">
                <p>NUMERO DE DOCUMENTO</p>
                <input type="number">
                <p>TELEFONO</p>
                <input type="number">
                <p>NICK</p>
                <input type="text">
                <p>PASSWORD</p>
                <input type="password">
                <p>TIPO DE USUARIO</p>
                <input type="checkbox">
                <p>CORREO INSTITUCIONAL</p>
                <input type="email">
                <p>CÓDIGO INSTITUCIONAL</p>
                <input type="text">
                <p>PROGRAMA</p>
                <input type="checkbox">
                
            </div>
        </div>
    </div> 
</template>

<script>
     export default {
        name: 'RegistrarUsuario',
  }
</script>
