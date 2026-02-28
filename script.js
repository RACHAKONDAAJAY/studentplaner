function signup() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful! Please login.");
    window.location.href = "index.html";
}

function login() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No account found. Please sign up first.");
        return;
    }

    if (email === storedUser.email && password === storedUser.password) {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password!");
    }
}

function logout() {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    window.location.href = "index.html";
}