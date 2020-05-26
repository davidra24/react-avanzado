import React, { useState } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Form, Input, Title, Error } from './styles';
import { SubmitButton as Button } from '../../components/SubmitButton';

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input
          type='email'
          placeholder='email'
          {...email}
          disabled={disabled}
        />
        <Input
          type='password'
          placeholder='password'
          {...password}
          disabled={disabled}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
