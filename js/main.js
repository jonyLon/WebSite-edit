var getPrivateBank = document.querySelector("#getPrivateBank");

//Виконання промісу вертає результат - можливо 2 стани
//resolve - усе пройшо успішно
//reject - в ході роботи викнили помилка
//Проміст - це аналог Task у С# - тобто вионується операція асинхроно.
let my_promise = new Promise(function (resolve, reject) {
    //По ходу Sleep, який запускає задачу (функцію, через певний час)
    //Через 1 секунду, проміс поверне успішний результа, у якому буде текст

    setTimeout(() => resolve("Запуск yспішний"), 4000);
    setTimeout(() => reject("Щось пішло не так ):"), 5000);
});


getPrivateBank.addEventListener("click", function () {
    console.log("Натиснкули на кнопку :)", Date.now());
    try {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(resp => {
                    console.log("Резульат хороший", resp);
                },
                error => {
                    console.log("Щось пішо не так", error);
                });


        // my_promise
        //     //метод callBack - який викликається, коли приходить успішний результат роботи проміса
        //     .then(success => {
        //             console.log("Проміс виконався успішно", success);
        //         },
        //         error => {
        //             console.log("Виникла помилка виконання", error)
        //         });
    } catch {
        console.log("Помилка роботи Promise");
    }
});

