import styles from './Header.module.scss';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../UI/Button/Button';
import { useModel } from './model';
import logo from '../../images/svg/logo.svg';
import { useLocation } from "react-router";

const Header = () => {
  const model = useModel();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className={styles.header}>
      <Link to={`/`} className={styles.header__link}>
        <img src={logo} alt="Логотип проекта" />
      </Link>  
      <div className={styles.header__buttonContainer}>
        {(location.pathname !== "/signup") && (location.pathname !== "/signin") && 
        <>
          <Button
            className={styles.button}
            type="submit"
            variant="primary"
            disabled={model.isLoading}
            onClick={() => navigate('/signin')}>
            {model.isLoading ? 'Loading' : 'Войти'}
          </Button>
          <Button
            className={styles.button}
            type="submit"
            variant="white"
            disabled={model.isLoading}
            onClick={() => navigate('/signup')}>
            {model.isLoading ? 'Loading' : 'Зарегистрироваться'}
          </Button>
        </>}
      </div>
    </header>
  );
};

export default Header;
