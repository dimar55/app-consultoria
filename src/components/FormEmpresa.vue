<template>
    <transition name="fade">
        <div class="modal-overlay" v-if="showModal"></div>
    </transition>
    <transition name="fade">
        <div class="modal" v-if="showModal">
            <div class="modal-container">
                <div class="container-flex">
                    <h1>Asociar usuario</h1>
                    <img src="../assets/icon_X.png" alt="" @click="showModal = false">
                </div>
                <div>
                    <div class="formUsu">
                        <form class="campos_usu" v-on:submit.prevent="buscarUsuario">
                            <p>CODIGO USUARIO:</p>
                            <input type="text" v-model="empresa.Codigo_usu">
                            <button class="boton mbttm" type="submit">Buscar</button>
                        </form>
                        <div class="campos_usu">
                            <p>NOMBRE DE USUARIO:</p>
                            <input type="text" disabled v-model="Nombre_usu">
                        </div>
                        <div class="text-centerB">
                            <button class="boton mbttm" @click="showModal = false">ASOCIAR</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </transition>
    <div class="ctn-registrar">
        <div>
            <h1>REGISTRAR EMPRESA</h1>
        </div>
        <form class="formUsu" v-on:submit.prevent="registrarEmpresa">
            <div class="campos_usu">
                <p>NOMBRE DE LA EMPRESA:</p>
                <input type="text" v-model="empresa.Nombre_emp">
            </div>
            <div class="campos_usu">
                <p>TIPO DE DOCUMENTO:</p>
                <select v-model="empresa.Tdocumento_td">
                    <option v-for="documento in documentos">{{ documento.Tdocumento_td }}</option>
                </select>
            </div>
            <div class="campos_usu">
                <p>CODIGO DE LA EMPRESA:</p>
                <input type="number" v-model="empresa.Codigo_emp">
            </div>
            <div class="campos_usu">
                <p>CELULAR EMPRESA:</p>
                <input type="number" v-model="empresa.Celular_emp">
            </div>
            <div class="campos_usu">
                <p>TELEFONO:</p>
                <input type="number" v-model="empresa.Telefono_emp">
            </div>
            <div class="campos_usu">
                <p>CORREO:</p>
                <input type="email" v-model="empresa.Correo_emp">
            </div>
            <div class="campos_usu">
                <p>CODIGO USUARIO:</p>
                <input type="text" @click="showModal = true" v-model="empresa.Codigo_usu">
            </div>
            <button class="boton mbttm" type="submit">REGISTRAR</button>
        </form>
    </div>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
    name: 'FormEmpresa',
    data() {
        return {
            showModal: false,
            documentos: [],
            Nombre_usu: "",
            empresa: {
                Nombre_emp: "",
                Tdocumento_td: "",
                Codigo_emp: "",
                Celular_emp: "",
                Telefono_emp: "",
                Correo_emp: "",
                Codigo_usu: ""
            }
        }
    },
    methods: {
        updateModal(modal) {
            this.showModal = modal;
        },
        buscarUsuario() {
            axios.get("http://localhost:3000/user/tipo/" + this.empresa.Codigo_usu)
            .then((result)=>{
                this.Nombre_usu = result.data.success ? result.data.body[0].Nombre_usu : "Usuario no existe"
            }).catch((err)=>{
                this.Nombre_usu = "Usuario no existe"
            })
        },
        getDocumentos() {
            axios.get("http://localhost:3000/tdoc/")
                .then((result) => {
                    this.documentos = result.data.body;
                }).catch((err) => {
                    console.log("Error al traer documentos" + err);
                })
        },
        registrarEmpresa(){
            axios.post("http://localhost:3000/emp/", this.empresa)
            .then((result) => {
                    if (result.data.success) {
                        Swal.fire({
                            icon: "success",
                            title: "Empresa creada exitosamente",
                            showConfirmButton: false,
                            timer: 1000,
                        });
                        this.$router.push({ path: '/Menu' });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "No se ha podido crear la empresa",
                            showConfirmButton: false,
                            timer: 1200,
                        });
                    }
                }).catch((err) => {
                    Swal.fire({
                        icon: "error",
                        title: "No se ha podido crear la empresa",
                        showConfirmButton: false,
                        timer: 1200,
                    });
                })
        }
    },
    mounted() {
        this.getDocumentos();
    }
}
</script>

<style>
.modal-overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.4);
    
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
}

.modal-container {
    background: #A6E8FA;
    padding: 2rem;
    border-radius: 25px;

}


.modal-container p{
    font-size: 30px;
    padding-right: 10px;
}

.container-flex {
    display: flex;
    justify-content: space-between;
}

.container-flex h1{
    margin-left: 30px;
    font-size: 30px;
    font-weight: bolder;
}

.text-centerB {
    text-align: center;
}
</style>