# Documento Lista de User Stories
## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos no [Documento 001 - Documento de Visão](doc-visao.md). Este documento também pode ser adaptado para descrever Casos de Uso. Modelo de documento baseado nas características do processo easYProcess (YP).

## Histórico de revisões

| Data       | Versão |             Descrição             | Autor |
| :--------- | :----: | :-------------------------------: | :---- |
| 07/01/2022 | 0.0.1  | Template e descrição do documento |
| ...        |  ...   |                ...                | ...   |

## Requisitos
| Requisito                         | Descrição                                        | Ator    |
| --------------------------------- | ------------------------------------------------ | ------- |
| RF01 - Cadastrar usuários         | Requisito para a criação de usuários.            | Usuário |
| RF02 - Atualizar dados do usuário | Requisito para atualizar dados sobre o usuário.  | Usuário |
| RF03 - Excluir o usuário;         | Requisito de exclusão de um usuário.             | Usuário |
| RF04 - Ver dados do usuário       | Requisito para exibir os dados do usuário.       | Usuário |
| RF05 - Realizar login             | Requisito para realizar login no sistema.        | Usuário |
| RF06 - Recuperar senha do usuário | Requisito para recuperar senha de um usuário.    | Usuário |
| RF07 - Cadastrar tarefas          | Requisito para a criação de tarefas.             | Usuário |
| RF08 - Exibir tarefas             | Requisito para exibir os dados das tarefas.      | Usuário |
| RF09 - Atualizar tarefas          | Requisito para atualizar dados sobre as tarefas. | Usuário |
| RF10 - Excluir tarefas            | Requisito de exclusão de uma tarefa.             | Usuário |
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