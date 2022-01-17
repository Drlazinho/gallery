import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

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