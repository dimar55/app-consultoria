<template>
<div class="ctnProEncuentro">
    <div class="titular">
        <h1>FASE DE ENCUENTRO</h1>
    </div>

    <div class="campos_proceso">
        <p>Descripción General:</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div class="campos_proceso">
        <p>Personal responsable del procedimiento:</p>
        <input type="text">
    </div>
    <div class="campos_proceso">
        <p>Observaciones:</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>

    <div class="ctn-tabla" >
        <p>EPP (Elementos de protección personal) requeridos </p>
        <table class="Table">
                    <thead>
                        <tr>
                            <th>NOMBRE</th>
                            <th>DESCRIPCIÓN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Soy el elemento</td>
                            <td>Soy la Descripción</td>
                        </tr>
                    </tbody>
                </table>
                <div class="iconAdd">
                    <img src="../assets/icons_add.png" alt="">
                </div>
     
    </div>

    <div class="ctn-tabla">
        <p>Equipos y Herramientas </p>
        <table class="Table">
                    <thead>
                        <tr>
                            <th>NOMBRE DEL EQUIPO</th>
                            <th>DESCRIPCIÓN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nombre del equipo</td>
                            <td>Soy la Descripción</td>
                        </tr>
                    </tbody>
                </table>
                <div class="iconAdd">
                    <img src="../assets/icons_add.png" alt="">
                </div>
    </div>

    <div class="ctn-tabla">
        <p>Paramentros de Control</p>
        <table class="Table">
                    <thead>
                        <tr>
                            <th>NOMBRE DEL PARAMENTRO</th>
                            <th>DESCRIPCIÓN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>soy el Nombre del equipo</td>
                            <td>Soy la Descripción</td>
                        </tr>
                    </tbody>
                </table>
                <div class="iconAdd">
                    <img src="../assets/icons_add.png" alt="">
                </div>
    </div>

    <div class="ctn-tabla">
        <p>Actividad</p>
        <table class="Table">
                    <thead>
                        <tr>
                            <th>NOMBRE</th>
                            <th>DESCRIPCIÓN</th>
                            <th>CALIDAD</th>
                            <th>SEGURIDAD</th>
                            <th>AMBIENTE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>soy el Nombre</td>
                            <td>Soy la Descripción</td>
                            <td>soy la calidad</td>
                            <td>Soy la seguridad</td>
                            <td>Soy el ambiente</td>
                        </tr>
                    </tbody>
                </table>
                <div class="iconAdd">
                    <img src="../assets/icons_add.png" alt="">
                </div>
    </div>
    <div class="btn">
        <button class="boton">REGISTRAR</button>
    </div>

</div>
</template>

<script>
export default{
    name: 'FormPrimeraFase'
}
</script>


<style>
.ctnProEncuentro {
    margin: auto;
    margin-top: 100px;
    width: 850px;
    color: white;
    justify-content: center;
    background: linear-gradient(180deg, #0C853B 0%, rgba(37, 145, 6, 0.85) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 36px;
    font-size: 25px;
}

.titular h1 {
    padding: 30px;
    font-size: 60px;
    text-align: center;
}

.campos_proceso  {
    margin: 60px;
    text-align: center;
}

.campos_proceso p{
    text-align: left;
    padding-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
}

.campos_proceso textarea{
    width: 700px;
    height: 300px;
    border: none;
    border-radius: 25px;
    padding: 20px;
    font-size: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.campos_proceso input{
    width: 700px;
    height: 30px;
    border: none;
    border-radius: 25px;
    padding: 20px;
    font-size: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.ctn-tabla{
    margin: 40px;
}

.ctn-tabla p {
    padding-bottom: 20px;
}

.iconAdd{
   margin-top: 20px;
    text-align: center;
}

.btn{
    padding-bottom: 30px;
}


</style>