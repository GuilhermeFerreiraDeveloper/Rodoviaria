const prompt = require("prompt-sync")();

console.log("Rodoviária JS");
const onibus = [];

let sair = false

do {
    console.log("[1] Desejo adicionar onibus!\n" +
        "[2] Desejo mostrar frota!\n" +
        "[3] Sair\n")
    let escolha = parseInt(prompt("Qual opção você deseja: "))
    switch (escolha) {
        case 1:
            AdicionarOnibus();
            break;
        case 2:
            MostrarLugares();
            break;
            case 3:
                sair = true;
                console.log("Adeus!")
            break;
            default:
                console.log("opção invalida")
            break;
    }
} while (!sair);

function AdicionarOnibus() {
    let destino = prompt("Informe o destino do ônibus: ");
    let horarioDeSaida = prompt("Informe o horário de saída: ");
    let lugaresDisponiveis = parseInt(prompt("Quantos lugares disponiveis no onibus: "))
    onibus.push({ destino, horarioDeSaida, lugaresDisponiveis });
}

function MostrarLugares() {
    onibus.forEach((onibus) => console.log(onibus))
};