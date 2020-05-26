import React, { useContext } from 'react';
import { Context } from '../../Context';
import { UserForm } from '../../components/UserForm';
import { RegisterMutation } from '../RegisterMutation';
import { LoginMutation } from '../LoginMutation';

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context);

  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup } = data;
              activateAuth(signup);
            });
          };

          const errorMsg = error && 'El usuario ya existe o hay algún problema';

          return (
            <UserForm
              disabled={loading}
              onSubmit={onSubmit}
              title='Registrarse'
              error={errorMsg}
            />
          );
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            });
          };

          const errorMsg =
            error && 'El usuario no existe o la contraseña es incorrecta';

          return (
            <UserForm
              onSubmit={onSubmit}
              title='Iniciar Sesión'
              disabled={loading}
              error={errorMsg}
            />
          );
        }}
      </LoginMutation>
    </>
  );
};
