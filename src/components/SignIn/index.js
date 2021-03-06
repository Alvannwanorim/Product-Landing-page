import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
  LinkR,
} from "./SigninElements";

function SignIn() {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Ex~Global</Icon>

        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your Account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">continue</FormButton>
            <Text>Forgot password?</Text>
            <Text>
              Don't have an acoount? <LinkR to="/signup">Sign Up</LinkR> Instead
            </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default SignIn;
