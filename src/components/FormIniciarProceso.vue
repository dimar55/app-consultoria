<template>
    <transition name="fade">
        <div class="modal-overlay" v-if="showModal"></div>
    </transition>
    <transition name="fade">
        <div class="modal" v-if="showModal">
            <div class="modal-container">
                <div class="container-flex">
                    <h1>Asociar empresa</h1>
                    <img src="../assets/icon_X.png" alt="" @click="showModal = false">
                </div>
                <div>
                    <div class="formUsu">
                        <form class="campos_usu" v-on:submit.prevent="buscarEmpresa">
                            <p>CODIGO EMPRESA:</p>
                            <input type="text" v-model="proceso.cta.Codigo_emp">
                            <button class="boton mbttm" type="submit">Buscar</button>
                        </form>
                        <div class="campos_usu">
                            <p>NOMBRE DE EMPRESA:</p>
                            <input type="text" disabled v-model="empresa.Nombre_emp">
                        </div>
                        <div class="campos_usu">
                            <p>NOMBRE DE EMPLEADO:</p>
                            <input type="text" disabled v-model="empresa.Nombre_empleado">
                        </div>
                        <div class="text-centerB">
                            <button class="boton mbttm" @click="showModal = false">ASOCIAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
    <transition name="fade">
        <div class="modal-overlay" v-if="showModalUsuarios"></div>
    </transition>
    <transition name="fade">
        <div class="modal" v-if="showModalUsuarios">
            <div class="modal-container">
                <div class="container-flex">
                    <h1>Asociar usuario</h1>
                    <img src="../assets/icon_X.png" alt="" @click="showModalUsuarios = false">
                </div>
                <div>
                    <div class="formUsu">
                        <form class="campos_usu" v-on:submit.prevent="buscarUsuario">
                            <p>CODIGO USUARIO:</p>
                            <input type="text" v-model="usuario.Codigo_usu">
                            <button class="boton mbttm" type="submit">Buscar</button>
                        </form>
                        <div class="campos_usu">
                            <p>NOMBRE DE USUARIO:</p>
                            <input type="text" disabled v-model="usuario.Nombre_usu">
                        </div>
                        <div class="campos_usu">
                            <p>ROL:</p>
                            <input type="text" disabled v-model="usuario.Tipo_usu">
                        </div>
                        <div class="text-centerB">
                            <button class="boton mbttm" @click="asociarUsuario()">ASOCIAR</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </transition>
    <div class="ctn-iniciar">
        <div class="formulario">
            <h1>INICIAR PROCESO</h1>
            <div class="campos">
                <p>NOMBRE DEL PROCESO:</p>
                <input type="text" v-model="proceso.cta.Nombre_cta">
            </div>
            <div class="campos">
                <p>IDENTIFICACIÓN DE LA EMPRESA:</p>
                <input type="text" v-model="proceso.cta.Codigo_emp" @click="showModal = true">
            </div>
            <div class="campos">
                <p>REPRESENTANTE EMPRESARIAL:</p>
                <input type="text" disabled v-model="empresa.Nombre_empleado">
            </div>
            <div class="ctn-table">
                <p>RESPONSABLES:</p>
                <table class="Table">
                    <thead>
                        <tr>
                            <th>NOMBRE</th>
                            <th>ROL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="usuario in usuariosTabla">
                            <td>{{ usuario.Nombre_usu }}</td>
                            <td>{{ usuario.Tipo_usu }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <img src="../assets/icon_add_user.png" @click="showModalUsuarios = true">
            <div>
                <form v-on:submit.prevent="registrarProceso">
                    <button class="boton mbttm" type="submit">REGISTRAR</button>
                </form>
            </div>
        </div>

    </div>

</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
    name: 'FormIniciarProceso',
    data() {
        return {
            showModal: false,
            showModalUsuarios: false,
            usuario: {
                Codigo_usu: "",
                Nombre_usu: "",
                Tipo_usu: "",
                exist: false
            },
            empresa: {
                Nombre_emp: "",
                Nombre_empleado: ""
            },
            proceso: {
                cta: {
                    Codigo_emp: "",
                    Nombre_cta: ""
                },
                users: []
            },
            usuariosTabla: [],
            usuariosCodTabla: [],
        }
    },
    methods: {
        buscarEmpresa() {
            axios.get("http://localhost:3000/emp/relation/" + this.proceso.cta.Codigo_emp)
                .then((result) => {
                    this.empresa.Nombre_emp = result.data.success ? result.data.body[0].Nombre_emp : "Empresa no existe"
                    this.empresa.Nombre_empleado = result.data.success ? result.data.body[0].Nombre_usu : "Empleado no existe"
                }).catch((err) => {
                    this.empresa.Nombre_emp = "Empresa no existe"
                    this.empresa.Nombre_empleado = "Empleado no existe"
                })
        },
        buscarUsuario() {
            axios.get("http://localhost:3000/user/tipo/" + this.usuario.Codigo_usu)
                .then((result) => {
                    this.usuario.Nombre_usu = result.data.success ? result.data.body[0].Nombre_usu : "Usuario no existe"
                    this.usuario.Tipo_usu = result.data.success ? result.data.body[0].Tipo_usu : "Usuario no existe"
                    this.usuario.exist = result.data.success;
                }).catch((err) => {
                    this.usuario.Nombre_usu = "Usuario no existe";
                    this.usuario.Tipo_usu = "Usuario no existe";
                    this.usuario.exist = result.data.success;
                })
        },
        asociarUsuario() {
            if (this.usuario.exist && !this.usuariosCodTabla.includes(this.usuario.Codigo_usu)) {
                this.proceso.users.push([this.usuario.Codigo_usu])
                this.usuariosCodTabla.push(this.usuario.Codigo_usu)
                this.usuariosTabla.push({
                    Nombre_usu: this.usuario.Nombre_usu,
                    Tipo_usu: this.usuario.Tipo_usu,
                })
                this.showModalUsuarios = false;
                this.usuario = {
                    Codigo_usu: "",
                    Nombre_usu: "",
                    Tipo_usu: "",
                    exist: false
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error al asociar usuario",
                    showConfirmButton: false,
                    timer: 1200,
                });
            }
        },
        registrarProceso() {
            if (this.proceso.users.length <= 0) {
                Swal.fire({
                    icon: "error",
                    title: "No se ha podido crear el proceso",
                    showConfirmButton: false,
                    timer: 1200,
                });
                return;
            }
            axios.post("http://localhost:3000/cta/", this.proceso)
                .then((result) => {
                    if (result.data.success) {
                        Swal.fire({
                            icon: "success",
                            title: "Proceso creado exitosamente",
                            showConfirmButton: false,
                            timer: 1000,
                        });
                        this.$router.push({ path: '/Menu' });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "No se ha podido crear el proceso",
                            showConfirmButton: false,
                            timer: 1200,
                        });
                    }
                }).catch((err) => {
                    Swal.fire({
                        icon: "error",
                        title: "No se ha podido crear el proceso",
                        showConfirmButton: false,
                        timer: 1200,
                    });
                })
        }

    }
}
</script>

