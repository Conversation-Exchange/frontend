import { observer } from 'mobx-react-lite';
// import { useNavigate } from 'react-router-dom';

import { Input } from '../../components/UI/Input/Input';
import { Button } from '../../components/UI/Button/Button';

import Header from '../../components/Header/Header';
// import Footer from "../../components/Footer/Footer";

import styles from './SignInPage.module.scss';
import { useModel } from './model';

// import logo from "../../images/svg/logo.svg";
import googleLogo from '../../images/svg/logo-google.svg';
import yandexLogo from '../../images/svg/logo-yandex.svg';
import weiboLogo from '../../images/svg/logo-weibo.svg';

const SignInPage = () => {
  const model = useModel();
  // const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className={styles.content}>
        <h1 className={styles.title}>Войти через</h1>
        <Button
          className={styles.button}
          type="submit"
          variant="white"
          size="l"
          disabled={model.isLoading}>
          <img className={styles.logo} src={googleLogo} alt="Логотип гугл" />
          {model.isLoading ? 'Loading' : 'Вход через аккаунт Google'}
        </Button>
        <Button
          className={styles.button}
          type="submit"
          variant="white"
          size="l"
          disabled={model.isLoading}>
          <img className={styles.logo} src={yandexLogo} alt="Логотип гугл" />
          {model.isLoading ? 'Loading' : 'Вход через аккаунт Yandex'}
        </Button>
        <Button
          className={styles.button}
          type="submit"
          variant="white"
          size="l"
          disabled={model.isLoading}>
          <img className={styles.logo} src={weiboLogo} alt="Логотип гугл" />
          {model.isLoading ? 'Loading' : 'Вход через аккаунт Weibo'}
        </Button>
        <p className={styles.text}>или</p>
        <Input
          type="text"
          name="email"
          value={model.email}
          placeholder="Email или номер телефона"
          required
          onValue={model.handleChange}
        />
        <Input
          className={styles.input}
          type="password"
          name="password"
          value={model.password}
          placeholder="Пароль"
          required
          onValue={model.handleChange}
        />
        <Button
          className={styles.button}
          type="submit"
          variant="primary"
          size="m"
          disabled={model.isLoading}>
          {model.isLoading ? 'Loading' : 'Войти'}
        </Button>
        <a className={styles.link} href="#">
          Не можешь вспомнить свой пароль?
        </a>
      </main>
    </>
  );
};

export default observer(SignInPage);
