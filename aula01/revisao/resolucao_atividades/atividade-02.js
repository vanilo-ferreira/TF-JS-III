/* As atividades devem ser entregues através do link do GitHub. Fique atento para que o repositório seja público, assim poderei corrigir :) 

Crie um sistema de controle de acesso para um prédio que precisa verificar se um usuário tem permissão para entrar. O programa deve analisar 3 dados: nome do usuário, seu nível de acesso (visitante, funcionário, gerente ou administrador) e o horário de acesso como entrada. O programa deve:
Verificar se o horário de acesso está dentro do horário de funcionamento do prédio (8h às 22h).
Caso seja visitante, o horário de visitas só é permitido entre 9h e 18h.
Verificar se o nível de acesso do usuário é suficiente para entrar no prédio no horário especificado.
Conceder acesso ao usuário se todas as condições forem atendidas.
Negar acesso ao usuário se alguma das condições não for atendida.
Ao fim exiba uma frase amigável dizendo se a entrara está permitida. Caso não seja permitida, deixe claro o porquê.*;
*/

// Dados do usuário
const nomeUsuario = "João";
const nivelAcesso = "visitante"; // Exemplo: visitante, funcionário, gerente ou administrador
const horarioAcesso = 10; // Exemplo de horário de acesso às 10h

// Verificar se o horário de acesso está dentro do horário de funcionamento do prédio (8h às 22h)
if (horarioAcesso < 8 || horarioAcesso > 22) {
  console.log("Acesso negado. O prédio está fechado.");
} else {
  // Verificar se o nível de acesso do usuário é suficiente para entrar no prédio no horário especificado
  switch (nivelAcesso) {
    case "visitante":
      // Caso seja visitante, o horário de visitas só é permitido entre 9h e 18h
      if (horarioAcesso < 9 || horarioAcesso > 18) {
        console.log("Acesso negado. Visitantes só são permitidos entre 9h e 18h.");
      } else {
        console.log(`Olá, ${nomeUsuario}! Seja bem-vindo(a) ao prédio.`);
      }
      break;
    case "funcionário":
    case "gerente":
    case "administrador":
      // Funcionários, gerentes e administradores têm acesso em qualquer horário
      console.log(`Olá, ${nomeUsuario}! Seja bem-vindo(a) ao prédio.`);
      break;
    default:
      console.log("Acesso negado. Nível de acesso inválido.");
  }
}

// if e else

// Dados do usuário
const nomeUsuario = "João";
const nivelAcesso = "visitante"; // Exemplo: visitante, funcionário, gerente ou administrador
const horarioAcesso = 10; // Exemplo de horário de acesso às 10h

// Verificar se o horário de acesso está dentro do horário de funcionamento do prédio (8h às 22h)
if (horarioAcesso < 8 || horarioAcesso > 22) {
  console.log("Acesso negado. O prédio está fechado.");
} else if (nivelAcesso === "visitante") {
  // Caso seja visitante, o horário de visitas só é permitido entre 9h e 18h
  if (horarioAcesso < 9 || horarioAcesso > 18) {
    console.log("Acesso negado. Visitantes só são permitidos entre 9h e 18h.");
  } else {
    console.log(`Olá, ${nomeUsuario}! Seja bem-vindo(a) ao prédio.`);
  }
} else if (nivelAcesso === "funcionário" || nivelAcesso === "gerente" || nivelAcesso === "administrador") {
  // Funcionários, gerentes e administradores têm acesso em qualquer horário
  console.log(`Olá, ${nomeUsuario}! Seja bem-vindo(a) ao prédio.`);
} else {
  console.log("Acesso negado. Nível de acesso inválido.");
}
