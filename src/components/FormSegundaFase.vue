<template>

    <transition name="fade">
        <div class="modal-overlay" v-if="modals.showModalAliado"></div>
    </transition>
    <transition name="fade">
        <div class="modal" v-if="modals.showModalAliado">
            <div class="modal-container">
                <div class="container-flex">
                    <h1>Añadir Aliado</h1>
                    <img src="../assets/icon_X.png" alt="" @click="modals.showModalAliado = false">
                </div>
                <div>
                    <form class="formUsu" v-on:submit.prevent="añadirAliado">
                        <div class="campos_usu">
                            <p>NOMBRE DEL CONTACTO:</p>
                            <input type="text" v-model="aliado.Nombre_cont" required>
                        </div>
                        <div class="campos_usu">
                            <p>CARGO:</p>
                            <input type="text" v-model="aliado.Cargo_ges" required>
                        </div>
                        <div class="campos_usu">
                            <p>CORREO ELECTRÓNICO:</p>
                            <input type="text" v-model="aliado.Correo_ges" required>
                        </div>
                        <div class="campos_usu">
                            <p>CELULAR:</p>
                            <input type="text" v-model="aliado.Celular_ges" required>
                        </div>
                        <div class="campos_usu">
                            <p>DESCRIPCIÓN:</p>
                            <input type="text" v-model="aliado.Descripcion_ges" required>
                        </div>
                        <div class="campos_usu">
                            <p>VALOR:</p>
                            <input type="text" v-model="aliado.Valor_ges" required>
                        </div>
                        <div class="text-centerB">
                            <button class="boton mbttm" type="submit">AÑADIR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>



    <transition name="fade">
        <div class="modal-overlay" v-if="modals.showModalImpacto"></div>
    </transition>
    <transition name="fade">
        <div class="modal" v-if="modals.showModalImpacto">
            <div class="modal-container">
                <div class="container-flex">
                    <h1>Añadir Equipo</h1>
                    <img src="../assets/icon_X.png" alt="" @click="modals.showModalImpacto = false">
                </div>
                <div>
                    <form class="formUsu" v-on:submit.prevent="añadirImpacto">
                        <div class="campos_usu">
                            <p>CALIFICACIÓN CUANTITATIVA:</p>
                            <input type="text" v-model="impacto.Cal_cuantitativa_eval" required>
                        </div>
                        <div class="campos_usu">
                            <p>CALIFICACIÓN CUALITATIVA:</p>
                            <input type="text" v-model="impacto.Cal_cualitativa_eval" required>
                        </div>
                        <div class="campos_usu">
                            <p>ASPECTOS POR MEJORAR:</p>
                            <input type="text" v-model="impacto.Aspectos_eval" required>
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
            <h1>FASE DE DESARROLLO</h1>
            <p>DATOS DE GESTIÓN DEL PROCESO DE CONSULTORÍA</p>
        </div>
        <div class="campos_proceso inputFase">
            <p>Nombre de la Microempresa:</p>
            <input type="text" v-model="desarrollo.datos.Nombre_micro_emp">
        </div>
        <div class="campos_proceso inputFase">
            <p>Sector de la empresa:</p>
            <input type="text" v-model="desarrollo.datos.Sector_emp">
        </div>
        <div class="campos_proceso inputFase">
            <p>Área o proceso:</p>
            <input type="text" v-model="desarrollo.datos.Area">
        </div>
        <div class="campos_proceso inputFase">
            <p>programa academico:</p>
            <input type="text" v-model="desarrollo.datos.Programa_academico">
        </div>
        <div class="campos_proceso inputFase">
            <p>Coordinador de proyección social:</p>
            <input type="text" v-model="desarrollo.datos.Coord_social">
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
                        <th>ELIMINAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(aliado, index) in desarrollo.aliados">
                        <td>{{ aliado[0] }}</td>
                        <td>{{ aliado[1] }}</td>
                        <td>{{ aliado[2] }}</td>
                        <td>{{ aliado[3] }}</td>
                        <td>{{ aliado[4] }}</td>
                        <td>{{ aliado[5] }}</td>
                        <td @click="eliminar(this.desarrollo.aliados, index)"><img src="../assets/iconX.png" alt="">
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="iconAdd">
                <img src="../assets/icons_add.png" alt="" @click="modals.showModalAliado = true">
            </div>
        </div>
        <div class="ctn-tabla">
            <p>EVALUACIÓN DEL IMPACTO </p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>CALIFICACIÓN CUANTITATIVA DEL IMPACTO</th>
                        <th>CALIFICACIÓN CUALITATIVA DEL IMPACTO</th>
                        <th>ASPECTOS POR MEJORAR</th>
                        <th>ELIMINAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(impacto, index) in desarrollo.impacto">
                        <td>{{ impacto[0] }}</td>
                        <td>{{ impacto[1] }}</td>
                        <td>{{ impacto[2] }}</td>
                        <td @click="eliminar(this.desarrollo.impacto, index)"><img src="../assets/iconX.png" alt="">
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="iconAdd">
                <img src="../assets/icons_add.png" alt="" @click="modals.showModalImpacto = true">
            </div>
        </div>
        <form class="btn" v-on:submit.prevent="registrarFase">
            <button class="boton">REGISTRAR</button>
        </form>
    </div>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
    name: 'FormSegundaFase',
    data() {
        return {
            modals: {
                showModalAliado: false,
                showModalImpacto: false,
            },
            aliado: {
                Nombre_cont: "",
                Cargo_ges: "",
                Correo_ges: "",
                Celular_ges: "",
                Descripcion_ges: "",
                Valor_ges: ""
            },
            impacto: {
                Cal_cuantitativa_eval: "",
                Cal_cualitativa_eval: "",
                Aspectos_eval: ""
            },
            desarrollo: {
                datos: {
                    Nombre_micro_emp: "",
                    Sector_emp: "",
                    Area: "",
                    Programa_academico: "",
                    Coord_social: "",
                    Id_cta: this.$route.params.Id_cta
                },
                aliados: [],
                impacto: []
            }
        }
    },
    methods: {
        eliminar(Arr, index) {
            Arr.splice(index, 1);
        },
        añadirAliado() {
            this.desarrollo.aliados.push([this.aliado.Nombre_cont, this.aliado.Cargo_ges, this.aliado.Correo_ges, this.aliado.Celular_ges, this.aliado.Descripcion_ges, this.aliado.Valor_ges]);
            this.modals.showModalAliado = false;
            this.aliado.Nombre_cont = "";
            this.aliado.Cargo_ges = "";
            this.aliado.Correo_ges = "";
            this.aliado.Celular_ges = "";
            this.aliado.Descripcion_ges = "";
            this.aliado.Valor_ges = "";
        },
        añadirImpacto() {
            this.desarrollo.impacto.push([this.impacto.Cal_cuantitativa_eval, this.impacto.Cal_cualitativa_eval, this.impacto.Aspectos_eval]);
            this.modals.showModalImpacto = false;
            this.impacto.Cal_cuantitativa_eval = "";
            this.impacto.Cal_cualitativa_eval = "";
            this.impacto.Aspectos_eval = "";
        },
        registrarFase() {
            axios.post("http://localhost:3000/dsrllo/", this.desarrollo)
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
    },


}
</script>

<style>
.ctnProDesarrollo {
    margin: auto;
    margin-top: 100px;
    width: 1300px;
    color: white;
    background: linear-gradient(180deg, #0C853B 0%, rgba(37, 145, 6, 0.85) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 36px;
    font-size: 25px;
}

.campos_proceso {
    justify-content: right;
    text-align: left;
}

.inputFase input {
    width: 1000px;
}

.titular p {
    text-align: center;
    font-weight: bold;
    font-size: 30px;
}

.ctn-tabla p {
    font-weight: bold;
}
</style>