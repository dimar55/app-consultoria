import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
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

export default router
