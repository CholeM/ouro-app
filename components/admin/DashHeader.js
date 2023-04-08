import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import HeaderProfile from './HeaderProfile'
import { Button, Container } from 'react-bootstrap'

export default function DashHeader(props) {
  const { toggleSidebar, toggleSidebarMd } = props

  return (
    <header className="dashheader sticky-top1 mb-4 py-2 px-sm-2 border-bottom">
      <Container fluid className="header-navbar d-flex align-items-center">
        <Button
          variant="link"
          className="header-toggler d-md-none px-md-0 me-md-3 rounded-0 shadow-none"
          type="button"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Button
          variant="link"
          className="header-toggler d-none d-md-inline-block px-md-0 me-md-3 rounded-0 shadow-none"
          type="button"
          onClick={toggleSidebarMd}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Link href="/client" className="header-brand d-md-none">
        </Link>
        <div className="header-nav d-none d-md-flex">
        </div>
        <div className="header-nav ms-auto">
        </div>
        <div className="header-nav ms-2">
          <HeaderProfile />
        </div>
      </Container>
    </header>
  )
}