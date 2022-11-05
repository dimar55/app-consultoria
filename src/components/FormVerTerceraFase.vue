<template>
    
    <div class="ctnProDesarrollo">
        <div class="titular">
            <h1>FASE DE CIERRE</h1>
            <p>CONTROL DE DISEÑO DE LA CONSULTORÍA EMPRESARIAL</p>
        </div>
        <div class="campos_proceso inputFase">
            <p>Nombre del programa social o consultoría:</p>
            <input type="text" disabled >
        </div>
        <div class="campos_proceso inputFase">
            <p>Link del Cronograma:</p>
            <input type="text" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Elemento de entrada:</p>
            <input type="text" disabled>
        </div>
  
        <div class="titular">
            <h1>REVISIÓN DEL DISEÑO</h1>
        </div>

        <div class="campos_proceso inputFase">
            <p>Definición de Directriz:</p>
            <input type="text" disabled >
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo General:</p>
            <input type="text" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 1:</p>
            <input type="text" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 2:</p>
            <input type="text" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 3:</p>
            <input type="text" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 4:</p>
            <input type="text" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 5:</p>
            <input type="text" disabled>
        </div>



        <div class="ctn-tabla">
            <p>FASES PRINCIPALES DE LA CONSULTORÍA </p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>DESCRIPCIÓN</th>
                        <th>LINK EVIDENCIA</th>
                        <th>AVANCE</th>
                        <th>ELIMINAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><img src="../assets/iconX.png" alt="">
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div class="campos_proceso inputFase">
            <p>COMENTARIO:</p>
            <input type="text" disabled>
        </div>
        <form class="btn">
            <button class="boton">REGISTRAR</button>
        </form>
    </div>
</template>


<script>
export default{
    name: 'FormVerTerceraFase'
}
</script>