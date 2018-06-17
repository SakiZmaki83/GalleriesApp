<template>
<div>
<div class="card" style="width: 18rem;">
  <div class="card-body">
 <router-link  class="btn btn-outline-success" :to="{ name: 'gallery', params: { id: gallery.id }}">
						{{ gallery.gallery_name}}
   				</router-link>
    <p class="card-text">Creation date: {{ gallery.created_at }} </p>
    <p class="card-text">Description: {{ gallery.description }} </p>
  <router-link class="card-text" :to="{ name: 'author', params: { id: gallery.user.id }}">Author: {{ gallery.user.first_name }} {{ gallery.user.last_name }}
    </router-link>
  </div>
</div>
<div class="card" style="width: 18rem;">
	<b-carousel id="carousel1" controls indicators background="#848383" :interval="2000">
     
    <b-carousel-slide v-for="(image, key) in gallery.images" :key="key" :img-src="image.images"/>
</b-carousel>
<button v-if="myGallery" @click.prevent="deleteGallery">Delete</button>
</div>

</div>
</template>

<script>
import { galleries } from '../services/GalleryService'

	export default {
		
		data(){
			return {
				gallery:[],
				myGallery: false,
				
				
			}
		},
		created() {
			galleries.get(this.$route.params.id)
			.then((response) => {
			
				this.gallery = response.data
				
				console.log(this.gallery)
			}).catch((error)=>{
				console.log(error)
			})
		},
		methods: {
			openInNewTab(link){
				window.open(link, '_blank')
				console.log(this.myGallery)
				
			},
			deleteGallery(){
				if (confirm("Confirm deletion!")) {
    				galleries.remove(this.gallery.id)
    				.then((response) => {
    					console.log(response.data)
    				})
    				.then(()=>{
        				this.$router.push({ name: 'my-galleries'}) 
        			})
    				.catch((error)=>{
						console.log(error)
					})
				} 
			}
		},
		
	}
</script>