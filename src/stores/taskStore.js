import { writable } from 'svelte/store'

export const tasks = writable([
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true
  },
  {
    id: 3,
    text: 'Get groceries',
    day: 'Feb 8th at 10:30am',
    reminder: false
  },
  {
    id: 4,
    text: 'Go out on a date',
    day: 'Feb 16th at 7:30pm',
    reminder: true
  }
])
