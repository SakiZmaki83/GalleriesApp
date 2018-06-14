<template>
    
        

        <div class="container mt-4">
            <form class="form-signin" @submit.prevent="register">


            <div class="form-group row">

            <label for="firstName" class="col-4 col-form-label"> Add first name</label>
                <div class="col-8">
            <input v-model="firstName" id="firstName" type="text" name="firstName" class="form-control">
                </div>
        </div>

        <div class="form-group row">

            <label for="lastName" class="col-4 col-form-label"> Add last name</label>
                <div class="col-8">
            <input v-model="lastName" id="lastName" type="text" name="laslastNamet_name" class="form-control">
                </div>
        </div>

        <div class="form-group row">

            <label for="email" class="col-4 col-form-label">Add user email</label>
                <div class="col-8">
            <input v-model="email" id="email" type="email" name="email" class="form-control">
                </div>
        </div>

        <div class="form-group row" >

            <label for="password" class="col-4 col-form-label">Add user password</label>
                <div class="col-8">
            <input v-model="password" id="password" type="password" name="password" class="form-control">
                </div>
        </div>

        <div class="form-group row">

            <label for="confirmPassword" class="col-4 col-form-label">Confirm password</label>
                <div class="col-8">
            <input v-model="cofirmPassword" id="confirmPassword" type="password" name="confirmPassword" class="form-control">
                </div>
        </div>
        
         <div v-for="(error, key) in errors" :key="key" v-if="error" class="alert alert-danger">
              <ul v-for="(oneError, key) in error" :key="key">
                <li>{{oneError}}</li>
              </ul>
            </div>

        <div class="form-group">


       
 <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck1">
            <label class="custom-control-label" for="customCheck1">I accept terms and conditions</label>
        </div>
       
            <button type="submit" class="btn btn-primary">Register</button>

        </div>
        </form>
    </div>
</template>

<script>
import { authService } from '../services/Auth'

    export default {
        name: "Register",
        data(){
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                cofirmPassword: '',
                errors: ''
            };
        },
        methods: {
            register(){
                authService.register(this.firstName,this.lastName,this.email,this.password,this.cofirmPassword)
                .then(()=> {
                    this.$router.push('/galleries');
                })
                .catch(error => {
                    this.errors = error.response.data;
                })
            }
        }
    }
</script>

<style>
    
</style>