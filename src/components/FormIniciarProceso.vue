<template>
    <div class="ctn-iniciar">
        <div class="formulario">
            <h1>INICIAR PROCESO</h1>
            <div class="campos">
                <p>NOMBRE DEL PROCESO:</p>
                <input type="text">
            </div>
            <div class="campos">
                <p>IDENTIFICACIÓN DE LA EMPRESA:</p>
                <select></select>
            </div>
            <div class="campos">
                <p>REPRESENTANTE EMPRESARIAL:</p>
                <input type="text">
            </div>
            <div class="ctn-table">
                <p>RESPONSABLES:</p>
                <table class="Table">
                    <thead>
                        <tr>
                            <th>NOMBRE</th>
                            <th>ROL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>cell1_1</td>
                            <td>cell2_1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <img src="../assets/icon_add_user.png">
            <div>
                <button class="boton mbttm" >REGISTRAR</button>
            </div>
        </div>
      
        </div>

</template>


<script>

    export default{
        name: 'FormIniciarProceso',
    }
</script>

<style>

.ctn-iniciar {
    margin: auto;
    margin-top: 100px;
    width: 600px;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, #0C853B 0%, rgba(37, 145, 6, 0.85) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 36px;
    font-size: 25px;
}

.ctn-iniciar h1 {
    margin: 20px;

}

.ctn-iniciar p {
    text-align: start;
    margin-left: 45px;
    margin-top: 40px;
    font-weight: bold;

}

.formulario img{
    padding-top: 20px;
}

.campos select {
    display: inline-block;
    width: 440px;
    cursor: pointer;
    height: 60px;
    outline: 0;
    border: 0;
    border-radius: 25px;
    background: white;
    margin-top: 20px;
    margin-left: 35px;
    color: #7b7b7b;
    font-size: 1em;
    color: black;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.25s ease;
}

.ctn-table p{
    padding-bottom: 20px;
}

table.Table {
  background-color: #FFFFFF;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}
table.Table td, table.Table th {
  border: 2px solid #000000;
  padding: 15px 10px;
}
table.Table tbody td {
  font-size: 30px;
  color: #000000;
}
table.Table thead {
  background: #EFBF25;
  background: -moz-linear-gradient(top, #f3cf5b 0%, #f0c53a 66%, #EFBF25 100%);
  background: -webkit-linear-gradient(top, #f3cf5b 0%, #f0c53a 66%, #EFBF25 100%);
  background: linear-gradient(to bottom, #f3cf5b 0%, #f0c53a 66%, #EFBF25 100%);
}
table.Table thead th {
  font-size: 25px;
  font-weight: bold;
  color: #FFFFFF;
}
table.Table tfoot td {
  font-size: 25px;
}
table.Table tfoot .links {
  text-align: right;
}
table.Table tfoot .links a{
  display: inline-block;
  background: #1C6EA4;
  color: #FFFFFF;
  padding: 10px 15px;
  border-radius: 5px;
}
</style>