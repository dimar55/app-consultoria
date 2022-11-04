<template>
    <transition name="fade">
        <div class="modal-overlay" v-if="modals.showModalEpp"></div>
    </transition>
    <transition name="fade">
        <div class="modal" v-if="modals.showModalEpp">
            <div class="modal-container">
                <div class="container-flex">
                    <h1>Añadir EPP</h1>
                    <img src="../assets/icon_X.png" alt="" @click="modals.showModalEpp = false">
                </div>
                <div>
                    <form class="formUsu" v-on:submit.prevent="añadirEpp">
                        <div class="campos_usu">
                            <p>NOMBRE DE ELEMENTO:</p>
                            <input type="text" v-model="epp.Elemento_epp" required>
                        </div>
                        <div class="campos_usu">
                            <p>DESCRIPCIÓN:</p>
                            <input type="text" v-model="epp.Descripcion_epp" required>
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
        <div class="modal-overlay" v-if="modals.showModalEquipo"></div>
    </transition>
    <transition name="fade">
        <div class="modal" v-if="modals.showModalEquipo">
            <div class="modal-container">
                <div class="container-flex">
                    <h1>Añadir Equipo</h1>
                    <img src="../assets/icon_X.png" alt="" @click="modals.showModalEquipo = false">
                </div>
                <div>
                    <form class="formUsu" v-on:submit.prevent="añadirEquipo">
                        <div class="campos_usu">
                            <p>NOMBRE DEL EQUIPO:</p>
                            <input type="text" v-model="equipo.Nombre_equipo" required>
                        </div>
                        <div class="campos_usu">
                            <p>DESCRIPCIÓN:</p>
                            <input type="text" v-model="equipo.Descripcion_equipo" required>
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
        <div class="modal-overlay" v-if="modals.showModalParametro"></div>
    </transition>
    <transition name="fade">
        <div class="modal" v-if="modals.showModalParametro">
            <div class="modal-container">
                <div class="container-flex">
                    <h1>Añadir Parametro</h1>
                    <img src="../assets/icon_X.png" alt="" @click="modals.showModalParametro = false">
                </div>
                <div>
                    <form class="formUsu" v-on:submit.prevent="añadirParametro">
                        <div class="campos_usu">
                            <p>DESCRIPCIÓN:</p>
                            <input type="text" v-model="parametro.Descripcion_param" required>
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
        <div class="modal-overlay" v-if="modals.showModalActividad"></div>
    </transition>
    <transition name="fade">
        <div class="modal" v-if="modals.showModalActividad">
            <div class="modal-container">
                <div class="container-flex">
                    <h1>Añadir Actividad</h1>
                    <img src="../assets/icon_X.png" alt="" @click="modals.showModalActividad = false">
                </div>
                <div>
                    <form class="formUsu" v-on:submit.prevent="añadirActividad">
                        <div class="campos_usu">
                            <p>NOMBRE:</p>
                            <input type="text" v-model="actividad.Nombre_act" required>
                        </div>
                        <div class="campos_usu">
                            <p>DESCRIPCIÓN:</p>
                            <input type="text" v-model="actividad.Descripcion_act" required>
                        </div>
                        <div class="campos_usu">
                            <p>CALIDAD:</p>
                            <input type="text" v-model="actividad.Calidad_act" required>
                        </div>
                        <div class="campos_usu">
                            <p>SEGURIDAD:</p>
                            <input type="text" v-model="actividad.Seguridad_act" required>
                        </div>
                        <div class="campos_usu">
                            <p>AMBIENTE:</p>
                            <input type="text" v-model="actividad.Ambiente_act" required>
                        </div>
                        <div class="text-centerB">
                            <button class="boton mbttm" type="submit">AÑADIR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>


    <div class="ctnProEncuentro">
        <div class="titular">
            <h1>FASE DE ENCUENTRO</h1>
        </div>

        <div class="campos_proceso">
            <p>Descripción General:</p>
            <textarea name="" id="" cols="30" rows="10" v-model="encuentro.datos.Descripcion_pro_enc"></textarea>
        </div>
        <div class="campos_proceso">
            <p>Personal responsable del procedimiento:</p>
            <input type="text" v-model="encuentro.datos.Personal_pro_enc">
        </div>
        <div class="campos_proceso">
            <p>Observaciones:</p>
            <textarea name="" id="" cols="30" rows="10" v-model="encuentro.datos.Observaciones_pro_enc"></textarea>
        </div>

        <div class="ctn-tabla">
            <p>EPP (Elementos de protección personal) requeridos </p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>NOMBRE</th>
                        <th>DESCRIPCIÓN</th>
                        <th>ELIMINAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="epp in encuentro.epp">
                        <td>{{ epp[0] }}</td>
                        <td>{{ epp[1] }}</td>
                        <td @click="eliminar(this.epps, this.encuentro.epp, epp[0])"><img src="../assets/iconX.png"
                                alt=""></td>
                    </tr>
                </tbody>
            </table>
            <div class="iconAdd">
                <img src="../assets/icons_add.png" alt="" @click="modals.showModalEpp = true">
            </div>

        </div>

        <div class="ctn-tabla">
            <p>Equipos y Herramientas </p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>NOMBRE DEL EQUIPO</th>
                        <th>DESCRIPCIÓN</th>
                        <th>ELIMINAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="equipo in encuentro.equipo">
                        <td>{{ equipo[0] }}</td>
                        <td>{{ equipo[1] }}</td>
                        <td @click="eliminar(this.equipos, this.encuentro.equipo, equipo[0])"><img
                                src="../assets/iconX.png" alt=""></td>
                    </tr>
                </tbody>
            </table>
            <div class="iconAdd">
                <img src="../assets/icons_add.png" alt="" @click="modals.showModalEquipo = true">
            </div>
        </div>

        <div class="ctn-tabla">
            <p>Paramentros de Control</p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>DESCRIPCIÓN</th>
                        <th>ELIMINAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="parametro in encuentro.parametro">
                        <td>{{ parametro[0] }}</td>
                        <td @click="eliminar(this.parametros, this.encuentro.parametro, parametro[0])"><img
                                src="../assets/iconX.png" alt=""></td>
                    </tr>
                </tbody>
            </table>
            <div class="iconAdd">
                <img src="../assets/icons_add.png" alt="" @click="modals.showModalParametro = true">
            </div>
        </div>

        <div class="ctn-tabla">
            <p>Actividad</p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>NOMBRE</th>
                        <th>DESCRIPCIÓN</th>
                        <th>CALIDAD</th>
                        <th>SEGURIDAD</th>
                        <th>AMBIENTE</th>
                        <th>ELIMINAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="actividad in encuentro.actividad">
                        <td>{{ actividad[0] }}</td>
                        <td>{{ actividad[1] }}</td>
                        <td>{{ actividad[2] }}</td>
                        <td>{{ actividad[3] }}</td>
                        <td>{{ actividad[4] }}</td>
                        <td @click="eliminar(this.actividades, this.encuentro.actividad, actividad[0])"><img
                                src="../assets/iconX.png" alt=""></td>
                    </tr>
                </tbody>
            </table>
            <div class="iconAdd">
                <img src="../assets/icons_add.png" alt="" @click="modals.showModalActividad = true">
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
    name: 'FormPrimeraFase',
    data() {
        return {
            modals: {
                showModalEpp: false,
                showModalEquipo: false,
                showModalParametro: false,
                showModalActividad: false
            },
            epp: {
                Elemento_epp: "",
                Descripcion_epp: ""
            },
            epps: [],
            equipo: {
                Nombre_equipo: "",
                Descripcion_equipo: ""
            },
            equipos: [],
            parametro: {
                Descripcion_param: ""
            },
            parametros: [],
            actividad: {
                Nombre_act: "",
                Descripcion_act: "",
                Calidad_act: "",
                Seguridad_act: "",
                Ambiente_act: ""
            },
            actividades: [],
            encuentro: {
                datos: {
                    Descripcion_pro_enc: "",
                    Personal_pro_enc: "",
                    Observaciones_pro_enc: "",
                    Id_cta: this.$route.params.Id_cta
                },
                epp: [],
                equipo: [],
                parametro: [],
                actividad: []
            }
        }
    },
    methods: {
        isContained(Arr, Epp) {
            for (let index = 0; index < Arr.length; index++) {
                const element = Arr[index];
                if (element.toLowerCase() === Epp.toLowerCase()) return true;
            }
            return false;
        },
        eliminar(Arr, Arr2, Epp) {
            let id = 0;
            for (let index = 0; index < Arr.length; index++) {
                const element = Arr[index];
                if (element == Epp) {
                    id = index;
                }
            }
            Arr.splice(id, 1);
            Arr2.splice(id, 1);
        },
        añadirEpp() {
            if (!this.isContained(this.epps, this.epp.Elemento_epp)) {
                this.epps.push(this.epp.Elemento_epp);
                this.encuentro.epp.push([this.epp.Elemento_epp, this.epp.Descripcion_epp]);
                this.modals.showModalEpp = false;
                this.epp.Elemento_epp = "";
                this.epp.Descripcion_epp = "";
            } else {
                Swal.fire({
                    icon: "error",
                    title: "EPP ya ha sido ingresado",
                    showConfirmButton: false,
                    timer: 1200,
                });
                this.modals.showModalEpp = false;
                this.epp.Elemento_epp = "";
                this.epp.Descripcion_epp = "";
            }
        },
        añadirEquipo() {
            if (!this.isContained(this.equipos, this.equipo.Nombre_equipo)) {
                this.equipos.push(this.equipo.Nombre_equipo);
                this.encuentro.equipo.push([this.equipo.Nombre_equipo, this.equipo.Descripcion_equipo]);
                this.modals.showModalEquipo = false;
                this.equipo.Nombre_equipo = "";
                this.equipo.Descripcion_equipo = "";
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Equipo ya ha sido ingresado",
                    showConfirmButton: false,
                    timer: 1200,
                });
                this.modals.showModalEquipo = false;
                this.equipo.Nombre_equipo = "";
                this.equipo.Descripcion_equipo = "";
            }
        },
        añadirParametro() {
            if (!this.isContained(this.parametros, this.parametro.Descripcion_param)) {
                this.parametros.push(this.parametro.Descripcion_param);
                this.encuentro.parametro.push([this.parametro.Descripcion_param]);
                this.modals.showModalParametro = false;
                this.parametro.Descripcion_param = "";
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Parametro ya ha sido ingresado",
                    showConfirmButton: false,
                    timer: 1200,
                });
                this.modals.showModalParametro = false;
                this.parametro.Descripcion_param = "";
            }
        },
        añadirActividad(){
            if (!this.isContained(this.actividades, this.actividad.Nombre_act)) {
                this.actividades.push(this.actividad.Nombre_act);
                this.encuentro.actividad.push([this.actividad.Nombre_act, this.actividad.Descripcion_act, this.actividad.Calidad_act, this.actividad.Seguridad_act, this.actividad.Ambiente_act]);
                this.modals.showModalActividad = false;
                this.actividad.Nombre_act = ""
                this.actividad.Descripcion_act = ""
                this.actividad.Calidad_act = ""
                this.actividad.Seguridad_act = ""
                this.actividad.Ambiente_act = ""
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Actividad ya ha sido ingresada",
                    showConfirmButton: false,
                    timer: 1200,
                });
                this.modals.showModalActividad = false;
                this.actividad.Nombre_act = ""
                this.actividad.Descripcion_act = ""
                this.actividad.Calidad_act = ""
                this.actividad.Seguridad_act = ""
                this.actividad.Ambiente_act = ""
            }
        },
        registrarFase() {
            axios.post("http://localhost:3000/encto/", this.encuentro)
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


<style>
.ctnProEncuentro {
    margin: auto;
    margin-top: 100px;
    width: 1000px;
    color: white;
    justify-content: center;
    background: linear-gradient(180deg, #0C853B 0%, rgba(37, 145, 6, 0.85) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 36px;
    font-size: 25px;
}

.titular h1 {
    padding: 30px;
    font-size: 60px;
    text-align: center;
}

.campos_proceso {
    margin: 60px;
    text-align: center;
}

.campos_proceso p {
    text-align: left;
    padding-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
}

.campos_proceso textarea {
    width: 840px;
    height: 300px;
    border: none;
    border-radius: 25px;
    padding: 20px;
    font-size: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.campos_proceso input {
    width: 840px;
    height: 30px;
    border: none;
    border-radius: 25px;
    padding: 20px;
    font-size: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.ctn-tabla {
    margin: 40px;
}

.ctn-tabla p {
    padding-bottom: 20px;
}

.iconAdd {
    margin-top: 20px;
    text-align: center;
}

.btn {
    padding-bottom: 30px;
}
</style>