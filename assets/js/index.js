let hospital = [
    {
        "part": "قلب",
        "docters": [{"id": "1", "name": "reza", "code": "1"}, {"id": "2", "name": "amir", "code": "2"},
            {"id": "3", "name": "erfan", "code": "3"}],
        "mariz": [{"id": "1", "name": "ali", "dName": "erfan", "v-date": "99/01/04", "x-date": "99/01/08"},
            {"id": "2", "name": "ali", "dName": "reza", "v-date": "99/01/04", "x-date": "99/01/08"},
            {"id": "3", "name": "ali", "dName": "amir", "v-date": "99/01/04", "x-date": "99/01/08"},
            {"id": "4", "name": "ahmad", "dName": "reza", "v-date": "99/01/04", "x-date": "99/01/08"},
            {"id": "5", "name": "ali", "dName": "amir", "v-date": "99/01/04", "x-date": "99/01/08"}]
    }
    ,
    {
        "part": "شکستگی",
        "docters": [{"id": "1", "name": "aran", "code": "1"}, {"id": "2", "name": "ali", "code": "2"},
            {"id": "3", "name": "ahmad", "code": "3"}],
        "mariz": [{"id": "1", "name": "ali", "dName": "aran", "v-date": "99/01/04", "x-date": "99/01/08"},
            {"id": "2", "name": "ali", "dName": "eran", "v-date": "99/01/04", "x-date": "99/01/08"},
            {"id": "3", "name": "ali", "dName": "ahmad", "v-date": "99/01/04", "x-date": "99/01/08"},
            {"id": "4", "name": "ali", "dName": "ali", "v-date": "99/01/04", "x-date": "99/01/08"},
            {"id": "5", "name": "ali", "dName": "ali", "v-date": "99/01/04", "x-date": "99/01/08"}]
    }]

let part_name;
let result = {}
let mytable = document.querySelector('#table');

function selectPartName(data) {
    {
        part_name = data.value;
        // console.log('==>' , part_name)
        // console.log(part_name);
        document.getElementById("part_name_p").innerHTML = part_name;
        // document.getElementById("doctorsData").innerHTML = "";

        for (let item of hospital) {
            if (part_name == item.part) {
                console.log(item, "select part")
                result = item;
                document.getElementById("doctorsData").style.display = "block";
                document.getElementById('doctorsData').value = 'انتخاب کنید'
                document.getElementById('doctorsData').innerHTML = "";
                document.getElementById("doctorsData").innerHTML = "<option selected disabled value='انتخاب کنید'>انتخاب دکتر</option>"


                for (let obj of item.docters) {
                    // console.log(obj)
                    let opt = document.createElement('option')
                    opt.value = obj.name;
                    opt.innerHTML = obj.name;
                    document.getElementById("doctorsData").appendChild(opt);

                }

            }
        }

    }
    console.log('result', result)
}


function selectDoctorName(name) {
    doctor_name = name.value;
    let sick_list = [];
    for (let person of result.mariz) {
        if (person.dName === doctor_name) {
            sick_list.push(person)
        }
    }

    document.getElementById("table").style.display = "block";
    let tbodyRef = document.getElementById('sick_table');
    tbodyRef.innerHTML = '';
    // tr
    // در این بخش میاییم به تعداد لیست بیمارهایمان یک جدول میسازیم
    for (let sick of sick_list) {
        console.log()
        // در این بخش به ازای هر آیتم از آرایه sick_list یک tr میسازیم
        let newRow = tbodyRef.insertRow();

        // در این بخش به ازای هر سطرمان دیتاهای مورد نیاز که در بخش thead تعریف شده اند را تعریف میکنیم
        // تعریف td ها
        let username = newRow.insertCell();
        let doctor_name = newRow.insertCell();
        let login_date = newRow.insertCell();
        let exit_date = newRow.insertCell();
        let edit = newRow.insertCell();

        // در این بخش دیتای مورد نیاز هر td را با استفاده از دیتای آرایه پر میکنیم
        // با استفاده از appendChild میتوان دیتای child را درست کنیم
        let username_data = document.createTextNode(sick?.['name']);
        username.appendChild(username_data);

        let doctor_name_data = document.createTextNode(sick?.['dName']);
        doctor_name.appendChild(doctor_name_data);

        let exit_date_data = document.createTextNode(sick?.['x-date']);
        exit_date.appendChild(exit_date_data);

        let login_date_data = document.createTextNode(sick?.['v-date']);
        login_date.appendChild(login_date_data);

        let edit_data = document.createTextNode('حذف');
        edit.appendChild(edit_data);
        // در این بخش برای ایجاد قابلیت حذف یک button درست میکنیم و به ان آیدی و یک فانکشن با attr onclick اضافه میکنیم
        edit.setAttribute('id',sick?.['id']);
        edit.setAttribute('onclick',`removeItem(${sick?.['id']})`);
    }
}



