<template>
  <!-- Card container for dev tools -->
  <div
    class="card"
  >
    <div
      class="card-header pl-4"
    >
      <h2
        class="mb-0"
      >
        {{ cardTitle }}
      </h2>
    </div>
    <div
      class="card-body"
    >
      <div
        class="row"
      >
        <!-- Images of Tools -->
        <Skill
          v-for="(skill, id) in skills"
          :key="id"
          :skill="skill"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Skill from './Skill'

export default {
  data () {
    return {
      cardTitle: 'Skills'
    }
  },
  components: {
    Skill
  },
  computed: {
    skills () {
      return this.$store.getters['skills/getSkills']
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 20px;
}
</style>
