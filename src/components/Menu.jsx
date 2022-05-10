import './Menu.css'

const Menu = ({ time, updateTime }) => {
  function activeClass() {
    const linksMenu = document.querySelectorAll('nav a')
    console.log(linksMenu)
    linksMenu.forEach((link) => {
      link.classList.remove('active')
    })
  }
  return (
    <div className='menu'>
      <div className='user'>
        <img src='./images/image-jeremy.png' alt='asda' />
        <h1>
          <small>Report for</small>
          <br />
          Jeremy Robson
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <a
              className='active'
              onClick={(e) => {
                e.preventDefault()
                updateTime('daily')
                activeClass()
                e.target.classList.add('active')
              }}
            >
              Daily
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault()
                activeClass()
                e.target.classList.add('active')
                updateTime('weekly')
              }}
            >
              Weekly
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault()
                activeClass()
                e.target.classList.add('active')
                updateTime('monthly')
              }}
            >
              Monthly
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
