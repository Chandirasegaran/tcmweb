// Initialize Firebase with your Firebase project's configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEbNrPjs47BzY1d38RBnB7Ims_B1_0DNs",
  authDomain: "tmcweb-73a4d.firebaseapp.com",
  projectId: "tmcweb-73a4d",
  storageBucket: "tmcweb-73a4d.appspot.com",
  messagingSenderId: "36880381584",
  appId: "1:36880381584:web:246a7828ea7bb54fc44a15"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Authentication service
const auth = firebase.auth();

// Add a listener to the login form
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in with email and password
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful login
            const user = userCredential.user;
            console.log("Login successful. User ID: " + user.uid);
            
            // Redirect to home.html
            window.location.href = "home.html";
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Login failed. Error: " + errorMessage);

            // Display an alert for wrong login information
            alert("Wrong login information. Please try again.");
        });
});

