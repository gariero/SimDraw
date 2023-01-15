function ChangeDropdowns(value) {
    var elements = document.getElementsByClassName("shapeSelect");
    for (var i = 0; i < elements.length; i++) {
        if (value == "Вал" || value == "Диск") {
            elements[i].classList.add("d-none");
        } else {
            elements[i].classList.remove("d-none");
        }
    }
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}



var clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
})


fetch('tables/grades.txt')
    .then(response => response.text())
    .then(data => {
        let options = data.split("\n");
        let select = document.getElementById("SteelDroplist");
        for (let i = 0; i < options.length; i++) {
            let opt = document.createElement("option");
            opt.value = options[i];
            opt.innerHTML = options[i];
            select.appendChild(opt);
        }
    })
    .catch(error => console.error(error));



