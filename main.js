let operacion=document.getElementById('screen');

window.addEventListener("load", (event) => {
    operacion.innerHTML='0';
  });

  document.addEventListener("DOMContentLoaded", () => operacion.value='0');

function pulsarBoton(element){

let ultimoCaracter=operacion.value[operacion.value.length-1];


    if(operacion.innerHTML!=0){

        if(element.classList[1]!='button--operator'){
            if(ultimoCaracter=='-' || ultimoCaracter=='+' || ultimoCaracter=='*' || ultimoCaracter=='/'){
                operacion.innerHTML=element.value;
            }else{
                operacion.innerHTML+=element.value;
            }
            operacion.value+=element.value;
        }else{
            if(ultimoCaracter!='-' && ultimoCaracter!='+' && ultimoCaracter!='*' && ultimoCaracter!='/'){
                operacion.value+=element.value;
                console.log('hola');
            }
        }
    }
    if(operacion.innerHTML==0 && element.classList[1]!='button--operator'){
        operacion.innerHTML=element.value;
        operacion.value=element.value;
    }
    //operacion.innerHTML+=element.value;
    console.log('OPERACIÓN: '+operacion.value);
}

function calcular(){
    let result=eval(operacion.value);
    operacion.innerHTML=result;
    operacion.value=result;
}

function limpiar(){
    operacion.innerHTML='0';
    operacion.value='0';
}