document.addEventListener('DOMContentLoaded', () => {
    let user = JSON.parse(localStorage.currentUser);

    if (user) {
        document.getElementById('profile-email').textContent = user.email;
        document.getElementById('profile-surname').textContent = user.surname;
        document.getElementById('profile-name').textContent = user.name;
        document.getElementById('profile-phone').textContent = user.phone;
        document.getElementById('profile-pic').src = user.image;
    } else {
        alert("Користувача не знайдено");
        window.location.href = 'login.html';
    }
});