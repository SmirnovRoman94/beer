<template>
    <section>
        <div class="container">
            <div class="user">
                <div data-aos="fade-right" class="user-left">
                    <p class="user-left-id"><span>{{user.username}}</span></p>
                    <img  class="user-left-avatar" :src="user.avatar" :alt="user.first_name"/>
                </div>
                <div data-aos="fade-left" class="user-right">
                    <div class="user-right-content">
                        <h3 class="user-right-content-header">Данные:</h3>
                        <p class="user-right-content-item"> Имя: <span>{{user.first_name}}</span></p>
                        <p class="user-right-content-item">Фамилия: <span>{{user.last_name}}</span></p>
                        <p>Дата рождения: <span>{{user.date_of_birth}}</span></p>
                        <p>Номер телефона: <span>{{user.phone_number}}</span></p>
                        <p>Почта: <span>{{user.email}}</span></p>
                    </div>
                </div>
            </div>
            <div class="beer">
                <h1  class="beer-header">Пиво кторое Вам может понравится</h1>
                <div class="cont">
                    <img data-aos="fade-right" class="beer-img" src="../assets/img/beer.png" alt="beer"/>
                    <div class="beer-content">
                        <p class="beer-content-item">Бренд: :<span>{{beer.brand}}</span></p>
                        <p class="beer-content-item">Наименование: <span>{{beer.name}}</span></p>
                        <p class="beer-content-item">Солод: <span>{{beer.malts}}</span></p>
                        <p class="beer-content-item"> Алкоголь: <span>{{beer.alcohol}}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
    props: {
        user: {
            type: Object,
            requared: true
        }
    },
    data(){
        return{
            beer: {}
        }
    },
    mounted(){
        axios.get('https://random-data-api.com/api/beer/random_beer')
            .then((res) => {
                this.beer = res.data
            })
            .catch((e) => console.log(e))
       
        AOS.init()
    }

}
</script>

<style lang="scss" scoped>
span{
    padding-left: 1em;
    font-style: italic;
}
.user{
    min-height: 240px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    width: 60%;
    .user-left{
        width: 50%;
        border-right: 1px solid #fff;
        padding-right: 1em;
        .user-left-id{
            text-align: center;
            font-size: 14px;
            color: rgb(121, 165, 247);
        }
        .user-left-avatar{
            width: 60%;
        }
    }
    .user-right{
        width: 50%;
        text-align: left;
        padding-left: 2em;
        .user-right-content-header{
            border-bottom: 2px solid #43b983;
            color: #42b983;
            width: fit-content;
            margin-bottom: 1em;
            font-size: 20px;
            font-weight: 400;
        }
    }
    
}
.beer{
    font-size: 14px;
    width: 60%;
    padding-top: 2em;
    margin-left: 40%;
    .beer-header{
        border-bottom: 2px solid #43b983;
        width: fit-content;
        text-align: center;
        margin: 0 auto;
        color: #42b983;
        font-size: 20px;
        font-weight: 400;
        animation:  MOVE 5s ease-in;
        
    }
    @keyframes MOVE  {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    .cont{
        display: flex;
        align-items: center;
        .beer-content{
            text-align: left;
            // width: 100%;
            padding-left: 1em;
        }
    }
}
@media screen and(max-width: 1250px) {
    .user{
        width: 100%;
    }
    .beer{
        margin: 0 auto;
        width: 100%;
        .cont{
            justify-content: center;
        }

    }
}
@media screen and(max-width: 770px) {
    .user .user-left {
        width: 40%;
        .user-left-avatar{
            width: 100%;
        }   
    }
    .user  .user-right{
        width: 60%;
    }
    .beer-img{
        width: 40%;
    }
}
@media screen and(max-width: 480px) {
    .user{
        flex-wrap: wrap;
        .user-left{
            width: 100%;
            border-right: none;
        }
        .user-right{
            width: 100%;
            padding-left: 1em;
        }
    }
    .cont{
        flex-wrap: wrap;
        .beer-img{
            width: 100%;
        }
        .beer-content{
            width: fit-content;
            padding-top: 1em;
            width: 100%;
        }
    }
}
</style>