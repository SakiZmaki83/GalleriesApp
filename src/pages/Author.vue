<template>
<div>
	<form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
		  <p>Gallery name</p>
<h2>{{user.first_name }} {{ user.last_name }}'s galleries</h2>

  
  <div class="card-body">
  
  
  
  </div>



</div>
</template>

<script>
import { authors } from '../services/Author'
	export default {
		
		data(){
			return {
				user:[],
				search: ''
			}
		},
		created() {
			authors.get(this.$route.params.id)
			.then((response) => {
				this.user = response.data
				console.log(this.user)
			}).catch((error)=>{
				console.log(error)
			})
		},
	computed:{
		
		}
	}
</script>