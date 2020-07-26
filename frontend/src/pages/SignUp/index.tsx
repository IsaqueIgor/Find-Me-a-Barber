import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { Container, Content, AnimationContainer, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={() => {}}>
            <h1>Register</h1>

            <Input name="name" icon={FiUser} placeholder="Name" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="password"
            />

            <Button type="submit">Submit</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Back to Login Page
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignUp;
