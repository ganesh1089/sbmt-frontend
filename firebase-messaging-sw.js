importScripts(
  "https://www.gstatic.com/firebasejs/12.13.0/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/12.13.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBLY2fXbkWRLaSRUOS_N0nxH2_249InFno",
  authDomain: "sbmt-71459.firebaseapp.com",
  projectId: "sbmt-71459",
  storageBucket: "sbmt-71459.firebasestorage.app",
  messagingSenderId: "560536875795",
  appId: "1:560536875795:web:fdb841708496478ac560e6",
  measurementId: "G-S6E5P0EPLZ"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

  console.log(
    "Background Message:",
    payload
  );

  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "/assets/logo-192.png"
    }
  );
});