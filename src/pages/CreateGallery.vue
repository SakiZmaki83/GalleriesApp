<template>
	
<div>
  	<h3>Create gallery</h3>
      <form>
  <div class="form-group">
    <label for="gallery_name">gallery name </label>
    <input v-model="newGallery.gallery_name" v-validate="{ required: true, min: 2, max: 255 }" type="text" class="form-control" id="gallery_name" placeholder="myGallery">
  </div>
  <div class="form-group">
    <label for="description">description</label>
    <input v-model="newGallery.description" v-validate="{ max:1000 }" type="text" class="form-control" id="description" placeholder="Password">
  </div>
  
  <button type="submit" class="btn btn-primary">button</button>
</form>
</div>

<script>
import { galleries } from '../services/Galleries'
	
    export default {
		data(){
			return{
				newGallery: {
                    gallery_name: '',
                    description: '',
                    images: []
                }
					
				},
                methods: {
                    
                }
            }
</script>

<style>


</style>