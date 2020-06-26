import React, { useCallback, useRef } from 'react';
import { Container, Content } from './styles';

interface SingInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>Sign In</Content>
    </Container>
  );
};

export default SignIn;
