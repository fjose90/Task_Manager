# Documento Lista de User Stories
## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos no [Documento 001 - Documento de Visão](doc-visao.md). Este documento também pode ser adaptado para descrever Casos de Uso. Modelo de documento baseado nas características do processo easYProcess (YP).

## Histórico de revisões

| Data       | Versão |             Descrição             | Autor |
| :--------- | :----: | :-------------------------------: | :---- |
| 07/01/2022 | 0.0.1  | Template e descrição do documento |
| ...        |  ...   |                ...                | ...   |

## Requisitos

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
| RF10 - Excluir tarefas            | Requisito de exclusão de um Plano.                             | Usuário |
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

### User Story US01 - Manter Usuário

|               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro de usuário que tem acesso ao sistema via login e senha. Um usuário tem os atributos name, id, email, username, data de nascimento, tipo de usuário, status, password, avatarURL. O email será o login e ele pode registrar-se diretamente no sistema, o avatarURL é um link para uma foto de seu perfil. Além disso o usuário poderá alterar alguns dados, como o e-mail ou a senha. O usuário administrador do sistema pode realizar as operações de adicionar, alterar, remover e listar os usuários comuns do sistema. |

| **Requisitos envolvidos** |                                |
| ------------------------- | :----------------------------- |
| RF01                      | Cadastrar Usuário              |
| RF02                      | Alterar Usuário                |
| RF03                      | Consultar Usuários             |
| RF04                      | Excluir Usuário                |
| RF05                      | Vizualizar detalhes do Usuário |

|                         |           |
| ----------------------- | :-------- |
| **Prioridade**          | Essencial |
| **Estimativa**          | 8 h       |
| **Tempo Gasto (real):** |           |
| **Tamanho Funcional**   | 7 PF      |

| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| **Código**               | **Descrição**                             |
| **TA01.01**              | Descrever o teste de aceitação 01 do US01 |
| **TA01.02**              | Descrever o teste de aceitação 02 do US01 |
| **TA01.03**              | Descrever o teste de aceitação 03 do US01 |
| **TA01.04**              | Descrever o teste de aceitação 04 do US01 |

### User Story US01 - Manter Tarefas

|               |                                                                                                                                                  |
| ------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro de tarefas que tem acesso ao sistema via login e senha. Uma tarefa tem os atributos titulo, descrição, status. |

| **Requisitos envolvidos** |                                |
| ------------------------- | :----------------------------- |
| RF01                      | Cadastrar tarefas              |
| RF02                      | Alterar tarefas                |
| RF03                      | Consultar tarefass             |
| RF04                      | Excluir tarefas                |
| RF05                      | Vizualizar detalhes do tarefas |

|                         |           |
| ----------------------- | :-------- |
| **Prioridade**          | Essencial |
| **Estimativa**          | 8 h       |
| **Tempo Gasto (real):** |           |
| **Tamanho Funcional**   | 7 PF      |

| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| **Código**               | **Descrição**                             |
| **TA01.01**              | Descrever o teste de aceitação 01 do US01 |
| **TA01.02**              | Descrever o teste de aceitação 02 do US01 |
| **TA01.03**              | Descrever o teste de aceitação 03 do US01 |
| **TA01.04**              | Descrever o teste de aceitação 04 do US01 |

### User Story US01 - Manter Categorias

|               |                                                 |
| ------------- | :---------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro de categorias |

| **Requisitos envolvidos** |                                   |
| ------------------------- | :-------------------------------- |
| RF01                      | Cadastrar categorias              |
| RF02                      | Alterar categorias                |
| RF03                      | Consultar categorias              |
| RF04                      | Excluir categorias                |
| RF05                      | Vizualizar detalhes do categorias |

|                         |           |
| ----------------------- | :-------- |
| **Prioridade**          | Essencial |
| **Estimativa**          | 8 h       |
| **Tempo Gasto (real):** |           |
| **Tamanho Funcional**   | 7 PF      |

| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| **Código**               | **Descrição**                             |
| **TA01.01**              | Descrever o teste de aceitação 01 do US01 |
| **TA01.02**              | Descrever o teste de aceitação 02 do US01 |
| **TA01.03**              | Descrever o teste de aceitação 03 do US01 |
| **TA01.04**              | Descrever o teste de aceitação 04 do US01 |
