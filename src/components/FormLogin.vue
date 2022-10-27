<template>
    <div class="login">
        <form class="formulario" v-on:submit.prevent="login">
            <div class="titleLogin">
                <h1>INICIO DE SESIÓN</h1>
            </div>
            <div class="fields">
                <h3>USUARIO:</h3>
                <input type="text" v-model="user.Nick_usu">
                <h3>CONTRASEÑA:</h3>
                <input type="password" v-model="user.Contra_usu">
                <div class="btn">
                    <button class="boton" type="submit">INICIAR SESIÓN</button>
                </div>
            </div>
        </form>
    </div>

</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
    name: 'FormLogin',
    data() {
        return {
            user: {
                Nick_usu: "",
                Contra_usu: ""
            }
        }
    },
    methods: {
        login() {
            axios.post("http://localhost:3000/user/auth/signin", this.user)
                .then((result) => {
                    if (result.data.success) {
                        sessionStorage.setItem("jwt", result.data.body.token);
                        Swal.fire({
                            icon: "success",
                            title: "Sesion iniciada",
                            showConfirmButton: false,
                            timer: 1000,
                        });
                        this.$router.push({ path: '/Menu' });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Usuario y/o contraseña incorrecta",
                            showConfirmButton: false,
                            timer: 1200,
                        });
                    }
                })
                .catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Usuario y/o contraseña incorrecta",
                        showConfirmButton: false,
                        timer: 1200,
                    });
                });
        }
    }
}
</script>

<style>
.login {
    height: 100%;
    width: 100%;
    background: linear-gradient(#0C853B, #24A321);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.titleLogin {
    text-align: center;
    font-size: 25px;
    padding-bottom: 90px;
}

.fields {
    font-size: 30px;

}

.formulario input {
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

.btn {
    align-content: center;
    justify-content: center;
    text-align: center;

}

.boton {
    height: 55px;
    width: 250px;
    border-radius: 25px;
    background-color: #EFBF25;
    border: none;
    font-size: 25px;
    color: white;
    font-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
}
</style>

