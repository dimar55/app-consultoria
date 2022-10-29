<template>
    <div class="ctn-crear">
        <div>
            <h1>AJUSTAR FECHAS</h1>
            <div class="campos">
            <p>Fecha límite de registro de procesos</p>
            <input type="date">
        </div>
        <div class="campos">
            <p>Fecha de inicio de los procesos</p>
            <input type="date">
        </div> 
        <div class="campos">
            <p>Fecha final de los procesos</p>
            <input type="date">
        </div>

        <button class="boton">GUARDAR</button>
    </div>
    </div>
</template>

<script>
    

    export default{
        name: 'FormFecha',
    }

</script>



<style>
.campos input {
    width: 430px;
    height: 60px;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 35px;
    font-size: 30px;
    padding-left: 10px;
}


</style>