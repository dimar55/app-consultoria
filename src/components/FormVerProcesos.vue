<template>
    <div class="ctn-consultar">
        <div class="formpro">
            <h1>CONSULTAR PROCESOS</h1>
            <div class="ctn-buscar">
                <input type="text">
                <button class="boton">BUSCAR</button>
            </div>
            <div class="seleccion">
                <div class="campos_pro">
                    <input type="checkbox">
                    <p>NUMERO DEL PROCESO</p> 
                </div>
                <div class="campos_pro">
                    <input type="checkbox"> 
                    <p>NOMBRE DEL PROCESO</p>
                </div>
                <div class="campos_pro">
                    <input type="checkbox"> 
                    <P>CODIGO DE LA EMPRESA</P>   
                </div>
            </div>
        </div>

       
 <div class="results">
    <div class="consultas">
            <div class="campos_consulta">
                <p class="campo_consulta">ID DEL PROCESO: </p>
                <p>1235</p>
            </div>
            <div class="campos_consulta">
                <p class="campo_consulta">CODIGO DE LA EMPRESA: </p>
                <p>145678</p>
            </div>
            <div class="campos_consulta">
                <p class="campo_consulta">NOMBRE DEL PROCESO: </p>
                <p>SOLICITUD JUDICIAL X</p>
            </div>
            <div class="campos_consulta">
                <p class="campo_consulta">FASE DEL PROCESO: </p>
                <p>FASE DE ENCUENTRO</p>
            </div>
            <div class="campos_consulta">
                <p class="campo_consulta">FECHA DE INICIO: </p>
                <p>2022/10/27</p>
            </div>
                <button class="boton_proceso">VER DETALLLES</button>
                <button class="boton_proceso">REGISTRAR FASE</button>
        </div>
    <div class="consultas">
            <div class="campos_consulta">
                <p class="campo_consulta">ID DEL PROCESO: </p>
                <p>1235</p>
            </div>
            <div class="campos_consulta">
                <p class="campo_consulta">CODIGO DE LA EMPRESA: </p>
                <p>145678</p>
            </div>
            <div class="campos_consulta">
                <p class="campo_consulta">NOMBRE DEL PROCESO: </p>
                <p>SOLICITUD JUDICIAL X</p>
            </div>
            <div class="campos_consulta">
                <p class="campo_consulta">FASE DEL PROCESO: </p>
                <p>FASE DE ENCUENTRO</p>
            </div>
            <div class="campos_consulta">
                <p class="campo_consulta">FECHA DE INICIO: </p>
                <p>2022/10/27</p>
            </div>
                <button class="boton_proceso">VER DETALLLES</button>
                <button class="boton_proceso">REGISTRAR FASE</button>
        </div>
        <div class="consultas">
            <div class="campos_consulta">
                <p class="campo_consulta">ID DEL PROCESO: </p>
                <p>1235</p>
            </div>
            <div class="campos_consulta">
                <p class="campo_consulta">CODIGO DE LA EMPRESA: </p>
                <p>145678</p>
            </div>
            <div class="campos_consulta">
                <p class="campo_consulta">NOMBRE DEL PROCESO: </p>
                <p>SOLICITUD JUDICIAL X</p>
            </div>
            <div class="campos_consulta">
                <p class="campo_consulta">FASE DEL PROCESO: </p>
                <p>FASE DE ENCUENTRO</p>
            </div>
            <div class="campos_consulta">
                <p class="campo_consulta">FECHA DE INICIO: </p>
                <p>2022/10/27</p>
            </div>
            <button class="boton_proceso">REGISTRAR FASE</button>
        </div>
        
 </div>
        

    </div>
</template>

<script>
export default{
    name: 'FormVerProcesos'
}
</script>


<style>

.ctn-consultar{
    margin: auto;
    margin-top: 30px;
    padding: 10px;
    width: 800px;
    text-align: center;
    color: white;
    justify-content: center;
    background: linear-gradient(180deg, #0C853B 0%, rgba(37, 145, 6, 0.85) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 36px;
    font-size: 25px;
}


.campos_pro {
    margin: 20px;
    display: flex;
}

.ctn-buscar{
    display: flex;
    justify-content: center;
}

.ctn-buscar input{
    width: 600px;
    height: 55px;
    margin: 10px;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
    font-size: 30px;
    padding-left: 10px;
    margin-right: 20px;
}

.formpro{
    text-align: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
}

.campos_pro p{
    font-weight: bold;
    padding-left: 20px;
}

.campos_pro input{
    width: 40px;
    height: 40px;
   
}

.seleccion{
    display: flex;
    justify-content: space-evenly;
}

.consultas{
    margin: auto;
    margin-top: 20px;
    width: 500px;
    background-color: white;
    font-size: 18px;
    color: black;
    border-radius: 25px;
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
}

.campos_consulta{
    display: flex;
}

.campo_consulta{
    font-weight: bold;
    color: #4D9CFF;
    padding-right: 10px;
}
.boton_proceso{
    height: 40px;
    width: 200px;
    border-radius: 25px;
    background-color: #EFBF25;
    border: none;
    font-size: 18px;
    color: white;
    font-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
    margin-right: 10px;
}


</style>