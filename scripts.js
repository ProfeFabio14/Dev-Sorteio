const buttonGenerate = document.querySelector(".button-generate")


buttonGenerate.addEventListener("click", function () {
  const numeroMin = Math.ceil(document.querySelector(".input-min").value)
  const numeroMax = Math.floor(document.querySelector(".input-max").value)

  const resultado = Math.floor(Math.random() * (numeroMax - numeroMin + 1) + numeroMin);


  if (numeroMin < numeroMax) {
  swal({
    title: "O número vencedor é:",
    text: `${resultado}`,
    icon: "./assets/dados-plata.png",
  });
 }


else {
  swal ({
    title: "ERRO",
    text: "Coloque um número menor e um número maior.",
    icon: "error",
  });
}
 
});







