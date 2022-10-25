import { Photo } from '../types/Photo'

import { storage } from '../libs/firebase'

import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage'
import { v4 as uuid } from 'uuid'

export const getAll = async () => {
  let list: Array<Photo> = []

  const imagesFolder = ref(storage, 'Images')

  const photoList = await listAll(imagesFolder)

  for (let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i])

    list.push({
      name: photoList.items[i].name,
      url: photoUrl,
    })
  }

  return list
}

export const insert = async (file: File) => {
  const types: Array<string> = ['image/jpeg', 'image/jpg', 'image/png']

  if (types.includes(file.type)) {
    let newFile = ref(storage, `Images/${uuid()}`)

    let upload = await uploadBytes(newFile, file)

    let url = await getDownloadURL(upload.ref)

    return {
      name: upload.ref.name,
      url: url,
    } as Photo
  } else {
    return new Error('Tipo de arquivo não permitido.')
  }
}
