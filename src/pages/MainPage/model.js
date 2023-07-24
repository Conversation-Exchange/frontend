import { useLocalObservable } from 'mobx-react-lite';

export const useModel = () => {
    const model = useLocalObservable(() => {
        return {
            isLoading: false,
            error: '',
            message: '',
            email: '',
            password: '',
            isLoggedIn: false,

            handleChange({ value, name }) {
                model[name] = value;
            },
        };
    });

    return model;
};