<template>

     <div class="col-6 form-login">

            <h3> Log in page </h3>

        <form @submit.prevent="login">

                <div class="form-group row">

                    <label for="email" class="col-4 col-form-label">Add user email</label>
                        <div class="col-8">
                    <input v-model="email" id="email" type="email" name="email" class="form-control">
                        </div>
                </div>

                <div class="form-group row">

                    <label for="password" class="col-4 col-form-label">Add user password</label>
                        <div class="col-8">
                    <input v-model="password" id="password" type="password" name="password" class="form-control">
                        </div>
                </div>

                <div class="form-group row">
                    <div class="offset-4 col-8">
                    <button type="submit" name="submit" class="btn btn-primary">Login</button>

                </div>

            </div>

        </form>

     </div>

</template>


<script>

import { authService } from '../services/Auth'
	export default {
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			login(){
				authService.login(this.email, this.password)
				.then(()=>{
				this.$router.push({ name: 'galleries'})
				})
			}
		}
	}

</script>

<style>

</style>

