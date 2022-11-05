<template>
    <div class="ctnProEncuentro">
        <div class="titular">
            <h1>FASE DE ENCUENTRO</h1>
        </div>

        <div class="campos_proceso">
            <p>Descripción General:</p>
            <textarea name="" id="" cols="30" rows="10" disabled v-model="encuentro.datos.Descripcion_pro_enc"></textarea>
        </div>
        <div class="campos_proceso">
            <p>Personal responsable del procedimiento:</p>
            <input type="text" disabled v-model="encuentro.datos.Personal_pro_enc">
        </div>
        <div class="campos_proceso">
            <p>Observaciones:</p>
            <textarea name="" id="" cols="30" rows="10" disabled v-model="encuentro.datos.Observaciones_pro_enc"></textarea>
        </div>

        <div class="ctn-tabla">
            <p>EPP (Elementos de protección personal) requeridos </p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>NOMBRE</th>
                        <th>DESCRIPCIÓN</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="epp in encuentro.epp">
                        <td>{{epp.Elemento_epp}}</td>
                        <td>{{epp.Descripcion_epp}}</td>
                    </tr>
                </tbody>
            </table>
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
                    <tr v-for="equipo in encuentro.equipos">
                        <td>{{equipo.Nombre_equipo}}</td>
                        <td>{{equipo.Descripcion_equipo}}</td>
                       
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="ctn-tabla">
            <p>Paramentros de Control</p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>DESCRIPCIÓN</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="parametro in encuentro.parametro">
                        <td>{{parametro.Descripcion_param}}</td>
                    </tr>
                </tbody>
            </table>
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
                    <tr v-for="actividad in encuentro.actividad">
                        <td>{{actividad.Nombre_act}}</td>
                        <td>{{actividad.Descripcion_act}}</td>
                        <td>{{actividad.Calidad_act}}</td>
                        <td>{{actividad.Seguridad_act}}</td>
                        <td>{{actividad.Ambiente_act}}</td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div class="ctn-tabla">
            <p>Firmas</p>
            <table class="Table">
                <thead>
                    <tr>
                        <th>NOMBRE</th>
                        <th>ROL</th>
                        <th>FIRMA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="firma in firmas">
                        <td>{{firma.Nombre_usu}}</td>
                        <td>{{firma.Tipo_usu}}</td>
                        <td>
                            <img src="../assets/icon_user.png" alt="" v-show="firma.Firma_encuentro == 1">
                            <img src="../assets/iconX.png" alt="" v-show="firma.Firma_encuentro == 0">
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
        <div>

        </div>
        <div class="ctn-firma">
            <p>FIRMAR</p>
            <input type="checkbox" v-model="firmado">
        </div>


        <form class="btn" v-on:submit.prevent="firmarFase">
            <button class="boton">FIRMAR</button>
        </form>

    </div>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";
export default{
    name: 'FormVerPrimeraFase',
    data(){
        return {
            encuentro: {
                datos: {
                    Descripcion_pro_enc: "",
                    Personal_pro_enc: "",
                    Observaciones_pro_enc: "",
                    Id_cta: 36
                },
                epp: [],
                equipos: [],
                parametro: [],
                actividad: []
            },
            firmas: [],
            firmado: false,
        }
    },
    methods: {
        getDetalles(){
            axios.get("http://localhost:3000/encto/"+this.$route.params.Id_cta)
            .then((result)=>{
                if(result.data.success){
                    this.encuentro = result.data.body;
                }else{
                    alert("Error al cargar datos");
                }
            }).catch((err)=>{
                console.log("Error al cargar datos" + err)
            })
        },
        getFirmas(){
            axios.get("http://localhost:3000/cta/Firmas/"+this.$route.params.Id_cta)
            .then((result)=>{
                if(result.data.success) return this.firmas = result.data.body;
                alert("Error al cargar las firmas");
            }).catch((err)=>{
                console.log("Error al cargar firmas" + err);
            })
        },
        firmarFase(){
            let firmaData = {
                Codigo_usu: sessionStorage.getItem("Codigo_usu"), 
                Id_cta: this.$route.params.Id_cta, 
                Fase_id: 1,
                Firma: this.firmado ? 1 : 0
            }
            axios.post("http://localhost:3000/cta/Firmar", firmaData)
            .then((result) => {
                    if (result.data.success) {
                        Swal.fire({
                            icon: "success",
                            title: "Firma registrada exitosamente",
                            showConfirmButton: false,
                            timer: 1000,
                        });
                        this.$router.push({ path: '/Menu' });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "No se ha podido firmar la fase",
                            showConfirmButton: false,
                            timer: 1200,
                        });
                    }
                }).catch((err) => {
                    Swal.fire({
                        icon: "error",
                        title: "No se ha podido firmar la fase",
                        showConfirmButton: false,
                        timer: 1200,
                    });
                })
        }
    },
    mounted(){
        this.getFirmas();
        this.getDetalles();
    }
}
</script>

<style>

.ctn-firma{
 display: flex;
 align-items: baseline;
}
 .ctn-firma p{
    margin: 40px;
    font-size: 35px;
 }

 .ctn-firma input{
    width: 30px;
    height: 30px;
 }
 
</style>