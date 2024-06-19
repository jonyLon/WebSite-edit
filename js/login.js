
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('needs-validation');
    form.addEventListener('submit', event => {
        event.preventDefault(); //підміна стандатної повіденки
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            let users = JSON.parse(localStorage.users) || [];
            let userFound = false;

            users.forEach(user => {
                if (email === user.email && password === user.password) {
                    userFound = true;
                    localStorage.currentUser = JSON.stringify(user);
                    window.location.href = 'profile.html';
                }
            });

            if (!userFound) {
                alert("Дані вказано не вірно");
            }
        }
        form.classList.add('was-validated');

    }, false);
});

