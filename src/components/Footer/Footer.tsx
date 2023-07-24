import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../images/svg/footerlogo.svg';
import tlg from '../../images/svg/telegram.svg';
import vk from '../../images/svg/vk.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__leftColumn}>
          <img src={logo} alt="Логотип проекта" />
          <div className={styles.footer__icons}>
            <Link to={`/`}>
              <img src={tlg} alt="Иконка Телеграм" />
            </Link>
            <Link to={`/`}>
              <img src={vk} alt="Иконка ВКонтакте" />
            </Link>
          </div> 
          <div className='footer__yearText'>
            <p>2023</p>
            <p>Все права защищены</p>
          </div>
        </div>
        <nav className={styles.footer__rightColumn}>
          <div className={styles.footer__textColumn}>
            <Link to={`/`} className={styles.footer__link}>
              <p className={styles.footer__text}>
                Правила сообщества
              </p>
            </Link>
            <Link to={`/`} className={styles.footer__link}>
              <p className={styles.footer__text}>
                Связаться с нами
              </p>
            </Link>
            <Link to={`/`} className={styles.footer__link}>
              <p className={styles.footer__text}>
                Сообщить об ошибке
              </p>
            </Link>
            <Link to={`/`} className={styles.footer__link}>
              <p className={styles.footer__text}>
                Отзывы
              </p>
            </Link>
            <Link to={`/`} className={styles.footer__link}>
              <p className={styles.footer__text}>
                FAQ
              </p>
            </Link>
          </div>
          <div className={styles.footer__linksColumn}>
            <Link to={`/`}>
              <p className={styles.footer__linkText}>
                Файлы Cookie
              </p>
            </Link>
            <Link to={`/`}>
              <p className={styles.footer__linkText}>
                Политика конфиденциальности
              </p>
            </Link>
            <Link to={`/`}>
              <p className={styles.footer__linkText}>
                Пользовательское соглашение
              </p>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;
