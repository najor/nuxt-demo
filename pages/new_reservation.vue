<template>
  <section>
    <form @submit.prevent="addBook">
      <b-field label="Persons">
        <b-slider v-model="persons" :min="1" :max="40" ticks></b-slider>
      </b-field>
      <b-field label="Notes" :label-position="labelPosition">
        <b-input v-model="notes" maxlength="200" type="textarea"></b-input>
      </b-field>
      <b-button tag="input" native-type="submit" value="New Book" />
    </form>
  </section>
</template>

<script>
import { Reservation } from '~/types/Reservation'
export default {
  data() {
    return {
      persons: 2,
      notes: '',
      labelPosition: 'on-border'
    }
  },
  methods: {
    addBook() {
      this.$api.addNewReservation(new Reservation(this.persons, this.notes))
      this.$router.push('/my_reservations')
    }
  }
}
</script>
