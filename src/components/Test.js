import data from './data.json'
import { useRef } from 'react'

const Test = () => {
  const imgRef = useRef()
  const hRef = useRef()
  let imgs = []
  for (let i = 0; i < data.carousel.restSlides.length; i++) {
    imgs[i] = new Image()
    imgs[i].src = data.carousel.restSlides[i]
  }

  let next = 1
  function slide() {
    // for (let i = 0; i < data.carousel.restSlides.length; i++) {
    imgRef.current.src = data.carousel.restSlides[next]
    next++
    setTimeout(1000)
    next %= data.carousel.restSlides.length
    // }
  }

  function change() {
    hRef.current.innerHTML = 'Hi Hello'
  }

  return (
    <>
      <h3>This is test</h3>
      <img
        id="img"
        src={data.carousel.restSlides[0]}
        alt=""
        ref={imgRef}
        onPlay={slide}
      />
      <h2 id="msg" ref={hRef} onClick={change}>
        Hi
      </h2>
    </>
  )
}

export default Test
