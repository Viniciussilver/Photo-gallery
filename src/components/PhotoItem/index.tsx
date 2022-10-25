import React from 'react'
import { Photo } from '../../types/Photo'
import * as C from './style'

export const PhotoItem = ({ name, url }: { name: string; url: string }) => {
  return (
    <C.Container>
      <img src={url} alt={name} />
      <p>{name}</p>
    </C.Container>
  )
}
