import { FormControl, FormLabel, Select, Button, Box } from "@chakra-ui/react";

const TechnicalsForm = () => {
  const initialValues = {
    unitOfMeasurement: "imperial", // Set the initial value based on $company['unit_of_measurement']
    currency: "USD", // Set the initial value based on $company['currency']
  };

  const onSubmit = (values) => {
    // Handle form submission here (e.g., connect to Supabase)
    console.log(values);
  };

  return (
    <form
      className="settings-form"
      action="dbSettings_technicals.php"
      method="POST"
    >
      <Box mb={4}>
        <FormControl>
          <FormLabel htmlFor="unitOfMeasurement">
            Unit of Measurement:
          </FormLabel>
          <Select
            id="unitOfMeasurement"
            name="unitOfMeasurement"
            defaultValue={initialValues.unitOfMeasurement}
          >
            <option value="imperial">Imperial (feet)</option>
            <option value="metric">Metric (meters)</option>
          </Select>
        </FormControl>
      </Box>

      <Box mb={4}>
        <FormControl>
          <FormLabel htmlFor="currency">Select the Currency:</FormLabel>
          <Select
            id="currency"
            name="currency"
            defaultValue={initialValues.currency}
          >
            <option value="USD">US Dollar ($)</option>
            <option value="CAD">Canadian Dollar ($)</option>
          </Select>
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

export default TechnicalsForm;
