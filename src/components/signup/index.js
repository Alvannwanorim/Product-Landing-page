import React from "react";
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
} from "./SignupElement";

function SignUp() {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Ex~Global</Icon>

        <FormContent>
          <Form action="#">
            <FormH1>Signup</FormH1>
            <FormLabel htmlFor="for">Name</FormLabel>
            <FormInput type="text" placeholder="Name" required />
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormLabel htmlFor="for">Confirm Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Sign Up</FormButton>
            <Text>
              Already a user? <LinkR to="/signin">Sign In</LinkR>
            </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default SignUp;
