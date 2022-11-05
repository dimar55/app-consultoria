<template>
    <div class="ctn-consultar">
        <div class="formpro">
            <h1>VER PROCESOS</h1> 
        </div>
        <div class="results">
            <div class="consultas" v-for="proceso in procesos">
                <div class="campos_consulta">
                    <p class="campo_consulta">ID DEL PROCESO: </p>
                    <p>{{ proceso.Id_cta }}</p>
                </div>
                <div class="campos_consulta">
                    <p class="campo_consulta">CODIGO DE LA EMPRESA: </p>
                    <p>{{ proceso.Codigo_emp }}</p>
                </div>
                <div class="campos_consulta">
                    <p class="campo_consulta">NOMBRE DEL PROCESO: </p>
                    <p>{{ proceso.Nombre_cta }}</p>
                </div>
                <div class="campos_consulta">
                    <p class="campo_consulta">FASE DEL PROCESO: </p>
                    <p>{{ this.consultarFase(proceso.Fase_cta) }}</p>
                </div>
                <div class="campos_consulta">
                    <p class="campo_consulta">FECHA DE INICIO: </p>
                    <p>{{ proceso.Fecha_inicio }}</p>
                </div>
                <div v-show="proceso.Fase_cta != 4">
                <button class="boton_proceso" @click="verDetalle(proceso.Id_cta, proceso.Fase_cta)">VER
                    DETALLLES</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";
 export default{
    name: 'FormVerProcesosUsu',
    data() {
        return {
            procesos: []

        }
    },
    methods: {
        cargarProcesos() {
            axios.get("http://localhost:3000/cta/Usuario/" + sessionStorage.getItem("Codigo_usu"))
                .then((result) => {
                    if (result.data.success) this.procesos = result.data.body;
                }).catch((err) => {
                    console.log(err)
                })
        },
        verDetalle(Id_cta, fase) {
            let url = "";
            let enviarFase = "";
            if (fase == 1) {
                url = "http://localhost:3000/encto/";
                enviarFase = "VerPrimeraFase";
            }
            if (fase == 2) {
                url = "http://localhost:3000/dsrllo/";
                enviarFase = "VerSegundaFase";
            }
            axios.get(url + Id_cta).then((result) => {
                if (result.data.success) {
                    this.$router.push({ name: enviarFase, params: { Id_cta } });  
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "No se encontro detalles de la fase",
                        showConfirmButton: false,
                        timer: 1200,
                    });
                }
            }).catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "No se encontro detalles de la fase",
                    showConfirmButton: false,
                    timer: 1200,
                });
            })
        },
        consultarFase(fase){
            if(fase == 1){
                return "Fase de encuentro";
            }else if(fase == 2){
                return "Fase de desarrollo";
            }else if(fase == 3){
                return "Fase de cierre";
            }else{
                return "Finalizado";
            }
        }

    },
    mounted() {
        this.cargarProcesos();
    }

}
</script>