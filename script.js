// ==========================
// SISTEMA DE 24 HORAS
// ==========================

function getDailyKey(signo) {
    let hoy = new Date().toISOString().slice(0, 10);
    return `lectura-${signo}-${hoy}`;
}

function guardarLectura(signo, data) {
    localStorage.setItem(getDailyKey(signo), JSON.stringify(data));
}

function cargarLectura(signo) {
    let guardado = localStorage.getItem(getDailyKey(signo));
    if (guardado) return JSON.parse(guardado);
    return null;
}

// ==========================
// DATOS DEL SISTEMA
// ==========================

const colores = [
    "Morado Eléctrico", "Negro Profundo", "Azul Noche", "Rosa Neblina",
    "Blanco Estelar", "Lavanda Brillante"
];

const numeros = [3, 7, 9, 11, 14, 17, 22, 33];

const elementos = {
    aries: "fuego", tauro: "tierra", geminis: "aire", cancer: "agua",
    leo: "fuego", virgo: "tierra", libra: "aire", escorpio: "agua",
    sagitario: "fuego", capricornio: "tierra", acuario: "aire", piscis: "agua"
};

const compatibilidadSignos = {
    "agua-agua": "Conexión emocional profunda.",
    "fuego-fuego": "Pasión intensa y química explosiva.",
    "tierra-tierra": "Estabilidad y metas claras.",
    "aire-aire": "Comunicación brillante.",
    "agua-fuego": "Atracción fuerte pero volátil.",
    "aire-tierra": "Crecimiento realista y estable.",
    "agua-tierra": "Relación cálida y emocionalmente segura.",
    "aire-fuego": "Aventura y deseo activo."
};

// ==========================
// SISTEMA ABUNDANTE AUTOMÁTICO (OPCIÓN B)
// ==========================

const estadoEmocional = [
    "Hoy sentirás una claridad emocional que hacía tiempo no tenías.",
    "Tu corazón estará más tranquilo de lo usual.",
    "Una mezcla de nostalgia y fuerza te acompaña hoy.",
    "Te sentirás más intuitiva de lo normal.",
    "Una energía nueva te hará ver las cosas desde otra perspectiva.",
    "Hoy tu mente se calmará y podrás pensar con más claridad.",
    "Algo dentro de ti empieza a alinearse de forma natural."
];

const consejoEspiritual = [
    "Escucha tu intuición antes que cualquier opinión externa.",
    "Respira profundo y actúa desde tu centro.",
    "No fuerces nada; lo que fluye, pertenece.",
    "Permite que el universo te muestre una señal antes de actuar.",
    "Agradece en silencio: la energía responde rápido hoy.",
    "Tu guía interna está más despierta que nunca.",
    "Observa las señales repetidas: no son casualidad."
];

const advertenciaSuave = [
    "Evita hablar de más con personas que no sientes confiables.",
    "No tomes decisiones impulsivas por presión emocional.",
    "Cuidado con mensajes del pasado que quieren distraerte.",
    "No confíes en quien hoy actúa extraño o cambiante.",
    "Alguien puede querer llamar tu atención sin buena intención.",
    "No idealices a nadie hoy; observa hechos, no palabras.",
    "Evita compartir planes importantes por ahora."
];

const vibraciones = [
    "8/10 — Alta energía y claridad emocional.",
    "6/10 — Día equilibrado, perfecto para decisiones pequeñas.",
    "7/10 — Buena energía, ideal para avanzar algo pendiente.",
    "9/10 — Día poderoso para manifestar.",
    "5/10 — Mantente calmada; energía sensible pero manejable.",
   "10/10 — Día extremadamente intuitivo.",
    "4/10 — No fuerces nada; deja que el día fluya."
];

const enfoques = [
    "Amor propio y calma interna.",
    "Decisiones personales pendientes.",
    "Conversaciones importantes.",
    "Situaciones emocionales no resueltas.",
    "Tu vida financiera o material.",
    "Relaciones afectivas.",
    "Tu crecimiento espiritual."
];

const oportunidadesDia = [
    "Una conversación inesperada te dará claridad.",
    "Recibirás una señal directa del universo.",
    "Alguien te revelará algo importante sin querer.",
    "Una oportunidad perdida regresa.",
    "Una persona que te piensa hoy podría contactarte.",
    "Un cambio pequeño tendrá un gran impacto.",
    "Algo que esperabas finalmente se mueve."
];

