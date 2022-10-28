type ImageProps = {
  open: boolean
  url: string
  onClick: () => void
}

import { Container } from './style'
export const Image = ({ open, url, onClick }: ImageProps) => {
  return (
    <Container open={open}>
      <div>
        <img src={url} alt="Imagem" />
        <button onClick={() => onClick()}>X</button>
      </div>
    </Container>
  )
}
