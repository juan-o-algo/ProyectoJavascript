/* RECOLECCION de datos de la primer pregunta de todo el test */

    function dificultad() {
        let respuestaDificultad = prompt("¿Qué tan complejo quieres que sea tu mazo?:\n (Cuanto más simple, tu mazo tendrá menos opciones disponibles, pero el juego sera más consistente para tí)\n\n1. Principiante\n2. Intermedio\n3. Avanzado\n4. Experto\n5. Albert Einstein");
        let opcion = parseInt(respuestaDificultad);

        if (opcion === 1 || opcion === 2 || opcion === 3 || opcion === 4 || opcion === 5) {
            return opcion;
        } else {
            alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.");
            return dificultad();
        }
    }

/* En esta sección estan las funciones que RECOGEN los datos ingresados por el usuario en dificultad PRINCIPIANTE. */

    function principiante() {
        let respuestaPrincipiante = prompt("(1/7) - ¿Qué prefieres hacer en tu tiempo libre?:\n\n1. Dormir\n2. Practicar un deporte\n3. Reunirte con amigos\n4. Salir a comer\n5. Leer un libro");
        let opcion = parseInt(respuestaPrincipiante);

        if (opcion === 1 || opcion === 2 || opcion === 3 || opcion === 4 || opcion === 5) {;
            return opcion;
        } else {
            alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.");
            return principiante();
        }
    }

    function principiante2() {
        let respuestaPrincipiante2 = prompt("(2/7) - ¿Qué tipo de película disfrutas más?:\n\n1. Ciencia ficción\n2. Comedia\n3. Drama\n4. Terror\n5. Acción");
        let opcion = parseInt(respuestaPrincipiante2);

        if (opcion === 1 || opcion === 2 || opcion === 3 || opcion === 4 || opcion === 5) {;
            return opcion;
        } else {
            alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.");
            return principiante2();
        }
    }

    function principiante3() {
        let respuestaPrincipiante3 = prompt("(3/7) - ¿Cuál es animal favorito entre estos?:\n\n1. Murciélago\n2. Leopardo\n3. Rinoceronte\n4. Cuervo\n5. Perro");
        let opcion = parseInt(respuestaPrincipiante3);

        if (opcion === 1 || opcion === 2 || opcion === 3 || opcion === 4 || opcion === 5) {;
            return opcion;
        } else {
            alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.");
            return principiante3();
        }
    }

    function principiante4() {
        let respuestaPrincipiante4 = prompt("(4/7) - ¿Qué actividad te relaja más?:\n\n1. Salir a caminar\n2. Hacer jardinería\n3. Meditar\n4. Cocinar\n5. Ver la tele");
        let opcion = parseInt(respuestaPrincipiante4);

        if (opcion === 1 || opcion === 2 || opcion === 3 || opcion === 4 || opcion === 5) {;
            return opcion;
        } else {
            alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.");
            return principiante4();
        }
    }
    
    function principiante5() {
        let respuestaPrincipiante5 = prompt("(5/7) - ¿Qué instrumento musical te gusta mas?:\n\n1. Piano\n2. Flauta\n3. Violin\n4. Guitarra\n5. Tambor");
        let opcion = parseInt(respuestaPrincipiante5);

        if (opcion === 1 || opcion === 2 || opcion === 3 || opcion === 4 || opcion === 5) {;
            return opcion;
        } else {
            alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.");
            return principiante5();
        }
    }

    function principiante6() {
        let respuestaPrincipiante6 = prompt("(6/7) - ¿Cuál es tu sabor favorito?:\n\n1. Dulce\n2. Amargo\n3. Picante\n4. Ácido\n5. Salado");
        let opcion = parseInt(respuestaPrincipiante6);

        if (opcion === 1 || opcion === 2 || opcion === 3 || opcion === 4 || opcion === 5) {;
            return opcion;
        } else {
            alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.");
            return principiante6();
        }
    }

    function principiante7() {
        let respuestaPrincipiante7 = prompt("(7/7) - ¿Qué tipo de trabajo voluntario te interesaría hacer?:\n\n1. Plantar árboles\n2. Ayudar a personas mayores\n3. Enseñar a niños\n4. Limpiar la calle\n5. Trabajar en un refugio de animales");
        let opcion = parseInt(respuestaPrincipiante7);

        if (opcion === 1 || opcion === 2 || opcion === 3 || opcion === 4 || opcion === 5) {;
            return opcion;
        } else {
            alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.");
            return principiante7();
        }
    }

