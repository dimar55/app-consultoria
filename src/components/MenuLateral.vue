<template>
    <div>
       <div class="title">
            <div class="btn_menu">
                    <label @click="show_barra = true"><img src="../assets/icon_menu.png" alt=""/></label>
                </div> 
                <div>
                    <h1>CONSULTORÍA JURÍDICA</h1>
                </div>
                <div class="icon">
                  <img src="../assets/iconLogout.png" alt="" @click="cerrarSesion()">
                 
                </div>  
                  
        </div>



        <div class="container-menu" v-show="show_barra">
            <div class="cont-menu">
                <div class="logo_user">
                    <img src="../assets/hombre.png" alt="">
                    <p>{{name_usuario}}</p>
                </div>
                
                <nav>
                    <a  @click="go_Menu" >Menu principal</a>
                    <a  @click="go_RegistrarUsuario" >Registrar Usuario</a>
                    <a  @click="go_RegistrarEmpresa" >Registrar Empresa</a>
                    <a  @click="go_RegistrarProceso" >Registrar Proceso</a>
                    <a  @click="go_VerProceso" >Ver Proceso</a>
                    <a  @click="go_AjustarFechas">Ajustar Fechas</a>
                    <a  @click="go_crearDocumento" >Crear Documento</a>
                    <a  @click="go_crearPrograma">Crear Programa</a>
                </nav>
            <label  @click="show_barra = false"><img src="../assets/icon_X.png" alt=""></label>
            </div>
        </div>

        
    </div>
</template>

<script>
    export default {
    name: 'MenuLateral',
    data(){
        return{
            name_usuario: sessionStorage.getItem('User'),
            show_barra: false
        }
    },
    methods: {
        go_crearDocumento(){
            this.show_barra=false;
            this.$router.push({ path: '/CrearDocumento' });
            
        },

        go_crearPrograma(){
            this.show_barra=false;
            this.$router.push({ path: '/CrearPrograma' });
        },
        go_Menu(){
            this.show_barra=false;
            this.$router.push({ path: '/Menu' });
        },
        go_AjustarFechas(){
            this.show_barra=false;
            this.$router.push({ path: '/AjustarFecha' });
        },
        go_RegistrarUsuario(){
            this.show_barra=false;
            this.$router.push({ path: '/RegistrarUsuario' });
        },
        go_RegistrarEmpresa(){
            this.show_barra=false;
            this.$router.push({ path: '/RegistrarEmpresa' });
        },
        go_RegistrarProceso(){
            this.show_barra=false;
            this.$router.push({ path: '/IniciarProceso' });
        },
        go_VerProceso(){
            this.show_barra=false;
            this.$router.push({ path: '/VerProcesos' });
        },
        cerrarSesion(){
            sessionStorage.clear();
            this.$router.push({ path: '/' });
        }
    } 
    }
</script>


<style>

    .ctn{
        text-align: center;
    }

    .title{
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        width: 100%;
        background: #0C853B;
        border: 1px solid #000000;
        color: white;
        font-size: 35px;
        padding-top:10px ;
        padding-right: 20px;
        padding-left: 20px;
        align-items: baseline;
      
    }
    .icon{
        width: 60px;
        height: 60px;
        align-content: center;
        text-align: center;
        justify-content: center;
        background: white;
        border-radius: 30px;
    }

    .icon img{
        padding-top: 10px;
    }

    .logo_user{
        padding-top: 50px;
    }

    .logo_user p{
        color: white;
        font-size: 30px;
        padding-top: 20px;
    }

    .container-menu{
        position: fixed;
        text-align: center;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100vh;
        top: 0; left: 0;
        transition: all 500ms ease;
    }



    .cont-menu{
        width: 100%;
        max-width: 250px;
        background: #1c1c1c;
        height: 100vh;
        position: relative;
        transition: all 500ms ease;
    }

    .cont-menu nav{
        transform: translateY(15%);
    }
    .cont-menu nav a{
        display: block;
        text-decoration: none;
        padding: 20px;
        color: #c7c7c7;
        border-left: 5px solid transparent;
        transition: all 400ms ease;
    }

    .cont-menu nav a:hover{
        border-left: 5px solid #c7c7c7;
        background: #1f1f1f;

    }

    .cont-menu label{
        position: absolute;
        right: 5px;
        top: 5px;
        cursor: pointer;
    }


</style>