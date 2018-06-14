<template>
   <div class="container">
      <h1><em>Galleries:</em></h1>
        
      </div>



</template>

<script>
import { galleries } from '../services/GalleryService'

	export default {
		
		data(){
			return {
			
			}
		},
		created() {
			galleries.getAll()
			.then((response) => {
				this.galleries = response.data
				
			})
		}
	}
</script>