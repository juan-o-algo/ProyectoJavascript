/* RECOLECCION de datos de la primer pregunta de todo el test */

function dificultad(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "¿Qué tan complejo quieres que sea tu mazo?";
        const opcionesDificultad = [
            "PRINCIPIANTE",
            "INTERMEDIO\n(Recomendado)",
            "AVANZADO",
            "EXPERTO",
            "EXTREMO"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesDificultad.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesDificultad[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

/* En esta sección estan las funciones que RECOGEN los datos ingresados por el usuario en dificultad PRINCIPIANTE. */

function principiante(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "(1/7)\n¿Qué prefieres hacer en tu tiempo libre?";
        const opcionesPrincipiante = [
            "Dormir",
            "Practicar un deporte",
            "Reunirte con amigos",
            "Salir a comer",
            "Leer un libro"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesPrincipiante.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesPrincipiante[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function principiante2(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "(2/7)\n¿Qué tipo de película disfrutas más?";
        const opcionesPrincipiante2 = [
            "Ciencia ficción",
            "Comedia",
            "Drama",
            "Terror",
            "Acción"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesPrincipiante2.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesPrincipiante2[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function principiante3(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "(3/7)\n¿Cuál es animal favorito entre estos?";
        const opcionesPrincipiante3 = [
            "Murciélago",
            "Leopardo",
            "Rinoceronte",
            "Cuervo",
            "Perro"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesPrincipiante3.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesPrincipiante3[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function principiante4(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "(4/7)\n¿Qué actividad te relaja más?";
        const opcionesPrincipiante4 = [
            "Salir a caminar",
            "Hacer jardinería",
            "Meditar",
            "Cocinar",
            "No hacer nada"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesPrincipiante4.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesPrincipiante4[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function principiante5(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "(5/7)\n¿Qué instrumento musical te gusta mas?";
        const opcionesPrincipiante5 = [
            "Piano",
            "Flauta",
            "Violin",
            "Guitarra",
            "Tambor"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesPrincipiante5.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesPrincipiante5[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function principiante6(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "(6/7)\n¿Cuál es tu sabor favorito?";
        const opcionesPrincipiante6 = [
            "Dulce",
            "Amargo",
            "Picante",
            "Ácido",
            "Salado"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesPrincipiante6.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesPrincipiante6[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function principiante7(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "(7/7)\n¿Qué tipo de trabajo voluntario te interesaría hacer?";
        const opcionesPrincipiante7 = [
            "Plantar árboles",
            "Ayudar a personas mayores",
            "Enseñar a niños",
            "Limpiar la calle",
            "Trabajar en un refugio de animales"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesPrincipiante7.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesPrincipiante7[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

/* En esta sección estan las funciones que RECOGEN los datos ingresados por el usuario en dificultad INTERMEDIA. */

/* RECOLECCION de datos de la primera pregunta INTERMEDIA */

function intermedia(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "Elige un estilo musical que te llame la atención";
        const opcionesIntermedia = [
            "Clásica",
            "Rock pesado",
            "Coros polifónicos",
            "Fusión",
            "Emocore"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesIntermedia.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesIntermedia[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

/* RECOLECCION de datos de la segunda pregunta INTERMEDIA */

function control(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "Eres una autoridad y alguien bajo tu mando rompe las reglas.\n ¿Qué haces?";
        const opcionesControl = [
            "Ponerlo en su lugar, las reglas están para ser cumplidas sin excepciones",
            "Negociar con esa persona, tal vez puedas hacer la vista gorda si recibes algo a cambio..."
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesControl.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesControl[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function agro(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "Escuchas mucha gente gritando enojada y cosas rompiéndose ¡Se está produciendo un disturbio violento en la calle!\n ¿Qué haces?";
        const opcionesAgro = [
            "Observar, la violencia es el mejor entretenimiento. ¡Increíble! ¡A ese tipo le bajaron un diente!",
            "Aprovechar el caos del momento y romper algo o golpear a alguien. ¡Qué divertido!"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesAgro.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesAgro[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function swarm(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "Eres el director técnico de un equipo deportivo y se acerca la gran final del torneo.\n ¿Qué estrategia usarás?";
        const opcionesSwarm = [
            "La mejor defensa es un buen ataque. ¡Adelante caballeros, que la victoria es nuestra!",
            "Es una fecha importante... Seamos precavidos, aguantemos al principio y analicemos el juego contrario."
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesSwarm.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesSwarm[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function combo(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "¡Ganaste la lotería! Te vuelves asquerosamente rico.\n ¿Qué harías con el dinero?";
        const opcionesCombo = [
            "Invertirlo, en unos años tendrás el doble. ¡Las ganancias serán exponenciales!",
            "Vive cada día como si fuera el último. ¡Haz una fiesta enorme con todos tus seres queridos, mucha comida, espectáculos y sorpresas!"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesCombo.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesCombo[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function gy(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "¡Qué hambre!... En la nevera tienes un arroz seco de hace un par de días. Hoy tu compañero de cuarto cocinó una olla entera de tu platillo favorito, que también está en la nevera.\n ¿Qué haces?";
        const opcionesGy = [
            "Tal vez con alguna lata de algo se pueda aprovechar ese arroz, sería una pena tirarlo",
            "Te escabulles en la cocina por la noche y le robas una porcion de comida a tu roomie, lavas el plato para no dejar evidencia. Nunca estuviste ahí."
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesGy.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesGy[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

/* RECOLECCION de datos de la tercera pregunta INTERMEDIA */

function azorius(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "¡Cuidado!\n ¡Ahí viene un golpe!\n Que vas a hacer?";
        const opcionesAzorius = [
            "Esquivas rápidamente y coontraatacas",
            "Intentas desviar el golpe y aplicarle una llave al atacante para inmovilizarlo"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesAzorius.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesAzorius[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function orzhov(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "¿Qué valoras más?";
        const opcionesOrzhov = [
            "Gozar de buena salud y vigor",
            "Tener muchos contactos e influencia"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesOrzhov.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesOrzhov[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function rakdos(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "Tienes unas empanadas viejas que no sabes si siguen muy comestibles.\n ¿Qué haces?";
        const opcionesRakdos = [
            "Las compartes con un desconocido, en caso de estar mal ya te enterarás",
            "Tirarlas a la basura. Es una pena, pero ahora puedes comer algo en mejor estado"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesRakdos.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesRakdos[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function gruul(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "Te preparas para una pelea.\n ¿Qué prefieres?";
        const opcionesGruul = [
            "Entrenar y hacerte fuerte para aplastar al debilucho tu rival",
            "Sabotear a tu oponente para que no te oponga tanta resistencia y tomar una victoria fácil"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesGruul.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesGruul[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function boros(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "Decides mover todo lo que hay en una habitación a otra en tu casa.\n ¿Cómo piensas hacerlo?";
        const opcionesBoros = [
            "Con una carretilla, por supuesto. Con ella podrás mover todo en menos viajes",
            "Con tus propias manos. Podrá requerir mas viajes, pero así te aseguras de que tus cosas estan a salvo de romperse en el viaje"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesBoros.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesBoros[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function selesnya(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "Hay un clima horrendo afuera, cae un rayo cerca de tu casa y se va la luz.\n ¿Qué haces?";
        const opcionesSelesnya = [
            "Quedarte en tu casa, envuelto en tus sábanas y disfrutando de algo caliente",
            "Invitar amigos a que vengan a pasar la tormenta juntos, siempre que llovió paró"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesSelesnya.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesSelesnya[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function simic(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "Tu viejo y querido auto ya ha tenido sus batallas, es hora de hacer algo al respecto.\n ¿Qué haces con él?";
        const opcionesSimic = [
            "Arreglarlo e instalarle mejoras, este auto te resulta cómodo y significa mucho para tí",
            "Venderlo y comprar un modelo mas nuevo y mejor, ya era hora de actualizarse"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesSimic.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesSimic[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function izzet(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "¡Finalmente llegó la Navidad!\n ¿Qué prefieres que te regalen?";
        const opcionesIzzet = [
            "Muchos regalos pequeños. ¡Cada uno es una sorpresa!",
            "Un gran regalo. ¡Qué emoción! ¿Qué será?"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesIzzet.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesIzzet[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function golgari(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "¡Oh no! ¡Tu taza favorita se ha roto!\n ¿Qué haces?";
        const opcionesGolgari = [
            "Repararla, esa taza es muy especial para tí",
            "Deshacerte de ella, de todas formas ya tienes muchas tazas"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesGolgari.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesGolgari[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

function dimir(contenedorOpciones, textoPrincipal) {
    return new Promise((resolve) => {
        textoPrincipal.innerText = "Alguien que te cae mal acaba de comprar el ultimo par de zapatillas de un modelo que planeabas comprar.\n ¿Qué haces?";
        const opcionesDimir = [
            "Activar la alarma de incendios y aprovechar la confusión para quitárselas de las manos",
            "Saludarlo y usar tu don con la palabra para convencerlo de que no le quedan bien y que deberia devolverlas"
        ];
        contenedorOpciones.innerHTML = '';
        for (let i = 0; i < opcionesDimir.length; i++) {
            const botonOpcion = document.createElement('button');
            botonOpcion.innerText = opcionesDimir[i];
            botonOpcion.classList.add("btn");
            botonOpcion.addEventListener("click", function () {
                resolve(i + 1);
            });
            contenedorOpciones.appendChild(botonOpcion);
        }
        mediaQuery();
    });
}

/* PROCESADO de datos de la primer pregunta de todo el test */

function procesarDificultad(respuestaDificultad) {

    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    switch (respuestaDificultad) {
        case 1:
            textoPrincipal.innerText = "Has elegido PRINCIPIANTE.\n En esta dificultad te esperan los mazos monocolor.\n Como su nombre lo dice, utilizan solo un color, por lo que no tendrás que preocuparte de que tus recursos no sean los adecuados para lo que quieras jugar.";
            const botonContinuar = document.createElement('button');
            botonContinuar.innerText = "Continuar";
            botonContinuar.id = "botonContinuar";
            botonContinuar.classList.add("btn");
            botonContinuar.addEventListener("click", async function () {
                let respuestaPrincipiante = await principiante(contenedorOpciones, textoPrincipal);
                procesarPrincipiante(respuestaPrincipiante);
            });
            contenedorOpciones.appendChild(botonContinuar);
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "Has elegido INTERMEDIO.\n Según lo que respondas a continuación, se te mostrarán diversas estrategias que utilicen 2 colores.\n En ellas tendrás que conseguir recursos para poder utilizar ambos colores a tu disposición, según veas necesario.";
            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                let respuestaIntermedia = await intermedia(contenedorOpciones, textoPrincipal);
                procesarIntermedia(respuestaIntermedia);
            });
            contenedorOpciones.appendChild(botonContinuar2);
            mediaQuery();
            break;
        case 3:
            textoPrincipal.innerText = "La opción que elegiste aún no está disponible. Elige otra por favor."
            const botonContinuar3 = document.createElement('button');
            botonContinuar3.innerText = "Continuar";
            botonContinuar3.id = "botonContinuar3";
            botonContinuar3.classList.add("btn");
            botonContinuar3.addEventListener("click", async function () {
                let respuestaDificultad = await dificultad(contenedorOpciones, textoPrincipal);
                procesarDificultad(respuestaDificultad);
            });
            contenedorOpciones.appendChild(botonContinuar3);
            mediaQuery();
            break;
        case 4:
            textoPrincipal.innerText = "La opción que elegiste aún no está disponible. Elige otra por favor."
            const botonContinuar4 = document.createElement('button');
            botonContinuar4.innerText = "Continuar";
            botonContinuar4.id = "botonContinuar4";
            botonContinuar4.classList.add("btn");
            botonContinuar4.addEventListener("click", async function () {
                let respuestaDificultad = await dificultad(contenedorOpciones, textoPrincipal);
                procesarDificultad(respuestaDificultad);
            });
            contenedorOpciones.appendChild(botonContinuar4);
            mediaQuery();
            break;
        case 5:
            textoPrincipal.innerText = "La opción que elegiste aún no está disponible. Elige otra por favor."
            const botonContinuar5 = document.createElement('button');
            botonContinuar5.innerText = "Continuar";
            botonContinuar5.id = "botonContinuar5";
            botonContinuar5.classList.add("btn");
            botonContinuar5.addEventListener("click", async function () {
                let respuestaDificultad = await dificultad(contenedorOpciones, textoPrincipal);
                procesarDificultad(respuestaDificultad);
            });
            contenedorOpciones.appendChild(botonContinuar5);
            mediaQuery();
            break;
        default:
            alert("No se lo que hiciste, pero apretaste un boton que no existe y mereces ver esta alert fea..")
            break;
    }
}

/* En este objeto se compilara la informacion recogida de las preguntas para la dificultad principiante. */

const colores = {
    rojo: 0,
    azul: 0,
    blanco: 0,
    negro: 0,
    verde: 0
};

/* En esta sección estan las funciones que PROCESAN los datos ingresados por el usuario en dificultad PRINCIPIANTE. */

async function procesarPrincipiante(respuestaPrincipiante) {
    let respuestaPrincipiante2;
    switch (respuestaPrincipiante) {
        case 1:
            colores.negro++;
            respuestaPrincipiante2 = await principiante2(contenedorOpciones, textoPrincipal);
            procesarPrincipiante2(respuestaPrincipiante2);
            break;
        case 2:
            colores.rojo++;
            respuestaPrincipiante2 = await principiante2(contenedorOpciones, textoPrincipal);
            procesarPrincipiante2(respuestaPrincipiante2);
            break;
        case 3:
            colores.blanco++;
            respuestaPrincipiante2 = await principiante2(contenedorOpciones, textoPrincipal);
            procesarPrincipiante2(respuestaPrincipiante2);
            break;
        case 4:
            colores.verde++;
            respuestaPrincipiante2 = await principiante2(contenedorOpciones, textoPrincipal);
            procesarPrincipiante2(respuestaPrincipiante2);
            break;
        case 5:
            colores.azul++;
            respuestaPrincipiante2 = await principiante2(contenedorOpciones, textoPrincipal);
            procesarPrincipiante2(respuestaPrincipiante2);
            break;
        default:
            alert("No se lo que hiciste, pero apretaste un botón que no existe y mereces ver esta alert fea.");
            break;
    }
}

async function procesarPrincipiante2(respuestaPrincipiante2) {
    let respuestaPrincipiante3;
    switch (respuestaPrincipiante2) {
        case 1:
            colores.azul++;
            respuestaPrincipiante3 = await principiante3(contenedorOpciones, textoPrincipal);
            procesarPrincipiante3(respuestaPrincipiante3);
            break;
        case 2:
            colores.verde++;
            respuestaPrincipiante3 = await principiante3(contenedorOpciones, textoPrincipal);
            procesarPrincipiante3(respuestaPrincipiante3);
            break;
        case 3:
            colores.blanco++;
            respuestaPrincipiante3 = await principiante3(contenedorOpciones, textoPrincipal);
            procesarPrincipiante3(respuestaPrincipiante3);
            break;
        case 4:
            colores.negro++;
            respuestaPrincipiante3 = await principiante3(contenedorOpciones, textoPrincipal);
            procesarPrincipiante3(respuestaPrincipiante3);
            break;
        case 5:
            colores.rojo++;
            respuestaPrincipiante3 = await principiante3(contenedorOpciones, textoPrincipal);
            procesarPrincipiante3(respuestaPrincipiante3);
            break;
        default:
            alert("No se lo que hiciste, pero apretaste un boton que no existe y mereces ver esta alert fea..");
    }
}

async function procesarPrincipiante3(respuestaPrincipiante3) {
    switch (respuestaPrincipiante3) {
        case 1:
            colores.negro++;
            respuestaPrincipiante4 = await principiante4(contenedorOpciones, textoPrincipal);
            procesarPrincipiante4(respuestaPrincipiante4);
            break;
        case 2:
            colores.rojo++;
            respuestaPrincipiante4 = await principiante4(contenedorOpciones, textoPrincipal);
            procesarPrincipiante4(respuestaPrincipiante4);
            break;
        case 3:
            colores.verde++;
            respuestaPrincipiante4 = await principiante4(contenedorOpciones, textoPrincipal);
            procesarPrincipiante4(respuestaPrincipiante3);
            break;
        case 4:
            colores.azul++;
            respuestaPrincipiante4 = await principiante4(contenedorOpciones, textoPrincipal);
            procesarPrincipiante4(respuestaPrincipiante4);
            break;
        case 5:
            colores.blanco++;
            respuestaPrincipiante4 = await principiante4(contenedorOpciones, textoPrincipal);
            procesarPrincipiante4(respuestaPrincipiante4);
            break;
        default:
            alert("No se lo que hiciste, pero apretaste un boton que no existe y mereces ver esta alert fea..")
    }
}

async function procesarPrincipiante4(respuestaPrincipiante4) {
    switch (respuestaPrincipiante4) {
        case 1:
            colores.rojo++;
            respuestaPrincipiante5 = await principiante5(contenedorOpciones, textoPrincipal);
            procesarPrincipiante5(respuestaPrincipiante5);
            break;
        case 2:
            colores.verde++;
            respuestaPrincipiante5 = await principiante5(contenedorOpciones, textoPrincipal);
            procesarPrincipiante5(respuestaPrincipiante5);
            break;
        case 3:
            colores.azul++;
            respuestaPrincipiante5 = await principiante5(contenedorOpciones, textoPrincipal);
            procesarPrincipiante5(respuestaPrincipiante5);
            break;
        case 4:
            colores.blanco++;
            respuestaPrincipiante5 = await principiante5(contenedorOpciones, textoPrincipal);
            procesarPrincipiante5(respuestaPrincipiante5);
            break;
        case 5:
            colores.negro++;
            respuestaPrincipiante5 = await principiante5(contenedorOpciones, textoPrincipal);
            procesarPrincipiante5(respuestaPrincipiante5);
            break;
        default:
            alert("No se lo que hiciste, pero apretaste un boton que no existe y mereces ver esta alert fea..")
    }
}

async function procesarPrincipiante5(respuestaPrincipiante5) {
    switch (respuestaPrincipiante5) {
        case 1:
            colores.azul++;
            respuestaPrincipiante6 = await principiante6(contenedorOpciones, textoPrincipal);
            procesarPrincipiante6(respuestaPrincipiante6);
            break;
        case 2:
            colores.blanco++;
            respuestaPrincipiante6 = await principiante6(contenedorOpciones, textoPrincipal);
            procesarPrincipiante6(respuestaPrincipiante6);
            break;
        case 3:
            colores.negro++;
            respuestaPrincipiante6 = await principiante6(contenedorOpciones, textoPrincipal);
            procesarPrincipiante6(respuestaPrincipiante6);
            break;
        case 4:
            colores.verde++;
            respuestaPrincipiante6 = await principiante6(contenedorOpciones, textoPrincipal);
            procesarPrincipiante6(respuestaPrincipiante6);
            break;
        case 5:
            colores.rojo++;
            respuestaPrincipiante6 = await principiante6(contenedorOpciones, textoPrincipal);
            procesarPrincipiante6(respuestaPrincipiante6);
            break;
        default:
            alert("No se lo que hiciste, pero apretaste un boton que no existe y mereces ver esta alert fea..")
    }
}

async function procesarPrincipiante6(respuestaPrincipiante6) {
    switch (respuestaPrincipiante6) {
        case 1:
            colores.blanco++;
            respuestaPrincipiante7 = await principiante7(contenedorOpciones, textoPrincipal);
            procesarPrincipiante7(respuestaPrincipiante7);
            break;
        case 2:
            colores.verde++;
            respuestaPrincipiante7 = await principiante7(contenedorOpciones, textoPrincipal);
            procesarPrincipiante7(respuestaPrincipiante7);
            break;
        case 3:
            colores.rojo++;
            respuestaPrincipiante7 = await principiante7(contenedorOpciones, textoPrincipal);
            procesarPrincipiante7(respuestaPrincipiante7);
            break;
        case 4:
            colores.azul++;
            respuestaPrincipiante7 = await principiante7(contenedorOpciones, textoPrincipal);
            procesarPrincipiante7(respuestaPrincipiante7);
            break;
        case 5:
            colores.negro++;
            respuestaPrincipiante7 = await principiante7(contenedorOpciones, textoPrincipal);
            procesarPrincipiante7(respuestaPrincipiante7);
            break;
        default:
            alert("No se lo que hiciste, pero apretaste un boton que no existe y mereces ver esta alert fea..")
    }
}

async function procesarPrincipiante7(respuestaPrincipiante7) {
    switch (respuestaPrincipiante7) {
        case 1:
            colores.verde++;
            break;
        case 2:
            colores.negro++;
            break;
        case 3:
            colores.azul++;
            break;
        case 4:
            colores.rojo++;
            break;
        case 5:
            colores.blanco++;
            break;
        default:
            alert("No se lo que hiciste, pero apretaste un boton que no existe y mereces ver esta alert fea..")
    }

    const sumaDeTodo = (colores.verde + colores.negro + colores.azul + colores.blanco + colores.rojo);

    function calcularPorcentajes(color) {
        return color * 100 / sumaDeTodo
    }
    let porcentajeVerde = Math.round(calcularPorcentajes(colores.verde));
    let porcentajeNegro = Math.round(calcularPorcentajes(colores.negro));
    let porcentajeAzul = Math.round(calcularPorcentajes(colores.azul));
    let porcentajeRojo = Math.round(calcularPorcentajes(colores.rojo));
    let porcentajeBlanco = Math.round(calcularPorcentajes(colores.blanco));
    contenedorOpciones.innerHTML = '';
    textoPrincipal.innerText = "Según tus  respuestas, ésta es tu afinidad aproximada para cada color en Magic the Gathering:\n\n Blanco: " + "%" + porcentajeBlanco + "\n Negro: " + "%" + porcentajeNegro + "\n Azul: " + "%" + porcentajeAzul + "\n Verde: " + "%" + porcentajeVerde + "\n Rojo: " + "%" + porcentajeRojo;
    const botonGenial = document.createElement('button');
    botonGenial.innerText = "Genial!";
    botonGenial.id = "botonGenial";
    botonGenial.classList.add("btn");
    botonGenial.addEventListener("click", function () {
        document.body.innerHTML = "";
        location.reload();
    });
    contenedorOpciones.appendChild(botonGenial);
}

/* En esta sección estan las funciones que PROCESAN los datos ingresados por el usuario en dificultad INTERMEDIA. */

/* PROCESADO de datos de la primer pregunta INTERMEDIA */

async function procesarIntermedia(respuestaIntermedia) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    let respuestaControl;
    let respuestaAgro;
    let respuestaSwarm;
    let respuestaCombo;
    let respuestaGy;
    switch (respuestaIntermedia) {
        case 1:
            textoPrincipal.innerText = "Elegiste música clásica.\n Espalda recta, menton arriba. Te gusta lo elegante y refinado.\n Tal vez disfrutes tirando los hilos con estrategias más lentas de control, y que todos sepan quién manda.";
            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                respuestaControl = await control(contenedorOpciones, textoPrincipal);
                procesarControl(respuestaControl);
            });
            contenedorOpciones.appendChild(botonContinuar1);
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "Elegiste rock pesado.\n En el caos del pogo tú estás en tu salsa... Violencia, sadismo y anarquía!\n Las estrategias ofensivas centradas en matar a todos antes que te maten son lo tuyo seguro.";
            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                respuestaAgro = await agro(contenedorOpciones, textoPrincipal);
                procesarAgro(respuestaAgro);
            });
            contenedorOpciones.appendChild(botonContinuar2);
            mediaQuery();
            break;
        case 3:

            textoPrincipal.innerText = "Elegiste coros polifónicos.\n Te gusta lo que pueden lograr muchos individuos al colaborar.\n Te recomiendo estrategias que involucren crear un ejército de criaturas pequeñas, que juntas sean imparables.";
            const botonContinuar3 = document.createElement('button');
            botonContinuar3.innerText = "Continuar";
            botonContinuar3.id = "botonContinuar3";
            botonContinuar3.classList.add("btn");
            botonContinuar3.addEventListener("click", async function () {
                respuestaSwarm = await swarm(contenedorOpciones, textoPrincipal);
                procesarSwarm(respuestaSwarm);
            });
            contenedorOpciones.appendChild(botonContinuar3);
            mediaQuery();
            break;
        case 4:
            contenedorOpciones.innerHTML = '';
            textoPrincipal.innerText = "Elegiste música fusión.\n Te gusta que la música construya sobre sus propios patrones para hacer algo nuevo y creativo.\n Podrías usar estrategias de combos, utiliza distintos efectos juntos para crear un resultado deslumbrante.";
            const botonContinuar4 = document.createElement('button');
            botonContinuar4.innerText = "Continuar";
            botonContinuar4.id = "botonContinuar4";
            botonContinuar4.classList.add("btn");
            botonContinuar4.addEventListener("click", async function () {
                respuestaCombo = await combo(contenedorOpciones, textoPrincipal);
                procesarCombo(respuestaCombo);
            });
            contenedorOpciones.appendChild(botonContinuar4);
            mediaQuery();
            break;
        case 5:

            textoPrincipal.innerText = "Elegiste emocore.\n Eres perfil bajo y te gusta desahogarte con música que exprese tus sentimientos negativos. La basura de hoy es el tesoro de mañana.\n Estrategias que usen los recursos de los cementerios podrían interesarte.";
            const botonContinuar5 = document.createElement('button');
            botonContinuar5.innerText = "Continuar";
            botonContinuar5.id = "botonContinuar5";
            botonContinuar5.classList.add("btn");
            botonContinuar5.addEventListener("click", async function () {
                respuestaGy = await gy(contenedorOpciones, textoPrincipal);
                procesarGy(respuestaGy);
            });
            contenedorOpciones.appendChild(botonContinuar5);
            mediaQuery();
            break;
        default:
            alert("No se lo que hiciste, pero apretaste un boton que no existe y mereces ver esta alert fea..")
            return intermedia();
    }
}

/* PROCESADO de datos de la segunda pregunta INTERMEDIA */

function procesarControl(respuestaControl) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    switch (respuestaControl) {
        case 1:
            cambiarFondo("./resources/Guilds/Azorius.jpg");
            textoPrincipal.innerText = "Si quieren parpadear, más vale que te pidan permiso\n El senado Azorius te recibe, nosotros ponemos las reglas (Pero primero llena una forma y haz que te la sellen).\n Tus colores son Azul y Blanco.";
            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                respuestaAzorius = await azorius(contenedorOpciones, textoPrincipal);
                procesarAzorius(respuestaAzorius);
            });
            contenedorOpciones.appendChild(botonContinuar1);
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "Te encanta extorsionar a los otros, todo tiene su costo y tú viniste a cobrar.\n Bienvenido al Sindicato Orzhov, si no pueden pagarte en vida, tal vez puedan pagarte después de muertos.\n Tus colores son Negro y Blanco.";
            cambiarFondo("./resources/Guilds/Orzhov.jpg");
            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                respuestaOrzhov = await orzhov(contenedorOpciones, textoPrincipal);
                procesarOrzhov(respuestaOrzhov);
            });
            contenedorOpciones.appendChild(botonContinuar2);
            mediaQuery();
            break;
        default:
            return control();
    }
}

function procesarAgro(respuestaAgro) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    switch (respuestaAgro) {
        case 1:
            textoPrincipal.innerText = "Veo que disfrutas el dolor ajeno, qué sadico.\n El Culto de Rakdos te invita al Carnarium. ¡Va a haber un espectáculo impresionante de sangre y tortura!\n Tus colores son Rojo y Negro";
            cambiarFondo("./resources/Guilds/Rakdos.jpg");
            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                respuestaRakdos = await rakdos(contenedorOpciones, textoPrincipal);
                procesarRakdos(respuestaRakdos);
            });
            contenedorOpciones.appendChild(botonContinuar1);
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "¡Cuanta violencia! ¡Golpea primero y pregunta mientras golpees!\n Monta tu jabalí, toma cualquier objeto contundente y vamos a romper algunos vidrios con los Clanes Gruul!\n Tus colores son Rojo y Verde";
            cambiarFondo("./resources/Guilds/Gruul.jpg");
            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                respuestaGruul = await gruul(contenedorOpciones, textoPrincipal);
                procesarGruul(respuestaGruul);
            });
            contenedorOpciones.appendChild(botonContinuar2);
            mediaQuery();
            break;
        default:
            return agro();
    }
}

function procesarSwarm(respuestaSwarm) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    switch (respuestaSwarm) {
        case 1:
            textoPrincipal.innerText = "¡En fila! ¡Atentos! ¡Saluden! ¡Marchen! ¡A la carga!\n Tus tropas esperan tus órdenes. Bienvenido a la Legión Boros. ¡Unidos y por la victoria!\n Tus colores son Rojo y Blanco";
            cambiarFondo("./resources/Guilds/Boros.jpg");
            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                respuestaBoros = await boros(contenedorOpciones, textoPrincipal);
                procesarBoros(respuestaBoros);
            });
            contenedorOpciones.appendChild(botonContinuar1);
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "Comunión y harmonía, prepara tu defensa impenetrable junto a un montón de elfos, druidas y centauros.\n El Conclave Selesnya te recibe de brazos abiertos, uno para todos y todos para uno.\n Tus colores son Blanco y Verde";
            cambiarFondo("./resources/Guilds/Selesnya.jpg");
            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                respuestaSelesnya = await selesnya(contenedorOpciones, textoPrincipal);
                procesarSelesnya(respuestaSelesnya);
            });
            contenedorOpciones.appendChild(botonContinuar2);
            mediaQuery();
            break;
        default:
            return swarm();
    }
}

function procesarCombo(respuestaCombo) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    switch (respuestaCombo) {
        case 1:
            textoPrincipal.innerText = "Crecimiento exponencial y tener acceso a muchos recursos...\n Si lo tuyo es la evolución y el crecimiento, el Combinado Simic es tu lugar y los biomantes tus colegas (Los tentáculos se venden por separado)\n Tus colores son Azul y Verde";
            cambiarFondo("./resources/Guilds/Simic.jpg");
            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                respuestaSimic = await simic(contenedorOpciones, textoPrincipal);
                procesarSimic(respuestaSimic);
            });
            contenedorOpciones.appendChild(botonContinuar1);
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "Eres todo un artista, desde el principio estás orquestando todo para llegar al tan esperado gran final. Tu arte es fugaz y explosivo.\n Fuiste aceptado en la Liga Izzet, deja que tu imaginación vuele y construyamos juntos el futuro.\n Tus colores son Rojo y Azul";
            cambiarFondo("./resources/Guilds/Izzet.jpg");
            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                respuestaIzzet = await izzet(contenedorOpciones, textoPrincipal);
                procesarIzzet(respuestaIzzet);
            });
            contenedorOpciones.appendChild(botonContinuar2);
            mediaQuery();
            break;
        default:
            return combo();
    }
}

function procesarGy(respuestaGy) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    switch (respuestaGy) {
        case 1:
            textoPrincipal.innerText = "Te gusta darle más de un uso a las cosas y el reciclaje, si todavía sirve para algo, tú le sacas provecho.\n Perfectamente podrías formar parte del Enjambre Golgari, la muerte es solo el comienzo.\n Tus colores son Negro y Verde";
            cambiarFondo("./resources/Guilds/Golgari.jpg");
            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                respuestaGolgari = await golgari(contenedorOpciones, textoPrincipal);
                procesarGolgari(respuestaGolgari);
            });
            contenedorOpciones.appendChild(botonContinuar1);
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "Si pudieras tener un superpoder, seguro te gustaría ser invisible para poder ir a donde te plazca y robar lo que quieras sin ser detectado.\n En la Casa Dimir aprenderás a robar hasta el secreto más oscuro incluso de la mente más fuerte, e irte de ahí sin dejar rastro.\n Tus colores son Negro y Azul";
            cambiarFondo("./resources/Guilds/Dimir.jpg");
            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                respuestaDimir = await dimir(contenedorOpciones, textoPrincipal);
                procesarDimir(respuestaDimir);
            });
            contenedorOpciones.appendChild(botonContinuar2);
            mediaQuery();
            break;
        default:
            return gy();
    }
}

/* PROCESADO de datos de la tercera pregunta INTERMEDIA */

function procesarAzorius(respuestaAzorius) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    const contenedorCartitas = document.createElement("div");
    contenedorCartitas.id = "contenedorCartitas";
    contenedorCartitas.style.height = "100%";
    contenedorCartitas.style.width = "100%";
    contenedorCartitas.style.display = "flex";
    contenedorCartitas.style.justifyContent = "center";
    contenedorCartitas.style.alignItems = "center";
    contenedorCartitas.style.flexDirection = "row";
    contenedorCartitas.style.flexWrap = "wrap";
    contenedorCartitas.style.gap = "20px";
    contenedorCartitas.style.minHeight = "350px";
    contenedorCartitas.style.overflowY = "scroll";
    contenedorCartitas.style.marginTop = "20px";
    contenedor.insertBefore(contenedorCartitas, contenedorOpciones);
    switch (respuestaAzorius) {
        case 1:
            textoPrincipal.innerText = "Eso estuvo cerca.\n Con esos reflejos tal vez disfrutes los mazos construidos en base a que tus criaturas evadan los hechizos enemigos saliendo del campo y volviendo a entrar inmediatamente (Muchas de ellas tienen efectos al volver a entrar al campo!).\n\n Haz click en las siguientes cartas para más información:";
            let resultado1 = "Azorius Blink";
            const azoriusBlink1 = document.createElement("img");
            azoriusBlink1.src = "./resources/AzoriusBlink/1.jpg";
            azoriusBlink1.className = "cartitas";
            const ephara = document.createElement("a");
            ephara.href = "https://edhrec.com/commanders/ephara-god-of-the-polis";
            ephara.target = "_blank";
            contenedorCartitas.appendChild(ephara);
            ephara.appendChild(azoriusBlink1);

            const azoriusBlink2 = document.createElement("img");
            azoriusBlink2.src = "./resources/AzoriusBlink/2.jpg";
            azoriusBlink2.className = "cartitas";
            const yorion = document.createElement("a");
            yorion.href = "https://edhrec.com/commanders/yorion-sky-nomad";
            yorion.target = "_blank";
            contenedorCartitas.appendChild(yorion);
            yorion.appendChild(azoriusBlink2);

            const azoriusBlink3 = document.createElement("img");
            azoriusBlink3.src = "./resources/AzoriusBlink/3.jpg";
            azoriusBlink3.className = "cartitas";
            const brago = document.createElement("a");
            brago.href = "https://edhrec.com/commanders/brago-king-eternal";
            brago.target = "_blank";
            contenedorCartitas.appendChild(brago);
            brago.appendChild(azoriusBlink3);

            const azoriusBlink4 = document.createElement("img");
            azoriusBlink4.src = "./resources/AzoriusBlink/4.jpg";
            azoriusBlink4.className = "cartitas";
            const abuelo = document.createElement("a");
            abuelo.href = "https://edhrec.com/commanders/abuelo-ancestral-echo";
            abuelo.target = "_blank";
            contenedorCartitas.appendChild(abuelo);
            abuelo.appendChild(azoriusBlink4);

            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar1);
            if (!arrayDeResultados.includes(resultado1)) {
                arrayDeResultados.push(resultado1)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "Apretas muy fuerte. Si tu atacante quiere moverse tendrá que suplicar tu piedad.\n Los mazos que hacen esto suelen tener muchos 'encantamientos' (Cartas con un efecto continuo en la mesa) que impiden que los rivales puedan hacer lo que se les plazca gratuitamente.\n\n Haz click en las siguientes cartas para más información:";
            let resultado2 = "Azorius Stax";
            const azoriusStax1 = document.createElement("img");
            azoriusStax1.src = "./resources/AzoriusStax/1.jpg";
            azoriusStax1.className = "cartitas";
            const augustin = document.createElement("a");
            augustin.href = "https://edhrec.com/commanders/grand-arbiter-augustin-iv";
            augustin.target = "_blank";
            contenedorCartitas.appendChild(augustin);
            augustin.appendChild(azoriusStax1);

            const azoriusStax2 = document.createElement("img");
            azoriusStax2.src = "./resources/AzoriusStax/2.jpg";
            azoriusStax2.className = "cartitas";
            const lavinia = document.createElement("a");
            lavinia.href = "https://edhrec.com/commanders/lavinia-of-the-tenth";
            lavinia.target = "_blank";
            contenedorCartitas.appendChild(lavinia);
            lavinia.appendChild(azoriusStax2);

            const azoriusStax3 = document.createElement("img");
            azoriusStax3.src = "./resources/AzoriusStax/3.jpg";
            azoriusStax3.className = "cartitas";
            const dennick1 = document.createElement("a");
            dennick1.href = "https://edhrec.com/commanders/dennick-pious-apprentice";
            dennick1.target = "_blank";
            contenedorCartitas.appendChild(dennick1);
            dennick1.appendChild(azoriusStax3);

            const azoriusStax4 = document.createElement("img");
            azoriusStax4.src = "./resources/AzoriusStax/4.jpg";
            azoriusStax4.className = "cartitas";
            const dennick2 = document.createElement("a");
            dennick2.href = "https://edhrec.com/commanders/dennick-pious-apprentice";
            dennick2.target = "_blank";
            contenedorCartitas.appendChild(dennick2);
            dennick2.appendChild(azoriusStax4);

            const azoriusStax5 = document.createElement("img");
            azoriusStax5.src = "./resources/AzoriusStax/5.jpg";
            azoriusStax5.className = "cartitas";
            const hylda = document.createElement("a");
            hylda.href = "https://edhrec.com/commanders/hylda-of-the-icy-crown";
            hylda.target = "_blank";
            contenedorCartitas.appendChild(hylda);
            hylda.appendChild(azoriusStax5);

            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar2);
            if (!arrayDeResultados.includes(resultado2)) {
                arrayDeResultados.push(resultado2)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        default:
            return azorius();
    }
}

function procesarOrzhov(respuestaOrzhov) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    const contenedorCartitas = document.createElement("div");
    contenedorCartitas.id = "contenedorCartitas";
    contenedorCartitas.style.height = "100%";
    contenedorCartitas.style.width = "100%";
    contenedorCartitas.style.display = "flex";
    contenedorCartitas.style.justifyContent = "center";
    contenedorCartitas.style.alignItems = "center";
    contenedorCartitas.style.flexDirection = "row";
    contenedorCartitas.style.flexWrap = "wrap";
    contenedorCartitas.style.gap = "20px";
    contenedorCartitas.style.minHeight = "350px";
    contenedorCartitas.style.overflowY = "scroll";
    contenedorCartitas.style.marginTop = "20px";
    contenedor.insertBefore(contenedorCartitas, contenedorOpciones);
    switch (respuestaOrzhov) {
        case 1:
            textoPrincipal.innerText = "Los que no la tienen la desean y los que la tienen no la valoran.\n Los mazos centrados en ganar mucha vida son para tí. Cuando ganes vida tendras una variedad de efectos de todo tipo que te ayudaran a ganar!\n Haz click en las siguientes cartas para más información:";
            let resultado1 = "Orzhov Lifegain";
            const orzhovLifegain1 = document.createElement("img");
            orzhovLifegain1.src = "./resources/OrzhovLifegain/1.jpg";
            orzhovLifegain1.className = "cartitas";
            const kambal1 = document.createElement("a");
            kambal1.href = "https://edhrec.com/commanders/kambal-consul-of-allocation";
            kambal1.target = "_blank";
            contenedorCartitas.appendChild(kambal1);
            kambal1.appendChild(orzhovLifegain1);

            const orzhovLifegain2 = document.createElement("img");
            orzhovLifegain2.src = "./resources/OrzhovLifegain/2.jpg";
            orzhovLifegain2.className = "cartitas";
            const amalia = document.createElement("a");
            amalia.href = "https://edhrec.com/commanders/amalia-benavides-aguirre";
            amalia.target = "_blank";
            contenedorCartitas.appendChild(amalia);
            amalia.appendChild(orzhovLifegain2);

            const orzhovLifegain3 = document.createElement("img");
            orzhovLifegain3.src = "./resources/OrzhovLifegain/3.jpg";
            orzhovLifegain3.className = "cartitas";
            const kambal2 = document.createElement("a");
            kambal2.href = "https://edhrec.com/commanders/kambal-profiteering-mayor";
            kambal2.target = "_blank";
            contenedorCartitas.appendChild(kambal2);
            kambal2.appendChild(orzhovLifegain3);

            const orzhovLifegain4 = document.createElement("img");
            orzhovLifegain4.src = "./resources/OrzhovLifegain/4.jpg";
            orzhovLifegain4.className = "cartitas";
            const karlov = document.createElement("a");
            karlov.href = "https://edhrec.com/commanders/karlov-of-the-ghost-council";
            karlov.target = "_blank";
            contenedorCartitas.appendChild(karlov);
            karlov.appendChild(orzhovLifegain4);

            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar1);
            if (!arrayDeResultados.includes(resultado1)) {
                arrayDeResultados.push(resultado1)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "Veo que la gente es un recurso importante para tí.\n Los mazos 'aristócratas' se benefician en tener efectos cada vez que algo muera. Por suerte, tu puedes facilitar eso sacrificando criaturas que no te importe tanto perder, eso si que es jugarsela por el equipo...\n Haz click en las siguientes cartas para más información:";
            let resultado2 = "Orzhov Aristocrat";
            const orzhovAristocrat1 = document.createElement("img");
            orzhovAristocrat1.src = "./resources/OrzhovAristocrat/1.jpg";
            orzhovAristocrat1.className = "cartitas";
            const teysa = document.createElement("a");
            teysa.href = "https://edhrec.com/commanders/teysa-karlov";
            teysa.target = "_blank";
            contenedorCartitas.appendChild(teysa);
            teysa.appendChild(orzhovAristocrat1);

            const orzhovAristocrat2 = document.createElement("img");
            orzhovAristocrat2.src = "./resources/OrzhovAristocrat/2.jpg";
            orzhovAristocrat2.className = "cartitas";
            const elas = document.createElement("a");
            elas.href = "https://edhrec.com/commanders/elas-il-kor-sadistic-pilgrim";
            elas.target = "_blank";
            contenedorCartitas.appendChild(elas);
            elas.appendChild(orzhovAristocrat2);

            const orzhovAristocrat3 = document.createElement("img");
            orzhovAristocrat3.src = "./resources/OrzhovAristocrat/3.jpg";
            orzhovAristocrat3.className = "cartitas";
            const athreos = document.createElement("a");
            athreos.href = "https://edhrec.com/commanders/athreos-god-of-passage";
            athreos.target = "_blank";
            contenedorCartitas.appendChild(athreos);
            athreos.appendChild(orzhovAristocrat3);

            const orzhovAristocrat4 = document.createElement("img");
            orzhovAristocrat4.src = "./resources/OrzhovAristocrat/4.jpg";
            orzhovAristocrat4.className = "cartitas";
            const elenda = document.createElement("a");
            elenda.href = "https://edhrec.com/commanders/elenda-the-dusk-rose";
            elenda.target = "_blank";
            contenedorCartitas.appendChild(elenda);
            elenda.appendChild(orzhovAristocrat4);

            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar2);
            if (!arrayDeResultados.includes(resultado2)) {
                arrayDeResultados.push(resultado2)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        default:
            return orzhov();
    }
}

function procesarRakdos(respuestaRakdos) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    const contenedorCartitas = document.createElement("div");
    contenedorCartitas.id = "contenedorCartitas";
    contenedorCartitas.style.height = "100%";
    contenedorCartitas.style.width = "100%";
    contenedorCartitas.style.display = "flex";
    contenedorCartitas.style.justifyContent = "center";
    contenedorCartitas.style.alignItems = "center";
    contenedorCartitas.style.flexDirection = "row";
    contenedorCartitas.style.flexWrap = "wrap";
    contenedorCartitas.style.gap = "20px";
    contenedorCartitas.style.minHeight = "350px";
    contenedorCartitas.style.overflowY = "scroll";
    contenedorCartitas.style.marginTop = "20px";
    contenedor.insertBefore(contenedorCartitas, contenedorOpciones);
    switch (respuestaRakdos) {
        case 1:
            textoPrincipal.innerText = "El fin justifica los medios. Los mazos 'aristócratas' se benefician en tener efectos cada vez que algo muera. Por suerte, tu puedes facilitar eso sacrificando criaturas que no te importe tanto perder, eso si que es jugarsela por el equipo...\n Haz click en las siguientes cartas para más información:";
            let resultado1 = "Rakdos Aristocrat";
            const rakdosAristocrat1 = document.createElement("img");
            rakdosAristocrat1.src = "./resources/RakdosAristocrat/1.jpg";
            rakdosAristocrat1.className = "cartitas";
            const raphael = document.createElement("a");
            raphael.href = "https://edhrec.com/commanders/raphael-fiendish-savior";
            raphael.target = "_blank";
            contenedorCartitas.appendChild(raphael);
            raphael.appendChild(rakdosAristocrat1);

            const rakdosAristocrat2 = document.createElement("img");
            rakdosAristocrat2.src = "./resources/RakdosAristocrat/2.jpg";
            rakdosAristocrat2.className = "cartitas";
            const judith = document.createElement("a");
            judith.href = "https://edhrec.com/commanders/judith-the-scourge-diva";
            judith.target = "_blank";
            contenedorCartitas.appendChild(judith);
            judith.appendChild(rakdosAristocrat2);

            const rakdosAristocrat3 = document.createElement("img");
            rakdosAristocrat3.src = "./resources/RakdosAristocrat/3.jpg";
            rakdosAristocrat3.className = "cartitas";
            const garna = document.createElement("a");
            garna.href = "https://edhrec.com/commanders/garna-bloodfist-of-keld";
            garna.target = "_blank";
            contenedorCartitas.appendChild(garna);
            garna.appendChild(rakdosAristocrat3);

            const rakdosAristocrat4 = document.createElement("img");
            rakdosAristocrat4.src = "./resources/RakdosAristocrat/4.jpg";
            rakdosAristocrat4.className = "cartitas";
            const totentanz = document.createElement("a");
            totentanz.href = "https://edhrec.com/commanders/totentanz-swarm-piper";
            totentanz.target = "_blank";
            contenedorCartitas.appendChild(totentanz);
            totentanz.appendChild(rakdosAristocrat4);

            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar1);
            if (!arrayDeResultados.includes(resultado1)) {
                arrayDeResultados.push(resultado1)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "A veces hay que soltar, y lo sabes bien. De eso se tratan las estrategias de descarte. Existen muchas cartas que al ser descartadas o al estar en el cementerio tienen efectos, utilízalas junto a otros efectos que se paguen descartando y así sacarles el máximo provecho.\n Haz click en las siguientes cartas para más información:";
            let resultado2 = "Rakdos Discard";
            const rakdosDiscard1 = document.createElement("img");
            rakdosDiscard1.src = "./resources/RakdosDiscard/1.jpg";
            rakdosDiscard1.className = "cartitas";
            const zoyowa = document.createElement("a");
            zoyowa.href = "https://edhrec.com/commanders/zoyowa-lava-tongue";
            zoyowa.target = "_blank";
            contenedorCartitas.appendChild(zoyowa);
            zoyowa.appendChild(rakdosDiscard1);

            const rakdosDiscard2 = document.createElement("img");
            rakdosDiscard2.src = "./resources/RakdosDiscard/2.jpg";
            rakdosDiscard2.className = "cartitas";
            const asmoranomardicadaistinaculdacar = document.createElement("a");
            asmoranomardicadaistinaculdacar.href = "https://edhrec.com/commanders/asmoranomardicadaistinaculdacar";
            asmoranomardicadaistinaculdacar.target = "_blank";
            contenedorCartitas.appendChild(asmoranomardicadaistinaculdacar);
            asmoranomardicadaistinaculdacar.appendChild(rakdosDiscard2);

            const rakdosDiscard3 = document.createElement("img");
            rakdosDiscard3.src = "./resources/RakdosDiscard/3.jpg";
            rakdosDiscard3.className = "cartitas";
            const chainer = document.createElement("a");
            chainer.href = "https://edhrec.com/commanders/chainer-nightmare-adept";
            chainer.target = "_blank";
            contenedorCartitas.appendChild(chainer);
            chainer.appendChild(rakdosDiscard3);

            const rakdosDiscard4 = document.createElement("img");
            rakdosDiscard4.src = "./resources/RakdosDiscard/4.jpg";
            rakdosDiscard4.className = "cartitas";
            const kroxa = document.createElement("a");
            kroxa.href = "https://edhrec.com/commanders/kroxa-titan-of-deaths-hunger";
            kroxa.target = "_blank";
            contenedorCartitas.appendChild(kroxa);
            kroxa.appendChild(rakdosDiscard4);

            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar2);
            if (!arrayDeResultados.includes(resultado2)) {
                arrayDeResultados.push(resultado2)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        default:
            return rakdos();
    }
}

function procesarGruul(respuestaGruul) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    const contenedorCartitas = document.createElement("div");
    contenedorCartitas.id = "contenedorCartitas";
    contenedorCartitas.style.height = "100%";
    contenedorCartitas.style.width = "100%";
    contenedorCartitas.style.display = "flex";
    contenedorCartitas.style.justifyContent = "center";
    contenedorCartitas.style.alignItems = "center";
    contenedorCartitas.style.flexDirection = "row";
    contenedorCartitas.style.flexWrap = "wrap";
    contenedorCartitas.style.gap = "20px";
    contenedorCartitas.style.minHeight = "350px";
    contenedorCartitas.style.overflowY = "scroll";
    contenedorCartitas.style.marginTop = "20px";
    contenedor.insertBefore(contenedorCartitas, contenedorOpciones);
    switch (respuestaGruul) {
        case 1:
            textoPrincipal.innerText = "Si algo no funciona, dale con un palo hasta que funcione o se rompa del todo. A tí te van a encantar los mazos que generan recursos rápido y los usan para traer criaturas enormes para llevarte por delante a quien se interponga en tu camino.\n Haz click en las siguientes cartas para más información:";
            let resultado1 = "Gruul Big Mana";
            const gruulBigMana1 = document.createElement("img");
            gruulBigMana1.src = "./resources/GruulBigMana/1.jpg";
            gruulBigMana1.className = "cartitas";
            const raggadragga = document.createElement("a");
            raggadragga.href = "https://edhrec.com/commanders/raggadragga-goreguts-boss";
            raggadragga.target = "_blank";
            contenedorCartitas.appendChild(raggadragga);
            raggadragga.appendChild(gruulBigMana1);

            const gruulBigMana2 = document.createElement("img");
            gruulBigMana2.src = "./resources/GruulBigMana/2.jpg";
            gruulBigMana2.className = "cartitas";
            const meria = document.createElement("a");
            meria.href = "https://edhrec.com/commanders/meria-scholar-of-antiquity";
            meria.target = "_blank";
            contenedorCartitas.appendChild(meria);
            meria.appendChild(gruulBigMana2);

            const gruulBigMana3 = document.createElement("img");
            gruulBigMana3.src = "./resources/GruulBigMana/3.jpg";
            gruulBigMana3.className = "cartitas";
            const radha = document.createElement("a");
            radha.href = "https://edhrec.com/commanders/grand-warlord-radha";
            radha.target = "_blank";
            contenedorCartitas.appendChild(radha);
            radha.appendChild(gruulBigMana3);

            const gruulBigMana4 = document.createElement("img");
            gruulBigMana4.src = "./resources/GruulBigMana/4.jpg";
            gruulBigMana4.className = "cartitas";
            const klothys = document.createElement("a");
            klothys.href = "https://edhrec.com/commanders/klothys-god-of-destiny";
            klothys.target = "_blank";
            contenedorCartitas.appendChild(klothys);
            klothys.appendChild(gruulBigMana4);

            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar1);
            if (!arrayDeResultados.includes(resultado1)) {
                arrayDeResultados.push(resultado1)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "¿Para qué molestarse en entrenar si esta la opción de limitar los movimientos enemigos? Dispon de efectos que castigan o prohíben todo lo que no sean efectos de criaturas y abusa de criaturas con buenos efectos. ¡Ni siquiera vas a necesitar usar otra cosa!\n Haz click en las siguientes cartas para más información:";
            let resultado2 = "Gruul Creatures Matter";
            const gruulCreaturesMatter1 = document.createElement("img");
            gruulCreaturesMatter1.src = "./resources/GruulCreaturesMatter/1.jpg";
            gruulCreaturesMatter1.className = "cartitas";
            const ruricThar = document.createElement("a");
            ruricThar.href = "https://edhrec.com/commanders/ruric-thar-the-unbowed";
            ruricThar.target = "_blank";
            contenedorCartitas.appendChild(ruricThar);
            ruricThar.appendChild(gruulCreaturesMatter1);

            const gruulCreaturesMatter2 = document.createElement("img");
            gruulCreaturesMatter2.src = "./resources/GruulCreaturesMatter/2.jpg";
            gruulCreaturesMatter2.className = "cartitas";
            const tovolar1 = document.createElement("a");
            tovolar1.href = "https://edhrec.com/commanders/tovolar-dire-overlord";
            tovolar1.target = "_blank";
            contenedorCartitas.appendChild(tovolar1);
            tovolar1.appendChild(gruulCreaturesMatter2);

            const gruulCreaturesMatter3 = document.createElement("img");
            gruulCreaturesMatter3.src = "./resources/GruulCreaturesMatter/3.jpg";
            gruulCreaturesMatter3.className = "cartitas";
            const tovolar2 = document.createElement("a");
            tovolar2.href = "https://edhrec.com/commanders/tovolar-dire-overlord";
            tovolar2.target = "_blank";
            contenedorCartitas.appendChild(tovolar2);
            tovolar2.appendChild(gruulCreaturesMatter3);

            const gruulCreaturesMatter4 = document.createElement("img");
            gruulCreaturesMatter4.src = "./resources/GruulCreaturesMatter/4.jpg";
            gruulCreaturesMatter4.className = "cartitas";
            const nikya = document.createElement("a");
            nikya.href = "https://edhrec.com/commanders/nikya-of-the-old-ways";
            nikya.target = "_blank";
            contenedorCartitas.appendChild(nikya);
            nikya.appendChild(gruulCreaturesMatter4);

            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar2);
            if (!arrayDeResultados.includes(resultado2)) {
                arrayDeResultados.push(resultado2)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        default:
            return gruul();
    }
}

function procesarBoros(respuestaBoros) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    const contenedorCartitas = document.createElement("div");
    contenedorCartitas.id = "contenedorCartitas";
    contenedorCartitas.style.height = "100%";
    contenedorCartitas.style.width = "100%";
    contenedorCartitas.style.display = "flex";
    contenedorCartitas.style.justifyContent = "center";
    contenedorCartitas.style.alignItems = "center";
    contenedorCartitas.style.flexDirection = "row";
    contenedorCartitas.style.flexWrap = "wrap";
    contenedorCartitas.style.gap = "20px";
    contenedorCartitas.style.minHeight = "350px";
    contenedorCartitas.style.overflowY = "scroll";
    contenedorCartitas.style.marginTop = "20px";
    contenedor.insertBefore(contenedorCartitas, contenedorOpciones);
    switch (respuestaBoros) {
        case 1:
            textoPrincipal.innerText = "Tú si que sabes darle uso a tus herramientas. Con ellas hacer lo que sea es mas fácil. Para alguien así, un mazo de equipamientos viene como anillo al dedo. Equipa tus criaturas con un arsenal de artefactos y mándalas a combatir bien preparadas.\n Haz click en las siguientes cartas para más información:";
            let resultado1 = "Boros Equipment";
            const borosEquipment1 = document.createElement("img");
            borosEquipment1.src = "./resources/BorosEquipment/1.jpg";
            borosEquipment1.className = "cartitas";
            const bruenor = document.createElement("a");
            bruenor.href = "https://edhrec.com/commanders/bruenor-battlehammer";
            bruenor.target = "_blank";
            contenedorCartitas.appendChild(bruenor);
            bruenor.appendChild(borosEquipment1);

            const borosEquipment2 = document.createElement("img");
            borosEquipment2.src = "./resources/BorosEquipment/2.jpg";
            borosEquipment2.className = "cartitas";
            const ardenn = document.createElement("a");
            ardenn.href = "https://edhrec.com/partners/ardenn-intrepid-archaeologist";
            ardenn.target = "_blank";
            contenedorCartitas.appendChild(ardenn);
            ardenn.appendChild(borosEquipment2);

            const borosEquipment3 = document.createElement("img");
            borosEquipment3.src = "./resources/BorosEquipment/3.jpg";
            borosEquipment3.className = "cartitas";
            const rograkh = document.createElement("a");
            rograkh.href = "https://edhrec.com/partners/rograkh-son-of-rohgahh";
            rograkh.target = "_blank";
            contenedorCartitas.appendChild(rograkh);
            rograkh.appendChild(borosEquipment3);

            const borosEquipment4 = document.createElement("img");
            borosEquipment4.src = "./resources/BorosEquipment/4.jpg";
            borosEquipment4.className = "cartitas";
            const koll = document.createElement("a");
            koll.href = "https://edhrec.com/commanders/koll-the-forgemaster";
            koll.target = "_blank";
            contenedorCartitas.appendChild(koll);
            koll.appendChild(borosEquipment4);

            const borosEquipment5 = document.createElement("img");
            borosEquipment5.src = "./resources/BorosEquipment/5.jpg";
            borosEquipment5.className = "cartitas";
            const nahiri = document.createElement("a");
            nahiri.href = "https://edhrec.com/commanders/nahiri-forged-in-fury";
            nahiri.target = "_blank";
            contenedorCartitas.appendChild(nahiri);
            nahiri.appendChild(borosEquipment5);

            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar1);
            if (!arrayDeResultados.includes(resultado1)) {
                arrayDeResultados.push(resultado1)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "Más vale mania que fuerza. Tal vez disfrutes estrategias con efectos para tener muchos combates en un solo turno. ¡Incluso puedes usar efectos que se activan en cada uno de tus combates!\n Haz click en las siguientes cartas para más información:";
            let resultado2 = "Boros Combat";
            const borosCombat1 = document.createElement("img");
            borosCombat1.src = "./resources/BorosCombat/1.jpg";
            borosCombat1.className = "cartitas";
            const aurelia = document.createElement("a");
            aurelia.href = "https://edhrec.com/commanders/aurelia-the-warleader";
            aurelia.target = "_blank";
            contenedorCartitas.appendChild(aurelia);
            aurelia.appendChild(borosCombat1);

            const borosCombat2 = document.createElement("img");
            borosCombat2.src = "./resources/BorosCombat/2.jpg";
            borosCombat2.className = "cartitas";
            const flamingFist = document.createElement("a");
            flamingFist.href = "https://edhrec.com/backgrounds/flaming-fist";
            flamingFist.target = "_blank";
            contenedorCartitas.appendChild(flamingFist);
            flamingFist.appendChild(borosCombat2);

            const borosCombat3 = document.createElement("img");
            borosCombat3.src = "./resources/BorosCombat/3.jpg";
            borosCombat3.className = "cartitas";
            const karlach = document.createElement("a");
            karlach.href = "https://edhrec.com/backgrounds/karlach-fury-of-avernus";
            karlach.target = "_blank";
            contenedorCartitas.appendChild(karlach);
            karlach.appendChild(borosCombat3);

            const borosCombat4 = document.createElement("img");
            borosCombat4.src = "./resources/BorosCombat/4.jpg";
            borosCombat4.className = "cartitas";
            const otharri = document.createElement("a");
            otharri.href = "https://edhrec.com/commanders/otharri-suns-glory";
            otharri.target = "_blank";
            contenedorCartitas.appendChild(otharri);
            otharri.appendChild(borosCombat4);

            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar2);
            if (!arrayDeResultados.includes(resultado2)) {
                arrayDeResultados.push(resultado2)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        default:
            return boros();
    }
}

function procesarSelesnya(respuestaSelesnya) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    const contenedorCartitas = document.createElement("div");
    contenedorCartitas.id = "contenedorCartitas";
    contenedorCartitas.style.height = "100%";
    contenedorCartitas.style.width = "100%";
    contenedorCartitas.style.display = "flex";
    contenedorCartitas.style.justifyContent = "center";
    contenedorCartitas.style.alignItems = "center";
    contenedorCartitas.style.flexDirection = "row";
    contenedorCartitas.style.flexWrap = "wrap";
    contenedorCartitas.style.gap = "20px";
    contenedorCartitas.style.minHeight = "350px";
    contenedorCartitas.style.overflowY = "scroll";
    contenedorCartitas.style.marginTop = "20px";
    contenedor.insertBefore(contenedorCartitas, contenedorOpciones);
    switch (respuestaSelesnya) {
        case 1:
            textoPrincipal.innerText = "Disfrutas la comodidad de una buena cobija y algo caliente, tal vez te eches una siesta y todo. Podría sugerirte mazos que se enfoquen en ganar vida, así mantenerte cómodo mientras los demás intentan sin resultado hacer algo al respecto.\n Haz click en las siguientes cartas para más información:";
            let resultado1 = "Selesnya Lifegain";
            const selesnyaLifegain1 = document.createElement("img");
            selesnyaLifegain1.src = "./resources/SelesnyaLifegain/1.jpg";
            selesnyaLifegain1.className = "cartitas";
            const trelasarra = document.createElement("a");
            trelasarra.href = "https://edhrec.com/commanders/trelasarra-moon-dancer";
            trelasarra.target = "_blank";
            contenedorCartitas.appendChild(trelasarra);
            trelasarra.appendChild(selesnyaLifegain1);

            const selesnyaLifegain2 = document.createElement("img");
            selesnyaLifegain2.src = "./resources/SelesnyaLifegain/2.jpg";
            selesnyaLifegain2.className = "cartitas";
            const trostani = document.createElement("a");
            trostani.href = "https://edhrec.com/commanders/trostani-selesnyas-voice";
            trostani.target = "_blank";
            contenedorCartitas.appendChild(trostani);
            trostani.appendChild(selesnyaLifegain2);

            const selesnyaLifegain3 = document.createElement("img");
            selesnyaLifegain3.src = "./resources/SelesnyaLifegain/3.jpg";
            selesnyaLifegain3.className = "cartitas";
            const lathiel = document.createElement("a");
            lathiel.href = "https://edhrec.com/commanders/lathiel-the-bounteous-dawn";
            lathiel.target = "_blank";
            contenedorCartitas.appendChild(lathiel);
            lathiel.appendChild(selesnyaLifegain3);

            const selesnyaLifegain4 = document.createElement("img");
            selesnyaLifegain4.src = "./resources/SelesnyaLifegain/4.jpg";
            selesnyaLifegain4.className = "cartitas";
            const treebeard = document.createElement("a");
            treebeard.href = "https://edhrec.com/commanders/treebeard-gracious-host";
            treebeard.target = "_blank";
            contenedorCartitas.appendChild(treebeard);
            treebeard.appendChild(selesnyaLifegain4);

            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar1);
            if (!arrayDeResultados.includes(resultado1)) {
                arrayDeResultados.push(resultado1)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "Se nota que aprecias la compañia en momentos difíciles. ¡La unión hace la fuerza! Con esa mentalidad, te interesarán los mazos que puedan crear muchas criaturas pequeñas rápido. Solas no son nada, pero juntas te darán la victoria.\n Haz click en las siguientes cartas para más información:";
            let resultado2 = "Selesnya Swarm";
            const selesnyaSwarm1 = document.createElement("img");
            selesnyaSwarm1.src = "./resources/SelesnyaSwarm/1.jpg";
            selesnyaSwarm1.className = "cartitas";
            const rhys = document.createElement("a");
            rhys.href = "https://edhrec.com/commanders/rhys-the-redeemed";
            rhys.target = "_blank";
            contenedorCartitas.appendChild(rhys);
            rhys.appendChild(selesnyaSwarm1);

            const selesnyaSwarm2 = document.createElement("img");
            selesnyaSwarm2.src = "./resources/SelesnyaSwarm/2.jpg";
            selesnyaSwarm2.className = "cartitas";
            const cadira = document.createElement("a");
            cadira.href = "https://edhrec.com/commanders/cadira-caller-of-the-small";
            cadira.target = "_blank";
            contenedorCartitas.appendChild(cadira);
            cadira.appendChild(selesnyaSwarm2);

            const selesnyaSwarm3 = document.createElement("img");
            selesnyaSwarm3.src = "./resources/SelesnyaSwarm/3.jpg";
            selesnyaSwarm3.className = "cartitas";
            const allenal = document.createElement("a");
            allenal.href = "https://edhrec.com/commanders/queen-allenal-of-ruadach";
            allenal.target = "_blank";
            contenedorCartitas.appendChild(allenal);
            allenal.appendChild(selesnyaSwarm3);

            const selesnyaSwarm4 = document.createElement("img");
            selesnyaSwarm4.src = "./resources/SelesnyaSwarm/4.jpg";
            selesnyaSwarm4.className = "cartitas";
            const ghaltaMavren = document.createElement("a");
            ghaltaMavren.href = "https://edhrec.com/commanders/ghalta-and-mavren";
            ghaltaMavren.target = "_blank";
            contenedorCartitas.appendChild(ghaltaMavren);
            ghaltaMavren.appendChild(selesnyaSwarm4);

            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar2);
            if (!arrayDeResultados.includes(resultado2)) {
                arrayDeResultados.push(resultado2)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        default:
            return selesnya();
    }
}

function procesarSimic(respuestaSimic) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    const contenedorCartitas = document.createElement("div");
    contenedorCartitas.id = "contenedorCartitas";
    contenedorCartitas.style.height = "100%";
    contenedorCartitas.style.width = "100%";
    contenedorCartitas.style.display = "flex";
    contenedorCartitas.style.justifyContent = "center";
    contenedorCartitas.style.alignItems = "center";
    contenedorCartitas.style.flexDirection = "row";
    contenedorCartitas.style.flexWrap = "wrap";
    contenedorCartitas.style.gap = "20px";
    contenedorCartitas.style.minHeight = "350px";
    contenedorCartitas.style.overflowY = "scroll";
    contenedorCartitas.style.marginTop = "20px";
    contenedor.insertBefore(contenedorCartitas, contenedorOpciones);
    switch (respuestaSimic) {
        case 1:
            textoPrincipal.innerText = "Con lo que cuidas tus cosas, te durarán muchos años. Prueba estrategias que involucren hacer mas fuertes las criaturas que ya tienes, que mejorando acumulativamente sus características. ¡Serán útiles tanto para atacar como para defender!\n Haz click en las siguientes cartas para más información:";
            let resultado1 = "Simic Counters";
            const simicCounter1 = document.createElement("img");
            simicCounter1.src = "./resources/SimicCounters/1.jpg";
            simicCounter1.className = "cartitas";
            const ezuri = document.createElement("a");
            ezuri.href = "https://edhrec.com/commanders/ezuri-claw-of-progress";
            ezuri.target = "_blank";
            contenedorCartitas.appendChild(ezuri);
            ezuri.appendChild(simicCounter1);

            const simicCounter2 = document.createElement("img");
            simicCounter2.src = "./resources/SimicCounters/2.jpg";
            simicCounter2.className = "cartitas";
            const pir = document.createElement("a");
            pir.href = "https://edhrec.com/commanders/pir-imaginative-rascal-toothy-imaginary-friend";
            pir.target = "_blank";
            contenedorCartitas.appendChild(pir);
            pir.appendChild(simicCounter2);

            const simicCounter3 = document.createElement("img");
            simicCounter3.src = "./resources/SimicCounters/3.jpg";
            simicCounter3.className = "cartitas";
            const toothy = document.createElement("a");
            toothy.href = "https://edhrec.com/commanders/pir-imaginative-rascal-toothy-imaginary-friend";
            toothy.target = "_blank";
            contenedorCartitas.appendChild(toothy);
            toothy.appendChild(simicCounter3);

            const simicCounter4 = document.createElement("img");
            simicCounter4.src = "./resources/SimicCounters/4.jpg";
            simicCounter4.className = "cartitas";
            const lonis = document.createElement("a");
            lonis.href = "https://edhrec.com/commanders/lonis-genetics-expert";
            lonis.target = "_blank";
            contenedorCartitas.appendChild(lonis);
            lonis.appendChild(simicCounter4);

            const simicCounter5 = document.createElement("img");
            simicCounter5.src = "./resources/SimicCounters/5.jpg";
            simicCounter5.className = "cartitas";
            const hakbal = document.createElement("a");
            hakbal.href = "https://edhrec.com/commanders/hakbal-of-the-surging-soul";
            hakbal.target = "_blank";
            contenedorCartitas.appendChild(hakbal);
            hakbal.appendChild(simicCounter5);

            const simicCounter6 = document.createElement("img");
            simicCounter6.src = "./resources/SimicCounters/6.jpg";
            simicCounter6.className = "cartitas";
            const vorel = document.createElement("a");
            vorel.href = "https://edhrec.com/commanders/vorel-of-the-hull-clade";
            vorel.target = "_blank";
            contenedorCartitas.appendChild(vorel);
            vorel.appendChild(simicCounter6);

            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar1);
            if (!arrayDeResultados.includes(resultado1)) {
                arrayDeResultados.push(resultado1)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "Fuera lo viejo. ¡Venga lo nuevo! Los mazos 'pod' son aquellos que toman una criatura que tengas y por medio de efectos, la cambian por algo de mayor valor. ¡Mira cómo tus criaturas evolucionan!\n Haz click en las siguientes cartas para más información:";
            let resultado2 = "Simic Pod";
            const simicPod1 = document.createElement("img");
            simicPod1.src = "./resources/SimicPod/1.jpg";
            simicPod1.className = "cartitas";
            const kinnan = document.createElement("a");
            kinnan.href = "https://edhrec.com/commanders/kinnan-bonder-prodigy";
            kinnan.target = "_blank";
            contenedorCartitas.appendChild(kinnan);
            kinnan.appendChild(simicPod1);

            const simicPod2 = document.createElement("img");
            simicPod2.src = "./resources/SimicPod/2.jpg";
            simicPod2.className = "cartitas";
            const lonis2 = document.createElement("a");
            lonis2.href = "https://edhrec.com/commanders/lonis-cryptozoologist";
            lonis2.target = "_blank";
            contenedorCartitas.appendChild(lonis2);
            lonis2.appendChild(simicPod2);

            const simicPod3 = document.createElement("img");
            simicPod3.src = "./resources/SimicPod/3.jpg";
            simicPod3.className = "cartitas";
            const vannifar = document.createElement("a");
            vannifar.href = "https://edhrec.com/commanders/prime-speaker-vannifar";
            vannifar.target = "_blank";
            contenedorCartitas.appendChild(vannifar);
            vannifar.appendChild(simicPod3);

            const simicPod4 = document.createElement("img");
            simicPod4.src = "./resources/SimicPod/4.jpg";
            simicPod4.className = "cartitas";
            const grolnok = document.createElement("a");
            grolnok.href = "https://edhrec.com/commanders/grolnok-the-omnivore";
            grolnok.target = "_blank";
            contenedorCartitas.appendChild(grolnok);
            grolnok.appendChild(simicPod4);

            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar2);
            if (!arrayDeResultados.includes(resultado2)) {
                arrayDeResultados.push(resultado2)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        default:
            return simic();
    }
}

function procesarIzzet(respuestaIzzet) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    const contenedorCartitas = document.createElement("div");
    contenedorCartitas.id = "contenedorCartitas";
    contenedorCartitas.style.height = "100%";
    contenedorCartitas.style.width = "100%";
    contenedorCartitas.style.display = "flex";
    contenedorCartitas.style.justifyContent = "center";
    contenedorCartitas.style.alignItems = "center";
    contenedorCartitas.style.flexDirection = "row";
    contenedorCartitas.style.flexWrap = "wrap";
    contenedorCartitas.style.gap = "20px";
    contenedorCartitas.style.minHeight = "350px";
    contenedorCartitas.style.overflowY = "scroll";
    contenedorCartitas.style.marginTop = "20px";
    contenedor.insertBefore(contenedorCartitas, contenedorOpciones);
    switch (respuestaIzzet) {
        case 1:
            textoPrincipal.innerText = "¿Listo/a para sorprender a tus rivales con todo lo que tengas a mano? Los mazos 'spellslinger' se centran en tener muchos hechizos baratos y efectos que se activan cada que usas un hechizo.\n Haz click en las siguientes cartas para más información:";
            let resultado1 = "Izzet Spellslinger";
            const izzetSpellslinger1 = document.createElement("img");
            izzetSpellslinger1.src = "./resources/IzzetSpellslinger/1.jpg";
            izzetSpellslinger1.className = "cartitas";
            const bria = document.createElement("a");
            bria.href = "https://edhrec.com/commanders/bria-riptide-rogue";
            bria.target = "_blank";
            contenedorCartitas.appendChild(bria);
            bria.appendChild(izzetSpellslinger1);

            const izzetSpellslinger2 = document.createElement("img");
            izzetSpellslinger2.src = "./resources/IzzetSpellslinger/2.jpg";
            izzetSpellslinger2.className = "cartitas";
            const stellaLee = document.createElement("a");
            stellaLee.href = "https://edhrec.com/commanders/stella-lee-wild-card";
            stellaLee.target = "_blank";
            contenedorCartitas.appendChild(stellaLee);
            stellaLee.appendChild(izzetSpellslinger2);

            const izzetSpellslinger3 = document.createElement("img");
            izzetSpellslinger3.src = "./resources/IzzetSpellslinger/3.jpg";
            izzetSpellslinger3.className = "cartitas";
            const nivMizzet = document.createElement("a");
            nivMizzet.href = "https://edhrec.com/commanders/niv-mizzet-parun";
            nivMizzet.target = "_blank";
            contenedorCartitas.appendChild(nivMizzet);
            nivMizzet.appendChild(izzetSpellslinger3);

            const izzetSpellslinger4 = document.createElement("img");
            izzetSpellslinger4.src = "./resources/IzzetSpellslinger/4.jpg";
            izzetSpellslinger4.className = "cartitas";
            const veyran = document.createElement("a");
            veyran.href = "https://edhrec.com/commanders/veyran-voice-of-duality";
            veyran.target = "_blank";
            contenedorCartitas.appendChild(veyran);
            veyran.appendChild(izzetSpellslinger4);

            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar1);
            if (!arrayDeResultados.includes(resultado1)) {
                arrayDeResultados.push(resultado1)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "Mejor una sorpresa memorable a un monton de cositas insignificantes. Dale un gran susto a tus oponentes al jugar hechizos caros y poderosos, copiándolos varias veces por el mismo precio. ¡Pague 1 lleve 2!\n Haz click en las siguientes cartas para más información:";
            let resultado2 = "Izzet Copy X Spells";
            const izzetCopy1 = document.createElement("img");
            izzetCopy1.src = "./resources/IzzetCopy/1.jpg";
            izzetCopy1.className = "cartitas";
            const magnus = document.createElement("a");
            magnus.href = "https://edhrec.com/commanders/magnus-the-red";
            magnus.target = "_blank";
            contenedorCartitas.appendChild(magnus);
            magnus.appendChild(izzetCopy1);

            const izzetCopy2 = document.createElement("img");
            izzetCopy2.src = "./resources/IzzetCopy/2.jpg";
            izzetCopy2.className = "cartitas";
            const zaffai = document.createElement("a");
            zaffai.href = "https://edhrec.com/commanders/zaffai-thunder-conductor";
            zaffai.target = "_blank";
            contenedorCartitas.appendChild(zaffai);
            zaffai.appendChild(izzetCopy2);

            const izzetCopy3 = document.createElement("img");
            izzetCopy3.src = "./resources/IzzetCopy/3.jpg";
            izzetCopy3.className = "cartitas";
            const melek = document.createElement("a");
            melek.href = "https://edhrec.com/commanders/melek-izzet-paragon";
            melek.target = "_blank";
            contenedorCartitas.appendChild(melek);
            melek.appendChild(izzetCopy3);

            const izzetCopy4 = document.createElement("img");
            izzetCopy4.src = "./resources/IzzetCopy/4.jpg";
            izzetCopy4.className = "cartitas";
            const mizzix = document.createElement("a");
            mizzix.href = "https://edhrec.com/commanders/mizzix-of-the-izmagnus";
            mizzix.target = "_blank";
            contenedorCartitas.appendChild(mizzix);
            mizzix.appendChild(izzetCopy4);

            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar2);
            if (!arrayDeResultados.includes(resultado2)) {
                arrayDeResultados.push(resultado2)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        default:
            return izzet();
    }
}

function procesarGolgari(respuestaGolgari) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    const contenedorCartitas = document.createElement("div");
    contenedorCartitas.id = "contenedorCartitas";
    contenedorCartitas.style.height = "100%";
    contenedorCartitas.style.width = "100%";
    contenedorCartitas.style.display = "flex";
    contenedorCartitas.style.justifyContent = "center";
    contenedorCartitas.style.alignItems = "center";
    contenedorCartitas.style.flexDirection = "row";
    contenedorCartitas.style.flexWrap = "wrap";
    contenedorCartitas.style.gap = "20px";
    contenedorCartitas.style.minHeight = "350px";
    contenedorCartitas.style.overflowY = "scroll";
    contenedorCartitas.style.marginTop = "20px";
    contenedor.insertBefore(contenedorCartitas, contenedorOpciones);
    switch (respuestaGolgari) {
        case 1:
            textoPrincipal.innerText = "Todavía puede servir para su proposito original, solo necesita un poco de cariño. Considera darle uso a mazos que graviten al rededor de devolver cosas del cementerio. Si aun no terminaste de usarlas, puedes traerlas de vuelta de la tumba.\n Haz click en las siguientes cartas para más información:";
            let resultado1 = "Golgari GY";
            const golgariGY1 = document.createElement("img");
            golgariGY1.src = "./resources/GolgariGY/1.jpg";
            golgariGY1.className = "cartitas";
            const meren = document.createElement("a");
            meren.href = "https://edhrec.com/commanders/meren-of-clan-nel-toth";
            meren.target = "_blank";
            contenedorCartitas.appendChild(meren);
            meren.appendChild(golgariGY1);

            const golgariGY2 = document.createElement("img");
            golgariGY2.src = "./resources/GolgariGY/2.jpg";
            golgariGY2.className = "cartitas";
            const mycotyrant = document.createElement("a");
            mycotyrant.href = "https://edhrec.com/commanders/the-mycotyrant";
            mycotyrant.target = "_blank";
            contenedorCartitas.appendChild(mycotyrant);
            mycotyrant.appendChild(golgariGY2);

            const golgariGY3 = document.createElement("img");
            golgariGY3.src = "./resources/GolgariGY/3.jpg";
            golgariGY3.className = "cartitas";
            const oldStickfingers = document.createElement("a");
            oldStickfingers.href = "https://edhrec.com/commanders/old-stickfingers";
            oldStickfingers.target = "_blank";
            contenedorCartitas.appendChild(oldStickfingers);
            oldStickfingers.appendChild(golgariGY3);

            const golgariGY4 = document.createElement("img");
            golgariGY4.src = "./resources/GolgariGY/4.jpg";
            golgariGY4.className = "cartitas";
            const gitrog = document.createElement("a");
            gitrog.href = "https://edhrec.com/commanders/the-gitrog-monster";
            gitrog.target = "_blank";
            contenedorCartitas.appendChild(gitrog);
            gitrog.appendChild(golgariGY4);

            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar1);
            if (!arrayDeResultados.includes(resultado1)) {
                arrayDeResultados.push(resultado1)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "Tiras a la basura los pedazos rotos de tu taza, ya no te sirve. Prueba usando un mazo de sacrificios, podrás deshechar cosas que ya no uses como pago por efectos increíbles, puedes revivirlo y volverlo a sacrificar cuanto quieras.\n Haz click en las siguientes cartas para más información:";
            let resultado2 = "Golgari Sacrifice";
            const golgariSacrifice1 = document.createElement("img");
            golgariSacrifice1.src = "./resources/GolgariSacrifice/1.jpg";
            golgariSacrifice1.className = "cartitas";
            const jarad = document.createElement("a");
            jarad.href = "https://edhrec.com/commanders/jarad-golgari-lich-lord";
            jarad.target = "_blank";
            contenedorCartitas.appendChild(jarad);
            jarad.appendChild(golgariSacrifice1);

            const golgariSacrifice2 = document.createElement("img");
            golgariSacrifice2.src = "./resources/GolgariSacrifice/2.jpg";
            golgariSacrifice2.className = "cartitas";
            const chatterfang = document.createElement("a");
            chatterfang.href = "https://edhrec.com/commanders/chatterfang-squirrel-general";
            chatterfang.target = "_blank";
            contenedorCartitas.appendChild(chatterfang);
            chatterfang.appendChild(golgariSacrifice2);

            const golgariSacrifice3 = document.createElement("img");
            golgariSacrifice3.src = "./resources/GolgariSacrifice/3.jpg";
            golgariSacrifice3.className = "cartitas";
            const savra = document.createElement("a");
            savra.href = "https://edhrec.com/commanders/savra-queen-of-the-golgari";
            savra.target = "_blank";
            contenedorCartitas.appendChild(savra);
            savra.appendChild(golgariSacrifice3);

            const golgariSacrifice4 = document.createElement("img");
            golgariSacrifice4.src = "./resources/GolgariSacrifice/4.jpg";
            golgariSacrifice4.className = "cartitas";
            const greta = document.createElement("a");
            greta.href = "https://edhrec.com/commanders/greta-sweettooth-scourge";
            greta.target = "_blank";
            contenedorCartitas.appendChild(greta);
            greta.appendChild(golgariSacrifice4);

            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar2);
            if (!arrayDeResultados.includes(resultado2)) {
                arrayDeResultados.push(resultado2)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        default:
            return golgari();
    }
}

function procesarDimir(respuestaDimir) {
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    contenedorOpciones.innerHTML = '';
    const contenedorCartitas = document.createElement("div");
    contenedorCartitas.id = "contenedorCartitas";
    contenedorCartitas.style.height = "100%";
    contenedorCartitas.style.width = "100%";
    contenedorCartitas.style.display = "flex";
    contenedorCartitas.style.justifyContent = "center";
    contenedorCartitas.style.alignItems = "center";
    contenedorCartitas.style.flexDirection = "row";
    contenedorCartitas.style.flexWrap = "wrap";
    contenedorCartitas.style.gap = "20px";
    contenedorCartitas.style.minHeight = "350px";
    contenedorCartitas.style.overflowY = "scroll";
    contenedorCartitas.style.marginTop = "20px";
    contenedor.insertBefore(contenedorCartitas, contenedorOpciones);
    switch (respuestaDimir) {
        case 1:
            textoPrincipal.innerText = "Tenemos un/a cleptómano/a justo aquí. ¿Tuyo?... NUESTRO. Podrás usar efectos que te permiten tomar control de las cartas de los demás para usarlas en su contra.\n Haz click en las siguientes cartas para más información:";
            let resultado1 = "Dimir Thief";
            const dimirThief1 = document.createElement("img");
            dimirThief1.src = "./resources/DimirThief/1.jpg";
            dimirThief1.className = "cartitas";
            const silumgar = document.createElement("a");
            silumgar.href = "https://edhrec.com/commanders/dragonlord-silumgar";
            silumgar.target = "_blank";
            contenedorCartitas.appendChild(silumgar);
            silumgar.appendChild(dimirThief1);

            const dimirThief2 = document.createElement("img");
            dimirThief2.src = "./resources/DimirThief/2.jpg";
            dimirThief2.className = "cartitas";
            const xanathar = document.createElement("a");
            xanathar.href = "https://edhrec.com/commanders/xanathar-guild-kingpin";
            xanathar.target = "_blank";
            contenedorCartitas.appendChild(xanathar);
            xanathar.appendChild(dimirThief2);

            const dimirThief3 = document.createElement("img");
            dimirThief3.src = "./resources/DimirThief/3.jpg";
            dimirThief3.className = "cartitas";
            const jonIrenicus = document.createElement("a");
            jonIrenicus.href = "https://edhrec.com/commanders/jon-irenicus-shattered-one";
            jonIrenicus.target = "_blank";
            contenedorCartitas.appendChild(jonIrenicus);
            jonIrenicus.appendChild(dimirThief3);

            const dimirThief4 = document.createElement("img");
            dimirThief4.src = "./resources/DimirThief/4.jpg";
            dimirThief4.className = "cartitas";
            const tasha = document.createElement("a");
            tasha.href = "https://edhrec.com/commanders/tasha-the-witch-queen";
            tasha.target = "_blank";
            contenedorCartitas.appendChild(tasha);
            tasha.appendChild(dimirThief4);

            const botonContinuar1 = document.createElement('button');
            botonContinuar1.innerText = "Continuar";
            botonContinuar1.id = "botonContinuar1";
            botonContinuar1.classList.add("btn");
            botonContinuar1.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar1);
            if (!arrayDeResultados.includes(resultado1)) {
                arrayDeResultados.push(resultado1)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        case 2:
            textoPrincipal.innerText = "¿Te gusta quitarle las opciones a tus rivales?. Puedo sugerirte probar estrategias 'Mill' (Vacía el mazo del oponente carta por carta). ¡Si alguien intenta robar una carta y ya no le quedan, automáticamente pierde!\nHaz click en las siguientes cartas para más información:";
            let resultado2 = "Dimir Mill";
            const dimirMill1 = document.createElement("img");
            dimirMill1.src = "./resources/DimirMill/1.jpg";
            dimirMill1.className = "cartitas";
            const phenax = document.createElement("a");
            phenax.href = "https://edhrec.com/commanders/phenax-god-of-deception";
            phenax.target = "_blank";
            contenedorCartitas.appendChild(phenax);
            phenax.appendChild(dimirMill1);

            const dimirMill2 = document.createElement("img");
            dimirMill2.src = "./resources/DimirMill/2.jpg";
            dimirMill2.className = "cartitas";
            const ngathrod = document.createElement("a");
            ngathrod.href = "https://edhrec.com/commanders/captain-nghathrod";
            ngathrod.target = "_blank";
            contenedorCartitas.appendChild(ngathrod);
            ngathrod.appendChild(dimirMill2);

            const dimirMill3 = document.createElement("img");
            dimirMill3.src = "./resources/DimirMill/3.jpg";
            dimirMill3.className = "cartitas";
            const mirkoVosk = document.createElement("a");
            mirkoVosk.href = "https://edhrec.com/commanders/mirko-vosk-mind-drinker";
            mirkoVosk.target = "_blank";
            contenedorCartitas.appendChild(mirkoVosk);
            mirkoVosk.appendChild(dimirMill3);

            const dimirMill4 = document.createElement("img");
            dimirMill4.src = "./resources/DimirMill/4.jpg";
            dimirMill4.className = "cartitas";
            const anowon = document.createElement("a");
            anowon.href = "https://edhrec.com/commanders/anowon-the-ruin-thief";
            anowon.target = "_blank";
            contenedorCartitas.appendChild(anowon);
            anowon.appendChild(dimirMill4);

            const botonContinuar2 = document.createElement('button');
            botonContinuar2.innerText = "Continuar";
            botonContinuar2.id = "botonContinuar2";
            botonContinuar2.classList.add("btn");
            botonContinuar2.addEventListener("click", async function () {
                contenedorCartitas.innerHTML = "";
                mensajeFinal()
            });
            contenedorOpciones.appendChild(botonContinuar2);
            if (!arrayDeResultados.includes(resultado2)) {
                arrayDeResultados.push(resultado2)
                let resultadoJSON = JSON.stringify(arrayDeResultados);
                localStorage.setItem('arrayDeResultados', resultadoJSON);
            } else {
                Swal.fire({
                    title: "Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.",
                    width: "80vw",
                    padding: "20px",
                    color: "black",
                    background: "#98632F",
                    fontFamily: "Goudy Bookletter"
                  });
            }
            mediaQuery();
            break;
        default:
            return dimir();
    }
}

/* Funcion para el media query */

function mediaQuery() {
    if (window.matchMedia("(max-width: 1185px)").matches) {
        let botones = document.getElementsByClassName("btn");
        document.getElementById("contenedorOpciones").style.flexDirection = "column";
        document.getElementById("contenedorOpciones").style.gap = "5px";
        document.getElementById("textoPrincipal").style.fontSize = "20px";
        for (let i = 0; i < botones.length; i++) {
            botones[i].style.height = "auto";
            botones[i].style.minHeight = "80px";
            botones[i].style.width = "200px";
            botones[i].style.fontSize = "20px";
            botones[i].style.marginTop = "10px";
        }
    } else {
        let botones = document.getElementsByClassName("btn");
        document.getElementById("textoPrincipal").style.fontSize = "30px";
        document.getElementById("contenedorOpciones").style.flexDirection = "row";
        for (let i = 0; i < botones.length; i++) {
            botones[i].style.height = "auto";
            botones[i].style.minHeight = "100px";
            botones[i].style.width = "auto";
            botones[i].style.fontSize = "25px";
        }
    }
}
window.addEventListener("resize", mediaQuery);

/* Array conteniendo todos los resultados obtenidos por el usuario */

let arrayDeResultados = [];

/* Función para mostrar los resultados obtenidos */

function mensajeFinal() {
    document.getElementById('contenedorCartitas').style.display = 'none';
    contenedorOpciones.innerHTML = '';
    let mensaje = "Estos son los resultados que has tenido:\n";
    arrayDeResultados.forEach(resultado => {
        mensaje += resultado + " / ";
    });
    mensaje = (mensaje += "\n\nSi aún no estás conforme con los resultados, prueba responder el test de nuevo!");
    textoPrincipal.innerText = `${mensaje}`;
    let resultadoJSON = JSON.stringify(arrayDeResultados);
    localStorage.setItem("arrayDeResultados", resultadoJSON);
    const botonDeNuevo = document.createElement('button');
    botonDeNuevo.innerText = "Intentar de nuevo";
    botonDeNuevo.id = "botonDeNuevo";
    botonDeNuevo.classList.add("btn");
    botonDeNuevo.addEventListener("click", function () {
        document.body.innerHTML = "";
        location.reload();
    });
    contenedorOpciones.appendChild(botonDeNuevo);
    mediaQuery();
}

/* Función para cambiar el fondo de forma asincrónica y que no se note la demora en cargar la imagen */

function cambiarFondoSinAnimacion(fondoUrl) {
    let fondo = new Image();
    fondo.onload = function() {
        setTimeout(function() {
            document.body.style.backgroundImage = 'url(' + fondoUrl + ')';
        }, 0);
    };
    fondo.src = fondoUrl;
    }

let fondoActual = document.createElement('div');
fondoActual.classList.add('background-container');
document.body.appendChild(fondoActual);

function cambiarFondo(fondoUrl) {
    
    let nuevoFondo = document.createElement('div');
    nuevoFondo.classList.add('background-container');
    nuevoFondo.style.backgroundImage = 'url(' + fondoUrl + ')';
    nuevoFondo.style.transform = 'translateX(100%)';
    document.body.appendChild(nuevoFondo);

    nuevoFondo.getBoundingClientRect();

    nuevoFondo.style.transform = 'translateX(0)';

    fondoActual.style.transform = 'translateX(-100%)';

    setTimeout(() => {
        fondoActual.remove();
        fondoActual = nuevoFondo;
    }, 2000);
}

/* Funciones para fetchear cartas de una api y traer una al azar, de modo que se busque hasta encontrar un resultado válido */

    function obtenerCarta() {
        contenedorCartitas.innerHTML = "";
        const loader = document.getElementById("loader");
        loader.style.display = "unset";
        return fetch('https://api.magicthegathering.io/v1/cards?pageSize=1&random=true')
            .then(response => response.json())
            .then(data => {
                const card = data.cards[0];
                if (card && card.imageUrl) {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            loader.style.display = "none";
                            resolve(card.imageUrl);
                        }, 1000);
                    });
                } else {
                    return obtenerCarta();
                }
            })
            .catch(error => {
                console.error('Error fetching the card:', error);
                loader.style.display = "none";
                throw error;
            });
    }

    function tuCarta() {
        return new Promise((resolve, reject) => {
            let cartaRandom = document.createElement('img');
            cartaRandom.className = "cartitas";
            obtenerCarta()
                .then(urlCarta => {
                    cartaRandom.src = urlCarta;
                    resolve(cartaRandom);
                })
                .catch(error => {
                    console.error('Error fetching the card:', error);
                    reject(error);
                });
        });
    }

/* Funcion principal, la que inicia todos los procesos y crea todo lo pertinente al DOM */

function main() {
    document.body.style.backgroundColor = "black";
    document.body.style.fontFamily = "Goudy Bookletter";
    cambiarFondoSinAnimacion("./resources/4860f7d8-nykthos-shrine-to-nyx.jpg");
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "repeat-y";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.margin = "unset";
    document.body.style.width = "100vw";
    document.body.style.height = "100%";

    const textoPrincipal = document.createElement("h1");
    textoPrincipal.style.backgroundColor = "rgba(152, 99, 47, 0.4)";
    textoPrincipal.style.fontSize = "30px";
    textoPrincipal.style.height = "100%";
    textoPrincipal.style.alignContent = "center";
    textoPrincipal.style.color = "black";
    textoPrincipal.style.margin = "unset";
    textoPrincipal.innerText = "Presiona el primer botón y responde preguntas para descubrir estrategias en Magic the Gathering (Formato Commander).\nTambién descubre cartas nuevas cada vez que presiones el segundo botón";
    textoPrincipal.id = "textoPrincipal";

    const contenedorTextoPrincipal = document.createElement("div");
    contenedorTextoPrincipal.id = "contenedorTextoPrincipal";
    contenedorTextoPrincipal.style.height = "100%";
    contenedorTextoPrincipal.style.width = "100%";
    contenedorTextoPrincipal.style.display = "flex";
    contenedorTextoPrincipal.style.justifyContent = "flex-start";
    contenedorTextoPrincipal.style.alignItems = "center";
    contenedorTextoPrincipal.style.textAlign = "center";
    contenedorTextoPrincipal.style.flexDirection = "column";
    contenedorTextoPrincipal.style.flexwrap = "wrap";
    contenedorTextoPrincipal.style.gap = "20px"

    const contenedorOpciones = document.createElement("div");
    contenedorOpciones.id = "contenedorOpciones";
    contenedorOpciones.style.height = "100%";
    contenedorOpciones.style.width = "100%";
    contenedorOpciones.style.display = "flex";
    contenedorOpciones.style.justifyContent = "center";
    contenedorOpciones.style.alignItems = "center";
    contenedorOpciones.style.textAlign = "center";
    contenedorOpciones.style.flexDirection = "row";
    contenedorOpciones.style.flexwrap = "wrap";
    contenedorOpciones.style.gap = "20px";
    contenedorOpciones.style.marginTop = "20px"

    const contenedor = document.createElement("div");
    contenedor.id = "contenedor";
    contenedor.style.height = "80vh";
    contenedor.style.width = "80vw";
    contenedor.style.display = "flex";
    contenedor.style.justifyContent = "center";
    contenedor.style.alignItems = "center";
    contenedor.style.textAlign = "center";
    contenedor.style.flexDirection = "column";
    
    const contenedorCartitas = document.createElement("div");
    contenedorCartitas.id = "contenedorCartitas";
    contenedorCartitas.style.height = "100%";
    contenedorCartitas.style.width = "100%";
    contenedorCartitas.style.display = "flex";
    contenedorCartitas.style.justifyContent = "center";
    contenedorCartitas.style.alignItems = "center";
    contenedorCartitas.style.flexDirection = "row";
    contenedorCartitas.style.flexWrap = "wrap";
    contenedorCartitas.style.gap = "20px";
    contenedorCartitas.style.minHeight = "320px";
    contenedorCartitas.style.marginTop = "20px";
    contenedorCartitas.innerHTML = "";
    
    const botonComenzar = document.createElement('button');
    botonComenzar.innerText = "Comenzar el test";
    botonComenzar.id = "botonComenzar";
    botonComenzar.classList.add("btn");
    botonComenzar.addEventListener("click", async function () {
        contenedor.removeChild(contenedorCartitas);
        let nivelDificultad = await dificultad(contenedorOpciones, textoPrincipal);
        procesarDificultad(nivelDificultad);
    });
    
    const botonCarta = document.createElement('button');
    botonCarta.innerText = "Carta misteriosa";
    botonCarta.id = "botonCarta";
    botonCarta.classList.add("btn");
    botonCarta.addEventListener("click", async function () {
        tuCarta().then(cartaRandom => {
            contenedorCartitas.innerHTML = "";
            contenedorCartitas.appendChild(cartaRandom);
        }).catch(error => {
            console.error('Error displaying the card:', error);
        });
    });
    
    document.body.appendChild(contenedor);
    contenedor.appendChild(contenedorTextoPrincipal);
    contenedorTextoPrincipal.appendChild(textoPrincipal);
    contenedor.appendChild(contenedorOpciones);
    contenedor.insertBefore(contenedorCartitas, contenedorOpciones);
    contenedorOpciones.appendChild(botonComenzar);
    contenedorOpciones.appendChild(botonCarta);

    let resultadosRecuperadosJSON = localStorage.getItem('arrayDeResultados');
    arrayDeResultados = resultadosRecuperadosJSON ? JSON.parse(resultadosRecuperadosJSON) : [];
    colores.azul = 0
    colores.blanco = 0
    colores.rojo = 0
    colores.verde = 0
    colores.negro = 0


    mediaQuery();

}

/* Finalmente, se llama a la función principal */

main();