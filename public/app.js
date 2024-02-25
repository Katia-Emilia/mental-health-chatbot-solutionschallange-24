document.addEventListener("DOMContentLoaded" ,event=>{
    const app=firebase.app();
    console.log(app);
});

function googleLogin(){
    const provider=new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result=>{
        window.location.href = 'http://127.0.0.1:5000';
    })
}