import { defineStore } from 'pinia'

export const usePartyStore = defineStore('party', {
  // STATE
  state: () => ({
    gold: 500,
    members: [
        {id: 1, name: 'LightBringer34', role: 'Paladin', level:5, power: 70},
        {id: 2, name: 'DarkSun12', role: 'Assassin', level:12, power: 85},
        ]
  }),

  // GETTERS
  getters: {
    memberCount: (state) => state.members.length,
    totalPower: (state) => state.members.reduce((sum, m) => sum + m.power, 0),
  },

  // ACTIONS
  actions: {
    recruitMember(name, role, power) {
      if (this.gold < 100) return
      this.gold -= 100
      this.members.push({
        id: Date.now(),
        name,
        role,
        power: Number(power),
      })
    },
    dismissMember(id) {
      this.members = this.members.filter((m) => m.id !== id)
    },
  },
})
