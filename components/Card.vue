<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-grey">
        <b-icon :icon="icon" size="is-large" type="is-primary" /> {{ title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content has-text-left">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
