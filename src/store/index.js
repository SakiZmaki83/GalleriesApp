import Vue from "vue";
import Vuex from "vuex";

import {galleries} from "../services/GalleryService";
import {authService} from "../services/Auth";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        searchTerm: "",
        galleries: [],
        isAuthenticated: authService.isAuthenticated(),
        authUserId: ""

    },
    getters: {
        getSearchTerms(state) {
            return state.searchTerm;
        },
        getGalleries(state) {

            return state.galleries;
        },
        getIsAuthenticated(state) {

            return state.isAuthenticated;
        },
        getAuthUserId(state) {

            return state.authUserId;
        }

    },
    mutations: {
        setSearchTerm(state, searchTerm) {
            state.searchTerm = searchTerm;
        },
        setGalleries(state, galleries) {
            state.galleries = galleries;
        },
        setIsAuthenticated(state, auth) {
            state.isAuthenticated = auth;
        },
        setAuthUserId(state, authUserId) {
            state.authUserId = authUserId;
        }
    },
    actions: {
        fetchGalleries(store) {
            galleries.getAll().then(response => {

                store.commit('setGalleries', response.data);
            });
        }
    }


});