const citasMisticas = [
    "“Lo que hoy duele, mañana se transforma.”",
    "“Tu alma sabe lo que tu mente duda.”",
    "“Nada que sea para ti llegará en energía de duda.”",
    "“Lo invisible también guía tu camino.”",
    "“La claridad llega cuando dejas de perseguirla.”",
    "“Lo que buscas también te está buscando.”",
    "“El universo siempre responde en la frecuencia correcta.”"
];

// ==========================
// 60 FRASES (solo Tauro de ejemplo)
// ==========================

const frases = {
    tauro: [
        "Tu energía hoy está firme como la tierra.",
        "Algo estable llega a tu vida.",
        "Una verdad se revela en silencio.",
        "No ignores tu intuición física.",
        "Tu cuerpo quiere ser escuchado.",
        "Una oportunidad financiera aparece.",
        "Un ciclo emocional se cierra.",
        "Tu paciencia traerá recompensa.",
        "Una conversación pendiente se da.",
        "Alguien piensa en ti.",
        "Una puerta se abre sola.",
        "No cedas tu paz por nadie.",
        "Un mensaje llega inesperadamente.",
        "Tu energía atrae abundancia.",
        "Aléjate de lo que te resta.",
        "Algo bello florece.",
        "Tu valor será reconocido.",
        "Un deseo antiguo revive.",
        "Hoy te sientes más fuerte.",
        "Una persona vuelve a tu mente.",
        "Tu intuición se activa.",
        "El universo te muestra señales.",
        "No dudes de lo que sientes.",
        "Tu estabilidad atrae luz.",
        "Un cierre se da sin dolor.",
        "Descubres algo importante.",
        "Una verdad sale a la luz.",
        "Te sientes más libre.",
        "Algo bueno se acerca.",
        "Una energía nueva te rodea.",
        "Tu calma será tu poder.",
        "Hoy recuperas fuerza.",
        "Tu corazón sana algo.",
        "Alguien te observa.",
        "Una conexión se activa.",
        "Tu espíritu se eleva.",
        "Nadie te detiene hoy.",
        "Un recuerdo vuelve.",
        "Una señal aparece.",
        "Confía en tu proceso.",
        "Hoy logras claridad.",
        "Tu vibra atrae luz.",
        "Una intuición acierta.",
        "Un sueño te guía.",
        "Una energía te protege.",
        "Un ciclo abre paso.",
        "Hoy recibes guía.",
        "Tu luz brilla fuerte.",
        "Tu alma se expande.",
        "Una bendición llega.",
        "Un cierre necesario.",
        "Todo se acomoda.",
        "Eres más fuerte hoy.",
        "Nada te detiene.",
        "Tu magia está activa.",
        "Hoy te encuentras a ti.",
        "Tu esencia brilla.",
        "Una sorpresa llega."
    ]
};

// ==========================
// CARTAS
// ==========================

const cartas = [
  { nombre: "El Loco", texto: "Nuevos comienzos y libertad.", img: "img/el.loco.png" },
  { nombre: "El Mago", texto: "Poder de manifestación.", img: "img/el.mago.png" },
  { nombre: "El Papa", texto: "Guía espiritual y sabiduría.", img: "img/el.papa.png" },
  { nombre: "La Sacerdotisa", texto: "Intuición y secretos.", img: "img/la.sacerdotisa.png" },
  { nombre: "La Emperatriz", texto: "Creación y abundancia.", img: "img/la.emperatriz.png" },
  { nombre: "El Emperador", texto: "Control y estabilidad.", img: "img/el.emperador.png" },
  { nombre: "El Ermitaño", texto: "Reflexión interna.", img: "img/el.ermitaño.png" },
  { nombre: "La Rueda de la Fortuna", texto: "Cambio de destino.", img: "img/la.rueda_de_la_fortuna.png" },
  { nombre: "La Fuerza", texto: "Valor y dominio interno.", img: "img/la_fuerza.png" },
  { nombre: "La Justicia", texto: "Equilibrio y verdad.", img: "img/la_justicia.png" },
  { nombre: "El Colgado", texto: "Nueva perspectiva.", img: "img/el_colgado.png" },
  { nombre: "La Muerte", texto: "Transformación profunda.", img: "img/la_muerta.png" },
  { nombre: "La Templanza", texto: "Armonía y calma.", img: "img/la_templanza.png" },
  { nombre: "El Diablo", texto: "Deseos y ataduras.", img: "img/el_diablo.png" },
  { nombre: "La Torre", texto: "Ruptura necesaria.", img: "img/la_torre.png" },
  { nombre: "La Estrella", texto: "Esperanza y sanación.", img: "img/la.estrella.png" },
  { nombre: "La Luna", texto: "Emociones ocultas.", img: "img/la_luna.png" },
  { nombre: "El Sol", texto: "Éxito y claridad.", img: "img/el_sol.png" },
  { nombre: "El Juicio", texto: "Despertar espiritual.", img: "img/el_juicio.png" },
  { nombre: "El Mundo", texto: "Cierre exitoso.", img: "img/el_mundo.png" },
  { nombre: "Los Enamorados", texto: "Elección del corazón.", img: "img/los.enamorados.png" },
  { nombre: "El Carro", texto: "Avance decidido.", img: "img/el.carro.png" }
];

