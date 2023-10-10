import data from './data.json'

const Test = () => {
  return (
    <>
      <h3>This is test</h3>
      <img src="images/img1.jpg" alt="" />
      <img src={data.images} alt="" />
    </>
  )
}

export default Test
