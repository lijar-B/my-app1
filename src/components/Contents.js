import { useState } from 'react'
import data from './data.json'
import { BsMusicNoteList } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { GiMusicalScore } from 'react-icons/gi'

const Contents = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [currentIndex, setCurrentIndex] = useState(-2)
  return (
    <>
      {selectedIndex === currentIndex ? (
        <ModalTest
          song={data.list[currentIndex]}
          setSelectedIndex={setSelectedIndex}
          currentIndex={currentIndex}
        />
      ) : (
        <Preview
          list={data.list}
          selectedIndex={selectedIndex}
          setCurrentIndex={setCurrentIndex}
          setSelectedIndex={setSelectedIndex}
        />
      )}
    </>
  )
}

const Preview = (
  { list, selectedIndex, setSelectedIndex, setCurrentIndex } = this.props,
) => {
  let numberOfSongs = 0

  return (
    <>
      <ul className="list-group">
        {list.map((item, index) => (
          <>
            <li
              className={
                selectedIndex === index
                  ? 'list-group-item active'
                  : 'list-group-item'
              }
              onClick={() => {
                setSelectedIndex(index)
                setCurrentIndex(index)
              }}
              style={{ color: 'purple' }}
              key={item}
            >
              <span style={{ marginRight: '0.5rem' }}>{++numberOfSongs}</span>

              <BsMusicNoteList
                style={{ marginRight: '0.5rem', color: 'purple' }}
              />

              {item}
            </li>
          </>
        ))}
      </ul>
    </>
  )
}

const ModalTest = ({ song, currentIndex, setSelectedIndex } = this.props) => {
  return (
    <div className="position-absolute" style={{ margin: '1rem' }}>
      <h3 style={{ marginTop: '1rem', color: 'purple', marginBottom: '2rem' }}>
        <GiMusicalScore />
        {data.list[currentIndex]}
        <GiMusicalScore />
      </h3>
      <button
        type="button"
        className="btn-close btn"
        position="end"
        aria-label="Close"
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          color: 'purple',
        }}
        onClick={setSelectedIndex}
      ></button>
      <img src={data.images[currentIndex]} width={350} alt="" />
      <div className="modal-footer" style={{ margin: '0.5rem' }}>
        <a href={data.youtube[currentIndex]} style={{ marginRight: '0.5rem' }}>
          <button
            type="button"
            className="btn"
            style={{ backgroundColor: 'purple', color: 'white' }}
          >
            <BsYoutube style={{ fontSize: '1.5rem', marginRight: '0.5rem' }} />
            YouTube
          </button>
        </a>
        <a href={data.images[currentIndex]} download={song}>
          <button
            type="button"
            className="btn"
            style={{ backgroundColor: 'purple', color: 'white' }}
          >
            <FaCloudDownloadAlt
              style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}
            />{' '}
            Download
          </button>
        </a>
      </div>
    </div>
  )
}

export default Contents
