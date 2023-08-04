import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { supabase } from "src/services/client";
import { Link, Route, useNavigate } from "react-router-dom";
import TLogoRectangle from "src/assets/TLogoRectangle.webp";

interface TokenData {
  /* Define the structure of your token data here */
  // For example:
  id: number;
  email: string;
  // Add other properties from your actual token data
}

interface LoginProps {
  setToken: (token: TokenData) => void;
}

const LoginPage: React.FC<LoginProps> = ({ setToken }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      setToken(data as unknown as TokenData);
      navigate("/dashboard/overview");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      {/* Logo and Login Form Section */}
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Link to="/">
            <Image src={TLogoRectangle} alt="VeneerPro logo" />
          </Link>
          <form onSubmit={handleSubmit}>
            <Heading fontSize={"2xl"} mt={20} mb={4}>
              Sign in to your account
            </Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" onChange={handleChange} />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.500"}>Forgot password?</Text>
              </Stack>
              <Button type="submit" colorScheme={"blue"} variant={"solid"}>
                Sign in
              </Button>
            </Stack>
          </form>
          <Text align={"center"}>
            Don't have an account? <Link to="/signup">Signup</Link>
          </Text>
        </Stack>
      </Flex>

      {/* Image Section */}
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          }
        />
      </Flex>
    </Stack>
  );
};

export default LoginPage;
