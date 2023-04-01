// function showAlert() {
//     // code
// }

const showAlert = (name) => {
    // alert(`user name is : ${name}`)
    // let p_tag = document.getElementById('p')
    //  console.log(p_tag)
    //
    //  p_tag.innerHTML = '<a href="http://rjdeveloper.ir">Click me</a>'
    //
    //  p_tag.style.cssText = `
    //  background-color : red;
    //  font-size : 2em;
    //  `;
    //
    // let p_attr = p_tag.getAttribute('id');
    //
    //
    //
    //  document.getElementById('p2').setAttribute('data-price' , '25000')
    //
    //  document.getElementById('p2').getAttribute('data-price')
    //
    //  document.getElementById('p2').innerText = document.getElementById('p2').getAttribute('data-price')
}

function changeTexts() {
    const parent = document.getElementById("div1");
    const child = document.getElementById("p1");

    const para = document.createElement("table");


    parent.replaceChild(para,child);
}