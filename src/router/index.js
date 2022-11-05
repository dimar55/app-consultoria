import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
import MenuUsu from '../views/MenuUsu.vue'
import CrearPrograma from '../views/CrearPrograma.vue'
import CrearDocumento from '../views/CrearDocumento.vue'
import AjustarFecha from '../views/AjustarFecha.vue'
import RegistrarUsuario from '../views/RegistrarUsuario.vue'
import RegistrarEmpresa from '../views/RegistrarEmpresa.vue'
import IniciarProceso from '../views/IniciarProceso.vue'
import VerProcesos from '../views/VerProcesos.vue'
import VerProcesosUsu from '../views/VerProcesosUsu.vue'
import PrimeraFase from '../views/PrimeraFase.vue'
import SegundaFase from '../views/SegundaFase.vue'
import TerceraFase from '../views/TerceraFase.vue'
import VerPrimeraFase from '../views/VerPrimeraFase.vue'
import VerSegundaFase from '../views/VerSegundaFase.vue'
import VerTerceraFase from '../views/VerTerceraFase.vue'
import axios from "axios";
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },

  {
    path: '/MenuUsu',
    name: 'MenuUsu',
    component: MenuUsu
  },

  {
    path: '/CrearPrograma',
    name: 'CrearPrograma',
    component: CrearPrograma
  },

  {
    path: '/CrearDocumento',
    name: 'CrearDocumento',
    component: CrearDocumento
  },
  {
    path: '/AjustarFecha',
    name: 'AjustarFecha',
    component: AjustarFecha
  },

  {
    path: '/RegistrarUsuario',
    name: 'RegistrarUsuario',
    component: RegistrarUsuario
  },

  {
    path: '/RegistrarEmpresa',
    name: 'RegistrarEmpresa',
    component: RegistrarEmpresa
  },
  {
    path: '/IniciarProceso',
    name: 'IniciarProceso',
    component: IniciarProceso
  },

  {
    path: '/VerProcesos',
    name: 'VerProcesos',
    component: VerProcesos
  },

  {
    path: '/VerProcesosUsu',
    name: 'VerProcesosUsu',
    component: VerProcesosUsu
  },

  {
    path: '/PrimeraFase/:Id_cta',
    name: 'PrimeraFase',
    component: PrimeraFase
  },

  {
    path: '/SegundaFase/:Id_cta',
    name: 'SegundaFase',
    component: SegundaFase
  },

  {
    path: '/TerceraFase/:Id_cta',
    name: 'TerceraFase',
    component: TerceraFase
  },


  {
    path: '/VerPrimeraFase/:Id_cta',
    name: 'VerPrimeraFase',
    component: VerPrimeraFase
  },
  {
    path: '/VerSegundafase/:Id_cta',
    name: 'VerSegundaFase',
    component: VerSegundaFase
  },

  {
    path: '/VerTerceraFase/:Id_cta',
    name: 'VerTerceraFase',
    component: VerTerceraFase
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from) => {
  if (
    !sessionStorage.getItem('jwt') &&
    to.name !== 'Login'
  ) {
    return { name: 'Login' }
  }else{
    let token = sessionStorage.getItem('jwt');
    let res = await axios.post("http://localhost:3000/user/auth/verifyToken", {token})
    .then((result)=>{
      sessionStorage.setItem("User", result.data.body.decoded.user.Nombre_usu);
      sessionStorage.setItem("Codigo_usu", result.data.body.decoded.user.Codigo_usu);
      sessionStorage.setItem("Tipo", result.data.body.decoded.user.Tipo_usu);
      return result.data.success
    }).catch((err)=>{
      return false;
    });
    if(!res && to.name !== 'Login'){
      return { name: 'Login' }
    }
  }

})

router.beforeEach(async (to, from) => {
  if (
    sessionStorage.getItem('jwt') &&
    to.name == 'Login'
  ) {
   // return { name: 'Menu' }
    let token = sessionStorage.getItem('jwt');
    let res = await axios.post("http://localhost:3000/user/auth/verifyToken", {token})
    .then((result)=>{
      sessionStorage.setItem("User", result.data.body.decoded.user.Nombre_usu);
      sessionStorage.setItem("Codigo_usu", result.data.body.decoded.user.Codigo_usu);
      sessionStorage.setItem("Tipo", result.data.body.decoded.user.Tipo_usu);
      return result.data.success
    }).catch((err)=>{
      return false;
    });
    if(res){
      return { name: 'Menu' }
    }
  }

})
export default router
