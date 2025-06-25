const questions = [
  {
    question:
      "Qual modelo de processo de software é caracterizado por fases rígidas e sequenciais, onde uma fase só começa após a anterior terminar?",
    options: ["Scrum", "Ágil", "Cascata", "TDD"],
    correct: "Cascata",
  },
  {
    question:
      "No TDD, qual fase do ciclo 'Vermelho-Verde-Refatoração' consiste em escrever o código mais simples para fazer o teste passar?",
    options: ["Vermelho", "Verde", "Refatoração", "Teste"],
    correct: "Verde",
  },
  {
    question: "Qual é o principal objetivo do Clean Code?",
    options: [
      "Tornar o código mais rápido.",
      "Fazer o software se autodocumentar para facilitar o entendimento por outros desenvolvedores.",
      "Reduzir o número de linhas de código.",
      "Aumentar a complexidade do sistema.",
    ],
    correct:
      "Fazer o software se autodocumentar para facilitar o entendimento por outros desenvolvedores.",
  },
  {
    question:
      "No Scrum, qual papel é responsável por maximizar o valor do trabalho do time, gerenciando e priorizando o Product Backlog?",
    options: [
      "Scrum Master",
      "Time de Desenvolvimento",
      "Product Owner",
      "Stakeholder",
    ],
    correct: "Product Owner",
  },
  {
    question: "Qual dos seguintes é um Requisito Funcional?",
    options: [
      "A transferência Pix deve ser confirmada em menos de 3 segundos.",
      "O acesso ao app deve exigir autenticação biométrica.",
      "Fazer uma transferência via Pix.",
      "O usuário deve conseguir encontrar a opção de extrato em no máximo dois cliques.",
    ],
    correct: "Fazer uma transferência via Pix.",
  },
  {
    question:
      "Segundo o Manifesto Ágil, o que é mais valorizado do que processos e ferramentas?",
    options: [
      "Contratos rígidos",
      "Indivíduos e interações",
      "Documentação abrangente",
      "Negociação de contratos",
    ],
    correct: "Indivíduos e interações",
  },
  {
    question:
      "Qual é a definição essencial de 'código legado' segundo Michael Feathers?",
    options: [
      "Código escrito há muito tempo.",
      "Código sem testes.",
      "Código com muitos bugs.",
      "Código sem documentação.",
    ],
    correct: "Código sem testes.",
  },
  {
    question:
      "Qual prática do XP envolve dois desenvolvedores trabalhando juntos em um único computador, um escrevendo o código e o outro revisando em tempo real?",
    options: [
      "Integração Contínua",
      "Test-Driven Development",
      "Programação em Pares",
      "Scrum de Scrums",
    ],
    correct: "Programação em Pares",
  },
  {
    question:
      "No ciclo da Sprint do Scrum, qual evento a equipe se reúne para planejar o trabalho da próxima Sprint, selecionando itens do Product Backlog?",
    options: [
      "Daily Scrum",
      "Sprint Review",
      "Sprint Retrospective",
      "Sprint Planning",
    ],
    correct: "Sprint Planning",
  },
  {
    question:
      "Qual pilar do Clean Code afirma que funções e métodos devem fazer uma única coisa?",
    options: [
      "Nomes Significativos",
      "Comentários (quando usar)",
      "Funções e Métodos Pequenos",
      "Tratamento de Erros",
    ],
    correct: "Funções e Métodos Pequenos",
  },
  {
    question:
      "Quando um projeto é imprevisível ou os requisitos não são totalmente claros no começo, qual framework é a escolha óbvia?",
    options: ["Modelo Cascata", "TDD", "Scrum", "XP"],
    correct: "Scrum",
  },
  {
    question: "No TDD, qual o propósito da fase 'Refatoração'?",
    options: [
      "Fazer o teste falhar novamente.",
      "Adicionar novas funcionalidades.",
      "Melhorar a qualidade do código com a segurança do teste verde.",
      "Escrever novos testes.",
    ],
    correct: "Melhorar a qualidade do código com a segurança do teste verde.",
  },
  {
    question:
      "Qual o conceito que descreve um código que funciona hoje, mas será um pesadelo para entender, modificar ou expandir amanhã?",
    options: [
      "Clean Code",
      "Débito Técnico",
      "Código Refatorado",
      "Teste Automatizado",
    ],
    correct: "Débito Técnico",
  },
  {
    question:
      "Qual 'cheiro' (smell) de débito técnico é caracterizado por um bug em um bloco de código que precisa ser corrigido em vários lugares porque o mesmo código foi copiado e colado?",
    options: [
      "Rigidez",
      "Fragilidade",
      "Repetição Desnecessária",
      "Invisibilidade",
    ],
    correct: "Repetição Desnecessária",
  },
  {
    question:
      "Qual é a principal diferença entre Requisitos Funcionais e Requisitos Não Funcionais?",
    options: [
      "Requisitos Funcionais descrevem o 'como' e Não Funcionais o 'o quê'.",
      "Requisitos Funcionais descrevem o 'o quê' (funcionalidades) e Não Funcionais o 'como' (qualidades e restrições).",
      "Requisitos Funcionais são sempre mais importantes que os Não Funcionais.",
      "Requisitos Não Funcionais são sempre mais fáceis de implementar.",
    ],
    correct:
      "Requisitos Funcionais descrevem o 'o quê' (funcionalidades) e Não Funcionais o 'como' (qualidades e restrições).",
  },
  {
    question: "Qual é a principal responsabilidade do Scrum Master?",
    options: [
      "Definir o que precisa ser feito e em que ordem.",
      "Construir efetivamente o software.",
      "Garantir que o time siga os valores e práticas do Scrum, removendo impedimentos.",
      "Receber feedback do cliente.",
    ],
    correct:
      "Garantir que o time siga os valores e práticas do Scrum, removendo impedimentos.",
  },
  {
    question:
      "Qual técnica de levantamento de requisitos é mais eficaz para descobrir fluxos de trabalho implícitos e 'manhas' que não seriam mencionadas em uma conversa, como no caso de um cozinheiro experiente?",
    options: [
      "Entrevistas estruturadas",
      "Questionários",
      "Etnografia (observação no local de trabalho)",
      "Brainstorming",
    ],
    correct: "Etnografia (observação no local de trabalho)",
  },
  {
    question:
      "Segundo o Manifesto Ágil, qual a prioridade entre colaboração com o cliente e negociação de contratos?",
    options: [
      "Negociação de contratos é sempre mais importante.",
      "Colaboração com o cliente é mais valorizada para ajustar o rumo e construir o produto certo.",
      "Ambos têm o mesmo peso.",
      "Nenhuma das alternativas.",
    ],
    correct:
      "Colaboração com o cliente é mais valorizada para ajustar o rumo e construir o produto certo.",
  },
  {
    question:
      "Como os testes automatizados funcionam como uma 'rede de segurança' para o desenvolvedor?",
    options: [
      "Eles impedem que o código seja modificado.",
      "Eles dão confiança para refatorar e adicionar funcionalidades sem medo de quebrar algo.",
      "Eles eliminam a necessidade de revisão de código.",
      "Eles automatizam a escrita de código.",
    ],
    correct:
      "Eles dão confiança para refatorar e adicionar funcionalidades sem medo de quebrar algo.",
  },
  {
    question: "Qual o principal benefício da Programação em Pares?",
    options: [
      "Reduzir o tempo de desenvolvimento pela metade.",
      "Gerar código de maior qualidade e disseminação de conhecimento mais rápida.",
      "Eliminar a necessidade de testes.",
      "Aumentar a burocracia no processo.",
    ],
    correct:
      "Gerar código de maior qualidade e disseminação de conhecimento mais rápida.",
  },
  {
    question: "Qual o propósito da cerimônia 'Scrum de Scrums'?",
    options: [
      "Gerenciar o projeto detalhadamente entre equipes.",
      "Sincronizar o trabalho e remover dependências entre múltiplas equipes.",
      "Apenas relatar o que cada equipe fez na última semana.",
      "Discutir salários e benefícios.",
    ],
    correct:
      "Sincronizar o trabalho e remover dependências entre múltiplas equipes.",
  },
  {
    question:
      "Qual a relação entre a qualidade do código inicial e o Custo Total de Propriedade (TCO) do software?",
    options: [
      "A qualidade do código inicial não afeta o TCO.",
      "Alta qualidade inicial aumenta o TCO.",
      "A qualidade do código inicial tem um impacto direto no TCO, com investimento em qualidade sendo uma decisão financeira estratégica.",
      "O TCO só é afetado por bugs após o lançamento.",
    ],
    correct:
      "A qualidade do código inicial tem um impacto direto no TCO, com investimento em qualidade sendo uma decisão financeira estratégica.",
  },
  {
    question:
      "No Quadrante do Débito Técnico, qual tipo de dívida é classificada como 'Imprudente e Inadvertida'?",
    options: [
      "Uma decisão de negócio consciente de pular testes.",
      "Código complexo criado por uma equipe júnior sem conhecimento adequado.",
      "Refatoração agendada para o futuro.",
      "Código bem testado.",
    ],
    correct:
      "Código complexo criado por uma equipe júnior sem conhecimento adequado.",
  },
  {
    question: "Qual o objetivo do Sprint Goal na Sprint Planning?",
    options: [
      "Definir todas as tarefas da Sprint.",
      "Estabelecer um objetivo claro para o ciclo da Sprint.",
      "Revisar o código implementado.",
      "Resolver impedimentos da equipe.",
    ],
    correct: "Estabelecer um objetivo claro para o ciclo da Sprint.",
  },
  {
    question:
      "Segundo os pilares do Clean Code, qual o propósito dos comentários no código?",
    options: [
      "Explicar 'o que' o código faz.",
      "Explicar 'o porquê' de uma abordagem específica.",
      "Adicionar linhas de código sem funcionalidade.",
      "Substituir a necessidade de nomes significativos.",
    ],
    correct: "Explicar 'o porquê' de uma abordagem específica.",
  },
  {
    question: "O Modelo Cascata é ideal para quais tipos de projetos?",
    options: [
      "Projetos inovadores com requisitos mutáveis.",
      "Projetos onde o resultado final é conhecido desde o início e as chances de mudança são mínimas.",
      "Projetos com feedback contínuo do cliente.",
      "Projetos com alta incerteza.",
    ],
    correct:
      "Projetos onde o resultado final é conhecido desde o início e as chances de mudança são mínimas.",
  },
  {
    question:
      "Como o TDD inverte a lógica tradicional de desenvolvimento de software?",
    options: [
      "Ele foca na escrita do código antes dos requisitos.",
      "Ele utiliza os testes como especificação do que o código deve fazer.",
      "Ele prioriza a refatoração antes da escrita do código.",
      "Ele elimina a necessidade de testes manuais.",
    ],
    correct:
      "Ele utiliza os testes como especificação do que o código deve fazer.",
  },
  {
    question:
      "Qual a consequência de pular repetidamente a fase de refatoração no ciclo TDD?",
    options: [
      "O código se torna mais elegante e otimizado.",
      "O código funciona, mas se torna uma coleção de soluções rápidas e desorganizadas, acumulando Débito Técnico.",
      "A velocidade de entrega aumenta indefinidamente.",
      "Os testes param de funcionar.",
    ],
    correct:
      "O código funciona, mas se torna uma coleção de soluções rápidas e desorganizadas, acumulando Débito Técnico.",
  },
  {
    question:
      "Explique por que 'bons nomes são o primeiro e mais importante passo para um código legível', conforme o Clean Code.",
    options: [
      "Nomes longos sempre indicam código limpo.",
      "Nomes significativos permitem que o código conte sua própria história, tornando-o autodocumentado e mais fácil de entender.",
      "Nomes curtos e genéricos economizam espaço.",
      "Nomes não têm impacto na legibilidade, apenas na funcionalidade.",
    ],
    correct:
      "Nomes significativos permitem que o código conte sua própria história, tornando-o autodocumentado e mais fácil de entender.",
  },
  {
    question:
      "Quando a equipe sente que o 'código luta contra ela', qual é o sinal claro, segundo o texto?",
    options: [
      "O projeto está muito fácil.",
      "O Débito Técnico saiu do controle e os juros estão sendo cobrados.",
      "A equipe precisa de mais ferramentas.",
      "Não há problemas no código.",
    ],
    correct:
      "O Débito Técnico saiu do controle e os juros estão sendo cobrados.",
  },
  {
    question: "Qual o risco para o negócio de negligenciar o Débito Técnico?",
    options: [
      "O desenvolvimento se torna mais rápido e previsível.",
      "A qualidade do software melhora.",
      "O desenvolvimento se torna lento, imprevisível e desmotivador para a equipe.",
      "Apenas impacta a estética do código.",
    ],
    correct:
      "O desenvolvimento se torna lento, imprevisível e desmotivador para a equipe.",
  },
  {
    question:
      "Os requisitos não funcionais são frequentemente mais importantes para o sucesso e adoção de um software do que uma longa lista de funcionalidades. Por quê?",
    options: [
      "Eles definem o que o sistema fará.",
      "Eles são mais fáceis de implementar.",
      "Eles definem a experiência do usuário e a viabilidade técnica do projeto, e um usuário abandona um app lento ou em que não confia.",
      "Eles são apenas restrições.",
    ],
    correct:
      "Eles definem a experiência do usuário e a viabilidade técnica do projeto, e um usuário abandona um app lento ou em que não confia.",
  },
  {
    question:
      "Como a estrutura do Scrum (Product Owner, Time de Desenvolvimento, Scrum Master) garante um equilíbrio entre interesses?",
    options: [
      "O Product Owner e o Scrum Master são os únicos que tomam decisões.",
      "Garante que as necessidades do negócio (PO) sejam traduzidas em um produto real pela equipe técnica (Time de Dev), enquanto um facilitador (Scrum Master) garante que o processo flua sem obstáculos.",
      "O Time de Desenvolvimento decide tudo sem intervenção.",
      "O Scrum Master atua como gerente de projeto tradicional.",
    ],
    correct:
      "Garante que as necessidades do negócio (PO) sejam traduzidas em um produto real pela equipe técnica (Time de Dev), enquanto um facilitador (Scrum Master) garante que o processo flua sem obstáculos.",
  },
  {
    question:
      "Qual o principal desafio de levantamento de requisitos quando diferentes stakeholders têm visões conflitantes para o mesmo produto?",
    options: [
      "A falta de conhecimento técnico dos stakeholders.",
      "A dificuldade em mediar essas visões, negociar e encontrar um caminho comum.",
      "A ausência de ferramentas de elicitação de requisitos.",
      "A impossibilidade de registrar todos os requisitos.",
    ],
    correct:
      "A dificuldade em mediar essas visões, negociar e encontrar um caminho comum.",
  },
  {
    question:
      "A ausência de testes em um código alimenta o 'medo da refatoração'. Qual a consequência desse medo a longo prazo?",
    options: [
      "A qualidade do código melhora continuamente.",
      "A qualidade do código se deteriora com o tempo, perpetuando o ciclo do código legado.",
      "O desenvolvimento se torna mais rápido.",
      "Nenhuma consequência, pois o código continuará funcionando.",
    ],
    correct:
      "A qualidade do código se deteriora com o tempo, perpetuando o ciclo do código legado.",
  },
  {
    question:
      "Como a Integração Contínua (CI) contribui para a robustez do software?",
    options: [
      "Ela impede que os desenvolvedores mesclem seu código no repositório principal.",
      "Ela garante que problemas de integração sejam descobertos imediatamente em pequenas partes, compilando o código e rodando testes várias vezes ao dia.",
      "Ela atrasa a descoberta de bugs para o final do projeto.",
      "Ela elimina a necessidade de testes automatizados.",
    ],
    correct:
      "Ela garante que problemas de integração sejam descobertos imediatamente em pequenas partes, compilando o código e rodando testes várias vezes ao dia.",
  },
  {
    question:
      "No contexto da evolução do software como investimento estratégico, por que aplicar Clean Code, TDD e Refatoração não é um 'luxo' ou custo extra?",
    options: [
      "Porque são práticas que tornam o código mais complexo e difícil de modificar.",
      "É um investimento, pois um código limpo e bem testado é muito mais barato e rápido de ser modificado no futuro.",
      "Porque são requisitos obrigatórios de conformidade.",
      "São apenas tendências de mercado sem impacto real nos custos.",
    ],
    correct:
      "É um investimento, pois um código limpo e bem testado é muito mais barato e rápido de ser modificado no futuro.",
  },
  {
    question:
      "Como o Quadrante do Débito Técnico de Martin Fowler ajuda a ter uma conversa mais madura sobre débito técnico?",
    options: [
      "Ele serve para culpar a equipe pela dívida.",
      "Ele transforma a conversa sobre 'culpa' em uma conversa sobre 'risco e estratégia', mostrando diferentes origens da dívida.",
      "Ele foca apenas na dívida intencional.",
      "Ele elimina a necessidade de refatoração.",
    ],
    correct:
      "Ele transforma a conversa sobre 'culpa' em uma conversa sobre 'risco e estratégia', mostrando diferentes origens da dívida.",
  },
  {
    question:
      "Como o fluxo de trabalho de uma Sprint no Scrum implementa um ciclo de Inspeção e Adaptação contínuo?",
    options: [
      "Através da Sprint Planning e da Daily Scrum, focando apenas na execução.",
      "Através da Sprint Review (inspeção do produto e feedback) e da Sprint Retrospective (adaptação do processo da equipe).",
      "Apenas através da entrega do incremento no final da Sprint.",
      "Somente pela supervisão do Scrum Master.",
    ],
    correct:
      "Através da Sprint Review (inspeção do produto e feedback) e da Sprint Retrospective (adaptação do processo da equipe).",
  },
  {
    question:
      "Por que a 'aparência do código importa', conforme o pilar de Formatação do Clean Code?",
    options: [
      "Porque torna o código mais bonito, mas não funcional.",
      "Um padrão consistente de formatação torna o código imensamente mais fácil de ler e entender, afetando diretamente a produtividade.",
      "Para cumprir com padrões estéticos.",
      "Para ocupar mais espaço no arquivo.",
    ],
    correct:
      "Um padrão consistente de formatação torna o código imensamente mais fácil de ler e entender, afetando diretamente a produtividade.",
  },
  {
    question:
      "Qual é a principal desvantagem do Modelo Cascata em projetos onde os requisitos não são totalmente claros no começo, e qual o modelo que se destaca nesses cenários?",
    options: [
      "O Modelo Cascata é flexível, mas o TDD é mais eficaz.",
      "A grande característica do Modelo Cascata é a inflexibilidade; um erro descoberto tardiamente custa caríssimo para corrigir. O Scrum é a escolha óbvia para projetos inovadores ou onde os requisitos não são totalmente claros no começo, devido à sua adaptabilidade e entrega de valor contínua.",
      "O Scrum não possui desvantagens em relação ao Cascata.",
      "A desvantagem do Cascata é que ele não permite testes.",
    ],
    correct:
      "A grande característica do Modelo Cascata é a inflexibilidade; um erro descoberto tardiamente custa caríssimo para corrigir. O Scrum é a escolha óbvia para projetos inovadores ou onde os requisitos não são totalmente claros no começo, devido à sua adaptabilidade e entrega de valor contínua.",
  },
  {
    question:
      "No TDD, qual o objetivo da fase 'Verde', e por que a 'elegância do código' não é a principal preocupação neste momento?",
    options: [
      "A fase 'Verde' é para refatorar o código e torná-lo elegante.",
      "Na fase 'Verde', o objetivo é escrever o código mais simples e rápido possível apenas para fazer aquele teste passar, sem se preocupar com a elegância do código aqui; o objetivo é apenas cumprir o requisito do teste.",
      "A fase 'Verde' serve para adicionar novas funcionalidades complexas.",
      "A fase 'Verde' é para escrever novos testes.",
    ],
    correct:
      "Na fase 'Verde', o objetivo é escrever o código mais simples e rápido possível apenas para fazer aquele teste passar, sem se preocupar com a elegância do código aqui; o objetivo é apenas cumprir o requisito do teste.",
  },
  {
    question:
      "A definição de Michael Feathers para 'código legado' é 'código sem testes'. Por que um código, mesmo que escrito ontem, pode ser considerado um 'campo minado' se não tiver testes automatizados?",
    options: [
      "Porque um código sem testes não pode ser compilado.",
      "Porque qualquer alteração em um código sem testes é um risco, pois você não tem como garantir que não quebrou outra coisa no processo, tornando-o um campo minado.",
      "Porque códigos sem testes são sempre mais lentos.",
      "Porque o código legado só se refere a códigos muito antigos.",
    ],
    correct:
      "Porque qualquer alteração em um código sem testes é um risco, pois você não tem como garantir que não quebrou outra coisa no processo, tornando-o um campo minado.",
  },
  {
    question:
      "No Clean Code, a importância dos 'nomes significativos' é destacada como o primeiro e mais importante passo para um código legível. Explique essa afirmação com um exemplo.",
    options: [
      "Nomes significativos apenas tornam o código mais longo e difícil de ler.",
      "Bons nomes, como 'diasDesdeCriacao' em vez de 'd', ou 'calcularImpostoSobreProduto()' em vez de 'processar()', permitem que o código conte sua própria história, tornando-o autodocumentado e imensamente mais claro, facilitando o entendimento por outros desenvolvedores.",
      "Nomes significativos são apenas uma questão de preferência pessoal.",
      "Nomes curtos e genéricos economizam espaço e são mais eficientes.",
    ],
    correct:
      "Bons nomes, como 'diasDesdeCriacao' em vez de 'd', ou 'calcularImpostoSobreProduto()' em vez de 'processar()', permitem que o código conte sua própria história, tornando-o autodocumentado e imensamente mais claro, facilitando o entendimento por outros desenvolvedores.",
  },
  {
    question:
      "Qual é a principal responsabilidade do Product Owner no Scrum, e como essa responsabilidade contribui para maximizar o valor do trabalho da equipe?",
    options: [
      "O Product Owner é responsável por escrever o código do produto.",
      "O Product Owner é o dono do produto e sua principal responsabilidade é maximizar o valor do trabalho do time, gerenciando e priorizando o Product Backlog, sempre com foco nas necessidades do cliente e nos objetivos do negócio.",
      "O Product Owner deve remover impedimentos da equipe de desenvolvimento.",
      "O Product Owner realiza os testes de aceitação do software.",
    ],
    correct:
      "O Product Owner é o dono do produto e sua principal responsabilidade é maximizar o valor do trabalho do time, gerenciando e priorizando o Product Backlog, sempre com foco nas necessidades do cliente e nos objetivos do negócio.",
  },
  {
    question:
      "Um sistema de aplicativo bancário requer que 'O acesso ao app deve exigir autenticação biométrica ou senha' e que 'A transferência Pix deve ser confirmada em menos de 3 segundos'. A qual categoria de requisitos essas descrições pertencem e por quê?",
    options: [
      "Requisitos Funcionais, pois descrevem funcionalidades essenciais do sistema.",
      "Requisitos Não Funcionais, pois são qualidades e restrições do sistema que definem a experiência do usuário e a viabilidade técnica, como desempenho e segurança.",
      "Requisitos de Negócio, pois são cruciais para o sucesso financeiro do banco.",
      "Requisitos de Usuário, pois são as expectativas diretas dos usuários.",
    ],
    correct:
      "Requisitos Não Funcionais, pois são qualidades e restrições do sistema que definem a experiência do usuário e a viabilidade técnica, como desempenho e segurança.",
  },
  {
    question:
      "Um dos valores do Manifesto Ágil é 'Colaboração com o cliente mais que negociação de contratos'. Qual o impacto prático dessa priorização na construção de um produto de software?",
    options: [
      "O objetivo é prender o cliente a um contrato rígido assinado no início do projeto.",
      "Em vez de se prender a um contrato rígido, o Ágil preza por trazer o cliente para perto, mostrando o progresso, recebendo feedback e ajustando o rumo juntos, com o objetivo de construir o produto certo, e não apenas o produto que foi descrito no contrato inicial.",
      "A negociação de contratos se torna mais importante do que a colaboração.",
      "Essa priorização não tem impacto real na qualidade ou no alinhamento do produto.",
    ],
    correct:
      "Em vez de se prender a um contrato rígido, o Ágil preza por trazer o cliente para perto, mostrando o progresso, recebendo feedback e ajustando o rumo juntos, com o objetivo de construir o produto certo, e não apenas o produto que foi descrito no contrato inicial.",
  },
  {
    question:
      "A Programação em Pares (Pair Programming) é uma prática do XP. Como ela contribui para a qualidade do código (revisado no momento em que é escrito) e a rápida disseminação de conhecimento na equipe?",
    options: [
      "Um desenvolvedor trabalha sozinho para maximizar a produtividade.",
      "Dois desenvolvedores trabalham juntos em um único computador; um é o 'piloto' (escreve o código) e o outro é o 'navegador' (revisa em tempo real, pensa na estratégia e nos possíveis problemas), resultando em código de maior qualidade e uma disseminação de conhecimento muito mais rápida na equipe.",
      "A Programação em Pares é uma prática que aumenta a complexidade do projeto.",
      "Ela elimina a necessidade de testes automatizados, focando apenas na revisão humana.",
    ],
    correct:
      "Dois desenvolvedores trabalham juntos em um único computador; um é o 'piloto' (escreve o código) e o outro é o 'navegador' (revisa em tempo real, pensa na estratégia e nos possíveis problemas), resultando em código de maior qualidade e uma disseminação de conhecimento muito mais rápida na equipe.",
  },
  {
    question:
      "No ciclo da Sprint do Scrum, qual a finalidade da 'Sprint Retrospective' e quem é o público-alvo dessa cerimônia?",
    options: [
      "A Sprint Retrospective tem como propósito demonstrar o incremento de software funcional para os stakeholders e coletar feedback.",
      "Após a Sprint Review, a equipe (e apenas a equipe) se reúne na Sprint Retrospective para refletir sobre seu próprio processo: o que foi bom, o que pode melhorar e qual ação concreta eles tomarão na próxima Sprint para se tornarem mais eficazes.",
      "É uma reunião onde o Product Owner prioriza o Product Backlog para as próximas Sprints.",
      "É um evento diário de 15 minutos para sincronizar o trabalho da equipe.",
    ],
    correct:
      "Após a Sprint Review, a equipe (e apenas a equipe) se reúne na Sprint Retrospective para refletir sobre seu próprio processo: o que foi bom, o que pode melhorar e qual ação concreta eles tomarão na próxima Sprint para se tornarem mais eficazes.",
  },
  {
    question:
      "Um dos pilares do Clean Code é que 'Funções e Métodos Pequenos' devem fazer uma única coisa. Por que essa prática é importante para a manutenibilidade do código?",
    options: [
      "Funções pequenas tornam o código mais complexo e difícil de entender.",
      "Se uma função busca dados, processa e salva em um arquivo, ela está fazendo três coisas. O ideal é quebrá-la em três funções menores. Isso torna o código mais fácil de testar, reutilizar e entender, facilitando a manutenção.",
      "Funções pequenas reduzem o número total de funções no sistema.",
      "Essa prática é apenas uma questão de estilo pessoal, sem impacto na manutenibilidade.",
    ],
    correct:
      "Se uma função busca dados, processa e salva em um arquivo, ela está fazendo três coisas. O ideal é quebrá-la em três funções menores. Isso torna o código mais fácil de testar, reutilizar e entender, facilitando a manutenção.",
  },
];

