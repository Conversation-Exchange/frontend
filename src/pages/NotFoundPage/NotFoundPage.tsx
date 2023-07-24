import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../images/svg/logo.svg';

import './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <section className="pageNotFound">
      <h3 className="pageNotFound__title text_type_digits-large">404</h3>
      <p className="pageNotFound__text text_type_main-medium">Увы, такой страницы нет</p>
      <Link to="/">
        <img src={Logo} alt="logo" className="orderDetails__image"></img>
      </Link>
      <p
        className="pageNotFound__text pageNotFound__link text_type_main-default text_color_inactive"
        onClick={goBack}>
        Назад
      </p>
    </section>
  );
};

export default NotFoundPage;
