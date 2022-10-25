import { useState, useEffect, FormEvent } from 'react'

import * as Photos from './services/photos'

import * as C from './AppStyles'
import { Photo } from './types/Photo'
import { PhotoItem } from './components/PhotoItem'

const App = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [list, setList] = useState<Photo[]>([])

  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)

      setList(await Photos.getAll())

      setLoading(false)
    }

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

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method="post" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          <span>{uploading ? 'Enviando...' : ''}</span>
        </C.UploadForm>

        {loading && (
          <C.ScreenWarning>
            <div className="emoji">🤚🏽</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        )}

        {!loading && list.length > 0 && (
          <C.PhotoList>
            {list.map((item, index) => (
              <PhotoItem key={index} name={item.name} url={item.url} />
            ))}
          </C.PhotoList>
        )}

        {!loading && list.length === 0 && (
          <C.ScreenWarning>
            <div className="emoji">😐</div>
            <div>Não há fotos cadastradas.</div>
          </C.ScreenWarning>
        )}
      </C.Area>
    </C.Container>
  )
}

export default App