//
//     doctor_name = name.value;
//     for (let person of result.mariz){
//         if (person.dName == doctor_name){
//             console.log(person,"person")
//             document.getElementById('name_mariz').innerHTML = person.name;
//         }
//     }
//
//
// }

// let n_doctor;
// function select_mariz(data) {
//     // console.log( data);
//     console.log('==>' , data)
//     n_doctor = data.value;
//     console.log(n_doctor)
//
//
//
// }


// function selectPartName(data) {
// part_name = data.value;
// // SET P TAG VALUE WITH SELECTED OPTION
// document.getElementById('part_name_p').innerHTML = `بخش ${part_name}`;
// document.getElementById('doctorsData').value = 'انتخاب کنید'
// // END SET P TAG VALUE WITH SELECTED OPTION
//
// document.getElementById('doctorsData').innerHTML = "";

// SET PART SELECTED VALUE IN DOCTORS LIST
// for (let item of hospital) {
//     if (part_name === item.part) {
//         console.log(item.part)
//         document.getElementById('doctorsData').innerHTML = "<option selected disabled value=\"انتخاب کنید\">select_doctor</option>";
//         for (let obj of item.docters) {
//             let opt = document.createElement('option');
//             opt.value = obj.name;
//             opt.innerHTML = obj.name;
//             document.getElementById('doctorsData').appendChild(opt);
//         }
//     }
//
// }
// END SET PART SELECTED VALUE IN DOCTORS LIST


// function my_function() {
//     let data = document.getElementById('in1').value;
//     try {
//         if (data == " ") {
//             throw "this is empti";
//         }
//         if (isNaN(data)) {
//             throw "thi is nort number";
//         }
//         if (data > 20) {
//             throw "main the number";
//         }
//         if (data < 10) {
//             throw "max number";
//         }
//         alert("o")
//     } catch (err) {
//         document.getElementById('p1').innerHTML = err;
//     } finally {
//         document.getElementById('in1').value = "";
//     }
// }

// function my_function(){
//     let arr = [10 ,20 , 30 ,40 , 50]
//     let arr2 = arr.map(function (val){
//         return val-10;
//     })
//     document.getElementById('p1').innerHTML = arr2;
// // }
// function  my_function(){
//     let arr = [10 , 20 , 30 ,40 ]
//     try {
//         let single_value = arr.reduce(newfunc)
//         document.getElementById('p1').innerHTML = single_value;
//
//     }
//     catch (err){
//         console.log(err.message)
//     }
// }
// function  newfunc(total , item){
//     return total - item;
// }
// hello = () =>{
//     document.getElementById("demo").innerHTML +=this
// }
// window.addEventListener("load" , hello);
// document.getElementById("btn").addEventListener("click" , hello);

// class car  {
//     constructor(brand , color) {
//         this.brand = brand;
//         this.color = color;
//
//     }
//     show_car(){
//         console.log(this.brand , this.color)
//     }
// }
// let myCar = new car("ford" ,   "red")
// document.getElementById("demo").innerHTML = myCar.show_car();