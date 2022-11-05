<template>
    
    <div class="ctnProDesarrollo">
        <div class="titular">
            <h1>FASE DE CIERRE</h1>
            <p>CONTROL DE DISEÑO DE LA CONSULTORÍA EMPRESARIAL</p>
        </div>
        <div class="campos_proceso inputFase">
            <p>Nombre del programa social o consultoría:</p>
            <input type="text" v-model="cierre.datos.Nombre_pro_cierre" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Link del Cronograma:</p>
            <input type="text" v-model="cierre.datos.Plazo_pro_cierre" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Elemento de entrada:</p>
            <input type="text" v-model="cierre.datos.Elemento_pro_cierre" disabled>
        </div>

        <div class="titular">
            <h1>REVISIÓN DEL DISEÑO</h1>
        </div>

        <div class="campos_proceso inputFase">
            <p>Definición de Directriz:</p>
            <input type="text" v-model="cierre.revision[0].Definicion_rev" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo General:</p>
            <input type="text" v-model="cierre.revision[0].Objetivo_gen_rev" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 1:</p>
            <input type="text" v-model="cierre.revision[0].Objetivo_esp_a" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 2:</p>
            <input type="text" v-model="cierre.revision[0].Objetivo_esp_b" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 3:</p>
            <input type="text" v-model="cierre.revision[0].Objetivo_esp_c" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 4:</p>
            <input type="text" v-model="cierre.revision[0].Objetivo_esp_d" disabled>
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 5:</p>
            <input type="text" v-model="cierre.revision[0].Objetivo_esp_e" disabled>
        </div>


        <div class="ctn-tabla">
            <p>FASES PRINCIPALES DE LA CONSULTORÍA </p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>DESCRIPCIÓN</th>
                        <th>LINK EVIDENCIA</th>
                        <th>AVANCE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(fase, index) in cierre.fase">
                        <td>{{fase.Descripcion_fase}}</td>
                        <td>{{fase.Evidencia_fase}}</td>
                        <td>{{fase.Avance_fase}}%</td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div class="campos_proceso inputFase">
            <p>COMENTARIO:</p>
            <input type="text" disabled v-model="cierre.datos.Comentario_pro_cierre">
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
                    <tr v-for="firma in firmas">
                        <td>{{ firma.Nombre_usu }}</td>
                        <td>{{ firma.Tipo_usu }}</td>
                        <td>
                            <img src="../assets/iconDone.png" alt="" v-show="firma.Firma_cierre == 1">
                            <img src="../assets/iconX.png" alt="" v-show="firma.Firma_cierre == 0">
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
        <div class="ctn-firma">
            <p>FIRMAR</p>
            <input type="checkbox" v-model="firmado">
        </div>


        <form class="btn" v-on:submit.prevent="firmarFase">
            <button class="boton">FIRMAR</button>
        </form>
    </div>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";
export default{
    name: 'FormVerTerceraFase',
    data(){
        return {
            cierre: {
                datos: {
                    Nombre_pro_cierre: "",
                    Plazo_pro_cierre: "",
                    Elemento_pro_cierre: "",
                    Comentario_pro_cierre: "",
                    Id_cta: ""
                },
                revision: [{
                    Definicion_rev: "",
                    Objetivo_gen_rev: "",
                    Objetivo_esp_a: "",
                    Objetivo_esp_b: "",
                    Objetivo_esp_c: "",
                    Objetivo_esp_d: "",
                    Objetivo_esp_e: ""
                }],
                fase: []
            },
            firmas: [],
            firmado: false
        }
    },
    methods: {
        getDetalles() {
            axios.get("http://localhost:3000/cierre/" + this.$route.params.Id_cta)
                .then((result) => {
                    if (result.data.success) {
                        this.cierre = result.data.body;
                    } else {
                        alert("Error al cargar datos");
                    }
                }).catch((err) => {
                    console.log("Error al cargar datos" + err)
                })
        },
        getFirmas() {
            axios.get("http://localhost:3000/cta/Firmas/" + this.$route.params.Id_cta)
                .then((result) => {
                    if (result.data.success) return this.firmas = result.data.body;
                    alert("Error al cargar las firmas");
                }).catch((err) => {
                    console.log("Error al cargar firmas" + err);
                })
        },
        firmarFase() {
            let firmaData = {
                Codigo_usu: sessionStorage.getItem("Codigo_usu"),
                Id_cta: this.$route.params.Id_cta,
                Fase_id: 3,
                Firma: this.firmado ? 1 : 0
            }
            axios.post("http://localhost:3000/cta/Firmar", firmaData)
                .then((result) => {
                    if (result.data.success) {
                        Swal.fire({
                            icon: "success",
                            title: "Firma registrada exitosamente",
                            showConfirmButton: false,
                            timer: 1000,
                        });
                        if (sessionStorage.getItem("Tipo") == "Administrador") {
                            this.$router.push({ path: '/Menu' });
                        } else {
                            this.$router.push({ path: '/MenuUsu' });
                        }
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "No se ha podido firmar la fase",
                            showConfirmButton: false,
                            timer: 1200,
                        });
                    }
                }).catch((err) => {
                    Swal.fire({
                        icon: "error",
                        title: "No se ha podido firmar la fase",
                        showConfirmButton: false,
                        timer: 1200,
                    });
                })
        }
    },
    mounted() {
        this.getFirmas();
        this.getDetalles();
    }
}
</script>