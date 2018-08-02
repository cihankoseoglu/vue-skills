<template>
  <div class="hello">
    <div class="holder">
      <form @submit.prevent="addSkill">
        <input type="text" placeholder="Enter a skill you have" v-model="skill" v-validate="'min:5'" name="skill">
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </transition>
      </form>
      <ul>
        <transition-group name="list" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <li v-for="(data, index) in skills" :key='index'>
            <span class="skill-text">{{ data.skill }}</span>
            <font-awesome-icon icon="minus-circle" v-on:click="removeSkill(index)" />
          </li>
        </transition-group>
      </ul>
      <p>These are the skills that you possess.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Skills',
  data() {
    return {
      skill: '',
      skills: [
        { 'skill': 'Vue.js' },
        { 'skill': 'Front end' },
      ]
    }
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.skills.push({skill: this.skill})
          this.skill = ''
        }
      })
    },
    removeSkill(index) {
      this.skills.splice(index, 1);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Skills.css" scoped>

</style>
