function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Prosim vypln vsechna pole!");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.email === email)) {
        alert("Tento email je jiz registrovany!");
        return;
    }

    users.push({ email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registrace uspesna!");
    window.location.href = "login.html";
}