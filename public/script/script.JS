// jshint esversion:6

const formBox = document.querySelector(".form");
const resultBox = document.querySelector(".result");
const form = document.querySelector(".form > form");
const names = document.querySelectorAll(".name");
const percent = document.querySelector(".percent");
const desc = document.querySelector(".description");

form.addEventListener('submit',(evt) => {
    evt.preventDefault();
    let name1 = names[0].value,
        name2 = names[1].value;
    fetch('/result?name_1='+encodeURI(name1)+'&name_2='+encodeURI(name2))
        .then((res) => {
            res.json()
                .then((data) => {
                    percent.innerHTML = data.result + '%';
                    desc.innerHTML = data.resultDesc;
                    formBox.classList.add("hidden");
                    resultBox.classList.remove("hidden");
                });
        });

});