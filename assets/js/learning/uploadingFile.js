let arr = [];
let user = {};
let user_selected_item_index = '';
let cardContainer = document.getElementById('card_container');

//showCARDWithArray
const createTaskCard = (item) => {
    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer col-12 col-md-3 m-2';

    let cardBody = document.createElement('div');
    cardBody.className = '';

    let uname = document.createElement('h5');
    uname.innerText = (item?.['uname'])
    uname.className = 'card-title';


    let lastName = document.createElement('h5');
    lastName.innerText = (item?.['lastName']);
    lastName.className = 'card-title';

    let img = document.createElement('img');
    img.src = (item?.['image']);
    img.className = 'card-img-top w-25 h-25'


    let Description = document.createElement('p');
    Description.innerText = (item?.['Description']);
    Description.className = 'card-text'


    let edite = document.createElement('button')
    edite.innerText = 'ویرایش';
    edite.className = 'btn btn-primary';
    edite.setAttribute('onclick', `editeHandler(${item?.id})`);
    edite.setAttribute('data-toggle', `modal`);
    edite.setAttribute('data-target', `#myModal`);

    let remove = document.createElement('button')
    remove.innerText = 'حذف';
    remove.className = 'btn btn-danger ml-5';
    remove.setAttribute('onclick', `removeHandler(${item?.id})`);


    cardBody.appendChild(uname);
    cardBody.appendChild(lastName);
    cardBody.appendChild(img);
    cardBody.appendChild(Description);
    cardBody.appendChild(edite);
    cardBody.appendChild(remove);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
}
let initListOfTasks = () => {
    if (cardContainer) {
        document.getElementById('card_container').replaceWith(cardContainer);
        return;
    }
    for (let item of arr) {
        createTaskCard(item);
    }
};
initListOfTasks();

//VALUE INPUT
function inputHandler(val) {
    if (val?.name !== undefined) {
        user[`${val?.name}`] = val?.value;
    }
}

function uploadHandler(event) {
    let image = URL.createObjectURL(event.target.files[0])
    user[`image`] = image;
    document.getElementById('uploaded_image').src = image
}

//END VALUE INPUT

function Modal_uploadHandler(event) {
    let image = URL.createObjectURL(event.target.files[0])
    user[`image`] = image;
    document.getElementById('modal_image').src = image
}

let formUser = document.getElementById('formUser');
formUser.addEventListener("submit", (e) => {
    e.preventDefault();
    id = Math.floor(Math.random() * 1001);
    user.id = id;
    arr.push(user)
    localStorage.setItem("arr", JSON.stringify(arr));
    //storedNames = JSON.parse(localStorage.getItem("arr"));
    user = {}
    formUser.reset();
    document.getElementById('uploaded_image').src = ''
    cardContainer.innerHTML = '';

    for (let item of arr) {
        createTaskCard(item);
    }
    //console.log(arr, 'arr***')
});

//localStorage(allUser)
localStorage_Handler = () => {
    // cardContainer.removeChild(cardContainer.childNodes[0]);
    // console.log(storedNames )
    let storedNames = [];
    storedNames = JSON.parse(localStorage.getItem("arr"));

    for (let item of storedNames) {
        //createTaskCard(item);
        let card = document.createElement('div');
        card.className = 'card shadow cursor-pointer col-4 col-md-2 m-2';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let uname = document.createElement('h5');
        uname.innerText = (item?.['uname'])
        uname.className = 'card-title';


        let lastName = document.createElement('h5');
        lastName.innerText = (item?.['lastName']);
        lastName.className = 'card-title';

        let img = document.createElement('img');
        img.src = (item?.['image']);
        img.className = 'card-img-top h-25 w-25'


        let Description = document.createElement('p');
        Description.innerText = (item?.['Description']);
        Description.className = 'card-text'
        cardBody.appendChild(uname);
        cardBody.appendChild(lastName);
        cardBody.appendChild(img);
        cardBody.appendChild(Description);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
    }

}

