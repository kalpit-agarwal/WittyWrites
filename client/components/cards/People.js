import { Avatar } from "@chakra-ui/react";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import { useContext } from "react";
import { Box, Text, Stack, Divider } from "@chakra-ui/react";
const People = ({ people, handleFollow }) => {
  const [state] = useContext(UserContext);
  const router = useRouter();
  return (
    <Stack spacing={3}>
      {people.map((person, index) => (
        <Box key={index}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" justifyContent="center">
              <Avatar
                size="sm"
                src={person.image && person.image.url}
                cursor="pointer"
                marginRight="1rem"
              />
              <Text>{person.name}</Text>
            </Box>
            <Text
              as="span"
              color="blue"
              cursor="pointer"
              onClick={() => handleFollow(person)}
            >
              Follow
            </Text>
          </Box>
          {index < people.length - 1 && <Divider mt={2} />}
        </Box>
      ))}
    </Stack>
  );
};

export default People;
