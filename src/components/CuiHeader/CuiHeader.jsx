import { Link } from 'react-router-dom'

import './CuiHeader.scss'

const NAV_ITEMS = [
  {
    url: 'ReactJS-Store/dashboard',
    name: 'Dashboard',
  },
  {
    url: 'ReactJS-Store/products',
    name: 'Products',
  },
]

const CuiHeader = () => {
  return (
    <nav className="app-nav">
      {NAV_ITEMS.map((item, index) => {
        return (
          <Link
            className="item-link"
            key={item.name + index}
            to={item.url}
            component={Link}
          >
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default CuiHeader
