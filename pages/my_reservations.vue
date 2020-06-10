<template>
  <div>
    <nav class="level"></nav>
    <section>
      <div class="columns">
        <div
          v-for="reservation in reservations"
          :key="reservation.id"
          class="column is-narrow"
        >
          <card :title="reservation.persons + ' people'" icon="book">
            <nuxt-link :to="'edit?' + reservation.id">Edit</nuxt-link>
            <div>{{ reservation.notes }}</div>
          </card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from '~/components/Card'

export default {
  components: {
    Card
  },
  async fetch() {
    this.reservations = await this.$api.getReservations()
  },
  data() {
    return {
      reservations: []
    }
  }
}
</script>
