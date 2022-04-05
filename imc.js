
function calcular(){
   var altura = document.getElementById("altura").value;
   var peso = document.getElementById("peso").value;
   var imc = peso/(altura*altura);

      if(peso == 0 || altura == 0){
         alert("ERRO!! Digite seu peso e sua altura");

      }else if(imc < 18.5){
        document.getElementById('imc').innerHTML = ("VOCÊ ESTÁ NO NIVEL DE MAGREZA" + "  " + ",  seu IMC é: " + imc .toFixed(2));
        document.getElementById('altura').value = "";
        document.getElementById('peso').value = "";
        return false;
      
      }else if(imc > 18.5 && imc <=24.99){
        document.getElementById('imc').innerHTML = ("VOCÊ ESTÁ NO NIVEL NORMAL" + "  " + ",  seu IMC é: " + imc .toFixed(2));
        document.getElementById('altura').value = "";
        document.getElementById('peso').value = "";
        return false;
        
      }else if(imc >= 25 && imc <= 29.99){
        document.getElementById("imc").innerHTML = ("VOCÊ ESTÁ COM SOBREPESO" + "  " + ",  seu IMC é: " + imc .toFixed(2));
        document.getElementById('altura').value = "";
        document.getElementById('peso').value = "";
        return false;
        
      }else if(imc >= 30 && imc <= 39.99){
        document.getElementById("imc").innerHTML = ("VOCÊ ESTÁ COM OBESIDADE" + "  " + ",  seu IMC é: " + imc .toFixed(2));
        document.getElementById('altura').value = "";
        document.getElementById('peso').value = "";
        return false;
      }else{
        document.getElementById("imc" ).innerHTML = ("VOCÊ ESTÁ COM OBESIDADE GRAVE" + "  " + ",  seu IMC é: " + imc .toFixed(2));
        document.getElementById('altura').value = "";
        document.getElementById('peso').value = "";
        return false;
      }
}
