function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Prosim vypln vsechna pole!");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert("Login uspesny!");
        window.location.href = "menu.html";
    } else {
        alert("Zadany email nebo heslo neexistuje!");
    }
}