<template>
    <div class="ctn-crear">
        <form class="form_crear" v-on:submit.prevent="crearDocumento">
            <h1> CREAR DOCUMENTO</h1>
            <div class="campos_crear">
                <p>TIPO DE DOCUMENTO:</p>
                <input type="text" v-model="documento.Tdocumento_td">
                <p>DESCRIPCIÓN:</p>
                <textarea name="" id="" cols="30" rows="10" class="descrip"
                    v-model="documento.Descripcion_td"></textarea>
            </div>
            <button class="boton" type="submit">REGISTRAR</button>
        </form>
    </div>

</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
    name: 'FormDocumento',
    data() {
        return {
            documento: {
                Tdocumento_td: "",
                Descripcion_td: ""
            }
        }
    },
    methods: {
        crearDocumento() {
            axios.post("http://localhost:3000/tdoc/", this.documento)
                .then((result) => {
                    if (result.data.success) {
                        Swal.fire({
                            icon: "success",
                            title: "Tipo de documento registrado",
                            showConfirmButton: false,
                            timer: 1000,
                        });
                        this.$router.push({ path: '/Menu' });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "No se ha podido registrar el documento",
                            showConfirmButton: false,
                            timer: 1200,
                        });
                    }
                })
                .catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "No se ha podido registrar el documento",
                        showConfirmButton: false,
                        timer: 1200,
                    });
                });
        }
    }
} 
</script>