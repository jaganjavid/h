import { useForm } from '@mantine/form';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebaseConfig';
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

const SignIn = () => {

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validate: {
      name: (val) => (val.length === 0) ? 'Please add your name' : null,
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  async function handelForm(){


    
    // const {name, email, password} = form.values;

    const name = "Jagan",
    email = "jagan@gmail.com",
    password = "123455678"


    try{

      const useCredential = await createUserWithEmailAndPassword(auth, name, email, password);

      console.log(useCredential.user);

    }catch(error){
      console.log(error.code);
    }

  }
  return (
    <Paper radius="md" p="xl" withBorder>
    <Text size="lg" fw={500}>
      Welcome to Market Place
    </Text>

    <Divider label="Or continue with email" labelPosition="center" my="lg" />

    <form onSubmit={form.onSubmit(() => {
      handelForm();
    })}>
      <Stack>
         <TextInput
            label="Name"
            type='text'
            placeholder="Your name"
            value={form.values.name}
            onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
            radius="md"
            error={form.errors.name && 'Please type your name'}
          />

        <TextInput
          label="Email"
          placeholder="hello@mantine.dev"
          value={form.values.email}
          onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
          error={form.errors.email && 'Invalid email'}
          radius="md"
          type='email'
        />

        <PasswordInput
          label="Password"
          placeholder="Your password"
          value={form.values.password}
          onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
          error={form.errors.password && 'Password should include at least 6 characters'}
          radius="md"
          // type='text'
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
        <Link to={"/sign-in"}>
           Sign In Insted
        </Link>
      </Text>
    </form>
  </Paper>
  )
}

export default SignIn