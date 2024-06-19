const messageDialog = new bootstrap.Modal('#messageDialog');
const messageDialogText = document.getElementById("messageDialogText");
const image = document.getElementById('image');
const imagePreview = document.getElementById('imagePreview');

image.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) { //перевірка - чи не undifined або ""
        if (file.type.startsWith('image/')) {
            // console.log(`Selected file: `, URL.createObjectURL(file));
            imagePreview.src=URL.createObjectURL(file);
        }
        else {
            messageDialogText.innerHTML="Оберіть фото. Ви хочете нас обманути :(.";
            // console.log("Оберіть фото");
            image.value="";
            messageDialog.show();
        }
    } else {
        console.log('No file selected');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const id = params.get('id');
    //console.log("id = ", id);
    const server = "https://pd322.itstep.click/";
    // const server = "http://127.0.0.1:5094/";

    const name = document.getElementById("name");
    const description = document.getElementById("description");

    axios.get(server+"api/category/"+id)
        .then(resp => {
            console.log("category info", resp.data);
            const {data} = resp;
            name.value = data.name;
            description.value = data.description;
            if(data.imagePath!==null) {
                imagePreview.src=server+"images/320_"+data.imagePath;
            }
        });


    const form = document.getElementById('needs-validation');
    form.addEventListener('submit', event => {

        event.preventDefault(); //підміна стандатної повіденки
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            const image = document.getElementById('image');
            let file=null;
            if (image.files && image.files[0]) {
                file = image.files[0];
            }

            const url = server + 'api/Category/EditCategory';
            const model = {
                id,
                name: name.value,
                description: description.value,
                "imageFile": file
            }
            axios.put(url, model, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    window.location ="/categories.html";
                })
                .catch(error => {
                    console.error('Error sending data:', error);
                });
        }
        form.classList.add('was-validated');

    }, false);
});

