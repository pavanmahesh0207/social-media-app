import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8-dsWKM7XGme4AeuT7ITb7nhoGO_H1Tk',
  authDomain: 'social-media-appp-33102.firebaseapp.com',
  projectId: 'social-media-appp-33102',
  storageBucket: 'social-media-appp-33102.appspot.com',
  messagingSenderId: '196420620074',
  appId: '1:196420620074:web:28a2778f8c2ae502119853',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
