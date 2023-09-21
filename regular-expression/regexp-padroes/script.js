// Regexp Padrões
// Alguns padrões de dados do brasil
// CEP
const regexpCEP = /\d{5}[-\s]?\d{3}/g; 
// um cep tem cinco digitos no inicio então utilizamos o \d{5} para  selecionarmos tais dados 
// logo após é formado um grupo de seleção com [-\s]? porque o cep pode ter tanto um -, quanto um espaço ou até nada, ? significa que aquele grupo é opcional assim ira selecionar os sem nada também
// por fim é selecionado com \d{3} os 3 ultimos digitos
const ceps = [
  '00000000',
  '00000000',
  '00000000'
];

for(cep of ceps) { // um loop é feiro para pegar o cep e ver se ele deu match com a regexp
  console.log(cep, cep.match(regexpCEP));
}


// CPF
// validando um CPF
const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g;
// um cpf é composto por 3 digitos . 3digitos. 3digitos.2digitos
// para não se repetir um padrão o (?:\d{3}[-.]?) é colocado em um grupo, o ?: siginifica que não é para se fazer um grupo de captura
// o [-.]? siginifica que estamos selecionando todos os - e . disponiveis mas isso será opcional pelo uso do ?
// por fim é selecionado os 2 ultimos digitos com \d{2}
const cpfs = [
  '000000000-00',
  '000000000-00',
  '000000000.00',
  '000000000-00',
  '00000000000'
];

for(cpf of cpfs) {
  console.log(cpf, cpf.match(regexpCPF));
}



// CNPJ
// Validando um CNPJ
const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g;
// começa com \d{2} para selecionar os 2 primeiros digitos
// depois o [-.]? seleciona opcionalmente o . ou -
// após é criado um grupo que não é de captura com (?:\d{3}[-.]?) para selecionar os 3 digitos e também o - ou . o {2} siginifica que é utilizado duas vezes
// em seguida outro grupo opcional é criado com [-\/]?
// logo após é selecionado mais quatro digitos \d{4}
// após isto o [-.]? seleciona tanto o - e . ou nada também
// e por ultimo é selecionado os 2 ultimos dois digitos \d{2}
const cnpjs = [
  '00000000/0000-00',
  '00000000000000',
  '000000000000-00',
  '00000000/000000',
  '00000000000000',
  '000000000000.00',
];

for(cnpj of cnpjs) {
  console.log(cnpj, cnpj.match(regexpCNPJ));
}



// TELEFONE
// validando um telefone
const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
// selecionando se tem o +55 ou não com, e se tem espaço ou não com tudo isso sendo opcional  (?:\+?55\s?)
// ?(?:\(?\d{2}\) selecionando os parenteses ou os dois digitos e tambem o que fecha os parenteses, tudo isso é opciona
// após o dd pode vir um espaço ou um traco ?[-\s]
// o \d{4,5} seleciona de quatro a cinco numeros
// [-\s] é opcional e seleciona os espaços ou -
// depois vem por ultimo os 4 ultimos digitos \d{4}
const telefones = [
  '+5511988888888',
  '+5511988888888',
  '+5511988888888',
  '+5511988888888',
  '+5511988888888',
  '5511988888888',
  '11988888888',
  '11988888888',
  '11988888888',
  '11988888888',
  '11988888888',
  '11988888888',
  '11988888888',
  '11988888888',
  '988888888',
  '11988888888',
  '988888888',
  '8888 8888'
];

for(telefone of telefones) {
  console.log(telefone, telefone.match(regexpTELEFONE));
}



// EMAIL
// Validando um email
const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;
// um email começa sempre com letras podem conter . _
// [\w.-] comça com um caracter mas pode conter um . ou - opcional
// +@ isso quer dizer que após o iem anterior tenq ser seguido por um @
// [\w-.]+\ seleciona todas as ocorrencias que contenham dominios
// .[\w-.]+\ seleciona o .com um dominio com diversos sub dominios é também selecionado por causa do +
const emails = [
  'email@email.com',
  'email@email.com.org',
  'email-email@email.com',
  'email_email@email.com',
  'email.email23@email.com.br',
  'email.email23@empresa-sua.com.br',
  'c@contato.cc',
];

for(email of emails) {
  console.log(email, email.match(regexpEMAIL));
}
COPIAR
// http://emailregex.com/



// TAG
// validando uma tag HTML
const regexpTAG = /<\/?[\w\s="']+\/?>/gi;
// o <\/? seleciona a abertura de tag e a de fechamento
// após seleciona qualquer caracter após isto e se tiver um espaço tambem, é passado o ="' para selecionar todos [w\s="']+
// pode ter uma tag ou não para se auto fechar e por fim o caracter que fecha \/?>/
const tags = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>'
];

for(tag of tags) {
  console.log(tag, tag.match(regexpTAG));
}




// TAG APENAS O NOME
// selecionando apenas o nome da tag
const regexpTAGNome = /(?<=<\/?)[\w]+/gi;
// (?<=<\/?)[\w] se tiver o < selecione, mesmo com espaço entre as tag usando o positive lookbehind "(?<+)" 

const tagsNome = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>'
];

for(tag of tagsNome) {
  console.log(tag, tag.match(regexpTAGNome));
}

// Positive Lookbehind (?<=) não está disponível em todos os browsers.