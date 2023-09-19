// import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
// import { GoogleButton } from './GoogleButton';
// import { TwitterButton } from './TwitterButton';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Stack,
} from '@mantine/core';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

const SignIn = () => {

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });


  function handelForm(){

    const {email, password} = form.values;
    
    const users = {
      email,
      password
    }

    console.log(users);
  }

  return (
    <Paper radius="md" p="xl" withBorder>
    <Text size="lg" fw={500}>
      Welcome Back
    </Text>

    {/* <Group grow mb="md" mt="md">
      <GoogleButton radius="xl">Google</GoogleButton>
      <TwitterButton radius="xl">Twitter</TwitterButton>
    </Group> */}

    <Divider label="Or continue with email" labelPosition="center" my="lg" />

    <form onSubmit={form.onSubmit(() => {
      handelForm();
    })}>
      <Stack>
        <TextInput
          label="Email"
          placeholder="hello@mantine.dev"
          value={form.values.email}
          onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
          error={form.errors.email && 'Invalid email'}
          radius="md"
        />

        <PasswordInput
          label="Password"
          placeholder="Your password"
          value={form.values.password}
          onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
          error={form.errors.password && 'Password should include at least 6 characters'}
          radius="md"
        />
      </Stack>

      

      <Group style={{
        justifyContent:"space-between"
      }} mt="xl">
        <Button type="submit" radius="xl">
          Sign In
        </Button>
        <Link to="/forgot-password">
          Forgot Password
        </Link>
      </Group>

      <Text>
        <Link to={"/sign-up"}>
           Sign Up Insted
        </Link>
      </Text>
    </form>
  </Paper>
  )
}

export default SignIn