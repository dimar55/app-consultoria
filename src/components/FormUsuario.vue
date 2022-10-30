<template>
    <div class="ctn-registrar">
        <div>
            <h1>REGISTRAR USUARIO</h1>
        </div>
        <form class="formUsu" v-on:submit.prevent="registrarUsuario">
            <div class="campos_usu">
                <p>NOMBRE COMPLETO:</p>
                <input type="text" v-model="user.Nombre_usu">
            </div>
            <div class="campos_usu">
                <p>FECHA DE NACIMIENTO:</p>
                <input type="date" v-model="user.Fecha_usu">
            </div>
            <div class="campos_usu">
                <p>TIPO DE DOCUMENTO:</p>
                <select v-model="user.Tdocumento_td">
                    <option v-for="documento in documentos">{{ documento.Tdocumento_td }}</option>
                </select>
            </div>
            <div class="campos_usu">
                <p>NUMERO DE DOCUMENTO:</p>
                <input type="number" v-model="user.Codigo_usu">
            </div>
            <div class="campos_usu">
                <p>CORREO:</p>
                <input type="text" v-model="user.Correo_usu">
            </div>
            <div class="campos_usu">
                <p>TELEFONO:</p>
                <input type="number" v-model="user.Telefono_usu">
            </div>
            <div class="campos_usu">
                <p>NICK:</p>
                <input type="text" v-model="user.Nick_usu">
            </div>
            <div class="campos_usu">
                <p>CONTRASEÑA:</p>
                <input type="password" v-model="user.Contra_usu">
            </div>
            <div class="campos_usu">
                <p>TIPO DE USUARIO:</p>
                <select v-model="user.Tipo_usu">
                    <option selected>ESTUDIANTE</option>
                    <option>PROFESOR</option>
                    <option>EMPRESA</option>
                </select>

            </div>
            <div class="campos_usu" v-show="user.Tipo_usu !== 'EMPRESA'">
                <p>CORREO INSTITUCIONAL:</p>
                <input type="email" v-model="user.Correo_ins_usu">
            </div>
            <div class="campos_usu" v-show="user.Tipo_usu !== 'EMPRESA'">
                <p>CÓDIGO INSTITUCIONAL:</p>
                <input type="text" v-model="user.Codigo_ins_usu">
            </div>
            <div class="campos_usu" v-show="user.Tipo_usu !== 'EMPRESA'">
                <p>PROGRAMA:</p>
                <select v-model="user.Nombre_pg">
                    <option v-for="programa in programas">{{ programa.Nombre_pg }}</option>
                </select>
            </div>
            <button class="boton mbttm" type="submit">REGISTRAR</button>
        </form>
    </div>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
    name: 'FormUsuario',
    data() {
        return {
            documentos: [],
            programas: [],
            user: {
                Nombre_usu: "",
                Fecha_usu: "",
                Tdocumento_td: "Cedula de ciudadania",
                Codigo_usu: "",
                Correo_usu: "",
                Telefono_usu: "",
                Nick_usu: "",
                Contra_usu: "",
                Tipo_usu: "ESTUDIANTE",
                Correo_ins_usu: "",
                Codigo_ins_usu: "",
                Nombre_pg: ""
            }
        }
    },
    methods: {
        getDocumentos() {
            axios.get("http://localhost:3000/tdoc/")
                .then((result) => {
                    this.documentos = result.data.body;
                }).catch((err) => {
                    console.log("Error al traer documentos" + err);
                })
        },
        getProgramas() {
            axios.get("http://localhost:3000/pg/")
                .then((result) => {
                    this.programas = result.data.body;
                }).catch((err) => {
                    console.log("Error al traer programas" + err);
                })
        },
        registrarUsuario() {
            if (this.user.Tipo_usu == "EMPRESA") {
                this.user.Correo_ins_usu = "";
                this.user.Codigo_ins_usu = "";
                this.user.Nombre_pg = "Empresa"
            }
            axios.post("http://localhost:3000/user/", this.user)
                .then((result) => {
                    if (result.data.success) {
                        Swal.fire({
                            icon: "success",
                            title: "Usuario creado exitosamente",
                            showConfirmButton: false,
                            timer: 1000,
                        });
                        this.$router.push({ path: '/Menu' });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "No se ha podido crear el usuario",
                            showConfirmButton: false,
                            timer: 1200,
                        });
                    }
                }).catch((err) => {
                    Swal.fire({
                        icon: "error",
                        title: "No se ha podido crear el usuario",
                        showConfirmButton: false,
                        timer: 1200,
                    });
                })
        }
    },
    mounted() {
        this.getDocumentos();
        this.getProgramas();
    }
}
</script>


<style>
.ctn-registrar {
    margin: auto;
    margin-top: 100px;
    width: 850px;
    text-align: center;
    color: white;
    justify-content: center;
    background: linear-gradient(180deg, #0C853B 0%, rgba(37, 145, 6, 0.85) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 36px;
    font-size: 25px;
}

.ctn-registrar h1 {
    margin: 40px;
    padding-top: 40px;
}

.campos_usu {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
    font-weight: bold;
}

.formUsu input {
    width: 430px;
    height: 60px;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
    font-size: 30px;
    padding-left: 10px;
}


.campos_usu select {
    display: inline-block;
    width: 440px;
    cursor: pointer;
    height: 60px;
    outline: 0;
    border: 0;
    border-radius: 25px;
    background: white;
    margin-top: 20px;
    color: #7b7b7b;
    font-size: 1em;
    color: black;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.25s ease;
}

.campos_usu select:hover {
    background: #B1E8CD;
}

.mbttm{
    margin-bottom: 1rem;
}
</style>