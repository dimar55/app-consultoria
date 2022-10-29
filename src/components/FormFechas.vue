<template>
    <div class="ctn-crear">
        <form v-on:submit.prevent="actualizarFechas">
            <h1>AJUSTAR FECHAS</h1>
            <div class="campos">
                <p>Fecha límite de registro de procesos</p>
                <input type="date" v-model="fechas.Fecha_inicio_fp">
            </div>
            <div class="campos">
                <p>Fecha de inicio de los procesos</p>
                <input type="date" v-model="fechas.Fecha_fin_fp">
            </div>
            <div class="campos">
                <p>Fecha final de los procesos</p>
                <input type="date" v-model="fechas.Fecha_estado_fp">
            </div>

            <button class="boton" type="submit">GUARDAR</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from "sweetalert2";

export default {
    name: 'FormFecha',
    data() {
        return {
            fechas: {
                Fecha_inicio_fp: "",
                Fecha_fin_fp: "",
                Fecha_estado_fp: ""
            }
        }
    },
    methods: {
        getFechas() {
            axios.get("http://localhost:3000/fecha/")
                .then((result) => {
                    this.fechas = result.data.body[0];
                    console.log(result.data.body[0])
                }).catch((err) => {
                    console.log("Error al traer fechas" + err);
                })
        },
        actualizarFechas() {
            console.log(this.fechas)
            axios.put("http://localhost:3000/fecha/", this.fechas)
                .then((result) => {
                    if (result.data.success) {
                        Swal.fire({
                            icon: "success",
                            title: "Fechas actualizadas",
                            showConfirmButton: false,
                            timer: 1000,
                        });
                        this.$router.push({ path: '/Menu' });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "No se han podido actualizar las fechas",
                            showConfirmButton: false,
                            timer: 1200,
                        });
                    }
                }).catch((err) => {
                    Swal.fire({
                        icon: "error",
                        title: "No se han podido actualizar las fechas",
                        showConfirmButton: false,
                        timer: 1200,
                    });
                })
        }
    },
    mounted() {
        this.getFechas();
    }
}

</script>



<style>
.campos input {
    width: 430px;
    height: 60px;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 35px;
    font-size: 30px;
    padding-left: 10px;
}
</style>