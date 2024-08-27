
const textfiltroEncriptar = document.querySelector(".areaTexto");
const contenido = document.querySelector(".cajaDeResultado");
const resultado = document.querySelector(".result");
const alerta = document.querySelector(".textoAlerta");
const botonEncript = document.querySelector(".botonEncript");
const botonCopiar = document.querySelector(".botonCopiar");
const btnDesencriptar = document.querySelector(".botonDesencptr");


botonEncript.addEventListener("click", e=>{
    e.preventDefault();
    let text = textfiltroEncriptar.value;
    let textfiltro = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(text == ""){
        
        alerta.style.background = "black";
        alerta.style.color = "white";
        alerta.style.fontWeight = "200";
        alerta.textContent = "No has escrito nada y asi no se puede";
        
        setTimeout(()=>{
            alerta.removeAttribute("style");
        },2500);
    }

    else if(text !== textfiltro){
        alerta.style.background = "black";
        alerta.style.color = "white";
        alerta.style.fontWeight = "200";
        alerta.textContent = "No se permiten caracteres especiales o acentos ni MAYUSCULAS";
        
        setTimeout(()=>{
            alerta.removeAttribute("style");
        },2500);
    }

    else if(text !== text.toLowerCase()){
        alerta.style.background = "black";
        alerta.style.color = "white";
        alerta.style.fontWeight = "200";
        alerta.textContent = "No se permiten M A Y U S C U L A S, todo en minusculas por favor";
        
        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else{
      
        text = text.replace(/e/mg, "enter");
        text = text.replace(/i/mg, "imes");
        text = text.replace(/a/mg, "ai");
        text = text.replace(/o/mg, "ober");
        text = text.replace(/u/mg, "ufat");

        resultado.innerHTML = text;
        botonCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let text = textfiltroEncriptar.value;
    let textfiltro = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(text == ""){
        alerta.style.background = "black";
        alerta.style.color = "white";
        alerta.style.fontWeight = "200";
        alerta.textContent = "No has escrito nada y asi no se puede";
        setTimeout(()=>{
            alerta.removeAttribute("style");
        },2500);
    }

    else if(text !== textfiltro){
        alerta.style.background = "black";
        alerta.style.color = "white";
        alerta.style.fontWeight = "200";
        alerta.textContent = "No se permiten caracteres especiales o acentos ni MAYUSCULAS";
        
        setTimeout(()=>{
            alerta.removeAttribute("style");
        },2500);
    }

    else if(text !== text.toLowerCase()){
        alerta.style.background = "black";
        alerta.style.color = "white";
        alerta.style.fontWeight = "200";
        alerta.textContent = "No se permiten MAYUSCULAS, todo en minusculas por favor";
        
        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else{
   
        text = text.replace(/enter/mg, "e");
        text = text.replace(/imes/mg, "i");
        text = text.replace(/ai/mg, "a");
        text = text.replace(/ober/mg, "o");
        text = text.replace(/ufat/mg, "u");

        resultado.innerHTML = text;
        botonCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});

botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = resultado;
    copiar.select();
    document.execCommand("copy"); 
    resultado.innerHTML = '';
});