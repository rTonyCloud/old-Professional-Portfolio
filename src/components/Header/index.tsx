import { heartIcon, rtonycloudLogo } from '@/assets/icons'
import Image from 'next/image'
import * as styles from './header.styles.ts'
import { Button } from '../UIComponents/index.ts'

const navItems = ['About', 'Skills', 'Projects']
const mediaItems = ['Github', 'LinkedIn']

const headerText = ['Download Resume']

const buttonStyles = {
    display: 'flex',
    padding: '15px 30px',
}

const Header: React.FC = (): JSX.Element => {
    return (
        <styles.headerWrapper>
            <styles.headerContent>
                {navItems.map((navItem, index) => (
                    <styles.navContent key={index}>{navItem}</styles.navContent>
                ))}
                {mediaItems.map((mediaItem, index) => (
                        <styles.mediaItems key={index}>{mediaItem}</styles.mediaItems>
                    ))}
                <Button variant="blue" sx={buttonStyles}>
                    <Image src={heartIcon} alt="hello" width="20" />
                    {headerText}
                </Button>
            </styles.headerContent>
            <styles.logoWrapper>
                <Image src={rtonycloudLogo} alt="rtonycloud logo" width="200" />
            </styles.logoWrapper>
        </styles.headerWrapper>
    )
}

export default Header
