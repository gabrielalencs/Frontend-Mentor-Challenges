import Logo from '../../assets/images/logo.svg';
import ConfigIcon from '../../assets/images/icon-units.svg';
import DropdownIcon from '../../assets/images/icon-dropdown.svg';

const Header = () => {
    return (
        <header className='flex items-center justify-between p-6'>
            <div>
                <img src={Logo} alt='Logo Weather Now' />
            </div>

            <div>
                <button className='bg-[#272541] flex items-center gap-3 px-3 py-2 rounded-lg text-white text-lg'>
                    <img src={ConfigIcon} alt='Icone de Configurações' />
                    <span>Units</span>
                    <img src={DropdownIcon} alt='Icone de Dropdown' />
                </button>
            </div>
        </header>
    )
}

export default Header;