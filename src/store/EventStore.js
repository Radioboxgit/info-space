import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useEventStore = create(
  persist((set,get) => ({
  events: [],
  populateEvents: (eventsData) => set((state) => ({ events: eventsData }))
})),
{
  name:'event-storage'
}
)

