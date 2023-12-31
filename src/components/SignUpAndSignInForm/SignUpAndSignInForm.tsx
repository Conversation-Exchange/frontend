import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {observer} from 'mobx-react-lite';

import {Input} from '../UI/Input/Input';
import {Button} from '../UI/Button/Button';

import styles from './SignUpAndSignInForm.module.scss';
import {useModel} from './model';
import cn from "classnames";

const SignUpAndSignInForm = () => {
    const model = useModel();

    const location = useLocation();
    const pathName: string = location.pathname;

    const [isSignUp, setSignUp] = useState(true);

    const checkIsSignUp = () => {
        pathName === "/signup"
            ? setSignUp(true)
            : setSignUp(false)
    }

    useEffect(() => {
        checkIsSignUp();
    }, [pathName]);


    return (
        <form className={styles.form} onSubmit={isSignUp ? model.handleRegister : model.handleLogin}>
            <Input
                className={styles.form_input}
                type="text"
                name="username"
                value={model.username}
                label="Введите ваше имя"
                isLabelHintHidden={true}
                placeholder="Имя"
                required
                onValue={model.handleUsernameChange}
            />
            <Input
                className={styles.form_input}
                type="email"
                name="email"
                value={model.email}
                label="Введите электронную почту"
                labelHint={isSignUp
                    ? "На почту придет письмо для подтверждения регистрации"
                    : ""
                }
                isLabelHintHidden={!isSignUp}
                placeholder="Электронная почта"
                required
                error={model.error}
                onValue={model.handleEmailChange}
            />
            <Input
                className={styles.form_input}
                type="password"
                name="password"
                value={model.password}
                label={isSignUp
                    ? "Придумайте пароль"
                    : "Введите пароль"
                }
                labelHint={isSignUp
                    ? "Не менее 6 символов, латинскими буквами"
                    : ""
                }
                isLabelHintHidden={!isSignUp}
                placeholder="Пароль"
                required
                error={model.error}
                onValue={model.handlePasswordChange}
            />
            {isSignUp && (
                <Input
                    className={styles.form_input}
                    type="password"
                    name="confirmPassword"
                    value={model.confirmPassword}
                    label="Подтвердите пароль"
                    isLabelHintHidden={true}
                    placeholder="Пароль"
                    required
                    error={model.error}
                    onValue={model.handleConfirmPasswordChange}
                />
            )}
            <div className={styles.form_textTag}>
                {isSignUp && (
                    <label className={styles.form_checkbox}>
                        <input className={cn(styles.form_checkbox_input, styles.form_checkbox_input_signUp)}
                               type="checkbox"
                               required
                        />
                        <span>
                            Продолжая, вы соглашаетесь с
                            <span
                                className={styles.form_checkbox_input_signUp_span}> Условиями пользования Сервисом</span>
                        </span>
                    </label>
                )}
                {!isSignUp && (
                    <label className={styles.form_checkbox}>
                        <input className={cn(styles.form_checkbox_input, styles.form_checkbox_input_signIn)}
                               type="checkbox"/>
                        Запомнить меня
                    </label>
                )}
                {!isSignUp && (
                    <a className={styles.form_forgotLink} href="src/components/UI/SignInForm#">
                        Не помню пароль
                    </a>
                )}
            </div>
            <Button
                className={cn(styles.form_button, isSignUp ? styles.form_button_signUp : styles.form_button_signIn)}
                type="submit"
                variant="primary"
                disabled={model.isLoading}
            >
                {model.isLoading
                    ? 'Loading'
                    : isSignUp
                        ? 'Продолжить'
                        : 'Войти'}
            </Button>
        </form>
    );
};

export default observer(SignUpAndSignInForm);
