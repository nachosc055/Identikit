let r1 = false;
let r2 = false;

    function verificarRespuesta(elemento, esCorrecta) {
      const id = elemento.id;
      const feedback = id === "s1" || id === "s2" ? "respuesta1" : "respuesta2";
      const yaRespondido = id === "s1" || id === "s2" ? r1 : r2;

      if (yaRespondido) return;

      document.getElementById(feedback).textContent = esCorrecta ? "¡Correcto!" : "Incorrecto";
      document.getElementById(feedback).style.backgroundColor = esCorrecta ? "green" : "red";

      if (id === "s1" || id === "s2") r1 = true;
      if (id === "s3" || id === "s4") r2 = true;
    }