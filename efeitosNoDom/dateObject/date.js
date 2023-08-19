// date object
// new date()
//O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.

const agora = new Date(); // se nao for passado nenhum argumento ele irar criar uma data com o exato momento em que o js foi executado
agora; // Semana Mês Dia Ano HH:MM:SS GMT
agora.getDate() // Dia
agora.getDay() // Dia da Semana ex: 5 = Fri
agora.getMonth() // Número dia mês
agora.getFullYear() // Ano
agora.getHours() // Hora
agora.getMinutes() // Minutos
agora.getTime() // ms desde 1970
agora.getUTCHours() - 3 // Brasília

// getTime()
//O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.
agora.getTime(); //
function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000) // formula simples para mostrar quantos dias faltam para tal data os numeros dentro do parentese sao 1 e qunatas hrs tem um dia, dps minutos, dps, segundos, e por ultimo quantos milessimos tem os 60 segundos
}
// total de dias desde 1 de janeiro de 1970
const diasPassados = agora.getTime() / (24 * 60 * 60 * 1000);
