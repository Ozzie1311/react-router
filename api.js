import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBP1a0ciDlhKLtB3D-C2wLHmgNrqmb7YEc',
  authDomain: 'vanlife-dc93c.firebaseapp.com',
  projectId: 'vanlife-dc93c',
  storageBucket: 'vanlife-dc93c.firebasestorage.app',
  messagingSenderId: '96303872478',
  appId: '1:96303872478:web:cec582b12859f6f130054f',
}

const app = initializeApp(firebaseConfig)
const database = getFirestore(app)

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(() => resolve(), ms))
// }

// Refactoring the fectching functions

const vansCollectionRef = collection(database, 'vans')

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef)
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))

  return vans
}

export const getVan = async (id) => {
  const docRef = doc(database, 'vans', id)
  const vanSnapshot = await getDoc(docRef)

  if (!vanSnapshot) {
    throw new Response('Not found', {
      status: 404,
      statusText: 'Van not found',
    })
  }

  const vanData = {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  }

  return vanData
}
// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : '/api/vans'
//   const res = await fetch(url)
//   if (!res.ok) {
//     const error = new Error('Failed to fetch vans')
//     error.statusText = res.statusText
//     error.status = res.status
//     throw error
//   }
//   const data = await res.json()
//   return data.vans
// }

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : '/api/host/vans'
  const res = await fetch(url)
  if (!res.ok) {
    const error = new Error('Failed to fetch vans')
    error.statusText = res.statusText
    error.status = res.status
    throw error
  }
  const data = await res.json()
  return data.vans
}

export async function loginUser(creds) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
  })
  const data = await res.json()

  if (!res.ok) {
    const error = new Error('Failed to fetch vans')
    error.statusText = res.statusText
    error.status = res.status
    throw error
  }

  return data
}
