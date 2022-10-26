import { useState, useEffect, FormEvent } from 'react'

import { Ring, LineWobble } from '@uiball/loaders'

import * as Photos from './services/photos'

import * as C from './AppStyles'
import { Photo } from './types/Photo'
import { PhotoItem } from './components/PhotoItem'

const App = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [list, setList] = useState<Photo[]>([])

  const [uploading, setUploading] = useState(false)

  const getPhotos = async () => {
    setLoading(true)

    setList(await Photos.getAll())

    setLoading(false)
  }

  useEffect(() => {
    getPhotos()
  }, [])

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const file = formData.get('image') as File

    if (file && file.size > 0) {
      setUploading(true)

      let result = await Photos.insert(file)

      setUploading(false)

      if (result instanceof Error) {
        alert(result.message)
      } else {
        let listPhotos = list

        listPhotos.push(result)
        setList(listPhotos)
      }
    } else {
      alert('Selecione uma foto.')
    }
  }

  const handleDelete = async (name: string) => {
    await Photos.deletePhoto(name)
    getPhotos()
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method="post" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          <span>
            {uploading ? (
              <LineWobble size={50} lineWeight={5} speed={1.75} color="#fff" />
            ) : (
              ''
            )}
          </span>
        </C.UploadForm>

        {loading && (
          <C.ScreenWarning>
            <Ring size={50} lineWeight={5} speed={2} color="#fff" />
          </C.ScreenWarning>
        )}

        {!loading && list.length > 0 && (
          <C.PhotoList>
            {list.map((item, index) => (
              <PhotoItem
                key={index}
                name={item.name}
                url={item.url}
                onClick={name => handleDelete(name)}
              />
            ))}
          </C.PhotoList>
        )}

        {!loading && list.length === 0 && (
          <C.ScreenWarning>
            <h2>Não há fotos cadastradas.</h2>
          </C.ScreenWarning>
        )}
      </C.Area>
    </C.Container>
  )
}

export default App
