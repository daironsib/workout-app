import { IoMdArrowBack } from 'react-icons/io'
import {TfiUser} from 'react-icons/tfi'
import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = ({ backLink = '' }) => {
	/* TODO: React router useHistory */

	const {pathName} = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathName !== '/' ? (
			<button onClick={() => {navigate(backLink)}}>
				<IoMdArrowBack fill='#fff' fontSize={29} />
			</button>
			) : 
			<button onClick={() => {navigate('/profile')}}>
				<TfiUser fill='#fff' fontSize={27} />
			</button>
			}
			{/* User profile */}
			<Hamburger />
		</header>
	)
}

export default Header
