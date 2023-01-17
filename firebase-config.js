
import admin from 'firebase-admin'
import {firebaseKey} from './home-grown-private-key.js'

admin.initializeApp({
  credential: admin.credential.cert(firebaseKey)
});


export default admin

