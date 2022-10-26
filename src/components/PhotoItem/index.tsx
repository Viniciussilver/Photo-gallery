import React from 'react'
import { Photo } from '../../types/Photo'
import * as C from './style'

type PhotoProps = {
  name: string
  url: string
  onClick: (name: string) => {}
}

export const PhotoItem = ({ name, url, onClick }: PhotoProps) => {
  return (
    <C.Container>
      <img src={url} alt={name} />
      <p>{name}</p>
      <button
        style={{
          cursor: 'pointer',
          padding: 10,
          borderRadius: 10,
          border: 'none',
          backgroundColor: 'blue',
          color: '#fff',
          fontWeight: 'bold',
        }}
        onClick={() => onClick(name)}
      >
        Deletar
      </button>
    </C.Container>
  )
}
