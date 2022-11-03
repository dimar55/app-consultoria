<template>
    <div class="ctnProDesarrollo">
        <div class="titular">
            <h1>FASE DE DESARROLLO</h1>
            <p >DATOS DE GESTIÓN DEL PROCESO DE CONSULTORÍA</p>
        </div>
        <div class="campos_proceso inputFase">
            <p>Nombre de la Microempresa:</p>
            <input type= "text" >
        </div>
        <div class="campos_proceso inputFase">
            <p>Sector de la empresa:</p>
            <input type="text" >
        </div>
        <div class="campos_proceso inputFase">
            <p>Área o proceso:</p>
            <input type="text">
        </div>
        <div class="campos_proceso inputFase">
            <p>programa academico:</p>
            <input type="text" >
        </div>
        <div class="campos_proceso inputFase">
            <p>Coordinador de proyección social:</p>
            <input type="text" >
        </div>
        <div class="ctn-tabla" >
            <p>GESTIÓN DE ALIADOS INSTITUCIONALES </p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>NOMBRE DEL CONTACTO</th>
                        <th>CARGO</th>
                        <th>CORREO ELECTRÓNICO</th>
                        <th>CELULAR</th>
                        <th>DESCRIPCIÓN DEL APORTE O RESPONSABILIDAD</th>
                        <th>VALOR DE ESTIMACIÓN DEL APORTE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Soy el nombres</td>
                        <td>Soy cargo</td>
                        <td>Soy el correo electronico</td>
                        <td>Soy el celular</td>
                        <td>Soy la descripcion del aporte o responsabilidad</td>
                        <td>Soy el valor de estimación del aporte</td>
                    </tr>
                </tbody>
            </table>
            <div class="iconAdd">
                <img src="../assets/icons_add.png" alt="">
            </div>
        </div>
        <div class="ctn-tabla">
            <p>EVALUACIÓN DEL IMPACTO </p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>CALIFICACIÓN CUANTITATIVA DEL IMPACTO</th>
                        <th>CALIFICACIÓN CUALITATIVA DEL IMPACTO</th>
                        <th>ASPECTOS POR MEJORAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>soy la calificacion cuantitavia del impacto</td>
                        <td>soy la calificacion cualitavia del impacto</td>
                        <td>soy los aspectos por mejorar</td>
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
    name: 'FormSegundaFase'
}
</script>

<style>
.ctnProDesarrollo {
    margin: auto;
    margin-top: 100px;
    width: 1200px;
    color: white;
    background: linear-gradient(180deg, #0C853B 0%, rgba(37, 145, 6, 0.85) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 36px;
    font-size: 25px;
}

.campos_proceso{
    justify-content: right;
    text-align: left;
}

.inputFase input{
    width: 1000px;
}

.titular p{
    text-align: center;
    font-weight: bold;
    font-size: 30px;
}

.ctn-tabla p{
 font-weight: bold;
}

</style>