let arr = [];
let user = {};
let user_selected_item_index = '';
//show Table with use array function
const showTableWithArray = (arr) => {
    // document.getElementById('listUser').innerHTML = '';
    for (let item of arr) {
        let newRow = listUser.insertRow(); //<tr></tr>
        //ردیف جدول را تعریف میکنیم
        let id = newRow.insertCell();//مقدار ایتم را در ردیف مورد نظر جدول ذخیره میکند <td></td
        let name = newRow.insertCell();//مقدار ایتم را در ردیف مورد نظر جدول ذخیره میکند
        let lastName = newRow.insertCell();//مقدار ایتم را در ردیف مورد نظر جدول ذخیره میکند
        let phone = newRow.insertCell();//مقدار ایتم را در ردیف مورد نظر جدول ذخیره میکند
        let delet = newRow.insertCell();//مقدار ایتم را در ردیف مورد نظر جدول ذخیره میکند
        let edite = newRow.insertCell()

        let UserId = document.createTextNode(item?.['id']);
        id.appendChild(UserId);
        // <td>id</td>

        let username_data = document.createTextNode(item?.['name']);
        name.appendChild(username_data);

        let last_Name_value = document.createTextNode(item?.['lastName']);
        lastName.appendChild(last_Name_value);

        let phone_user = document.createTextNode(item?.['phone']);
        phone.appendChild(phone_user);

        let delete_data = document.createTextNode('حذف');
        delet.appendChild(delete_data);

        let edite_data = document.createTextNode('ویرایش');
        edite.appendChild(edite_data);

        delet.setAttribute('onclick', `removeItem(${item?.id})`);
        edite.setAttribute('onclick', `editeItem(${item?.id})`);

        <!-- Trigger the modal with a button -->
        edite.setAttribute('type', `button`);
        edite.setAttribute('data-toggle', `modal`);
        edite.setAttribute('data-target', `#myModal`);
        // <tr>
        //     <td onclick="removeItem(${item?.id})">delete</td>
        // </tr>
    }
}
function inputHandler(val) {
    if (val?.name !== undefined) {
        user[`${val?.name}`] = val?.value; // create object data {first_name : 'Erfan'}
    }
    // console.log(user)
}
let myForm = document.getElementById('myForm');
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (user.id && user.name && user.lastName && user['phone']) {
        arr.push(user);
        myForm.reset(); // ولیوی اینپوت هارا خالی میکند
        user = {}
    } else {
        alert('لطفا فیلد ها را پر کنید')
    }
})

function showTable() {
    document.getElementById("table").style.display = "block";
    mytable = document.getElementById('listUser');
    mytable.innerHTML = '';// بعد هرباار اجرای فانکشن داخل تگ tbody را خالی کند
    showTableWithArray(arr)
}

// 1. find object with use id;
// 2. set value of inputs with use object da
// const editHandler = (id , index){````
// }
//const modal_id = {};
function editeItem(id) {
    user_selected_item_index = arr.findIndex(item => parseInt(item.id) === parseInt(id));//ایندکس ارایه را ذخیزه میکند
    document.getElementById('modal_id').value = arr[user_selected_item_index].id//, و داخل vlue inpute میگذارد با دسترسی به ایتم هر ارایه می دهیم
    document.getElementById('modal_first_name').value = arr[user_selected_item_index].name
    document.getElementById('modal_last_name').value = arr[user_selected_item_index].lastName
    document.getElementById('modal_phone_number').value = arr[user_selected_item_index].phone

    document.getElementById('form_submit_button').setAttribute('data-dismiss', `modal`);
}
function modalFormHandler() {
    let first_name = document.getElementById('modal_first_name').value //مقدار های modal input زا داخل ایتم  های table میگذازد
    let last_name = document.getElementById('modal_last_name').value
    let phone_number = document.getElementById('modal_phone_number').value
    let data = [...arr]; //مقدار های value inpute modal را داخل data ذخیره میکند
    // METHOD 1 :
    data[user_selected_item_index].name = first_name;//با ایندکسی که گرفتیم ایتم های دیتا  ( input modal )  هست در first name ذخیره میکنیم
    data[user_selected_item_index].lastName = last_name;
    data[user_selected_item_index].phone = phone_number;

    // METHOD 2 :
    // data[user_selected_item_index] = {
    //     ...data[user_selected_item_index],
    //     name: first_name,
    //     lastName: last_name,
    //     phone: phone_number,
    // }
    arr = data;
    showTableWithArray(arr)
}
function removeItem(UserId) {

    for (let item of arr) {
        let index = arr.findIndex(item => parseInt(item.id) === parseInt(UserId)) //<==// arr?.map((row) => {
        //     console.log('row.id' , row.id)
        // })

        // console.log(.2.index, 'index')
        if (index > -1) {
            arr.splice(index, 1)
            let arr2 = [...arr]
            mytable.innerHTML = '';
            showTableWithArray(arr2);
        }
        if (arr.length === 0) {
            document.getElementById("table").style.display = "none";
        }
    }

    // روش عرفانی
    // for (let item of arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     let obj = arr[i];
    //    // console.log(obj.id, '<==')
    //     if (obj.id == UserId) {
    //         arr.splice(i, 1)
    //         arr2 = [...arr];
    //         console.log(arr2 , '<==arr2')
    //         // arr = '';
    //         for (let item of arr2) {
    //             let newRow = listUser.insertRow();
    //             let id = newRow.insertCell();
    //             let name = newRow.insertCell();
    //             let lastName = newRow.insertCell();
    //             let phone = newRow.insertCell();
    //             let delet = newRow.insertCell();
    //
    //             let UserId = document.createTextNode(item?.['id']);
    //             id.appendChild(UserId);
    //
    //             let username_data = document.createTextNode(item?.['name']);
    //             name.appendChild(username_data);
    //
    //             let last_Name_value = document.createTextNode(item?.['lastName']);
    //             lastName.appendChild(last_Name_value);
    //
    //             let phone_user = document.createTextNode(item?.['phone']);
    //             phone.appendChild(phone_user);
    //
    //             let delete_data = document.createTextNode('حذف');
    //             delet.appendChild(delete_data);
    //
    //             delet.setAttribute('onclick', `removeItem(${item?.id})`);
    //
    //         }
    //     }
    //
    // }
    // }
}
