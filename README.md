# Gerenciador de Contatos (Lista 1 - Arquitetura de Software)

Este projeto foi feito como parte da lista 1 da matéria de Arquitetura de Software, e tem como objetivo demonstrar o uso de um padrão de design estrutural (Flyweight) e um padrão de design comportamental (Factory). O sistema permite criar, listar e gerenciar diferentes tipos de contatos, como Contato, Contato Profissional e Contato de Serviço.

O padrão de design Factory foi feito para criar objetos sem especificar a classe deles. No nosso caso, foi criado uma fábrica para criar contatos, sem precisar explicitamente criar um objeto de cada classe de contato. Além disso, o padrão de design Flyweight foi usado para reduzir a quantidade de memória usada pelos objetos de contato (especificamente aqueles que aparecem varias vezes de maneira repetida em todo servidor, como prefixo de telefone e domínio de email).

## Funcionalidades

-   **Adicionar Contatos**: Adicione novos contatos com informações como nome, telefone e email.
-   **Listar Contatos**: Liste todos os contatos, ou filtre por tipo de contato.
-   **Gerenciar Prefixos e Domínios**: Adicione e gerencie listas de prefixos e domínios para auxiliar na criação de contatos.

## Estrutura do Projeto

-   `Tipos/`: Contém as definições de classes de contatos, incluindo Contato, ContatoProfissional e ContatoServico.
-   `Gerenciadores/`: Contém gerenciadores para prefixos, domínios e contatos.
-   `ContatoFabrica.js`: Fábrica para criar instâncias de diferentes tipos de contatos.
-   `main.js`: Script principal que demonstra como usar as funcionalidades do projeto.

## Tecnologias Utilizadas

-   **Node.js**: Plataforma de execução do JavaScript.
-   **Lodash**: Biblioteca JavaScript de utilidades.

## Como Executar

1. **Clone o repositório**:
    ```bash
    git clone <URL do repositório>
    ```
2. **Instale as dependências**:
    ```bash
    npm install
    ```
3. **Execute o projeto**:
    ```bash
    node main.js
    ```

## Licença

Este projeto é licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
