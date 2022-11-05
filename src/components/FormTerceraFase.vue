<template>

<transition name="fade">
        <div class="modal-overlay" v-if="modals.showModalFase"></div>
    </transition>
    <transition name="fade">
        <div class="modal" v-if="modals.showModalFase">
            <div class="modal-container">
                <div class="container-flex">
                    <h1>Añadir Equipo</h1>
                    <img src="../assets/icon_X.png" alt="" @click="modals.showModalFase = false">
                </div>
                <div>
                    <form class="formUsu" v-on:submit.prevent="añadirFase">
                        <div class="campos_usu">
                            <p>DESCRIPCIÓN:</p>
                            <input type="text" v-model="fase.Descripcion_fase" required>
                        </div>
                        <div class="campos_usu">
                            <p>LINK EVIDENCIA:</p>
                            <input type="text" v-model="fase.Evidencia_fase" required>
                        </div>
                        <div class="campos_usu">
                            <p>AVANCE:</p>
                            <input type="number" min="1" max="100" v-model="fase.Avance_fase" required>
                        </div>
                        <div class="text-centerB">
                            <button class="boton mbttm" type="submit">AÑADIR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>

    <div class="ctnProDesarrollo">
        <div class="titular">
            <h1>FASE DE CIERRE</h1>
            <p>CONTROL DE DISEÑO DE LA CONSULTORÍA EMPRESARIAL</p>
        </div>
        <div class="campos_proceso inputFase">
            <p>Nombre del programa social o consultoría:</p>
            <input type="text" v-model="cierre.datos.Nombre_pro_cierre">
        </div>
        <div class="campos_proceso inputFase">
            <p>Link del Cronograma:</p>
            <input type="text" v-model="cierre.datos.Plazo_pro_cierre">
        </div>
        <div class="campos_proceso inputFase">
            <p>Elemento de entrada:</p>
            <input type="text" v-model="cierre.datos.Elemento_pro_cierre">
        </div>

        <div class="titular">
            <h1>REVISIÓN DEL DISEÑO</h1>
        </div>

        <div class="campos_proceso inputFase">
            <p>Definición de Directriz:</p>
            <input type="text" v-model="cierre.revision.Definicion_rev">
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo General:</p>
            <input type="text" v-model="cierre.revision.Objetivo_gen_rev">
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 1:</p>
            <input type="text" v-model="cierre.revision.Objetivo_esp_a">
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 2:</p>
            <input type="text" v-model="cierre.revision.Objetivo_esp_b">
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 3:</p>
            <input type="text" v-model="cierre.revision.Objetivo_esp_c">
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 4:</p>
            <input type="text" v-model="cierre.revision.Objetivo_esp_d">
        </div>
        <div class="campos_proceso inputFase">
            <p>Objetivo Especifico 5:</p>
            <input type="text" v-model="cierre.revision.Objetivo_esp_e">
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
                    <tr v-for="(fase, index) in cierre.fase">
                        <td>{{fase[0]}}</td>
                        <td>{{fase[1]}}</td>
                        <td>{{fase[2]}}%</td>
                        <td @click="eliminar(this.cierre.fase, index)"><img src="../assets/iconX.png" alt="">
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="iconAdd">
                <img src="../assets/icons_add.png" alt="" @click="modals.showModalFase = true">
            </div>
        </div>
        <div class="campos_proceso inputFase">
            <p>COMENTARIO:</p>
            <input type="text" v-model="cierre.datos.Comentario_pro_cierre">
        </div>
        <form class="btn" v-on:submit.prevent="registrarFase">
            <button class="boton" type="submit">REGISTRAR</button>
        </form>
    </div>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
    name: 'FormTerceraFase',
    data() {
        return {
            modals: {
                showModalFase: false
            },
            fase: {
                Descripcion_fase: "",
                Evidencia_fase: "",
                Avance_fase: ""
            },
            cierre: {
                datos: {
                    Nombre_pro_cierre: "",
                    Plazo_pro_cierre: "",
                    Elemento_pro_cierre: "",
                    Comentario_pro_cierre: "",
                    Id_cta: 37
                },
                revision: {
                    Definicion_rev: "",
                    Objetivo_gen_rev: "",
                    Objetivo_esp_a: "",
                    Objetivo_esp_b: "",
                    Objetivo_esp_c: "",
                    Objetivo_esp_d: "",
                    Objetivo_esp_e: ""
                },
                fase: []
            }
        }
    },
    methods: {
        eliminar(Arr, index) {
            Arr.splice(index, 1);
        },
        añadirFase() {
            this.cierre.fase.push([this.fase.Descripcion_fase, this.fase.Evidencia_fase, this.fase.Avance_fase]);
            this.modals.showModalFase = false;
            this.fase.Descripcion_fase = "";
            this.fase.Evidencia_fase = "";
            this.fase.Avance_fase = "";
        },
        registrarFase() {
            axios.post("http://localhost:3000/cierre/", this.cierre)
                .then((result) => {
                    if (result.data.success) {
                        Swal.fire({
                            icon: "success",
                            title: "Fase creada exitosamente",
                            showConfirmButton: false,
                            timer: 1000,
                        });
                        this.$router.push({ path: '/Menu' });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "No se ha podido crear la fase",
                            showConfirmButton: false,
                            timer: 1200,
                        });
                    }
                }).catch((err) => {
                    Swal.fire({
                        icon: "error",
                        title: "No se ha podido crear la fase",
                        showConfirmButton: false,
                        timer: 1200,
                    });
                })
        }
    }
}
</script>