import React, { useCallback, useRef } from 'react';
import { Container, Content, Background } from './styles';

interface SingInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Login</h1>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
