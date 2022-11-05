<template>
    <div class="opcionesUsu">
            <div class="ctn_opciones">
                <h1>VER PROCESOS</h1>
                <img src="../assets/portapapeles.png" alt="">
                <button class="boton" @click="go_VerProceso">VER</button>
            </div>
        </div>
</template>

<script>
export default {
    name: 'OpcionesUsu',
    methods: {
        go_VerProceso(){
            this.$router.push({ path: '/VerProcesosUsu' });
        }
    } 
    }

</script>

<style>
.opcionesUsu{
        margin-top: 100px;
        display: grid;
        align-content: center;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }
</style>