let availableQuestions = [];
let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let incorrectQuestions = [];

const questionTextElement = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const questionArea = document.getElementById("question-area");
const resultsArea = document.getElementById("results-area");
const correctCountElement = document.getElementById("correct-count");
const totalQuestionsElement = document.getElementById("total-questions");
const incorrectQuestionsList = document.getElementById(
  "incorrect-questions-list"
);
const restartButton = document.getElementById("restart-button");

function initializeQuiz() {
  availableQuestions = [...questions]; // Copia as questões para não modificar o array original
  shuffleArray(availableQuestions); // Embaralha as questões
  currentQuestionIndex = 0;
  correctAnswersCount = 0;
  incorrectQuestions = [];

  questionArea.classList.remove("hidden");
  resultsArea.classList.add("hidden");
  nextButton.classList.add("hidden");
  feedbackElement.textContent = "";
  feedbackElement.className = "feedback"; // Reset feedback class

  displayQuestion();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  if (currentQuestionIndex >= availableQuestions.length) {
    showResults();
    return;
  }

  const questionData = availableQuestions[currentQuestionIndex];
  questionTextElement.textContent = questionData.question;
  optionsContainer.innerHTML = ""; // Limpa as opções anteriores
  feedbackElement.textContent = "";
  feedbackElement.className = "feedback";
  nextButton.classList.add("hidden");

  questionData.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-button");
    button.addEventListener("click", () =>
      handleAnswer(button, option, questionData.correct)
    );
    optionsContainer.appendChild(button);
  });
}

