<template>
    <div class="ctn-crear">
        <form class="form_crear" v-on:submit.prevent="crearDocumento">
            <h1> CREAR PROGRAMA</h1>
            <div class="campos_crear">
                <p>NOMBRE:</p>
                <input type="text" v-model="programa.Nombre_pg">
                <p>DESCRIPCIÓN:</p>
                <textarea name="" id="" cols="30" rows="10" class="descrip" v-model="programa.Descripcion_pg"></textarea>
            </div>
            <button class="boton" type="submit">REGISTRAR</button>
        </form>
    </div>


</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
    name: 'FormPrograma',
    data() {
        return {
            programa: {
                Nombre_pg: "",
                Descripcion_pg: ""
            }
        }
    },
    methods: {
        crearDocumento() {
            axios.post("http://localhost:3000/pg/", this.programa)
                .then((result) => {
                    if (result.data.success) {
                        Swal.fire({
                            icon: "success",
                            title: "Programa registrado",
                            showConfirmButton: false,
                            timer: 1000,
                        });
                        this.$router.push({ path: '/Menu' });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "No se ha podido registrar el programa",
                            showConfirmButton: false,
                            timer: 1200,
                        });
                    }
                })
                .catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "No se ha podido registrar el programa",
                        showConfirmButton: false,
                        timer: 1200,
                    });
                });
        }
    }
} 
</script>


<style>
.ctn-crear {
    margin: auto;
    margin-top: 100px;
    width: 600px;
    height: 700px;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, #0C853B 0%, rgba(37, 145, 6, 0.85) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 36px;
    font-size: 25px;

}

.ctn-crear h1 {
    margin: 20px;

}

.ctn-crear p {
    text-align: start;
    margin-left: 45px;
    margin-top: 40px;
    font-weight: bold;

}



.campos_crear input {
    width: 430px;
    height: 60px;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 30px;
    padding-left: 10px;

}

.descrip {
    border: none;
    width: 430px;
    height: 200px;
    font-size: 30px;
    border-radius: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
}
</style>