import { Formik, Form, Field } from "formik";
import { FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react";
import React from "react";

const initialValues = {
  first_Name: "Stefano",
  last_name: "Campanella",
  email: "stefanocampanella20@gmail.com",
  phone: "4168031061",
};

const UPForm = () => {
  const onSubmit = (values) => {
    // Handle form submission here (e.g., connect to Supabase)
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Box mb={4}>
          <Field name="first_Name">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="first_name">First Name:</FormLabel>
                <Input {...field} id="first_name" placeholder="First name" />
              </FormControl>
            )}
          </Field>
        </Box>

        <Box mb={4}>
          <Field name="last_name">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="last_name">Last Name:</FormLabel>
                <Input {...field} id="last_name" placeholder="Last name" />
              </FormControl>
            )}
          </Field>
        </Box>

        <Box mb={4}>
          <Field name="email">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Input {...field} id="email" placeholder="Email" />
              </FormControl>
            )}
          </Field>
        </Box>

        <Box mb={4}>
          <Field name="phone">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="phone">Phone:</FormLabel>
                <Input {...field} id="phone" placeholder="Phone Number" />
              </FormControl>
            )}
          </Field>
        </Box>

        <Box textAlign="left">
          <Button type="submit" colorScheme="blue" size="lg">
            Save
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default UPForm;
