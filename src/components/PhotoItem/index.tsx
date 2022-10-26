import React from 'react'
import { Photo } from '../../types/Photo'
import * as C from './style'

export const PhotoItem = ({
  name,
  url,
  onClick,
}: {
  name: string
  url: string
  onClick: (name: string) => {}
}) => {
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
