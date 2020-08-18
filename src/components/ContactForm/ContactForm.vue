<template lang="pug">
  form(ref="form")
    .flash.flash-success.alert.alert-dismissible.fade.show(v-if="successful" role="alert")
      span Yay! 🎉 Votre demande de projet a bien été envoyée !
      a(@click="successful = false")
        i.fas.fa-times
    .flash.flash-danger.alert.alert-dismissible.fade.show(v-if="error" role="alert")
      span Oops! 😱 {{ error }}
      a(@click="emptyError")
        i.fas.fa-times
    div.form-group(:class="{invalid: $v.userData.name.$error}")
      input(type="text" id="name" placeholder="Nom" class="form-control" v-model.lazy="userData.name" @blur="$v.userData.name.$touch()")
    div.form-group(:class="{invalid: $v.userData.email.$error}")
      input(type="text" id="email" placeholder="Email" class="form-control" v-model.lazy="userData.email" @blur="$v.userData.email.$touch()")
      span.error-message(v-if="!$v.userData.email.email") Veuillez soumettre un email valide
    div.form-group(:class="{invalid: $v.query.$error}")
      textarea.input-large(type="text" id="demande" placeholder="Formuler votre demande" class="form-control" v-model.lazy="query" @input="$v.query.$touch()")
    div.form-group.flex-evenly(:class="{invalid: $v.query.$error}")
      v-checkbox(v-model="selected" label="PROMOTION" value="PROMOTION")
      v-checkbox(v-model="selected" label="VISUAL CREATION" value="VISUAL CREATION")
      v-checkbox(v-model="selected" label="BEATS" value="BEATS")
      v-checkbox(v-model="selected" label="LABEL SERVICES" value="LABEL SERVICES")
    div.form-button
      button.button-form(type="submit" :disabled="$v.$invalid" @click.prevent="onSubmit" ref="button") ENVOYER MON PROJET
</template>

<script>
import axios from 'axios'
import { required, email } from 'vuelidate/lib/validators'
export default {
  data: function () {
    return {
      userData: {
        name: '',
        email: ''
      },
      query: '',
      selected: [],
      error: '',
      successful: false
    }
  },
  validations: {
    userData: {
      name: {
        required
      },
      email: {
        required,
        email
      }
    },
    query: {
      required
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        name: this.userData.name,
        email: this.userData.email,
        query: this.query,
        selected: this.selected
      }
      axios.post('/contacts.json', formData)
        .then((response) => {
          if (response) {
            var self = this
            Object.keys(this.userData).forEach(function (key, index) {
              self.userData[key] = ''
            })
            this.query = ''
            this.successful = true
            this.error = ''
            this.$v.$reset()
          }
        })
        .catch(error => {
          if (error) {
            this.setError(error, "Une erreur s'est produite lors de l'envoi de votre demande..")
          }
        })
    },
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    },
    emptyError () {
      this.error = ''
    }
  }
}
</script>

<style>
  .form-group {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  .flex-evenly {
    display: flex;
    justify-content: space-evenly;
  }

  .form-group input {
    margin: 0;
    padding: 5px 20px;
    height: 54px;
    color: #0b0c11;
    display: block;
    width: 80%;
    margin: 0 auto!important;
    box-sizing: border-box;
    background: #fff!important;
    box-shadow: 2px 2px 5px rgba(0,0,0,.1)!important;
    border: 1px solid #000 !important;
  }

  .form-group textarea {
    margin: 0;
    padding: 5px 20px;
    height: 54px;
    color: #0b0c11;
    display: block;
    width: 80%;
    margin: 0 auto!important;
    box-sizing: border-box;
    background: #fff!important;
    box-shadow: 2px 2px 5px rgba(0,0,0,.1)!important;
    border: 1px solid #000!important;
  }

  .input-large {
    height: 100px !important;
  }

  .form-button {
    margin-top: 30px;
    width: 100%;
    text-align: center;
  }

  .button-form {
    width: 80%;
    padding: 0 1.5rem;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    border-radius: .4rem;
    background: #000;
    border: 2px solid #fff;
    color: #fff!important;
    height: 54px;
    line-height: 54px;
  }

  .button-form:disabled {
    border: 2px solid #fff;
    color: #ccc!important;
    cursor: not-allowed;
  }

  .invalid input {
    border: 1px solid red !important;
  }

  .invalid textarea {
    border: 1px solid red !important;
  }

  .error-message {
    color: #0b0c11;
    display: block;
    width: 80%;
    margin: 0 auto!important;
    font-style: italic;
  }

  .flash {
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    border-radius: 4px;
    margin: 8px auto;
    width: 80%;
  }

  .flash a {
    cursor: pointer;
  }

  .flash-success {
    border: 2px solid #1EDD88;
  }

  .flash-warning {
    border: 2px solid #FFC65A;
  }

  .flash-danger {
    border: 2px solid #FD1015;
  }
</style>
