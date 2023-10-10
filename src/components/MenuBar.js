const MenuBar = () => {
  return (
    <div>
      <nav
        style={{
          position: 'fixed',
          zIndex: '10',
          width: '100%',
          backgroundColor: 'purple',
          color: 'white',
        }}
      >
        <div className="container-md text-center w-auto p-3">
          <p className="navbar-brand text-center fs-4">
            아침예배 및 캠퍼스 기도 찬양 악보
          </p>
        </div>
      </nav>
    </div>
  )
}

export default MenuBar
