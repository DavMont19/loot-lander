<script setup>
import { ref } from 'vue'
import { usePartyStore } from '../stores/lootStore'

const store = usePartyStore()
const name = ref('')
const role = ref('Warrior')
const power = ref(50)

const addHero = () => {
  if (!name.value.trim()) return
  store.recruitMember(name.value, role.value, power.value)
  name.value = ''
  power.value = 50
}
</script>

<template>
  <form @submit.prevent="addHero">
    <h3>Recruit Hero (100g)</h3>
    <input v-model="name" placeholder="Name" required />
    <select v-model="role">
      <option>Warrior</option>
      <option>Mage</option>
      <option>Rogue</option>
      <option>Paladin</option>
      <option>Assassin</option>
    </select>
    <input v-model="power" type="number" min="10" max="100" />
    <button type="submit" :disabled="store.gold < 100">Hire</button>
  </form>
</template>
