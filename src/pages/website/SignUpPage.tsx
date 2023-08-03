import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Checkbox,
} from "@chakra-ui/react";
import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { supabase } from "src/services/client";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import TLogoRectangle from "src/assets/TLogoRectangle.webp";

interface FormData {
  businessName: string;
  businessAddress: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

const SignUpPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    businessAddress: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  console.log(formData);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            business_name: formData.businessName,
            business_address: formData.businessAddress,
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone: formData.phone,
          },
        },
      });

      if (error) throw error;
      alert("Check your email for verification link");
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
              Create your account:
            </Heading>
            <HStack>
              <Box>
                <FormControl id="businessName" isRequired>
                  <FormLabel>Business Name</FormLabel>
                  <Input
                    type="text"
                    name="businessName"
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="businessAddress" isRequired>
                  <FormLabel>Business Address</FormLabel>
                  <Input
                    type="text"
                    name="businessAddress"
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" name="firstName" onChange={handleChange} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" name="lastName" onChange={handleChange} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone #</FormLabel>
              <Input type="number" name="phone" onChange={handleChange} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input name="email" onChange={handleChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
          </form>
          <Stack spacing={5} direction="row">
            <Checkbox colorScheme="blue" isRequired></Checkbox>
            <Text align={"center"}>
              Agree to our <Link to="/ToS">Terms of Service</Link> and{" "}
              <Link to="/privacyPolicy">Privacy Policy</Link>
            </Text>
          </Stack>
          <Text align={"center"}>
            Already a user? <Link to="/login">Login</Link>
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

export default SignUpPage;