/* En esta sección estan las funciones que RECOGEN los datos ingresados por el usuario en dificultad INTERMEDIA. */

    /* RECOLECCION de datos de la primera pregunta INTERMEDIA */

        function intermedia() {
            let respuestaIntermedia = prompt("Elige un estilo musical que te llame la atención:\n\n1. Clásica\n2. Rock pesado\n3. Coros polifónicos\n4. Fusión\n5. Emocore");
            let opcion = parseInt(respuestaIntermedia);

            if (opcion === 1 || opcion === 2 || opcion === 3 || opcion === 4 || opcion === 5) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.");
                return intermedia();
            }
        }

    /* RECOLECCION de datos de la segunda pregunta INTERMEDIA */

        function control() {
            let respuestaControl = prompt("Eres una autoridad y alguien bajo tu mando rompe las reglas.\n ¿Qué haces?\n\n1. Ponerlo en su lugar, las reglas están para ser cumplidas sin excepciones\n2. Negociar con esa persona, tal vez puedas hacer la vista gorda si te dan algo a cambio...");
            let opcion = parseInt(respuestaControl);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return control();
            }
        }

        function agro() {
            let respuestaAgro = prompt("Escuchas mucha gente gritando enojada y cosas rompiéndose ¡Se está produciendo un disturbio violento en la calle!\n ¿Qué haces?\n\n1. Observar, la violencia es el mejor entretenimiento. ¡Increíble! ¡A ese tipo le bajaron un diente!\n2. Aprovechar el caos del momento y romper algo o golpear a alguien. ¡Qué divertido!");
            let opcion = parseInt(respuestaAgro);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return agro();
            }
        }

        function swarm() {
            let respuestaSwarm = prompt("Eres el director técnico de un equipo deportivo y se acerca la gran final del torneo.\n ¿Qué estrategia usarás?\n\n1. La mejor defensa es un buen ataque. ¡Adelante caballeros, que la victoria es nuestra!\n2. Es una fecha importante... Seamos precavidos, aguantemos al principio y analicemos el juego contrario.");
            let opcion = parseInt(respuestaSwarm);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return swarm();
            }
        }

        function combo() {
            let respuestaCombo = prompt("¡Ganaste la lotería! Te vuelves asquerosamente rico.\n ¿Qué harías con el dinero?\n\n1. Invertirlo, en unos años tendrás el doble. ¡Las ganancias serán exponenciales!\n2. Vive cada día como si fuera el último. ¡Haz una fiesta enorme con todos tus seres queridos, mucha comida, espectáculos y sorpresas!");
            let opcion = parseInt(respuestaCombo);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return combo();
            }
        }

        function gy() {
            let respuestaGy = prompt("¡Qué hambre!... En la nevera tienes un arroz seco de hace un par de días. Hoy tu compañero de cuarto cocinó una olla entera de tu platillo favorito, que también está en la nevera.\n ¿Qué haces? \n\n1. Tal vez con alguna lata de algo se pueda aprovechar ese arroz, sería una pena tirarlo\n2. Te escabulles en la cocina por la noche y le robas una porcion de comida a tu roomie, lavas el plato para no dejar evidencia. Nunca estuviste ahí.");
            let opcion = parseInt(respuestaGy);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return gy();
            }
        }

    /* RECOLECCION de datos de la tercera pregunta INTERMEDIA */

        function azorius() {
            let respuestaAzorius = prompt("¡Cuidado!\n ¡Ahí viene un golpe!\n Que vas a hacer?\n\n 1. Esquivas rápidamente y coontraatacas\n 2. Intentas desviar el golpe y aplicarle una llave al atacante para inmovilizarlo");
            let opcion = parseInt(respuestaAzorius);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return azorius();
            }
        }

        function orzhov() {
            let respuestaOrzhov = prompt("¿Qué valoras más?\n\n 1. Gozar de buena salud y vigor\n 2. Tener muchos contactos e influencia");
            let opcion = parseInt(respuestaOrzhov);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return orzhov();
            }
        }

        function rakdos() {
            let respuestaRakdos = prompt("Tienes unas empanadas viejas que no sabes si siguen muy comestibles.\n ¿Qué haces?\n\n 1. Las compartes con un desconocido, en caso de estar mal ya te enterarás\n 2. Tirarlas a la basura. Es una pena, pero ahora puedes comer algo en mejor estado");
            let opcion = parseInt(respuestaRakdos);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return rakdos();
            }
        }

        function gruul() {
            let respuestaGruul = prompt("Te preparas para una pelea.\n ¿Qué prefieres?\n\n 1. Entrenar y hacerte fuerte para aplastar al debilucho tu rival\n 2. Sabotear a tu oponente para que no te oponga tanta resistencia y tomar una victoria fácil");
            let opcion = parseInt(respuestaGruul);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return gruul();
            }
        }

        function boros() {
            let respuestaBoros = prompt("Decides mover todo lo que hay en una habitacion a otra en tu casa.\n ¿Cómo piensas hacerlo?\n\n 1. Con una carretilla, por supuesto. Las herramientas estan para facilitarnos la vida\n 2. Con tus propias manos. Podrá requerir mas viajes, pero así te aseguras de que tus cosas estan a salvo de romperse en el viaje");
            let opcion = parseInt(respuestaBoros);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return boros();
            }
        }

        function selesnya() {
            let respuestaSelesnya = prompt("Hay un clima horrendo afuera, cae un rayo cerca de tu casa y se va la luz.\n ¿Qué haces?\n\n 1. Quedarte en tu casa, envuelto en tus sábanas y disfrutando de algo caliente\n 2. Invitar amigos a que vengan a pasar la tormenta juntos, siempre que llovió paró");
            let opcion = parseInt(respuestaSelesnya);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return selesnya();
            }
        }

        function simic() {
            let respuestaSimic = prompt("Tu viejo y querido auto ya ha tenido sus batallas, es hora de hacer algo al respecto.\n ¿Qué haces con él?\n\n 1. Arreglarlo e instalarle mejoras, este auto te resulta cómodo y significa mucho para tí\n 2. Venderlo y comprar un modelo mas nuevo y mejor, ya era hora de actualizarse");
            let opcion = parseInt(respuestaSimic);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return simic();
            }
        }

        function izzet() {
            let respuestaIzzet = prompt("¡Finalmente llegó la Navidad!\n ¿Qué prefieres que te regalen?\n\n 1. Muchos regalos pequeños. ¡Cada uno es una sorpresa!\n 2. Un gran regalo. ¡Qué emoción! ¿Qué será?");
            let opcion = parseInt(respuestaIzzet);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return izzet();
            }
        }

        function golgari() {
            let respuestaGolgari = prompt("¡Oh no! ¡Tu taza favorita se ha roto!\n ¿Qué haces?\n\n 1. Repararla, esa taza es muy especial para tí\n 2. Deshacerte de ella, de todas formas ya tienes muchas tazas");
            let opcion = parseInt(respuestaGolgari);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return golgari();
            }
        }

        function dimir() {
            let respuestaDimir = prompt("Alguien que te cae mal acaba de comprar el ultimo par de zapatillas de un modelo que planeabas comprar.\n ¿Qué haces?\n\n 1. Activar la alarma de incendios y aprovechar la confusión para quitárselas de las manos\n 2. Saludarlo y usar tu don con la palabra para convencerlo de que no le quedan bien y que deberia devolverlas");
            let opcion = parseInt(respuestaDimir);

            if (opcion === 1 || opcion === 2) {
                return opcion;
            } else {
                alert("Respuesta no válida, por favor ingresa 1 o 2.");
                return dimir();
            }
        }

