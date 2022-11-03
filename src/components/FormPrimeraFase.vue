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
                            <button class="boton mbttm" type="submit">ASOCIAR</button>
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
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="campos_proceso">
            <p>Personal responsable del procedimiento:</p>
            <input type="text">
        </div>
        <div class="campos_proceso">
            <p>Observaciones:</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
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
                        <td @click="eliminarEpp(epp[0])"><img src="../assets/icon_X.png" alt="" ></td>
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nombre del equipo</td>
                        <td>Soy la Descripción</td>
                    </tr>
                </tbody>
            </table>
            <div class="iconAdd">
                <img src="../assets/icons_add.png" alt="">
            </div>
        </div>

        <div class="ctn-tabla">
            <p>Paramentros de Control</p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>NOMBRE DEL PARAMENTRO</th>
                        <th>DESCRIPCIÓN</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>soy el Nombre del equipo</td>
                        <td>Soy la Descripción</td>
                    </tr>
                </tbody>
            </table>
            <div class="iconAdd">
                <img src="../assets/icons_add.png" alt="">
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>soy el Nombre</td>
                        <td>Soy la Descripción</td>
                        <td>soy la calidad</td>
                        <td>Soy la seguridad</td>
                        <td>Soy el ambiente</td>
                    </tr>
                </tbody>
            </table>
            <div class="iconAdd">
                <img src="../assets/icons_add.png" alt="">
            </div>
        </div>
        <div class="btn">
            <button class="boton" @click="registrarFase">REGISTRAR</button>
        </div>

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
                showModalEpp: false
            },
            epp: {
                Elemento_epp: "",
                Descripcion_epp: ""
            },
            epps: [],
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
        isContained(Epp) {
            for (let index = 0; index < this.epps.length; index++) {
                const element = this.epps[index];
                if (element.toLowerCase() === Epp.toLowerCase()) return true;
            }
            return false;
        },
        eliminarEpp(Epp) {
            alert("Elimnar - "+Epp)
            let id = 0;
            for (let index = 0; index < this.epps.length; index++) {
                    const element = this.epps[index];
                    if (element == Epp){
                        id = index;
                    }
            }
            this.epps.splice(id, 1);
            this.encuentro.epp.splice(id, 1);
        },
        añadirEpp() {
            if (!this.isContained(this.epp.Elemento_epp)) {
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
        registrarFase() {
            alert(this.encuentro.datos.Id_cta)
        }
    }
}
</script>


<style>
.ctnProEncuentro {
    margin: auto;
    margin-top: 100px;
    width: 850px;
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
    width: 700px;
    height: 300px;
    border: none;
    border-radius: 25px;
    padding: 20px;
    font-size: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.campos_proceso input {
    width: 700px;
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