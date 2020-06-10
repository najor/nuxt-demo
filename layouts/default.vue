<template>
  <div>
    <section class="main-content columns">
      <aside class="column is-2 section">
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" />
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="column is-10 section">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'My Reservations',
          icon: 'book',
          to: { name: 'my_reservations' }
        },
        {
          title: 'New Reservation',
          icon: 'plus',
          to: { name: 'new_reservation' }
        }
      ]
    }
  }
}
</script>