//EDITE USER
function editeHandler(id) {
    user_selected_item_index = arr.findIndex(item => parseInt(item.id) === parseInt(id));
    for (let item of arr) {
        document.getElementById('modal_name').value = arr[user_selected_item_index].uname;
        document.getElementById('modal_lastName').value = arr[user_selected_item_index].lastName;
        document.getElementById('modal_image').src = arr[user_selected_item_index].image;
        document.getElementById('modal_Description').value = arr[user_selected_item_index].Description
        document.getElementById('form_submit_button').setAttribute('data-dismiss', `modal`);

    }
}

// //MODAL HANDLER
function modalFormHandler() {
    let first_name = document.getElementById('modal_name').value
    let last_name = document.getElementById('modal_lastName').value
    let img = document.getElementById('modal_image').src
    let Description = document.getElementById('modal_Description').value
    let data = [...arr];

    data[user_selected_item_index].uname = first_name;
    data[user_selected_item_index].lastName = last_name;
    data[user_selected_item_index].image = img;
    data[user_selected_item_index].Description = Description;

    arr = data;
    for (let item of arr) {
        //UPLOAD EDITE LOCAL
        localStorage.setItem("arr", JSON.stringify(arr));
        cardContainer.removeChild(cardContainer.childNodes[0]);
        createTaskCard(item);
    }

}

// REMOVE CARD USER
function removeHandler(id) {
    let index = arr.findIndex(item => parseInt(id) === parseInt(item.id))

    //console.log(id, index, arr)
    if (index > -1) {
        arr.splice(index, 1)
    }
    if (arr?.length > 0) {
        cardContainer.innerHTML = '';
        for (let item of arr) {
            createTaskCard(item);
        }
    } else {
        cardContainer.innerHTML = '';
    }
    //UPLOAD REMOVE LOCAL
    localStorage.setItem("arr", JSON.stringify(arr));
}

// localStorage.clear();
// function removeHandler(id) {
//     let arr3 = []
//     for (let item of arr) {
//         for (let i = 0; i < arr.length; i++) {
//             let obj = arr[i];
//             // console.log(obj.id, '<==')
//             console.log(obj)
//             if (obj.id === id) {
//                 arr.splice(i, 1)
//                 arr3 = [...arr];
//             }
//
//         }
//     }
//     console.log(arr3 , 'arr3')
//     if (arr3?.length > 0) {
//         cardContainer.innerHTML = '';
//         for (let item of arr3) {
//             createTaskCard(arr3);
//         }
//     } else {
//         cardContainer.innerHTML = '';
//     }
//
// }

//SEARCH LIVE
function updateResult(query) {
    let result = query.value;
    let stor = [];
    stor = JSON.parse(localStorage.getItem("arr"));
    let empty_array = [];

    if (result) {
        for (let item of stor) {
            if (item.uname?.search(result) !== -1) {
                empty_array.push(item)
            }
        }
        cardContainer.innerHTML = '';
        if(empty_array?.length > 0){
            for (let item of empty_array) {
                createTaskCard(item);
            }
        }
        else {
            cardContainer.innerHTML = '<h5>موردی یافت نشد</h5>';
        }
    }
    else {
        cardContainer.innerHTML = '';
        for (let item of stor) {
            createTaskCard(item);
        }
    }

}


// function updateResult(query) {
//     arr1.map(function (algo) {
//         query.split(" ").map(function (word) {
//             if (algo.toLowerCase().indexOf(word.toLowerCase()) != -1) {
//             }
//         })
//     })
// }
// function updateResult(query) {
//     let resultList = document.querySelector(".result");
//     console.log(resultList , '<-')
//     arr1.map(function (algo) {
//         query.split(" ").map(function (word) {
//             if (algo.toLowerCase().indexOf(word.toLowerCase()) != -1) {
//                 resultList.innerHTML += `<li class="list-group-item">${algo}</li>`;
//             }
//         })
//     })
// }
// function updateResult(query) {
//
//     let resultList = document.querySelector(".result");
//     console.log(resultList , 'resultList')
//     resultList.innerHTML = "";
//
//     arr.map(function (algo) {
//         query.split(" ").map(function (word) {
//             if (algo.toLowerCase().indexOf(word.toLowerCase()) != -1) {
//                 resultList.innerHTML += `<li class="list-group-item">${algo}</li>`;
//             }
//         })
//     })
//}


