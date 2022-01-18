# Galery-Photos

Aplicação sendo desenvolvida para fazer upload de Photos.
Tecnologias e dependencias - Reactjs, Typescript, Firebase, Styled-Components, UUID.

* Configurando o projeto com Firebase
* Criado uma service para consultar as photos
~~~~javascript
  import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";

  // Referência ao storage e a pasta dela(segundo arg)
  const imagesFolder = ref(storage, "images");
  const photoList = await listAll(imagesFolder); //Lê os arquivos que estão na pasta
  ...
~~~~
* Carregar as photos
* Upload das Photos através da aplicação gerando um nome aleatório cada.
~~~~javascript
export const insert= async (file: File) => {
  if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)){

    //Gerando um nome aleatorio para cada upload
    let randomName = createId();
    let newFile = ref(storage, `images/${randomName}`)

    let upload = await uploadBytes(newFile, file);
    let photoUrl = await getDownloadURL(upload.ref);

    return { name: upload.ref.name, url: photoUrl } as Photo

  } else {
    return new Error('Tipo de arquivo não permitido.');
  }
}
~~~~
  - Foi utilizado o v4 da lib Uuid para geração de nome aleatório, que esta como o nome createId