	// // Import the functions you need from the SDKs you need
	// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
	// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
	// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
	// import { getFirestore, doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
	
	// 	// import { getDatabase,ref, set, get,child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";



	// // TODO: Add SDKs for Firebase products that you want to use
	// // https://firebase.google.com/docs/web/setup#available-libraries

	// // Your web app's Firebase configuration
	// const firebaseConfig = {
	// 	apiKey: "AIzaSyBbO8esBvjnEuz-1Tu2mC_cLgUyyY841rw",
	// 	authDomain: "cova-web.firebaseapp.com",
	// 	projectId: "cova-web",
	// 	storageBucket: "cova-web.appspot.com",
	// 	messagingSenderId: "634585124861",
	// 	appId: "1:634585124861:web:d6ec45447b3ba594749394"
	// };

	// // Initialize Firebase
	// const app = initializeApp(firebaseConfig);

	// const analytics = getAnalytics(app)

	// const db = getFirestore(app)

	// // document.getElementById("register").addEventListener("click",function(e){
	// // 	e.preventDefault()
	// // 	set(ref(db, 'user/' + document.getElementById("username").value),
	// // 	{
	// // 			email: document.getElementById("signup-email").value,
	// // 		password: document.getElementById("signup-password").value,
	// // 		username: document.getElementById("signup-username").value
				
	// // 	})
	// // 	alert("saved to db")
	// // })


	// const auth = getAuth();

	// document.getElementById("register").addEventListener("click", function(){

	// 	var email = document.getElementById("signup-email").value;
	// 	var password = document.getElementById("signup-password").value;
	// 	var username = document.getElementById("signup-username").value;
		
		
		
	// 	createUserWithEmailAndPassword(auth, email, password)
	// 	.then((userCredential) => {
	// 		const user = userCredential.user;
	// 		console.log(user);
	// 		setDoc(doc(db, 'users', user.uid), {
	// 			uid: user.uid,
	// 			email: email,
	// 			username: username,
	// 			created_at: new Date(),
	// 			signIn_at: new Date(),
	// 		});
	// 		alert('Sign Up Complete');
	// 		close();
	// 	})
	// 	.catch((error) => {
	// 			const errorCode = error.code;
	// 			const errorMessage = error.message;
	// 			alert(errorMessage);
	// 			console.log(error)
	// 		});
		
	// 	});

	// document.getElementById("login").addEventListener("click", function(){

	//  var email = document.getElementById("signin-email").value;
	// var password = document.getElementById("signin-password").value;
		
		
		
	// 	signInWithEmailAndPassword(auth, email, password)
	// 	.then((userCredential) => {
	// 		const user = userCredential.user;
	// 		console.log(user)
	// 		updateDoc(doc(db, 'users', user.uid), {
	// 			signIn_at: new Date(),
	// 		});
	// 		alert(user.email + "Login succesfully!!!");
	// 		close();
	// 	})
	// 	.catch((error) => {
	// 			const errorCode = error.code;
	// 			const errorMessage = error.message;
	// 			alert(errorMessage);
	// 			console.log(error)
	// 		});
		
	// 	});
	// // console.log