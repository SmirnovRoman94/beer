<template>
  <section>
    <Profile :user="getUserData"/>
  </section>
</template>

<script>
import Profile from '@/components/Profile'
export default {
  name: 'HomeView',
  components: {
    Profile
  },
  computed: {
    getUserData(){
      return this.$store.getters.getProfileUser
    }
  },
  mounted(){
    this.$store.dispatch('profileInite')
  }
}
</script>
