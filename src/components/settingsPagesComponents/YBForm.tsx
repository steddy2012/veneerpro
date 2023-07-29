import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Image,
} from "@chakra-ui/react";

const YBForm = () => {
  const onSubmit = (values) => {
    // Handle form submission here (e.g., connect to Supabase)
    console.log(values);
  };

  return (
    <form
      className="settings-form_yourBrand"
      action="dbSettings_yourBrand.php"
      method="POST"
      encType="multipart/form-data"
    >
      <Box mb={4}>
        <FormControl>
          <FormLabel htmlFor="logoUpload">Logo:</FormLabel>
          <Box mt={1}>
            {/* Display logo if it exists */}
            {company.logo && (
              <Image src={company.logo} alt="Logo" width="100px" />
            )}

            {/* Display file input if logo doesn't exist */}
            {!company.logo && (
              <Input
                type="file"
                id="logoUpload"
                name="logoUpload"
                accept=".svg, .jpeg, .png"
              />
            )}
          </Box>
        </FormControl>
      </Box>

      <Box textAlign="left">
        <Button type="submit" colorScheme="blue" size="lg" marginBottom={4}>
          Save Changes
        </Button>
      </Box>
    </form>
  );
};

export default YBForm;
