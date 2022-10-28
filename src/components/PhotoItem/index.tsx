import React from 'react'
import { Photo } from '../../types/Photo'
import * as C from './style'

type PhotoProps = {
  name: string
  url: string
  onClick: (name: string) => {}
  viewImg: (e: string) => void
}

export const PhotoItem = ({ name, url, onClick, viewImg }: PhotoProps) => {
  return (
    <C.Container>
      <img src={url} alt={name} />
      <p>{name}</p>
      <div className="container-buttons">
        <button
          style={{
            cursor: 'pointer',
            padding: 10,
            borderRadius: 10,
            border: 'none',
            backgroundColor: '#756df4',
            color: '#fff',
            fontWeight: 'bold',
          }}
          onClick={() => onClick(name)}
        >
          Deletar
        </button>
        <button onClick={() => viewImg(url)} className="button-view">
          Visualizar imagem
        </button>
      </div>
    </C.Container>
  )
}
