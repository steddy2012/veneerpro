import { Formik, Form, Field } from "formik";
import { FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react";

const initialValues = {
  companyName: "",
  website: "",
  address: "",
  licenseNumber: "",
};

const CDForm = () => {
  const onSubmit = (values) => {
    // Handle form submission here (e.g., connect to Supabase)
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="settings-form">
        <Box mb={4}>
          <Field name="companyName">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="companyName">Company Name:</FormLabel>
                <Input
                  {...field}
                  id="companyName"
                  placeholder="Enter your company name"
                />
              </FormControl>
            )}
          </Field>
        </Box>

        <Box mb={4}>
          <Field name="website">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="website">Website:</FormLabel>
                <Input
                  {...field}
                  id="website"
                  placeholder="Enter your website URL"
                />
              </FormControl>
            )}
          </Field>
        </Box>

        <Box mb={4}>
          <Field name="address">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="address">Address:</FormLabel>
                <Input
                  {...field}
                  id="address"
                  placeholder="Enter your address"
                />
              </FormControl>
            )}
          </Field>
        </Box>

        <Box mb={4}>
          <Field name="licenseNumber">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="licenseNumber">
                  Contractors License Number:
                </FormLabel>
                <Input
                  {...field}
                  id="licenseNumber"
                  placeholder="Enter your license number"
                />
              </FormControl>
            )}
          </Field>
        </Box>

        <Box textAlign="left">
          <Button type="submit" colorScheme="blue" size="lg" marginBottom={4}>
            Save Changes
          </Button>
        </Box>

        {/* Display the notification message if it exists */}
        {sessionStorage.notification && (
          <Box className="notification" color="red.500">
            {sessionStorage.notification}
          </Box>
        )}
      </Form>
    </Formik>
  );
};

export default CDForm;
