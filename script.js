const opciones = ['piedra', 'papel', 'tijera'];

// REPARTIR CARTAS ALEATORIAS
function repartirCartas(n = 5) {
    const cartas = [];
    for (let i = 0; i < n; i++) {
        cartas.push(opciones[Math.floor(Math.random() * opciones.length)]);
    }
    return cartas;
}

// RESULTADOS: GANAR, PERDER O EMPATAR
function resultado(cartaJugador, cartaMaquina) {
    if (cartaJugador === cartaMaquina) {
        return 0; // empate
    } else if (
        (cartaJugador === 'piedra' && cartaMaquina === 'tijera') ||
        (cartaJugador === 'tijera' && cartaMaquina === 'papel') ||
        (cartaJugador === 'papel' && cartaMaquina === 'piedra')
    ) {
        return 1; // gana jugador
    } else {
        return -1; // gana máquina
    }
}

// REPARTIR CARTAS
let cartasJugador = repartirCartas();
let cartasMaquina = repartirCartas();

const cartasJugadorElement = document.querySelector('.cartas-jugador');

