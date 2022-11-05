<template>
    <div class="ctnProEncuentro">
        <div class="titular">
            <h1>FASE DE ENCUENTRO</h1>
        </div>

        <div class="campos_proceso">
            <p>Descripción General:</p>
            <textarea name="" id="" cols="30" rows="10" disabled></textarea>
        </div>
        <div class="campos_proceso">
            <p>Personal responsable del procedimiento:</p>
            <input type="text" disabled>
        </div>
        <div class="campos_proceso">
            <p>Observaciones:</p>
            <textarea name="" id="" cols="30" rows="10" disabled></textarea>
        </div>

        <div class="ctn-tabla">
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
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
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
                        <td></td>
                        <td></td>
                       
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="ctn-tabla">
            <p>Paramentros de Control</p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>DESCRIPCIÓN</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td></td>
                    </tr>
                </tbody>
            </table>
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
            <p>Firmas</p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>NOMBRE</th>
                        <th>ROL</th>
                        <th>FIRMA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>x</td>

                    </tr>
                </tbody>
            </table>
        </div>
        <div>

        </div>
        <div class="ctn-firma">
            <p>FIRMAR</p>
            <input type="checkbox">
        </div>


        <form class="btn">
            <button class="boton">FIRMAR</button>
        </form>

    </div>
</template>


<script>
export default{
    name: 'FormVerPrimeraFase',
}
</script>

<style>

.ctn-firma{
 display: flex;
 align-items: baseline;
}
 .ctn-firma p{
    margin: 40px;
    font-size: 35px;
 }

 .ctn-firma input{
    width: 30px;
    height: 30px;
 }
 
</style>