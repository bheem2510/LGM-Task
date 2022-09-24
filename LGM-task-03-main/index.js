let output = document.getElementById("output");
let name = document.getElementById("inp_name");
let email = document.getElementById("inp_email");
let img = document.getElementById("inp_img");
let gender = document.getElementsByClassName("gender");
let checkbox = document.getElementsByClassName("checkbox");
let submit = document.getElementById("submit");
let clear = document.getElementById("clear");
let clr_inp = document.getElementsByClassName("clr_inp");

let img_src;

img.addEventListener("change", function () {
    let img_reader = new FileReader();
    img_reader.addEventListener("load", function () {
        img_src = img_reader.result;
    })
    img_reader.readAsDataURL(this.files[0]);
})

submit.onclick = function () {
    let flag = 1;
    for (i = 0; i < document.querySelectorAll("input").length; i++) {
        if (document.querySelectorAll("input")[i].value == "") {
            flag = 0
            break;
        }
    }
    if (flag == 0)
        alert("All fields must be filled");
    else {
        let data = document.createElement("div");
        let image = document.createElement("div");
        let info = document.createElement("div");
        data.className = "data";
        image.className = "image";
        info.className = "info";

        let selected;
        for (i = 0; i < gender.length; i++) {
            if (gender[i].checked == true) {
                selected = gender[i].value;
            }
        }

        let skillbox = "";
        for (j = 0; j < checkbox.length; j++) {
            if (checkbox[j].checked == true) {
                skillbox += checkbox[j].value + ',';
            }
        }


        info.innerHTML = "<p>Name : " + name.value + "</p><p>Email : " + email.value + "</p><p>Gender : " + selected + "</p><p>Skills : " + skillbox + "</p>";

        image.innerHTML = '<img src="' + img_src + '">';

        output.appendChild(data);
        data.appendChild(info);
        data.appendChild(image);
    }
}

clear.onclick = function () {
    for (i = 0; i < clr_inp.length; i++) {
        clr_inp[i].value = "";
    }
    for (i = 0; i < gender.length; i++) {
        gender[i].value = "";
    }
    for (i = 0; i < checkbox.length; i++) {
        checkbox[i].value = "";
    }
}