import React, { useRef, useState, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { Container, Content, Background, AnimationContainer } from './styles';
import Logo from '../../assets/Logo.png';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import Button from '../../components/Button';
import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Enter a valid email')
            .required('E-mail Required'),
          password: Yup.string().required('Password Required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setLoading(true);

        await signIn({
          email: data.email,
          password: data.password,
        });

        setLoading(false);

        history.push('/dashboard');
      } catch (err) {
        setLoading(false);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Invalid Credentials',
          description: 'Something went wrong, Check your login and Passwords',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={Logo} alt="FMAB" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>LOGIN</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />

            <Button type="submit">Sign In</Button>

            <Link to="/forgot-password">Forgor Password?</Link>
          </Form>

          <Link to="/signup">
            <FiLogIn />
            Create Account
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
