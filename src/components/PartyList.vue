<script setup>
import { usePartyStore } from '../Stores/partyStore'

const store = usePartyStore()
</script>

<template>
  <div>
    <h3>Party Roster</h3>
    <ul>
      <li v-for="member in store.members" :key="member.id">
        {{ member.name }} ({{ member.role }}) - Power: {{ member.power }}
        <button @click="store.dismissMember(member.id)">Dismiss</button>
      </li>
    </ul>
  </div>
</template>
