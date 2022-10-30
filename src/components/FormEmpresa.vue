<template>
   <div class="ctn-registrar">
        <div>
            <h1>REGISTRAR EMPRESA</h1>
        </div>
        <form class="formUsu">
            <div class="campos_usu">
                <p>NOMBRE DE LA EMPRESA:</p>
                <input type="text">
            </div>
            <div class="campos_usu">
                <p>TIPO DE DOCUMENTO:</p>
                <Select>
                </Select>
            </div>
            <div class="campos_usu">
                <p>CODIGO DE LA EMPRESA:</p>
                <input type="number">
            </div>
            <div class="campos_usu">
                <p>CELULAR EMPRESA:</p>
                <input type="number">
            </div>
            <div class="campos_usu">
                <p>TELEFONO:</p>
                <input type="number">
            </div>
            <div class="campos_usu">
                <p>CODIGO USUARIO:</p>
                <input type="text">
            </div>
            <button class="boton mbttm" type="submit">REGISTRAR</button>
        </form>
    </div>
</template>


<script>
export default {
    name: 'FormEmpresa',
    }
</script>