<template>
    <div class="container">
        <h1>Galleries:</h1>
        <div class="row">
            <div class="card-style card col-xs-3" v-for="(galleries, key) in galleries" :key="key">
                <img class="card-img-top" :src="galleries.images[0].url" alt="Card image cap">
                <div class="card-body">
                    <router-link :to="{ name: 'gallery', params:{id: gallery.id}}">
                        <h5 class="card-title">{{gallery.name}}</h5>
                    </router-link>
                    <router-link :to="{ name: 'author', params:{id: gallery.user.id}}">
                        <p class="card-text"><i>created by:</i> {{gallery.user.first_name}} {{gallery.user.last_name}}
                        </p>
                    </router-link>
                    <p class="card-text"><i>created at:</i> {{gallery.created_at}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {galleryService} from "../services/GalleryService";
    export default {
        name: "MyGalleries",
        data() {
            return {
                galleries: []
            }
        },
        beforeRouteEnter(to, from, next) {
            next((vm) => {
                galleryService.getSingleUserGalleries()
                    .then((response) => {
                        vm.galleries = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
        },
    }
</script>

<style scoped>
    .slider-item {
        height: 500px;
    }
</style>