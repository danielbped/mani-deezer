# Maneezer

## Projeto realizado como fase de um processo seletivo
  - O projeto teve como objetivo desenvolver uma aplicação utilizando a API do aplicativo de músicas Deezer, onde é possível pegar todas as informações de artistas, músicas, albuns e previews de cada música.
  - Ferramentas utilizadas:
    - ReactJS;
    - Redux;
    - Styled Components, Styled Icons;
    - Redux Devtools Extension.
  - [API utilizada.](https://rapidapi.com/deezerdevs/api/deezer-1)

## Como instalar
  1 - Abra o terminal e crie um diretório de sua preferência com o comando **mkdir**:
  
    mkdir projeto-mani-deezer
    
  2 - Entre no diretório que acabou de criar e depois clone o projeto com o comando **git clone**:
  
    cd projeto-mani-deezer
    git clone git@github.com:danielbped/mani-deezer.git
    
  3 - Para o projeto funcionar na sua máquia, será necessário instalar suas dependências, para isso, utilize **npm install**:
  
    npm install
    
  4 - Pronto, agora o projeto está pronto para ser rodado localmente, utilizando o comando **npm start**:
  
    npm start
  
 ## Resultado:
 
 ### Página inicial
 ![Página principal](/gifs/mainPage.gif)
 ### Página de músicas favoritas
 ![Página de músicas favoritas](/gifs/favPage.gif)
 ### Após realizar uma busca
 ![Realizando uma busca](/gifs/searchPage.gif)
 ### Responsividade
 ![Responsividade do app](/gifs/response.gif)
 
 ## Requisitos do projeto: 
  ### Primeira View
  - [x] Deverá apresentar a lista das principais músicas do momento listadas na Deezer;
  - [x] Também deve existir um campo de pesquisa por texto onde podemos pesquisar por álbum, artista, ou título musical;
  - [x] Quando realizar alguma pesquisa, a listagem inicial deve ser substituída pela listagem referente a pesquisa. (Usar o mesmo componente de listagem)
  - [x] Os itens da lista devem apresentar:
    - Os dados da música como (capa do álbum, título, cantor, duração);
    - Um botão para acessar a musica completa no Deezer;
    - Um botão de play/pause para escutar a prévia da música;
    - Um botão para adicionar a música na lista de músicas favoritas;
  ### Segunda View
  - [x] Será apresentada a lista com as músicas escolhidas pelo usuário na tela principal. A listagem deve ser semelhante a da tela inicial, porém deve mostrar o botão para remover da lista de favoritos.
