<template>
    <div class="ctnProDesarrollo">
        <div class="titular">
            <h1>FASE DE DESARROLLO</h1>
            <p>DATOS DE GESTIÓN DEL PROCESO DE CONSULTORÍA</p>
        </div>
        <div class="campos_proceso inputFase">
            <p>Nombre de la Microempresa:</p>
            <input type="text" disabled v-model="desarrollo.datos.Nombre_micro_emp">
        </div>
        <div class="campos_proceso inputFase">
            <p>Sector de la empresa:</p>
            <input type="text" disabled v-model="desarrollo.datos.Sector_emp">
        </div>
        <div class="campos_proceso inputFase">
            <p>Área o proceso:</p>
            <input type="text" disabled v-model="desarrollo.datos.Area">
        </div>
        <div class="campos_proceso inputFase">
            <p>Programa academico:</p>
            <input type="text" disabled v-model="desarrollo.datos.Programa_academico">
        </div>
        <div class="campos_proceso inputFase">
            <p>Coordinador de proyección social:</p>
            <input type="text" disabled v-model="desarrollo.datos.Coord_social">
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
                    <tr v-for="desarrollo in desarrollo.aliados">
                        <td>{{ desarrollo.Nombre_cont }}</td>
                        <td>{{ desarrollo.Cargo_ges }}</td>
                        <td>{{ desarrollo.Correo_ges }}</td>
                        <td>{{ desarrollo.Celular_ges }}</td>
                        <td>{{ desarrollo.Descripcion_ges }}</td>
                        <td>{{ desarrollo.Valor_ges }}</td>
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
                    <tr v-for="impacto in desarrollo.impacto">
                        <td>{{ impacto.Cal_cuantitativa_eval }}</td>
                        <td>{{ impacto.Cal_cualitativa_eval }}</td>
                        <td>{{ impacto.Aspectos_eval }}</td>
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
                    <tr v-for="firma in firmas">
                        <td>{{ firma.Nombre_usu }}</td>
                        <td>{{ firma.Tipo_usu }}</td>
                        <td>
                            <img src="../assets/iconDone.png" alt="" v-show="firma.Firma_desarrollo == 1">
                            <img src="../assets/iconX.png" alt="" v-show="firma.Firma_desarrollo == 0">
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
export default {
    name: 'FormVerSegundaFase',
    data() {
        return {
            desarrollo: {
                datos: {
                    Nombre_micro_emp: "",
                    Sector_emp: "",
                    Area: "",
                    Programa_academico: "",
                    Coord_social: "",
                }
            },
            firmas: [],
            firmado: false
        }
    },
    methods: {
        getDetalles() {
            axios.get("http://localhost:3000/dsrllo/" + this.$route.params.Id_cta)
                .then((result) => {
                    if (result.data.success) {
                        this.desarrollo = result.data.body;
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
                Fase_id: 2,
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

