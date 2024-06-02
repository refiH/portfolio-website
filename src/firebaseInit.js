import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'portfolio-2024-66324.firebaseapp.com',
  projectId: 'portfolio-2024-66324',
  storageBucket: 'portfolio-2024-66324.appspot.com',
  messagingSenderId: '953169919705',
  appId: '1:953169919705:web:11f4d0b9efd94164b108c8',
  measurementId: 'G-BVVHH0E7KM'
})

const db = getDatabase(firebaseApp)

export const colorsRef = ref(db, 'colors')
