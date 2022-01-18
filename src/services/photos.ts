import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as createId} from 'uuid'

export const getAll = async() => {
  let list: Photo[] = [];

  // Referência ao storage e a pasta dela(segundo arg)
  const imagesFolder = ref(storage, "images");
  const photoList = await listAll(imagesFolder); //Lê os arquivos que estão na pasta

  for(let i in photoList.items){
    // Gerar Link Url
    let photoUrl = await getDownloadURL(photoList.items[i])
    
    list.push({
      name: photoList.items[i].name,
      url: photoUrl
    })
  }

  return list
}

// Enviar a fotos
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