/* PROCESADO de datos de la primer pregunta de todo el test */

    function procesarDificultad(respuestaDificultad) {
        switch (respuestaDificultad) {
            case 1:
                alert("Has elegido PRINCIPIANTE.\n En esta dificultad te esperan los mazos monocolor.\n Como su nombre lo dice, utilizan solo un color, por lo que no tendras que preocuparte de que tus recursos no sean los adecuados para lo que quieras jugar.");
                let respuestaPrincipiante = principiante();
                procesarPrincipiante(respuestaPrincipiante)
                break;
            case 2:
                alert("Has elegido INTERMEDIO.\n Según lo que respondas a continuación, se te mostrarán diversas estrategias que utilicen 2 colores.\n En ellas tendras que conseguir recursos para poder utilizar ambos colores a tu disposición, según veas necesario");
                let respuestaIntermedia = intermedia();
                procesarIntermedia(respuestaIntermedia)
                break;
            case 3:
                alert("La opción que elegiste aun no esta disponible. Elige otra por favor.");
                return dificultad();
            case 4:
                alert("La opción que elegiste aun no esta disponible. Elige otra por favor.");
                return dificultad();
            case 5:
                alert("La opción que elegiste aun no esta disponible. Elige otra por favor.");
                return dificultad();
            default:
                alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.")
                return dificultad();
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

    function procesarPrincipiante(respuestaPrincipiante) {
        switch (respuestaPrincipiante) {
            case 1:
                colores.negro++;
                break;
            case 2:
                colores.rojo++;
                break;
            case 3:
                colores.blanco++;
                break;
            case 4:
                colores.verde++;
                break;
            case 5:
                colores.azul++;
                break;
            default:
                alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.")
                return principiante();
        }
        console.log(colores);
        let respuestaPrincipiante2 = principiante2();
        procesarPrincipiante2(respuestaPrincipiante2);
    }

    function procesarPrincipiante2(respuestaPrincipiante2) {
        switch (respuestaPrincipiante2) {
            case 1:
                colores.azul++;
                break;
                case 2:
                colores.verde++;
                break;
            case 3:
                colores.blanco++;
                break;
            case 4:
                colores.negro++;
                break;
            case 5:
                colores.rojo++;
                break;
            default:
                alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.")
                return principiante2();
        }
        console.log(colores);
        let respuestaPrincipiante3 = principiante3();
        procesarPrincipiante3(respuestaPrincipiante3)
    }

    function procesarPrincipiante3(respuestaPrincipiante3) {
        switch (respuestaPrincipiante3) {
            case 1:
                colores.negro++;
                break;
                case 2:
                colores.rojo++;
                break;
            case 3:
                colores.verde++;
                break;
            case 4:
                colores.azul++;
                break;
            case 5:
                colores.blanco++;
                break;
            default:
                alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.")
                return principiante3();
        }
        console.log(colores);
        let respuestaPrincipiante4 = principiante4();
        procesarPrincipiante4(respuestaPrincipiante4)
    }

    function procesarPrincipiante4(respuestaPrincipiante4) {
        switch (respuestaPrincipiante4) {
            case 1:
                colores.rojo++;
                break;
                case 2:
                colores.verde++;
                break;
            case 3:
                colores.azul++;
                break;
            case 4:
                colores.blanco++;
                break;
            case 5:
                colores.negro++;
                break;
            default:
                alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.")
                return principiante4();
        }
        console.log(colores);
        let respuestaPrincipiante5 = principiante5();
        procesarPrincipiante5(respuestaPrincipiante5)
    }

    function procesarPrincipiante5(respuestaPrincipiante5) {
        switch (respuestaPrincipiante5) {
            case 1:
                colores.azul++;
                break;
                case 2:
                colores.blanco++;
                break;
            case 3:
                colores.negro++;
                break;
            case 4:
                colores.verde++;
                break;
            case 5:
                colores.rojo++;
                break;
            default:
                alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.")
                return principiante5();
        }
        console.log(colores);
        let respuestaPrincipiante6 = principiante6();
        procesarPrincipiante6(respuestaPrincipiante6)
    }

    function procesarPrincipiante6(respuestaPrincipiante6) {
        switch (respuestaPrincipiante6) {
            case 1:
                colores.blanco++;
                break;
                case 2:
                colores.verde++;
                break;
            case 3:
                colores.rojo++;
                break;
            case 4:
                colores.azul++;
                break;
            case 5:
                colores.negro++;
                break;
            default:
                alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.")
                return principiante6();
        }
        console.log(colores);
        let respuestaPrincipiante7 = principiante7();
        procesarPrincipiante7(respuestaPrincipiante7)
    }

    function procesarPrincipiante7(respuestaPrincipiante7) {
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
                alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.")
                return principiante7();
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
        console.log(colores);
        alert("Según tus  respuestas, ésta es tu afinidad aproximada para cada color en Magic the Gathering:\n\n Blanco: " + "%" + porcentajeBlanco + "\n Negro: " + "%" + porcentajeNegro + "\n Azul: " + "%" + porcentajeAzul + "\n Verde: " + "%" + porcentajeVerde + "\n Rojo: " + "%" + porcentajeRojo)
    }

/* En esta sección estan las funciones que PROCESAN los datos ingresados por el usuario en dificultad INTERMEDIA. */

    /* PROCESADO de datos de la primer pregunta INTERMEDIA */

        function procesarIntermedia(respuestaIntermedia) {
            switch (respuestaIntermedia) {
                case 1:
                    alert("Elegiste música clásica.\n Espalda recta, menton arriba. Te gusta lo elegante y refinado.\n Tal vez disfrutes tirando los hilos con estrategias más lentas de control, y que todos sepan quién manda.");
                    let respuestaControl = control();
                    procesarControl(respuestaControl);
                    break;
                case 2:
                    alert("Elegiste rock pesado.\n En el caos del pogo tú estás en tu salsa... Violencia, sadismo y anarquía!\n Las estrategias ofensivas centradas en matar a todos antes que te maten son lo tuyo seguro.");
                    let respuestaAgro = agro();
                    procesarAgro(respuestaAgro)
                    break;
                case 3:
                    alert("Elegiste coros polifónicos.\n Te gusta lo que pueden lograr muchos individuos al colaborar.\n Te recomiendo estrategias que involucren crear un ejército de criaturas pequeñas, que juntas sean imparables.");
                    let respuestaSwarm = swarm();
                    procesarSwarm(respuestaSwarm)
                    break;
                case 4:
                    alert("Elegiste música fusión.\n Te gusta que la música construya sobre sus propios patrones para hacer algo nuevo y creativo.\n Podrías usar estrategias de combos, utiliza distintos efectos juntos para crear un resultado deslumbrante.");
                    let respuestaCombo = combo();
                    procesarCombo(respuestaCombo)
                    break;
                case 5:
                    alert("Elegiste emocore.\n Eres perfil bajo y te gusta desahogarte con música que exprese tus sentimientos negativos. La basura de hoy es el tesoro de mañana.\n Estrategias que usen los recursos de los cementerios podrían interesarte.");
                    let respuestaGy = gy();
                    procesarGy(respuestaGy)
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1, 2, 3, 4 o 5.")
                    return intermedia();
            }
        }

    /* PROCESADO de datos de la segunda pregunta INTERMEDIA */

        function procesarControl(respuestaControl) {
            switch (respuestaControl) {
                case 1:
                    alert("Si quieren parpadear, más vale que te pidan permiso\n El senado Azorius te recibe, nosotros ponemos las reglas (Pero primero llena una forma y haz que te la sellen).\n Tus colores son Azul y Blanco.");
                    let respuestaAzorius = azorius();
                    procesarAzorius(respuestaAzorius)
                    break;
                case 2:
                    alert("Te encanta extorsionar a los otros, todo tiene su costo y tú viniste a cobrar.\n Bienvenido al Sindicato Orzhov, si no pueden pagarte en vida, tal vez puedan pagarte después de muertos.\n Tus colores son Negro y Blanco.");
                    let respuestaOrzhov = orzhov();
                    procesarOrzhov(respuestaOrzhov)
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return control();
            }
        }

        function procesarAgro(respuestaAgro) {
            switch (respuestaAgro) {
                case 1:
                    alert("Veo que disfrutas el dolor ajeno, qué sadico.\n El Culto de Rakdos te invita al Carnarium. ¡Va a haber un espectáculo impresionante de sangre y tortura!\n Tus colores son Rojo y Negro");
                    let respuestaRakdos = rakdos();
                    procesarRakdos(respuestaRakdos)
                    break;
                case 2:
                    alert("¡Cuanta violencia! ¡Golpea primero y pregunta mientras golpees!\n Monta tu jabalí, toma cualquier objeto contundente y vamos a romper algunos vidrios con los Clanes Gruul!\n Tus colores son Rojo y Verde");
                    let respuestaGruul = gruul();
                    procesarGruul(respuestaGruul)
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return agro();
            }
        }

        function procesarSwarm(respuestaSwarm) {
            switch (respuestaSwarm) {
                case 1:
                    alert("¡En fila! ¡Atentos! ¡Saluden! ¡Marchen! ¡A la carga!\n Tus tropas esperan tus órdenes. Bienvenido a la Legión Boros. ¡Unidos y por la victoria!\n Tus colores son Rojo y Blanco");
                    let respuestaBoros = boros();
                    procesarBoros(respuestaBoros)
                    break;
                case 2:
                    alert("Comunión y harmonía, prepara tu defensa impenetrable junto a un montón de elfos, druidas y centauros.\n El Conclave Selesnya te recibe de brazos abiertos, uno para todos y todos para uno.\n Tus colores son Blanco y Verde");
                    let respuestaSelesnya = selesnya();
                    procesarSelesnya(respuestaSelesnya)
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return swarm();
            }
        }

        function procesarCombo(respuestaCombo) {
            switch (respuestaCombo) {
                case 1:
                    alert("Crecimiento exponencial y tener acceso a muchos recursos...\n Si lo tuyo es la evolución y el crecimiento, el Combinado Simic es tu lugar y los biomantes tus colegas (Los tentáculos se venden por separado)\n Tus colores son Azul y Verde");
                    let respuestaSimic = simic();
                    procesarSimic(respuestaSimic)
                    break;
                case 2:
                    alert("Eres todo un artista, desde el principio estás orquestando todo para llegar al tan esperado gran final. Tu arte es fugaz y explosivo.\n Fuiste aceptado en la Liga Izzet, deja que tu imaginación vuele y construyamos juntos el futuro.\n Tus colores son Rojo y Azul");
                    let respuestaIzzet = izzet();
                    procesarIzzet(respuestaIzzet)
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return combo();
            }
        }

        function procesarGy(respuestaGy) {
            switch (respuestaGy) {
                case 1:
                    alert("Te gusta darle más de un uso a las cosas y el reciclaje, si todavía sirve para algo, tú le sacas provecho.\n Perfectamente podrías formar parte del Enjambre Golgari, la muerte es solo el comienzo.\n Tus colores son Negro y Verde");
                    let respuestaGolgari = golgari();
                    procesarGolgari(respuestaGolgari)
                    break;
                case 2:
                    alert("Si pudieras tener un superpoder, seguro te gustaría ser invisible para poder ir a donde te plazca y robar lo que quieras sin ser detectado.\n En la Casa Dimir aprenderás a robar hasta el secreto más oscuro incluso de la mente más fuerte, e irte de ahí sin dejar rastro.\n Tus colores son Negro y Azul");
                    let respuestaDimir = dimir();
                    procesarDimir(respuestaDimir)
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return gy();
            }
        }

    /* PROCESADO de datos de la tercera pregunta INTERMEDIA */

        function procesarAzorius(respuestaAzorius) {
            switch (respuestaAzorius) {
                case 1:
                    alert("Eso estuvo cerca.\n Con esos reflejos tal vez disfrutes los mazos construidos en base a que tus criaturas evadan los hechizos enemigos saliendo del campo y volviendo a entrar inmediatamente (Muchas de ellas tienen efectos al volver a entrar al campo!).\n\n Los siguientes commanders pueden usarse para mazos de ese estilo:\n\n- Brago, King Eternal\n- Yorion, Sky Nomad\n- Abuelo, Ancestral Echo\n- Ephara, God of the Polis");
                    let resultado1 = "Azorius Blink";
                    if (!arrayDeResultados.includes(resultado1)) {
                        arrayDeResultados.push(resultado1)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                case 2:
                    alert("Apretas muy fuerte. Si tu atacante quiere moverse tendrá que suplicar tu piedad.\n Los mazos que hacen esto suelen tener muchos 'encantamientos' (Cartas con un efecto continuo en la mesa) que impiden que los rivales puedan hacer lo que se les plazca gratuitamente.\n\n Échale un ojo a los siguientes commanders:\n\n- Grand Arbiter Augustin IV\n- Lavinia, Azorius Renegade\n- Hylda of the Icy Crown\n- Dennick, Pious Apprentice");
                    let resultado2 = "Azorius Stax o Pillowfort";
                    if (!arrayDeResultados.includes(resultado2)) {
                        arrayDeResultados.push(resultado2)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return azorius();
            }
        }

        function procesarOrzhov(respuestaOrzhov) {
            switch (respuestaOrzhov) {
                case 1:
                    alert("Los que no la tienen la desean y los que la tienen no la valoran, te deseo buena salud y fortuna a tí que llegaste hasta aquí.\n Los mazos centrados en ganar mucha vida son para tí. Cuando ganes vida tendras una variedad de efectos de todo tipo que te ayudaran a ganar!\n Relájate y ponte cómodo ganando vida con los siguientes commanders:\n\n- Amalia Benavides Aguirre\n- Karlov of the Ghost Council\n- Elias il-Kor, Sadistic Pilgrim\n- Kambal, Consul of Allocation");
                    let resultado1 = "Orzhov Lifegain";
                    if (!arrayDeResultados.includes(resultado1)) {
                        arrayDeResultados.push(resultado1)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                case 2:
                    alert("Veo que la gente es un recurso importante para tí.\n Existen mazos llamados 'aristócratas' cuyo interés radica en tener un efecto que se active cada vez que algo muera. Por suerte, tu puedes facilitar eso sacrificando criaturas que no te importe tanto perder, eso si que es ponerse la camiseta de la empresa...\n Los siguientes commanders se interesan en tener muchos lacayos dispensables:\n\n- Teysa Karlov\n- Elas il-Kor, Sadistic Pilgrim\n- Elenda, the Dusk Rose\n- Athreos, God of Passage");
                    let resultado2 = "Orzhov Aristocrat";
                    if (!arrayDeResultados.includes(resultado2)) {
                        arrayDeResultados.push(resultado2)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return orzhov();
            }
        }

        function procesarRakdos(respuestaRakdos) {
            switch (respuestaRakdos) {
                case 1:
                    alert("No te importa sacrificar a otros con tal de conseguir lo que quieres.\n Con una mentalidad asi, podrias probar un mazo 'aristócrata', cuyo interés radica en tener un efecto que se active cada vez que algo muera. Por suerte, tu puedes facilitar eso sacrificando criaturas que no te importe tanto perder, eso si que es ponerse la camiseta de la empresa...\n Los siguientes commanders se interesan en tener muchos lacayos dispensables:\n\n- Totentanz, Swarm Piper\n- Garna, Bloodfist of Keld\n- Raphael, Fiendish Savior\n- Judith, the Scourge Diva");
                    let resultado1 = "Rakdos Aristocrat";
                    if (!arrayDeResultados.includes(resultado1)) {
                        arrayDeResultados.push(resultado1)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                case 2:
                    alert("A veces hay que soltar, y lo sabes bien.\n De eso se tratan las estrategias de descarte. Existen muchas cartas que al ser descartadas o al estar en el cementerio tienen efectos, utilízalas junto a otros efectos que se paguen descartando y así sacarles el máximo provecho.\n Aquí tienes algunos commanders que son buenos haciendo eso:\n\n-Kroxa, Titan of Death's Hunger\n- Asmoranomarcadicadaistinaculdacar (Si, ese es su nombre...)\n- Zoyowa Lava-Toungue\n- Chainer, Nightmare Adept");
                    let resultado2 = "Rakdos Discard";
                    if (!arrayDeResultados.includes(resultado2)) {
                        arrayDeResultados.push(resultado2)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return rakdos();
            }
        }

        function procesarGruul(respuestaGruul) {
            switch (respuestaGruul) {
                case 1:
                    alert("Si algo no funciona, lo golpeas con un palo hasta que funcione o se rompa del todo.\n A tí te van a encantar los mazos que generan recursos rápido y los usan para traer criaturas enormes para llevarte por delante a quien se interponga en tu camino.\n\n Los siguientes commanders podrian interesarte:\n- Raggadragga, Gorecuts Boss\n- Klothys, God of Destiny\n- Meria, Scholar of Antiquity\n Grand Warlord Radha");
                    let resultado1 = "Gruul Big Mana";
                    if (!arrayDeResultados.includes(resultado1)) {
                        arrayDeResultados.push(resultado1)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                case 2:
                    alert("¿Para qué molestarse en entrenar? Usando la cabeza siempre hay una forma mas fácil. ¿Y qué mejor que limitar los movimientos enemigos?\n Estos colores te proporcionan muchos efectos que castigan o prohiben todo lo que no sean efectos de criaturas y a su vez gozan de criaturas con buenos efectos. ¡Ni siquiera vas a necesitar usar otra cosa!\n\n Échale un vistazo a los siguientes commanders:\n- Nikya of the Old Ways\n- Ruric Thar, the Unbowed\n- Tovolar, Dire Overlord");
                    let resultado2 = "Gruul Creatures Matter";
                    if (!arrayDeResultados.includes(resultado2)) {
                        arrayDeResultados.push(resultado2)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return gruul();
            }
        }

        function procesarBoros(respuestaBoros) {
            switch (respuestaBoros) {
                case 1:
                    alert("Tú si que sabes darle uso a tus herramientas. Con ellas hacer lo que sea es mas fácil.\n Para alguien así, un mazo de equipamientos viene como anillo al dedo. Equipa tus criaturas con un arsenal de artefactos y mándalas a combatir bien preparadas.\n\n Los siguientes commanders podrian interesarte:\n- Nahiri, Forged in Fury\n- Ardenn, Intrepid Archaeologist y Roghrakh, Son of Rohgahh\n- Bruenor Battlehammer\n-Koll, the Forgemaster");
                    let resultado1 = "Boros Equipment";
                    if (!arrayDeResultados.includes(resultado1)) {
                        arrayDeResultados.push(resultado1)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                case 2:
                    alert("Hay algo catártico en repetir un proceso mecánico una y otra vez. Más vale mania que fuerza.\n Tal vez disfrutes estrategias con efectos para tener muchos combates en un solo turno. ¡Incluso puedes usar efectos que se activan en cada uno de tus combates!\n\n Los commanders que voy a recomendarte hoy son:\n- Aurelia, the Warleader\n- Karlach, Fury of Avernus y Flaming Fist\n- Otharri, Sun's Glory");
                    let resultado2 = "Boros Combat";
                    if (!arrayDeResultados.includes(resultado2)) {
                        arrayDeResultados.push(resultado2)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return boros();
            }
        }

        function procesarSelesnya(respuestaSelesnya) {
            switch (respuestaSelesnya) {
                case 1:
                    alert("Disfrutas la comodidad de una buena cobija y algo caliente, tal vez te eches una siesta y todo.\n Podría sugerirte mazos que se enfoquen en ganar vida, así mantenerte cómodo mientras los demás intentan sin resultado hacer algo al respecto.\n\n Te recomiendo los siguientes commanders:\n- Lathiel, the Bounteous Dawn\n- Trelasarra, Moon Dancer\n- Trostani, Selesnya's Voice\n- Treebeard, Gracious Host");
                    let resultado1 = "Selesnya Lifegain";
                    if (!arrayDeResultados.includes(resultado1)) {
                        arrayDeResultados.push(resultado1)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                case 2:
                    alert("Se nota que aprecias la compañia en momentos difíciles. ¡La unión hace la fuerza!\n Con esa mentalidad, te interesarán los mazos que puedan crear muchas criaturas pequeñas rápido. Solas no son nada, pero juntas te darán la victoria.\n\n Los siguientes commanders podrían interesarte:\n- Cadira, Caller of the Small\n- Rhys the Redeemed\n- Queen Allenal of Ruadach\n- Ghalta and Mavren");
                    let resultado2 = "Selesnya Swarm";
                    if (!arrayDeResultados.includes(resultado2)) {
                        arrayDeResultados.push(resultado2)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return selesnya();
            }
        }

        function procesarSimic(respuestaSimic) {
            switch (respuestaSimic) {
                case 1:
                    alert("Te mantienes fiel a tu viejo y querido auto. Con lo que cuidas tus cosas, te durarán muchos años.\n Puedes jugar estrategias que involucren hacer mas fuertes las criaturas que ya tienes, poniendoles contadores +1/+1, que mejoran acumulativamente sus características. ¡Serán útiles tanto para atacar como para defender!\n\n Algunos de los commanders que pueden ser de tu interés son:\n-Ezuri, Claw of Progress\n-Pir, Imaginative Rascal y Toothy, Imaginary Friend\n- Vorel of the Hull Clade\n- Hakbal of the Surging Soul\n- Lonis, Genetics Expert");
                    let resultado1 = "Simic Counters";
                    if (!arrayDeResultados.includes(resultado1)) {
                        arrayDeResultados.push(resultado1)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                case 2:
                    alert("Fuera lo viejo. ¡Venga lo nuevo! ¿Para qué tenías aún ese cacharro oxidado pudiendo tener uno más nuevo y mejor?\n Los mazos 'pod' son aquellos que toman una criatura que tengas y por medio de efectos, la cambian por una mas cara de tu mazo. ¡Una estrategia que hace que tus criaturas evolucionen de la nada!\n\n Te dejo una lista de commanders para que tengas en cuenta:\n- Prime Speaker Vannifar\n- Kinnan, Bonder Prodigy\n- Lonis, Cryptozoologist\n- Grolnok, the Omnivore");
                    let resultado2 = "Simic Pod";
                    if (!arrayDeResultados.includes(resultado2)) {
                        arrayDeResultados.push(resultado2)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return simic();
            }
        }

        function procesarIzzet(respuestaIzzet) {
            switch (respuestaIzzet) {
                case 1:
                    alert("Preferiste un montón de sorpresitas antes que una gran sorpresa. ¿Listo para lanzar todo lo que tengas a mano a tus rivales?\n Los mazos 'spellslinger' se centran en tener muchos hechizos baratos y efectos que se activan cuando usas un hechizo, logrando activarse así muchas veces en un solo turno.\n\n Algunos de los commanders que tendras la oportunidad de probar son:\n- Bria, Riptide Rogue\n- Stella Lee, Wild Card\n- Veyran, Voice of Duality\n- Niv-Mizzet, Parun");
                    let resultado1 = "Izzet Spellslinger";
                    if (!arrayDeResultados.includes(resultado1)) {
                        arrayDeResultados.push(resultado1)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                case 2:
                    alert("Mejor una sorpresa memorable a un monton de cositas insignificantes. El tamaño sí importa.\n De la misma forma, puedes darles un gran susto a tus oponentes al jugar estrategias basadas en jugar hechizos caros y poderosos, copiándolos varias veces por el mismo precio. ¡El verdadero 2x1!\n\n Encontrarás abajo una lista pequeña con commanders recomendados para lograrlo:\n- Magnus the Red\n- Mizzix of the Izmagnus\n- Zaffai, Thunder Conductor\n- Melek, Izzet Paragon");
                    let resultado2 = "Izzet Copy X Spells";
                    if (!arrayDeResultados.includes(resultado2)) {
                        arrayDeResultados.push(resultado2)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return izzet();
            }
        }

        function procesarGolgari(respuestaGolgari) {
            switch (respuestaGolgari) {
                case 1:
                    alert("Todavía puede servir para su proposito original, solo necesita un poco de cariño. Verdaderamente conmovedor.\n Si te interesa hacer lo mismo jugando Magic, considera darle uso a mazos que graviten al rededor de devolver cosas del cementerio. Si aun no terminaste de usarlas, es tu tarea traerlas de vuelta de la muerte.\n\n Algunos commanders que te puedo recomendar de ese estilo son:\n- The Gitrog Monster\n- Meren of the Clan Nel Toth\n- The Mycotyrant\n- Old Stickfingers");
                    let resultado1 = "Golgari GY";
                    if (!arrayDeResultados.includes(resultado1)) {
                        arrayDeResultados.push(resultado1)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                case 2:
                    alert("Tiras a la basura los pedazos rotos de tu taza, ya no te sirve.\n Así como dehechaste la taza, si utilizas un mazo de sacrificios puedes deshechar cosas que ya no uses como pago por efectos increíbles. Aún si sacrificas algo, puedes hacerlo volver, y hasta incluso volverlo a sacrificar. ¡El ciclo de la vida y la muerte!\n\n Te recomiendo que pruebes estos commanders para empezar:\n- Jarad, Golgari Lich Lord\n- Chatterfang, Squirrel General\n- Greta, Sweettooth Scourge\n- Savra, Queen of the Golgari");
                    let resultado2 = "Golgari Sacrifice";
                    if (!arrayDeResultados.includes(resultado2)) {
                        arrayDeResultados.push(resultado2)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return golgari();
            }
        }

        function procesarDimir(respuestaDimir) {
            switch (respuestaDimir) {
                case 1:
                    alert("Tenemos un/a cleptómano/a justo aquí. si tanto te gusta tomar cosas ajenas, esta estrategia te va a encantar. ¿Tuyo?... NUESTRO.\n Con estos colores tienes a tu disposición una veriedad de efectos que te permiten tomar y copiar las cartas de los demas para usarlas en su contra. ¡La traición, hermano!\n\n Algunos commanders buenos para esto son:\n- Xanathar, Guild Kingpin\n- Dragonlord Silumgar\n- Tasha, the Witch Queen\n- Jon Irenicus, Shattered One");
                    let resultado1 = "Dimir Thief";
                    if (!arrayDeResultados.includes(resultado1)) {
                        arrayDeResultados.push(resultado1)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                case 2:
                    alert("Veo que te agrada la idea de jugar con la mente de tu oponente y quitarle las opciones de raiz.\n Para tal personalidad, puedo sugerirte probar estrategias de 'mill' (Enviar cartas del mazo de tus contrincantes directo al cementerio). ¡Si alguien intenta robar una carta de su mazo y ya no puede porque no tiene más, automáticamente pierde!\n\nAqui te dejo una lista de commanders para que puedas ganar usando mill:\n- Captain N'ghathrod\n Phenax, God of Deception\n- Anowon, the Ruin Thief\n- Mirko Vosk, Mind Drinker");
                    let resultado2 = "Dimir Mill";
                    if (!arrayDeResultados.includes(resultado2)) {
                        arrayDeResultados.push(resultado2)
                    } else {
                        alert("Ya habías obtenido el mismo resultado antes.\nLocura es hacer lo mismo una y otra vez y esperar resultados diferentes.")
                    }
                    break;
                default:
                    alert("Respuesta no válida, por favor ingresa 1 o 2")
                    return dimir();
            }
        }

/* Array conteniendo todos los resultados obtenidos por el usuario */

    const arrayDeResultados = [];

/* Funcion principal, la que inicia todos los procesos */

    function main() {
        let continuar = true;
        while (continuar) {
            alert("Responde las siguientes preguntas con sinceridad y descubre tu estilo de juego en Magic the Gathering en el formato Commander:");
            let respuestaDificultad = dificultad();
            procesarDificultad(respuestaDificultad);
            colores.azul = 0
            colores.blanco = 0
            colores.rojo = 0
            colores.verde = 0
            colores.negro = 0
            continuar = confirm("Este test no es perfecto, tal vez quieras explorar otras opciones.\n Volver a intentarlo?");
        }
        let mensaje = "Estos son los resultados que has tenido:\n";
        arrayDeResultados.forEach(resultado => {
            mensaje += resultado + "\n";
        });
        mensaje = (mensaje += "(Si te interesa, puedes buscar en Google estas palabras clave para aprender más)")
        alert(mensaje)
    }

/* Finalmente, se llama a la función principal */

    main();