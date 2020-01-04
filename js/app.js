var Calculadora={
valor1:[],
valor2:[],
ingreso:true,
completo1:0,
completo2:0,
resultado:0,
disCamp1:true,
disCamp2:true,
operacion:0,
contIgual:0,
contOpera:0,
contPto:0,


//NUMEROS

cero:document.getElementById("0").onclick=function() {
  Calculadora.comprobacion();
  if (Calculadora.ingreso&&Calculadora.disCamp1&&!Calculadora.completo1==0) {
    Calculadora.valor1.push('0');
    Calculadora.sint1();
  }else if (!Calculadora.ingreso&&Calculadora.disCamp2) {
    Calculadora.valor2.push('0');
    Calculadora.sint2();
  }
},
punto:document.getElementById("punto").onclick=function() {
  Calculadora.comprobacion();
  if (Calculadora.ingreso&&Calculadora.disCamp1&&Calculadora.contPto==0) {
    Calculadora.valor1.push('.');
    Calculadora.sint1();
    Calculadora.contPto=1;
  }else if (!Calculadora.ingreso&&Calculadora.disCamp2&&Calculadora.contPto==0) {
    Calculadora.valor2.push('.');
    Calculadora.sint2();
    Calculadora.contPto=1;
  }
},
uno:document.getElementById("1").onclick=function() {
  Calculadora.comprobacion();
  if (Calculadora.ingreso&&Calculadora.disCamp1) {
    Calculadora.valor1.push('1');
    Calculadora.sint1();
  }else if (!Calculadora.ingreso&&Calculadora.disCamp2) {
    Calculadora.valor2.push('1');
    Calculadora.sint2();
  }
},
dos:document.getElementById("2").onclick=function() {
  Calculadora.comprobacion();
  if (Calculadora.ingreso&&Calculadora.disCamp1) {
    Calculadora.valor1.push('2');
    Calculadora.sint1();
  }else if (!Calculadora.ingreso&&Calculadora.disCamp2) {
    Calculadora.valor2.push('2');
    Calculadora.sint2();
  }
},
tres:document.getElementById("3").onclick=function() {
  Calculadora.comprobacion();
  if (Calculadora.ingreso&&Calculadora.disCamp1) {
    Calculadora.valor1.push('3');
    Calculadora.sint1();
  }else if (!Calculadora.ingreso&&Calculadora.disCamp2) {
    Calculadora.valor2.push('3');
    Calculadora.sint2();
  }
},
cuatro:document.getElementById("4").onclick=function() {
  Calculadora.comprobacion();
  if (Calculadora.ingreso&&Calculadora.disCamp1) {
    Calculadora.valor1.push('4');
    Calculadora.sint1();
  }else if (!Calculadora.ingreso&&Calculadora.disCamp2) {
    Calculadora.valor2.push('4');
    Calculadora.sint2();
  }
},
cinco:document.getElementById("5").onclick=function() {
  Calculadora.comprobacion();
  if (Calculadora.ingreso&&Calculadora.disCamp1) {
    Calculadora.valor1.push('5');
    Calculadora.sint1();
  }else if (!Calculadora.ingreso&&Calculadora.disCamp2) {
    Calculadora.valor2.push('5');
    Calculadora.sint2();
  }
},
seis:document.getElementById("6").onclick=function() {
  Calculadora.comprobacion();
  if (Calculadora.ingreso&&Calculadora.disCamp1) {
    Calculadora.valor1.push('6');
    Calculadora.sint1();
  }else if (!Calculadora.ingreso&&Calculadora.disCamp2) {
    Calculadora.valor2.push('6');
    Calculadora.sint2();
  }
},
siete:document.getElementById("7").onclick=function() {
  Calculadora.comprobacion();
  if (Calculadora.ingreso&&Calculadora.disCamp1) {
    Calculadora.valor1.push('7');
    Calculadora.sint1();
  }else if (!Calculadora.ingreso&&Calculadora.disCamp2) {
    Calculadora.valor2.push('7');
    Calculadora.sint2();
  }
},
ocho:document.getElementById("8").onclick=function() {
  Calculadora.comprobacion();
  if (Calculadora.ingreso&&Calculadora.disCamp1) {
    Calculadora.valor1.push('8');
    Calculadora.sint1();
  }else if (!Calculadora.ingreso&&Calculadora.disCamp2) {
    Calculadora.valor2.push('8');
    Calculadora.sint2();
  }
},
nueve:document.getElementById("9").onclick=function() {
  Calculadora.comprobacion();
  if (Calculadora.ingreso&&Calculadora.disCamp1) {
    Calculadora.valor1.push('9');
    Calculadora.sint1();
  }else if (!Calculadora.ingreso&&Calculadora.disCamp2) {
    Calculadora.valor2.push('9');
    Calculadora.sint2();
  }
},


//OPERACION
suma:document.getElementById("mas").onclick=function() {
  Calculadora.ingreso=false;
  Calculadora.contPto=0;
  if (Calculadora.contOpera==0) {
    Calculadora.operacion=1;
    Calculadora.contOpera=Calculadora.contOpera+1;
    if (Calculadora.valor1.length==0) {
      Calculadora.valor1.push("0");
      Calculadora.sint1();
    }
  }else {
    opera();
    Calculadora.operacion=1;
    Calculadora.completo1=Calculadora.resultado;
    Calculadora.valor2=[];
    document.getElementById("display").innerHTML = Calculadora.completo1;
  }
},
resta:document.getElementById("menos").onclick=function() {
  Calculadora.ingreso=false;
  Calculadora.contPto=0;
  if (Calculadora.contOpera==0) {
    Calculadora.contOpera=Calculadora.contOpera+1;
    Calculadora.operacion=2;
    if (Calculadora.valor1.length==0) {
      Calculadora.valor1.push("0");
      Calculadora.sint1();
    }
  }else {
    opera();
    Calculadora.operacion=2;
    Calculadora.completo1=Calculadora.resultado;
    Calculadora.valor2=[];
    document.getElementById("display").innerHTML = Calculadora.completo1;
  }
},
division:document.getElementById("dividido").onclick=function() {
  Calculadora.ingreso=false;
  Calculadora.contPto=0;
  if (Calculadora.contOpera==0) {
    Calculadora.operacion=3;
    Calculadora.contOpera=Calculadora.contOpera+1;
    if (Calculadora.valor1.length==0) {
      Calculadora.valor1.push("0");
      Calculadora.sint1();
    }
  }else {
    opera();
    Calculadora.operacion=3;
    Calculadora.completo1=Calculadora.resultado;
    Calculadora.valor2=[];
    document.getElementById("display").innerHTML = Calculadora.completo1;
  }
},
multiplicacion:document.getElementById("por").onclick=function() {
  Calculadora.ingreso=false;
  Calculadora.contPto=0;
  if (Calculadora.contOpera==0) {
    Calculadora.contOpera=Calculadora.contOpera+1;
    Calculadora.operacion=4;
    if (Calculadora.valor1.length==0) {
      Calculadora.valor1.push("0");
      Calculadora.sint1();
    }
  }else {
    opera();
    Calculadora.operacion=4;
    Calculadora.completo1=Calculadora.resultado;
    Calculadora.valor2=[];
    document.getElementById("display").innerHTML = Calculadora.completo1;
  }
},


//ESPECIALES
raiz:document.getElementById("raiz").onclick=function() {
  if (Calculadora.ingreso) {
    Calculadora.sint1();
    Calculadora.completo1=Math.sqrt(Calculadora.completo1);
    Calculadora.completo1= (Calculadora.completo1 + "").slice(0, 9);
    document.getElementById("display").innerHTML = Calculadora.completo1;
  }else if (!Calculadora.ingreso) {
    Calculadora.sint2();
    Calculadora.completo2=Math.sqrt(Calculadora.completo2);
    Calculadora.completo2=(Calculadora.completo2+"").slice(0,9);
    document.getElementById("display").innerHTML = Calculadora.completo2;
  }
},
signo:document.getElementById("sign").onclick=function() {
  if (Calculadora.ingreso) {
    Calculadora.completo1=Calculadora.completo1*-1;
    document.getElementById("display").innerHTML = Calculadora.completo1;
  }else if (!Calculadora.ingreso) {
    Calculadora.completo2=Calculadora.completo2*-1;
    document.getElementById("display").innerHTML = Calculadora.completo2;
  }
},
on:document.getElementById("on").onclick=function() {
  Calculadora.contIgual=0;
  Calculadora.contOpera=0;
  Calculadora.valor2=[];
  Calculadora.valor1=[];
  Calculadora.completo1=0,
  Calculadora.completo2=0,
  Calculadora.disCamp1=true;
  Calculadora.disCamp2=true;
  Calculadora.ingreso=true;
  Calculadora.resultado=0;
  Calculadora.contPto=0;
  document.getElementById("display").innerHTML = Calculadora.completo1;
},


//Sintetizar valores
sint1:function() {
  if (Calculadora.valor1.length==1) {
    Calculadora.completo1=Calculadora.valor1[0];
  }else if (Calculadora.valor1.length==2) {
    Calculadora.completo1=Calculadora.valor1[0]+Calculadora.valor1[1];
  }else if (Calculadora.valor1.length==3) {
    Calculadora.completo1=Calculadora.valor1[0]+Calculadora.valor1[1]+Calculadora.valor1[2];
  }else if (Calculadora.valor1.length==4) {
    Calculadora.completo1=Calculadora.valor1[0]+Calculadora.valor1[1]+Calculadora.valor1[2]+Calculadora.valor1[3];
  }else if (Calculadora.valor1.length==5) {
    Calculadora.completo1=Calculadora.valor1[0]+Calculadora.valor1[1]+Calculadora.valor1[2]+Calculadora.valor1[3]+Calculadora.valor1[4];
  }else if (Calculadora.valor1.length==6) {
    Calculadora.completo1=Calculadora.valor1[0]+Calculadora.valor1[1]+Calculadora.valor1[2]+Calculadora.valor1[3]+Calculadora.valor1[4]+Calculadora.valor1[5];
  }else if (Calculadora.valor1.length==7) {
    Calculadora.completo1=Calculadora.valor1[0]+Calculadora.valor1[1]+Calculadora.valor1[2]+Calculadora.valor1[3]+Calculadora.valor1[4]+Calculadora.valor1[5]+Calculadora.valor1[6];
  }else if (Calculadora.valor1.length==8) {
    Calculadora.completo1=Calculadora.valor1[0]+Calculadora.valor1[1]+Calculadora.valor1[2]+Calculadora.valor1[3]+Calculadora.valor1[4]+Calculadora.valor1[5]+Calculadora.valor1[6]+Calculadora.valor1[7];
  }
  document.getElementById("display").innerHTML = Calculadora.completo1;
},

sint2:function() {
  if (Calculadora.valor2.length==1) {
    Calculadora.completo2=Calculadora.valor2[0];
  }else if (Calculadora.valor2.length==2) {
    Calculadora.completo2=Calculadora.valor2[0]+Calculadora.valor2[1];
  }else if (Calculadora.valor2.length==3) {
    Calculadora.completo2=Calculadora.valor2[0]+Calculadora.valor2[1]+Calculadora.valor2[2];
  }else if (Calculadora.valor2.length==4) {
    Calculadora.completo2=Calculadora.valor2[0]+Calculadora.valor2[1]+Calculadora.valor2[2]+Calculadora.valor2[3];
  }else if (Calculadora.valor2.length==5) {
    Calculadora.completo2=Calculadora.valor2[0]+Calculadora.valor2[1]+Calculadora.valor2[2]+Calculadora.valor2[3]+Calculadora.valor2[4];
  }else if (Calculadora.valor2.length==6) {
    Calculadora.completo2=Calculadora.valor2[0]+Calculadora.valor2[1]+Calculadora.valor2[2]+Calculadora.valor2[3]+Calculadora.valor2[4]+Calculadora.valor2[5];
  }else if (Calculadora.valor2.length==7) {
    Calculadora.completo2=Calculadora.valor2[0]+Calculadora.valor2[1]+Calculadora.valor2[2]+Calculadora.valor2[3]+Calculadora.valor2[4]+Calculadora.valor2[5]+Calculadora.valor2[6];
  }else if (Calculadora.valor2.length==8) {
    Calculadora.completo2=Calculadora.valor2[0]+Calculadora.valor2[1]+Calculadora.valor2[2]+Calculadora.valor2[3]+Calculadora.valor2[4]+Calculadora.valor2[5]+Calculadora.valor2[6]+Calculadora.valor2[7];
  }
  document.getElementById("display").innerHTML = Calculadora.completo2;
},

//COMPROBACION DE LONGITUD DE NUMEROS

comprobacion:function () {
  if (Calculadora.valor1.length<8) {
    Calculadora.disCamp1=true;
    }else {
    Calculadora.disCamp1=false;
    }
  if (Calculadora.valor2.length<8) {
    Calculadora.disCamp2=true;
  }else {
    Calculadora.disCamp2=false;
  }
 }
}

