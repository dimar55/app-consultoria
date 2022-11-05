<template>
    <div class="ctn-consultar">
        <div class="formpro">
            <h1>CONSULTAR PROCESOS</h1>
            <form class="ctn-buscar" v-on:submit.prevent="buscarProcesos">
                <input type="text" v-model="filtro">
                <button class="boton" type="submit">BUSCAR</button>
            </form>
            <div class="seleccion">
                <div class="campos_pro">
                    <input type="checkbox" v-model="checks.checkNumero" @click="change('checkNumero')">
                    <p>NUMERO DEL PROCESO</p>
                </div>
                <div class="campos_pro">
                    <input type="checkbox" v-model="checks.checkNombre" @click="change('checkNombre')">
                    <p>NOMBRE DEL PROCESO</p>
                </div>
                <div class="campos_pro">
                    <input type="checkbox" v-model="checks.checkCodigo" @click="change('checkCodigo')">
                    <P>CODIGO DE LA EMPRESA</P>
                </div>
            </div>
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
                <button class="boton_proceso" @click="registrarFase(proceso.Id_cta, proceso.Fase_cta)">REGISTRAR
                    FASE</button>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
    name: 'FormVerProcesos',
    data() {
        return {
            filtro: "",
            detalles: {
                id_cta: "",
                fase: ""
            },
            checks: {
                checkNumero: true,
                checkNombre: false,
                checkCodigo: false
            },
            procesos: []

        }
    },
    methods: {
        change(check) {
            if (check == 'checkNumero') {
                this.checks.checkNumero = !this.checks.checkNumero;
                this.checks.checkNombre = false;
                this.checks.checkCodigo = false;
            } else if (check == 'checkNombre') {
                this.checks.checkNombre = !this.checks.checkNombre;
                this.checks.checkNumero = false;
                this.checks.checkCodigo = false;
            } else if (check == 'checkCodigo') {
                this.checks.checkCodigo = !this.checks.checkCodigo;
                this.checks.checkNombre = false;
                this.checks.checkNumero = false;
            }
        },
        cargarProcesos() {
            axios.get("http://localhost:3000/cta/")
                .then((result) => {
                    if (result.data.success) this.procesos = result.data.body;
                }).catch((err) => {
                    console.log(err)
                })
        },
        buscarProcesos() {
            let url = "";
            if (this.filtro == "") url = "http://localhost:3000/cta/"
            else if (this.checks.checkNumero) url = "http://localhost:3000/cta/Id/"
            else if (this.checks.checkNombre) url = "http://localhost:3000/cta/Name/"
            else if (this.checks.checkCodigo) url = "http://localhost:3000/cta/Empresa/"
            axios.get(url + this.filtro)
                .then((result) => {
                    if (result.data.success) {
                        this.procesos = result.data.body
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "No se encontraron resultados",
                            showConfirmButton: false,
                            timer: 1200,
                        });
                    };

                }).catch((err) => {
                    Swal.fire({
                        icon: "error",
                        title: "No se encontraron resultados",
                        showConfirmButton: false,
                        timer: 1200,
                    });
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
        registrarFase(Id_cta, fase) {
            let url = "";
            if (fase == 1) url = "http://localhost:3000/encto/"
            if (fase == 2) url = "http://localhost:3000/dsrllo/"
            axios.get(url + Id_cta).then((result) => {
                if (!result.data.success) {
                    if(fase == 1) this.$router.push({ name: 'PrimeraFase', params: { Id_cta } });       
                    if(fase == 2) this.$router.push({ name: 'SegundaFase', params: { Id_cta } });                            
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "La fase ya ha sido registrada",
                        showConfirmButton: false,
                        timer: 1200,
                    });
                }
            }).catch((err) => {
                if(fase == 1) this.$router.push({ name: 'PrimeraFase', params: { Id_cta } });       
                if(fase == 2) this.$router.push({ name: 'SegundaFase', params: { Id_cta } });             
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


<style>
.ctn-consultar {
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

.ctn-buscar {
    display: flex;
    justify-content: center;
}

.ctn-buscar input {
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

.formpro {
    text-align: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
}

.campos_pro p {
    font-weight: bold;
    padding-left: 20px;
}

.campos_pro input {
    width: 40px;
    height: 40px;

}

.seleccion {
    display: flex;
    justify-content: space-evenly;
}

.consultas {
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

.campos_consulta {
    display: flex;
}

.campo_consulta {
    font-weight: bold;
    color: #4D9CFF;
    padding-right: 10px;
}

.boton_proceso {
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