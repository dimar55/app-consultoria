<template>
    <div class="ctn-info">
        <div class="info"> 
            <div class="title-info">
                <p>  Programas Extendidos en Cúcuta</p>
            </div>

            <p> <img src="../assets/icon_location.png" alt=""/> AV 3 No.13-14 La Playa</p>
            <p><img src="../assets/icon_phone.png" alt=""/> Pregrado: +57 311-5220210</p>
            <p> <img src="../assets/icon_phone.png" alt=""/> Postgrado: +57 317-5112056</p>
            <div class="correo">
                <p> Notificaciones judiciales:</p>
            </div>
            <p><img src="../assets/icon_mail.png" alt=""/> correspondenciacucuta@unisimonbolivar.edu.co</p>

        </div>
   
        <div class="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3952.1099890602923!2d-72.50344003474741!3d7.883559858043892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sunisimon!5e0!3m2!1ses!2sco!4v1666883563982!5m2!1ses!2sco" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Footer'
    }    
</script>


<style>

.ctn-info{
 display: flex;
 justify-content: space-between;
 margin-top: 60px;
 background-color: white;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 padding-top: 30px;
 padding-right: 60px;
 padding-left: 60px;
 align-items: center;
}
.title-info{
    padding-bottom: 20px;
    color: #0C853B;
    font-weight: bold;
}

.info{
     text-align: start;
    
}
.info p{
    font-size: 20px;
}

.correo{
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bold;
}
</style>