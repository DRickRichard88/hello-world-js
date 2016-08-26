var img = document.getElementById('img-section-one');
var srcImg1="./images/photo1.png";
var srcImg2="./images/photo2.png";
var srcImg3="./images/photo3.png";
var srcImg4="./images/minimo1.png";
//piec zmiennych pierwsza odpowiada za obrazek"to nasze pierwsze pudelko", zlapane za pomoca komnendy
//getElementById
//pozostale to sciezki do plikow, beda podmieniane za pomoca onclick
//onclick=myFunction(img1)
function changeImgSrc(source) {
  img.src=source;
}
//tworze funkce myFunction o ktora bierze parametr "source", ktory ma byc ma byc 
//taki sam jak jak zrodlo plikow, wten sposob jest to funkcja ogolna.
//PS img.src nie moze miec === ani == dlaczego? 
//dlatego ze === to sa takie same wartosci i rodzaj ??a Tu chcemy zeby program poprostu uzywal
//konkretnego parametru wiec wtedy uzywamy jednego =?? 
