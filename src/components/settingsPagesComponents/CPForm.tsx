import { Formik, Form, Field } from "formik";
import { FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react";

const initialValues = {
  current_password: "**********",
  new_password: "",
  confirm_password: "",
};

const CPForm = () => {
  const onSubmit = (values) => {
    // Handle form submission here (e.g., connect to Supabase)
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Box mb={4}>
          <Field name="current_password">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="current_password">
                  Current Password
                </FormLabel>
                <Input
                  {...field}
                  type="password"
                  id="current_password"
                  placeholder="Password"
                />
              </FormControl>
            )}
          </Field>
        </Box>

        <Box mb={4}>
          <Field name="new_password">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="new_password">New Password</FormLabel>
                <Input
                  {...field}
                  type="password"
                  id="new_password"
                  placeholder="New Password"
                />
              </FormControl>
            )}
          </Field>
        </Box>

        <Box mb={4}>
          <Field name="confirm_password">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="confirm_password">
                  Confirm Password
                </FormLabel>
                <Input
                  {...field}
                  type="password"
                  id="confirm_password"
                  placeholder="Confirm New Password"
                />
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

export default CPForm;
