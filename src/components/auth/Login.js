import React from 'react'
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { REGISTER } from '../../lib/routes'
import { useLogin } from '../../hooks/auth'
import { useForm } from 'react-hook-form'
import { passwordValidate, emailValidate } from '../../utils/form-validate'
import { DASHBOARD } from '../../lib/routes'

export default function Login() {
  const { login, isLoading } = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function handleLogin(data) {
    await login({
      email: data.email,
      password: data.password,
      redirectTo: DASHBOARD,
    })
  }

  return (
    <>
      <Heading mt="30" mb="0" size="lg" textAlign="center" color="purple">
        Social Media App
      </Heading>
      <Center w="100%" h="80vh">
        <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
          <Heading mb="4" size="lg" textAlign="center">
            Login
          </Heading>

          <form onSubmit={handleSubmit(handleLogin)}>
            <FormControl py="2">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter email"
                {...register('email', emailValidate)}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl py="2">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter password"
                {...register('password', passwordValidate)}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt="4"
              type="submit"
              colorScheme="purple"
              size="md"
              w="full"
              isLoading={isLoading}
              loadingText="Logging In"
            >
              Log In
            </Button>
          </form>

          <Text fontSize="xlg" align="center" mt="6">
            Don't have an account?{' '}
            <Link
              as={RouterLink}
              to={REGISTER}
              color="purple.800"
              fontWeight="medium"
              textDecor="underline"
              _hover={{ background: 'purple.100' }}
            >
              Register
            </Link>{' '}
            instead!
          </Text>
        </Box>
      </Center>
    </>
  )
}
