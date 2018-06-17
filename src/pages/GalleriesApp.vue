<template>
   <div class="container">
      <h1><em>All galleries</em></h1>
        <div class="row">
            <div class="col-md-4 card" v-for="(gallery, key) in galleries" :key="key">
                <img class="card-img-top contain" :src="gallery.images[0].images" alt="Card image cap">
				<router-link class="card-text" :to="{ name: 'author', params: { id: gallery.user.id }}">Author: {{ gallery.user.first_name }} {{ gallery.user.last_name }}
    </router-link>
                <div class="card-body">
                        {{gallery.name}}</h5></router-link>
			<p>Gallery title:</p>
    			<router-link  class="btn btn-outline-success" :to="{ name: 'gallery', params: { id: gallery.id }}">
						{{ gallery.gallery_name}}
   				</router-link>
				   
				   <p class="card-text">Creation date: {{ gallery.created_at }} </p>
				   
                </div>
            </div>
        </div>
      </div>



</template>

<script>
import { galleries } from '../services/GalleryService'

	export default {
		
		data(){
			return {
				galleries: [],
				search: ''
			}
		},
		created() {
			galleries.getAll()
			.then((response) => {
				this.galleries = response.data
				console.log(this.galleries)
			})
		},
		computed:{
			filteredGalleries: function(){
				return this.galleries.filter((gallery)=> {
					return gallery.gallery_name.match(this.search)
				})
			}
		}
	}
</script>