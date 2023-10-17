const admin = require('firebase-admin');

const serviceAccount = require('./csclubfirebase-firebase-adminsdk-lbn7u-67c03cfbca.json');

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports ={admin,db};