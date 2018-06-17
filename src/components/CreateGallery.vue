<template>
    <div class="col-6 form-login">
        <div class="text-center mb-5">
            <h2>add gallery</h2>
        </div>
        <form @submit.prevent="addGallery()">

            <div class="form-group row">
                <label for="name" class="col-4 col-form-label">Gallery name</label>
                <div class="col-8">
                    <input v-model="name" id="name" name="name" placeholder=" gallery name" type="text"
                           class="form-control here">
                </div>
            </div>

            <div class="alert-danger" v-if="errorName"> {{ errorName[0] }}</div>

            <div class="form-group row">
                <label for="description" class="col-4 col-form-label">Gallery description</label>
                <div class="col-8">
                    <input v-model="description" id="description" name="description" placeholder=" gallery description"
                           type="text"
                           class="form-control here">
                </div>
            </div>
            <div class="alert-danger" v-if="errorDescription"> {{ errorDescription[0] }}</div>

            <ul>
                <li v-for="(input, index) in inputs">
                    <input type="text" v-model="input.one">
                    <button v-if="inputs.length != 1" @click="deleteRow(index)">Delete</button>
                </li>
            </ul>

            <a class="btn btn-secondary" @click="addRow">Add image url</a>


            <div class="form-group row">
                <div class="offset-4 col-8">
                    <button name="submit" type="submit" class="btn btn-primary">add gallery</button>
                    <a class="btn btn-secondary" @click="Redirect">cancel</a>
                </div>
            </div>
        </form>

    </div>

</template>

<script>
    import {galleryService} from "../services/GalleryService";
    export default {
        name: "CreateGallery",
        data() {
            return {
                inputs: [],
                name: '',
                description: '',
                errorMessage: '',
                errorName: '',
                errorDescription: '',
            }
        },
        methods: {
            addRow() {
                this.inputs.push({
                    one: '',
                })
            },
            deleteRow(index) {
                this.inputs.splice(index, 1)
            },
            addGallery() {
                galleryService.addGallery(this.name, this.inputs, this.description)
                    .then((response) => {
                        this.$router.push({name: 'my-gallery'})
                    })
                    .catch((errors) => {
                        this.errorMessage = errors.response.data.message
                        this.errorName = errors.response.data.errors.name
                        this.errorDescription = errors.response.data.errors.description
                    })
            },
            Redirect() {
                this.$router.push({name: 'my-gallery'})
            }
        }
    }
</script>

<style scoped>
</style>
