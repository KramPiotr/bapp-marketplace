import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";

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
