import { FC } from 'react';

import { LanguagesTag } from './LanguagesTag';

import avatarSquare from '../../images/svg/card-avatar-square.svg';
import femaleGender from '../../images/svg/card-gender-female.svg';
import maleGender from '../../images/svg/card-gender-male.svg';
import arrows from '../../images/svg/card-arrows-parallel.svg';

import styles from './Card.module.scss';
import cn from 'classnames';
import CountryIcon from '../UI/CountryIcon/CountryIcon';
import UserStatusIndicator from '../UI/UserStatusIndicator/UserStatusIndicator';
import GenderAndAgeIcon from '../UI/GenderAndAgeIcon/GenderAndAgeIcon';

interface IProps {
  country?: any;
  status: string;
  indicator: boolean;
  avatar?: string;
  first_name?: string;
  gender?: string;
  gender_is_hidden: boolean;
  age?: string;
  about?: string;
  nativeLanguages?: any;
  foreignLanguages?: any;
}

export const Card: FC<IProps> = ({
  country,
  avatar,
  status,
  first_name,
  gender,
  gender_is_hidden,
  age,
  about,
  indicator,
  nativeLanguages,
  foreignLanguages,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__countryAndStatusTag}>
        <CountryIcon country={country} />
        <UserStatusIndicator indicator={indicator} status={status} />
      </div>
      <div className={styles.card__partnerAbout}>
        <img
          className={styles.card__partnerAvatar}
          src={avatar ? avatar : avatarSquare}
          alt="Аватар пользователя"
        />
        <div className={styles.card__partnerInfo}>
          <div className={styles.card__partnerPersonalInfo}>
            <p className={styles.card__partnerPersonalInfo_firstName}>{first_name}</p>
            <GenderAndAgeIcon gender={gender} age={age} gender_is_hidden={gender_is_hidden} />
            <div className={styles.card__partnerPersonalInfo_languagesTag}>
              <div className={styles.card__partnerPersonalInfo_languages}>
                <ul className={styles.languages}>
                  {nativeLanguages &&
                    nativeLanguages.map((languages: any) => <LanguagesTag languages={languages} />)}
                </ul>
              </div>
              <img
                className={
                  nativeLanguages.length > 0 || foreignLanguages.length > 0
                    ? styles.card__partnerPersonalInfo_arrows
                    : styles.card__partnerPersonalInfo_arrows_hidden
                }
                src={arrows}
                alt="Параллельные стрелки между изученными и изучаемыми языками"
              />
              <div className={styles.card__partnerPersonalInfo_languages}>
                <ul className={styles.languages}>
                  {foreignLanguages &&
                    foreignLanguages.map((languages: any) => (
                      <LanguagesTag languages={languages} />
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.card__partnerGreeting}>{about}</p>
    </article>
  );
};
