// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCQSzjMA9wmRCmKb1n-Nuqm9pI4eHir3KE",
    authDomain: "proto-1-7ee21.firebaseapp.com",
    databaseURL: "https://proto-1-7ee21.firebaseio.com",
    projectId: "proto-1-7ee21",
    storageBucket: "proto-1-7ee21.appspot.com",
    messagingSenderId: "144363747057",
    appId: "1:144363747057:web:90101c9a6c98f5b9159b50",
    measurementId: "G-LDCTWQVBHH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

const ttl = document.querySelector("#title");
const ques = document.querySelector("#question");
const sub = document.querySelector("#slct1");
const ment = document.querySelector("#slct2");
const submitBtn = document.querySelector("#submit")


const docRef = db.collection("question");

submitBtn.addEventListener("click", function () {

    const ttl_val = ttl.value;
    const que_val = ques.value;
    const sub_val = sub.value;
    const ment_val = ment.value;

    docRef.add({
        title: ttl_val,
        question: que_val,
        subject: sub_val,
        mentor: ment_val
    }).then(function () {
        console.log("Data saved");
    }).catch(function (error) {
        console.log("Error");
    });

})