function setCarta(idContenedor, cartaObj) {
  const cont = document.getElementById(idContenedor);
  if (!cont) return;

  // cada vez que generas, vuelve a estar tapada
  cont.classList.remove("volteada");

  const backImg = cont.querySelector(".card-face.back");
  if (!backImg) return;

  backImg.src = cartaObj.img;
}



// ==========================
// GENERAR LECTURA COMPLETA (con guardado 24h)
// ==========================

function generar(signo) {
    signoActual = signo;

    // cargar si existe
    let guardado = cargarLectura(signo);

    if (!guardado) {
        guardado = {
            // horóscopo ABUNDANTE
            horoscopo: `
                💜 <strong>Estado emocional:</strong> ${estadoEmocional[Math.floor(Math.random() * estadoEmocional.length)]}<br><br>
                🔮 <strong>Consejo espiritual:</strong> ${consejoEspiritual[Math.floor(Math.random() * consejoEspiritual.length)]}<br><br>
                ⚠️ <strong>Advertencia suave:</strong> ${advertenciaSuave[Math.floor(Math.random() * advertenciaSuave.length)]}<br><br>
                ✨ <strong>Vibración del día:</strong> ${vibraciones[Math.floor(Math.random() * vibraciones.length)]}<br><br>
                🎯 <strong>Enfoque recomendado:</strong> ${enfoques[Math.floor(Math.random() * enfoques.length)]}<br><br>
                💎 <strong>Oportunidad del día:</strong> ${oportunidadesDia[Math.floor(Math.random() * oportunidadesDia.length)]}<br><br>
                🌙 <strong>Cita mística:</strong> ${citasMisticas[Math.floor(Math.random() * citasMisticas.length)]}
            `,

            cartaDia: cartas[Math.floor(Math.random() * cartas.length)],
            pasado: cartas[Math.floor(Math.random() * cartas.length)],
            presente: cartas[Math.floor(Math.random() * cartas.length)],
            futuro: cartas[Math.floor(Math.random() * cartas.length)],
            color: colores[Math.floor(Math.random() * colores.length)],
            numero: numeros[Math.floor(Math.random() * numeros.length)],
            mensual: "Este mes abriste un portal emocional importante."
        };

        guardarLectura(signo, guardado);
    }

    document.getElementById("signoTitulo").innerText = signo.toUpperCase();
    document.getElementById("horoscopo").innerHTML = guardado.horoscopo;

    document.getElementById("cartaTexto").innerText =
        `${guardado.cartaDia.nombre}: ${guardado.cartaDia.texto}`;

    document.getElementById("textoPasado").innerText =
        `${guardado.pasado.nombre}: ${guardado.pasado.texto}`;
    document.getElementById("textoPresente").innerText =
        `${guardado.presente.nombre}: ${guardado.presente.texto}`;
    document.getElementById("textoFuturo").innerText =
        `${guardado.futuro.nombre}: ${guardado.futuro.texto}`;

    document.getElementById("color").innerText = guardado.color;
    document.getElementById("numero").innerText = guardado.numero;
    document.getElementById("mensual").innerText = guardado.mensual;


         setCarta("cartaDia", guardado.cartaDia);
     setCarta("cartaPasado", guardado.pasado);
     setCarta("cartaPresente", guardado.presente);
     setCarta("cartaFuturo", guardado.futuro);

    scrollToLectura();
}

// ==========================
// VOLTEAR CARTA
// ==========================

function voltearCarta(el) {
    el.classList.toggle("volteada");
}

// ==========================
// COMPATIBILIDAD
// ==========================

function compatibilidad() {
    let otro = document.getElementById("otroSigno").value;
    if (!otro) return;

    let elem1 = elementos[signoActual];
    let elem2 = elementos[otro];

    let key = [elem1, elem2].sort().join("-");
    let texto = compatibilidadSignos[key] || "Conexión inesperada.";

    document.getElementById("compatibilidadTexto").innerText = texto;
}

// ==========================
// SCROLL AUTOMÁTICO A LA LECTURA
// ==========================

function scrollToLectura() {
    const lecturaSection = document.getElementById("lectura");
    lecturaSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

