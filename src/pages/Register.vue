<template>
	
<div class="container">
  <div class="form-group row">

 
    <form class="form-horizontal"  @submit.prevent="addUser">
  <div class="form-group">
    <label for="first_name" class="col-md-6">First name</label> 
    <div class="col-xs-8">
      <input v-model="newUser.first_name" placeholder="first name" class="form-control" required="required" type="text">
    </div>
  </div>
  <div class="form-group">
    <label for="last_name" class="control-label col-xs-4">Last name</label> 
    <div class="col-xs-8">
      <input v-model="newUser.last_name" placeholder="last name" class="form-control" required="required" type="text">
    </div>
  </div>
  <div class="form-group">
    <label for="email" class="control-label col-xs-4">Email</label> 
    <div class="col-xs-8">
      <input v-model="newUser.email" placeholder="email@example.com" class="form-control" required="required" type="email">
    </div>
  </div>
  <div class="form-group">
    <p v-if="validationFailedConfirmation" class="alert alert-danger">password must match confirm password field</p>
    <p v-if="validationFailedRegex" class="alert alert-danger">password must be 8 characters long and contain at least one number</p>
    <label for="password" class="control-label col-xs-4">Password</label> 
    <div class="col-xs-8">
      <input v-model="newUser.password" placeholder="password" class="form-control" required="required" type="password">
    </div>
  </div>
  <div class="form-group">
    <label for="confirm_password" class="control-label col-xs-4">Confirm Password</label> 
    <div class="col-xs-8">
      <input v-model="newUser.password_confirmation" placeholder="confirm your password" class="form-control" required="required" type="password">
    </div>
  </div>
  <div class="form-group">
    <label for="accept_terms_and_conditions" class="control-label col-xs-4">You need to accept terms and conditions in order to register</label> 
    <div class="col-xs-8">
      <label class="checkbox-inline">
        <input v-model="newUser.accepted_terms_and_conditions" value="true" required="required type="checkbox">
              I accept terms and conditions
      </label> 
    </div>
  </div> 
  <div class="form-group row">
    <div class="col-xs-offset-4 col-xs-8">
      <button name="submit" type="submit" class="btn btn-primary">Register</button>
    </div>
  </div>
</form>
</div>
  </div>
</div>
</template>


<script>
import { authService } from '../services/Auth'
import { register } from '../services/Register'
	export default {
		data(){
			return{
				newUser : {
					first_name: '',
					last_name: '',
					accepted_terms_and_conditions: '',
					email: '',
					password: '',
					
				},
        error:[],
        validationFailedConfirmation : false,
        validationFailedRegex:false,
        validationRegex: RegExp('^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$')
			}
		},
		methods: {
			addUser(){
        if(this.newUser.password === this.newUser.password_confirmation){
          this.validationFailedConfirmation = false;
          if( this.newUser.password.length >=8 & this.validationRegex.test(this.newUser.password))
          {
              console.log(this.validationRegex.test(this.newUser.password))
        register.registerUser(this.newUser)
        .then((response)=>{
          this.register = response.data
          console.log(this.register)
          
        })
        .catch((error)=>{
          console.log(error)
        })
       
        authService.login(this.newUser.email, this.newUser.password)
        .then(()=>{
        this.$router.push({ name: 'galleries'}) 
        })
       }else{this.validationFailedRegex = true}
      }else{this.validationFailedConfirmation = true}
      }
		},
    
	}
</script>
