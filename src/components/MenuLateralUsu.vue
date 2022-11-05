<template>
     <div>
       <div class="title">
            <div class="btn_menu">
                    <label @click="show_barraUsu = true"><img src="../assets/icon_menu.png" alt=""/></label>
                </div> 
                <div>
                    <h1>CONSULTORÍA JURÍDICA</h1>
                </div>
                <div class="icon">
                  <img src="../assets/icon_user.png" alt="">
                 
                </div>  
                  
        </div>

        <div class="container-menu" v-show="show_barraUsu">
            <div class="cont-menu">
                <div class="logo_user">
                    <img src="../assets/hombre.png" alt="">
                    <p>{{name_usuarioUsu}}</p>
                </div>
                
                <nav>
                    <a  @click="go_MenuUsu">Menu principal</a>
                    <a  @click="go_VerProcesoUsu">Ver Proceso</a>

                </nav>
            <label  @click="show_barraUsu = false"><img src="../assets/icon_X.png" alt=""></label>
            </div>
        </div>

        
    </div>
</template>


<script>
    export default {
    name: 'MenuLateralUsu',
    data(){
        return{
            name_usuarioUsu: sessionStorage.getItem('User'),
            show_barraUsu: false
        }
    },
    methods: {
        
        go_MenuUsu(){
            this.show_barraUsu=false;
            this.$router.push({ path: '/MenuUsu' });
        },

        go_VerProcesoUsu(){
            this.show_barraUsu=false;
            this.$router.push({ path: '/VerProcesosUsu' });
        },
    },
    } 




 



</script>