//funciones
document.getElementById('igual').onclick = function() {
  opera();
  Calculadora.contOpera=0;
  Calculadora.contPto=0;
}

function opera() {
  if (Calculadora.operacion=='1') {
    if (Calculadora.contIgual==0&&Calculadora.contOpera==1) {
      Calculadora.resultado = parseFloat(Calculadora.completo1) + parseFloat(Calculadora.completo2);
      document.getElementById("display").innerHTML = Calculadora.resultado;
      Calculadora.contIgual=1;
    }else {
      Calculadora.resultado = parseFloat(Calculadora.resultado) + parseFloat(Calculadora.completo2);
      document.getElementById("display").innerHTML = Calculadora.resultado;
    }

  }else if (Calculadora.operacion=='2') {
    if (Calculadora.contIgual==0&&Calculadora.contOpera==1) {
      Calculadora.resultado = parseFloat(Calculadora.completo1) - parseFloat(Calculadora.completo2);
      document.getElementById("display").innerHTML = Calculadora.resultado;
      Calculadora.contIgual=1;
    }else {
      Calculadora.resultado = parseFloat(Calculadora.resultado) - parseFloat(Calculadora.completo2);
      document.getElementById("display").innerHTML = Calculadora.resultado;
    }
  }else if (Calculadora.operacion=='3') {
    if (Calculadora.contIgual==0&&Calculadora.contOpera==1) {
      Calculadora.resultado = parseFloat(Calculadora.completo1) / parseFloat(Calculadora.completo2);
      document.getElementById("display").innerHTML = Calculadora.resultado;
      Calculadora.contIgual=1;
    }else {
      Calculadora.resultado = parseFloat(Calculadora.resultado) / parseFloat(Calculadora.completo2);
      document.getElementById("display").innerHTML = Calculadora.resultado;
    }
  }else if (Calculadora.operacion=='4'){
    if (Calculadora.contIgual==0&&Calculadora.contOpera==1) {
      Calculadora.resultado = parseFloat(Calculadora.completo1) * parseFloat(Calculadora.completo2);
      document.getElementById("display").innerHTML = Calculadora.resultado;
      Calculadora.contIgual=1;
    }else {
      Calculadora.resultado = parseFloat(Calculadora.resultado) * parseFloat(Calculadora.completo2);
      document.getElementById("display").innerHTML = Calculadora.resultado;
    }
  }
}

var botones = document.getElementsByClassName("tecla");
for (let i = 0; i < botones.length; i++) {
botones[i].addEventListener("mousedown", function () {
botones[i].style.transform = "scale(.95, .95)";
});
botones[i].addEventListener("mouseup", function () {
botones[i].style.transform = "scale(1, 1)";
});
};