<style>
.ctn-iniciar {
    margin: auto;
    margin-top: 100px;
    width: 600px;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, #0C853B 0%, rgba(37, 145, 6, 0.85) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 36px;
    font-size: 25px;
}

.ctn-iniciar h1 {
    margin: 20px;

}

.ctn-iniciar p {
    text-align: start;
    margin-left: 45px;
    margin-top: 40px;
    font-weight: bold;

}

.formulario img {
    padding-top: 20px;
}

.campos select {
    display: inline-block;
    width: 440px;
    cursor: pointer;
    height: 60px;
    outline: 0;
    border: 0;
    border-radius: 25px;
    background: white;
    margin-top: 20px;
    margin-left: 35px;
    color: #7b7b7b;
    font-size: 1em;
    color: black;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.25s ease;
}

.ctn-table p {
    padding-bottom: 20px;
}

table.Table {
    background-color: #FFFFFF;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
   
    
}

table.Table td,
table.Table th {
    border: 2px solid #000000;
    padding: 15px 10px; 
    word-break: break-all;
    max-width: 250px;
    
}

table.Table tbody td {
    font-size: 30px;
    color: #000000;
}

table.Table thead {
    background: #EFBF25;
    background: -moz-linear-gradient(top, #f3cf5b 0%, #f0c53a 66%, #EFBF25 100%);
    background: -webkit-linear-gradient(top, #f3cf5b 0%, #f0c53a 66%, #EFBF25 100%);
    background: linear-gradient(to bottom, #f3cf5b 0%, #f0c53a 66%, #EFBF25 100%);
}

table.Table thead th {
    font-size: 25px;
    font-weight: bold;
    color: #FFFFFF;
}

table.Table tfoot td {
    font-size: 25px;
}

table.Table tfoot .links {
    text-align: right;
}

table.Table tfoot .links a {
    display: inline-block;
    background: #1C6EA4;
    color: #FFFFFF;
    padding: 10px 15px;
    border-radius: 5px;
}
</style>