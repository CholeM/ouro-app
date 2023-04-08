import {
  Badge, Dropdown, Nav, NavItem,
} from 'react-bootstrap'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
} from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import Avatar from '../../public/img/blank.png'

const ItemWithIcon = (props) => {
  const { icon, children } = props

  return (
    <>
      <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
      {children}
    </>
  )
}

export default function HeaderProfile() {
  const router = useRouter()

  const logout = async () => {
    const res = await axios.post('/api/mock/logout')
    if (res.status === 200) {
      router.push('/login')
    }
  }

  return (
    <Nav>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle variant="link" bsPrefix="hide-caret" className="py-0 px-2 rounded-0" id="dropdown-profile">
          <div className="avatar position-relative">
            <Image
              fill
              className="rounded-circle"
              src={Avatar}
              alt="user@email.com"
            />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="pt-0">
          <Dropdown.Header className="bg-light fw-bold rounded-top">Account</Dropdown.Header>
            <Dropdown.Item>
              Name: <b>Ouro Admin</b>
            </Dropdown.Item>
            <Dropdown.Item>
              Company: <b>Ouro</b>
            </Dropdown.Item>
            <Dropdown.Item>
              Email: <b>ourouser@gmail.com</b>
            </Dropdown.Item>
          <Link href="/client/profile" passHref legacyBehavior>
            <Dropdown.Item>
              <ItemWithIcon icon={faUser}>
                Profile
              </ItemWithIcon>
            </Dropdown.Item>
          </Link>

          <Dropdown.Divider />

          <Dropdown.Item onClick={logout}>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  )
}