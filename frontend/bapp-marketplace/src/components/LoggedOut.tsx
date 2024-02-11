import { Box, Heading } from "@chakra-ui/react";

function LoggedOut() {

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="4" mt="4">
      <Heading as="h2" size="md">
        You are not authenticated
      </Heading>
    </Box>
  )
}

export default LoggedOut
