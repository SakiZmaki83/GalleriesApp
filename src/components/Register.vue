<template>
    <div class="col-6 form-login">

        <h3> Register page</h3>

        <form @submit.prevent="login()">

            <div class="form-group row">

            <label for="name" class="col-4 col-form-label"> Add first name</label>
                <div class="col-8">
            <input v-model="first_name" id="first_name" type="text" name="first_name" class="form-control">
                </div>
        </div>

        <div class="form-group row">

            <label for="last_name" class="col-4 col-form-label"> Add last name</label>
                <div class="col-8">
            <input v-model="last_name" id="last_name" type="text" name="last_name" class="form-control">
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

       
 <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck1">
            <label class="custom-control-label" for="customCheck1">I accept terms and conditions</label>
        </div>

        <div class="form-group">

            <button type="submit" class="btn btn-primary">Register</button>

        </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data(){
            return {
                email: '',
                password: ''
            }
        }
    }
</script>

<style scoped>
    .form-login {
        margin-top: 30px;
    }
    .welcome {
        text-align: right;
        display: inline;
    }
</style>