function handleAnswer(selectedButton, selectedOption, correctAnswer) {
  const allOptionButtons = optionsContainer.querySelectorAll(".option-button");
  allOptionButtons.forEach((button) => {
    button.classList.add("disabled"); // Desabilita todos os botões após a seleção
    button.removeEventListener("click", () => {}); // Remove listeners
  });

  if (selectedOption === correctAnswer) {
    selectedButton.classList.add("correct");
    feedbackElement.textContent = "Correto!";
    feedbackElement.classList.add("correct-feedback");
    correctAnswersCount++;
  } else {
    selectedButton.classList.add("incorrect");
    feedbackElement.textContent = `Incorreto. A resposta correta era: "${correctAnswer}"`;
    feedbackElement.classList.add("incorrect-feedback");

    // Encontrar e marcar a resposta correta visualmente
    allOptionButtons.forEach((button) => {
      if (button.textContent === correctAnswer) {
        button.classList.add("correct");
      }
    });

    incorrectQuestions.push({
      question: availableQuestions[currentQuestionIndex].question,
      yourAnswer: selectedOption,
      correctAnswer: correctAnswer,
    });
  }

  nextButton.classList.remove("hidden");
}

function showResults() {
  questionArea.classList.add("hidden");
  resultsArea.classList.remove("hidden");

  correctCountElement.textContent = correctAnswersCount;
  totalQuestionsElement.textContent = questions.length; // Usar o total de questões original

  incorrectQuestionsList.innerHTML = "";
  if (incorrectQuestions.length === 0) {
    incorrectQuestionsList.innerHTML =
      "<li>Parabéns! Você acertou todas as questões!</li>";
  } else {
    incorrectQuestions.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                <strong>Questão:</strong> ${item.question}<br>
                <strong>Sua Resposta:</strong> ${item.yourAnswer}<br>
                <strong>Resposta Correta:</strong> ${item.correctAnswer}
            `;
      incorrectQuestionsList.appendChild(listItem);
    });
  }
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  displayQuestion();
});

restartButton.addEventListener("click", initializeQuiz);

// Iniciar o quiz quando a página carregar
document.addEventListener("DOMContentLoaded", initializeQuiz);
