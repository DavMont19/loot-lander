<script setup>
import { usePartyStore } from '../Stores/partyStore'

const store = usePartyStore()
</script>

<template>
  <div>
    <h3>Guild Summary</h3>
    <p>Gold: {{ store.gold }}</p>
    <p>Members: {{ store.memberCount }}</p>
    <p>Total Power: {{ store.totalPower }}</p>
  </div>
</template>
