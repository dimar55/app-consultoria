<template>
    <div class="ctn-registrar">
            <div>
                <h1>REGISTRAR USUARIO</h1>
            </div>
            <div class="formUsu">
                <div class="campos_usu">
                    <p>NOMBRE COMPLETO:</p>
                    <input type="text">
                </div>
                <div class="campos_usu">
                    <p>FECHA DE NACIMIENTO:</p>
                    <input type="text">
                </div>
                <div class="campos_usu">
                    <p>TIPO DE DOCUMENTO:</p>
                    <select>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>

                </div>
                <div class="campos_usu">
                    <p>NUMERO DE DOCUMENTO:</p>
                    <input type="number">
                </div>
                <div class="campos_usu">
                    <p>TELEFONO:</p>
                    <input type="number">
                </div>
                <div class="campos_usu">
                    <p>NICK:</p>
                    <input type="text">
                </div>
                <div class="campos_usu">
                    <p>PASSWORD:</p>
                    <input type="password">
                </div>
                <div class="campos_usu">
                    <p>TIPO DE USUARIO:</p>
                    <select>
                        <option>ESTUDIANTE</option>
                        <option>PROFESOR</option>
                        <option>EMPRESA</option>
                    </select>

                </div>
                <div class="campos_usu">
                    <p>CORREO INSTITUCIONAL:</p>
                    <input type="email">
                </div>
                <div class="campos_usu">
                    <p>CÓDIGO INSTITUCIONAL:</p>
                    <input type="text">
                </div>
                <div class="campos_usu">
                    <p>PROGRAMA:</p>
                    <select>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <button class="boton">REGISTRAR</button>
            </div>
    </div> 
</template>


<script>
       export default{
        name: 'FormUsuario',
    }
</script>


<style>
    .ctn-registrar{
        margin: auto;
        margin-top: 100px;
        width: 850px;
        height: 1130px;
        text-align: center;
        color: white;
        justify-content: center;
        background: linear-gradient(180deg, #0C853B 0%, rgba(37, 145, 6, 0.85) 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 36px;
        font-size: 25px;
    }

    .ctn-registrar h1{
      margin: 40px;
      padding-top: 40px;
    }

    .campos_usu{
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding-left: 25px;
        padding-right: 25px;
        font-weight: bold;
    }
    .formUsu input {
    width: 430px;
    height: 60px;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
    font-size: 30px;
    padding-left: 10px;
}

 
.campos_usu select{
	display: inline-block;
	width: 440px;
	cursor: pointer;
  	height: 60px;
  	outline: 0; 
  	border: 0;
	border-radius: 25px;
	background: white;
    margin-top: 20px;
	color: #7b7b7b;
	font-size: 1em;
	color: black;
	border:2px solid rgba(0,0,0,0.2);
    border-radius: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.25s ease;
}
 
.campos_usu select:hover{
	background: #B1E8CD;
}
 




</style>