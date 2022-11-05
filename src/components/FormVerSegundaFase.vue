<template>
     <div class="ctnProDesarrollo">
        <div class="titular">
            <h1>FASE DE DESARROLLO</h1>
            <p>DATOS DE GESTIÓN DEL PROCESO DE CONSULTORÍA</p>
        </div>
        <div class="campos_proceso inputFase">
            <p>Nombre de la Microempresa:</p>
            <input type="text" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Sector de la empresa:</p>
            <input type="text" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Área o proceso:</p>
            <input type="text" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>programa academico:</p>
            <input type="text" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Coordinador de proyección social:</p>
            <input type="text" disabled>
        </div>
        <div class="ctn-tabla">
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
  
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
                    <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="ctn-firma">
            <p>FIRMAR</p>
            <input type="checkbox">
        </div>
        <form class="btn">
            <button class="boton">REGISTRAR</button>
        </form>
    </div>
</template>

<script>
    export default{
        name: 'FormVerSegundaFase'
    }
</script>

