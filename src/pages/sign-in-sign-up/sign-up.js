import React, { useRef } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/auth-context";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    signup(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <>
      <Container className="mt-4">
        <Card className="w-75">
          <CardBody>
            <CardTitle tag="h2" className="text-center mb-4 mt-4">
              Sign Up
            </CardTitle>
            <Form>
              <FormGroup id="email">
                <Label for="email">Email</Label>
                <Input type="email" name="email" required />
              </FormGroup>

              <FormGroup id="password">
                <Label for="password">Password</Label>
                <Input type="password" name="password" required />
              </FormGroup>

              <FormGroup id="password-confirm">
                <Label for="password-confirm"></Label>
                <Input type="password" name="password-confirm" required />
              </FormGroup>
              <Button type="submit" className="w-100">
                Sign Up
              </Button>
            </Form>
          </CardBody>

          <section className="w-100 m-4">
            <Link to="/"> Already have an account? Log In</Link>
          </section>
        </Card>
      </Container>
    </>
  );
};

export default SignUp;
