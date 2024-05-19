var x = 0;
const imagesArray = [];
var divArray = [];

setInterval(sliderGecis, 2000);
setInterval(sonraki, 2000);

function sliderGecis() {
    var gorsel = document.getElementById("slider");

    if (imagesArray.length > 0)
        gorsel.src = imagesArray[x];
    else
        return;

    var noktaDivs = document.querySelectorAll(".nokta1");
    noktaDivs.forEach(function(div) {
        div.style.backgroundColor = 'white';
    });

    noktaDivs[x].style.backgroundColor = 'gray';
}

function sonraki(){
    x++;
    if (x >= imagesArray.length)
        x = 0;
    sliderGecis();
}

function onceki(){
    x--;
    if (x < 0)
        x = imagesArray.length - 1;
    sliderGecis();
}

function dosyasec(event) {
    imagesArray.push(URL.createObjectURL(event.target.files[0]));

    document.getElementById("noktakopyala").innerHTML = "";
    document.getElementById("gorseller").innerHTML = "";

    for (var i = 0; i < imagesArray.length; i++){
        document.getElementById("noktakopyala").innerHTML += "<div class='nokta1'> </div>";
        document.getElementById("gorseller").innerHTML += "<img src=" + imagesArray[i] + " alt='' onclick='gorselDegistir(\"" + imagesArray[i] + "\", " + i + ")'>";

    }
}

function gorselDegistir(src, index) {
    var gorsel = document.getElementById("slider");
    gorsel.src = src;

    var noktaDivs = document.querySelectorAll(".nokta1");
    var kutu = document.querySelectorAll(".kutu");
    console.log("Kutu dizisinin boyutu: ", kutu.length);

    noktaDivs.forEach(function(div, i) {
        div.style.backgroundColor = 'white';
    });
    noktaDivs[index].style.backgroundColor = 'gray';

    kutu.forEach(function(div) {
        div.style.border = 'none';
    });

    kutu[index].style.border = '2px solid blue'; // burası  hatalı
}