### UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE

### CENTRO DE ENSINO SUPERIOR DO SERIDÓ

### DEPARTAMENTO DE COMPUTAÇÃO E TECNOLOGIA

### CURSO DE BACHARELADO EM SISTEMAS DE INFORMAÇÃO

#### EQUIPE Devs_Cansados

**Antonio Fernandes**

**Dafne Moretti Moreira**

**Fernando José dos Santos**

**Tiago José Vieira de Oliveira**

# to-do_TS: Documento de Visão

## 1. Introdução

## Equipe e definição de papéis

| Membro                        | Papel                     | Email                           |
| ----------------------------- | ------------------------- | ------------------------------- |
| Antonio Fernandes             | Analista,Testador         | antoniofern.n@gmail.com         |
| Dafne Moretti Moreira         | Desenvolvedora, testadora | moretti.dafne2@gmail.com        |
| Fernando José dos Santos      | Testador                  | fernando.santos.066@ufrn.edu.br |
| Tiago José Vieira de Oliveira | Desenvolvedor,testador    | tiago_jvo@outlook.com           |

## Matriz de Competências

| Membro                   | Competências                                  |
| ------------------------ | --------------------------------------------- |
| Antonio Fernandes        | HTML, CSS, Javascript, NodeJS, React, MongoDB |
| Dafne Moretti Moreira    | Gestão, HTML, CSS, JavaScript, React, Angular |
| Fernando José dos Santos | Python,HTML, CSS, JS, TS, React               |
| Tiago José dos Santos    | HTML, CSS, JS, TS, Node                       |

### 1.1 Propósito do documento de requisitos

Este documento visa a apresentação do sistema **to-do_TS** produzido pela equipe **Devs_Cansados**. Este documento contém todos os requisitos bem como seu escopo e demais informações relevantes para a implementação deste projeto.

### 1.2 Escopo do Produto

O sistema to-do_TS será usado na disciplina de testes de software.

## 2. Descrição Geral

O sistema to-do_TS foi criado para ajudar a um usuário para agendar suas tarefas.

### 2.1 Requisitos Funcionais

| Requisito                         | Descrição                                                      | Ator    |
| --------------------------------- | -------------------------------------------------------------- | ------- |
| RF01 - Cadastrar usuários         | Requisito para a criação de usuários.                          | Usuário |
| RF02 - Atualizar dados do usuário | Requisito para atualizar dados sobre o Usuário.                | Usuário |
| RF03 - Excluir o usuário;         | Requisito de exclusão de um Usuário.                           | Usuário |
| RF04 - Ver dados do usuário       | Requisito para exibir os dados do Usuário.                     | Usuário |
| RF05 - Realizar login             | Requisito para realizar login no sistema.                      | Usuário |
| RF06 - Recuperar senha do usuário | Requisito para recuperar senha de um Usuário                   | Usuário |
| RF07 - Cadastrar tarefas          | Requisito para a criação de tarefas no sistema.                | Usuário |
| RF08 - Exibir tarefas             | Requisito para exibir os dados dos tarefas.                    | Usuário |
| RF09 - Atualizar tarefas          | Requisito para atualizar dados sobre os tarefas.               | Usuário |
| RF10 - Excluir tarefas            | Requisito de exclusão de uma tarefa.                             | Usuário |
| RF11 - Marcar tarefa              | Requisito de marcar tarefa como favorita.                      | Usuário |
| RF12 - Filtrar tarefas            | Requisito de filtrar as tarefas por um campo especifico.       | Usuário |
| RF13 - Criar categoria            | Requisito de criar categorias para definir nas tarefas.        | Usuário |
| RF14 - Alterar categoria          | Requisito de alterar as informações de categorias.             | Usuário |
| RF15 - Visualizar categoria       | Requisito de visualizar as informações de categorias.          | Usuário |
| RF16 - Exclui categoria           | Requisito de exclui uma categoria.                             | Usuário |
| RF17 - Criar comentário           | Requisito de criar comentário para tarefa.                     | Usuário |
| RF18 - Alterar categoria          | Requisito de alterar comentário para tarefa.                   | Usuário |
| RF19 - Visualizar categoria       | Requisito de visualizar comentário para tarefa.                | Usuário |
| RF20 - Exclui categoria           | Requisito de exclui comentário para tarefa.                    | Usuário |

### 2.2 Requisitos não-funcionais

| Requisito                                     | Descrição                                                                             |
| --------------------------------------------- | ------------------------------------------------------------------------------------- |
| RNF001 - Conexão com a internet               | Deve manter uma conexão ativa com a Internet.                                         |
| RNF002 - Sistema operacional Windows ou Linux | O computador deve ter como Sistema Operacional uma dessas 2 opções.                   |
| RNF003 - Deve ser acessível via navegador     | Deve abrir perfeitamente nos principais navegadores de internet, Firefox e no Chrome. |

### 2.3 Perfis dos usuários

O Sistema será usado por apenas 1 tipo de usuários.

**Administrador**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; O usuário poderá cadastrar suas tarefas diárias.

### 2.4 Riscos

O objetivo desta seção é o de produzir uma lista de riscos identificados em todas as fases do projeto e possíveis ações que poderiam ser tomadas para minimizar seus impactos.

1. Riscos de Gerenciamento
   | CÓDIGO | Risco | Plano de Ação |
   | ------ | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
   | RS01 | Sistema não estar alinhado com o negócio | Elaborar uma documentação detalhada e levantamento de requisitos de qualidade |
   | RS02 | Tempo necessário pra codificação for insuficiente. | Planejar e estimar com antecedência o tempo de cada fase do projeto |
   | RS03 | Cliente pedir novas funcionalidades | Aumentar o tempo para a entrega |
   | RS04 | Membro da equipe ficar doente por mais de 2 dias | Realocar as tarefas do membro pra equipe para os demais membros |
   | RS05 | Falta de suporte técnico pós implantação | Inclusão desta cláusula no contrato |
   | RS06 | Falta de preparo técnico dos funcionários na utilização do sistema | Criar um programa de treinamentos para todas as pessoas que irão utilizar o sistema |
2. Riscos de Externos
   | CÓDIGO | Risco | Plano de Ação |
   | ------ | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
   | RS07 | Danos causados nos equipamentos por ações externas | Ter uma backup de dados na máquina e outra fonte externa e realizar backups diários. Utilizar no-breaks com baterias em boas condições |
   | |
3. Riscos Tecnológicos
   | CÓDIGO | Risco | Plano de Ação |
   | ------ | ------------------------------------ | ------------------------------------------ |
   | RS08 | Testes do sistema não serem efetivos | Criar um planejamento detalhado dos testes |

## 3. Histórico de Revisões

| Data       | Versão | Descrição         | Autor             |
| ---------- | ------ | ----------------- | ----------------- |
| 17/11/2021 | 0.0.1  | Documento Inicial | **Devs_Cansados** |
| 07/01/2022 | 0.0.2  | Documento Inicial | **Devs_Cansados** |
|            |        |                   |                   |
