# Galery-Photos

Aplicação sendo desenvolvida para fazer upload de Photos.
Tecnologias e dependencias - Reactjs, Typescript, Firebase, Styled-Components, UUID.

* Configurando o projeto com Firebase
* Criado uma service para consultar as photos
~~~~javascript
  import { ref, listAll, getDownloadURL } from "firebase/storage";

  // Referência ao storage e a pasta dela(segundo arg)
  const imagesFolder = ref(storage, "images");
  const photoList = await listAll(imagesFolder); //Lê os arquivos que estão na pasta
  ...
~~~~
