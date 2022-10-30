<template>
    <div class="opciones">
            <div class="ctn_opciones">
                <h1>REGISTRO DE USUARIO</h1>
                <img src="../assets/perfil.png" alt="">
                <button class="boton" @click="go_RegistrarUsuario">REGISTRAR</button>
            </div>
            <div class="ctn_opciones">
                <h1>REGISTRO DE EMPRESA</h1>
                <img src="../assets/rascacielos.png" alt="">
                <button class="boton" @click="go_RegistrarEmpresa">REGISTRAR</button>
            </div>
            <div class="ctn_opciones">
                <h1>REGISTRO DE PROCESO</h1>
                <img src="../assets/ley.png" alt="">
                <button class="boton">REGISTRAR</button>
            </div>

            <div class="ctn_opciones">
                <h1>VER PROCESOS</h1>
                <img src="../assets/portapapeles.png" alt="">
                <button class="boton">VER</button>
            </div>

            <div class="ctn_opciones">
                <h1>AJUSTAR FECHAS</h1>
                <img src="../assets/calendario.png" alt="">
                <button class="boton" @click="go_AjustarFechas">AJUSTAR</button>
            </div>

            <div class="ctn_opciones">
                <h1>CREAR DOCUMENTO</h1>
                <img src="../assets/carnet-de-identidad.png" alt="">
                <button class="boton" @click="go_crearDocumento">CREAR</button>
            </div>

            <div class="ctn_opciones">
                <h1>CREAR PROGRAMA</h1>
                <img src="../assets/educacion.png" alt="">
                <button class="boton" @click="go_crearPrograma">CREAR</button>
            </div>

        </div>
</template>

<script>
    export default {
    name: 'Opciones',
    methods: {
        go_crearDocumento(){
            this.$router.push({ path: '/CrearDocumento' });
        },

        go_crearPrograma(){
            this.$router.push({ path: '/CrearPrograma' });
        },
        go_AjustarFechas(){
            this.$router.push({ path: '/AjustarFecha' });
        },
        go_RegistrarUsuario(){
            this.$router.push({ path: '/RegistrarUsuario' });
        },
        go_RegistrarEmpresa(){
            this.$router.push({ path: '/RegistrarEmpresa' });
        }
       



    } 
    }


</script>

<style>
.opciones{
        margin-top: 100px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
        align-content: center;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    .opciones h1 {
        font-size: 40px;
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