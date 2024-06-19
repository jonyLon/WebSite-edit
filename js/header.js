const loadDOM = (page) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `/${page}`, false); //запит буде синхроний
    xhr.send();
    document.write(xhr.response);
}
