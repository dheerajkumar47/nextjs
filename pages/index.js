import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  List,
  ListItem,
  ListIcon,
  Container,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    // fully responsive big <Container> with 100% width
    <Container maxW={"100%"}>
      <Box height={"397px"} backgroundColor={"#6B46C1"}>
        <Center>
          <Text
            fontSize={"48px"}
            color={"#F7FAFC"}
            fontWeight={"bold"}
            marginTop={"88px"}
          >
            Simple pricing for your business
          </Text>
        </Center>
        <Center>
          <Text
            fontSize={"24px"}
            color={"#F7FAFC"}
            opacity={"0.9"}
            marginTop={"10px"}
          >
            Plans that are carefully crafted to suit your business
          </Text>
        </Center>
        <Center>
          <Flex marginTop={"55px"} height={"336px"} wrap={"wrap"}>
            <Box
              width={"378px"}
              backgroundColor={"#f0eafb"}
              borderTopLeftRadius={"lg"}
              borderBottomLeftRadius={"lg"}
              boxShadow={"lg"}
            >
              <Text
                fontSize={"24px"}
                fontWeight={"bold"}
                textAlign={"center"}
                marginTop={"57px"}
              >
                Premium PRO
              </Text>
              <Text fontSize={"60px"} fontWeight={"bold"} textAlign={"center"}>
                $329
              </Text>
              <Text
                fontSize={"18px"}
                textAlign={"center"}
                fontWeight={"semibold"}
              >
                billed just once
              </Text>
              <Center>
                <Button
                  width={"282px"}
                  borderRadius={"md"}
                  backgroundColor={"#805AD5"}
                  color={"white"}
                  marginTop={"10px"}
                >
                  Get Started
                </Button>
              </Center>
            </Box>
            <Box
              width={"616px"}
              backgroundColor={"white"}
              borderTopRightRadius={"lg"}
              borderBottomRightRadius={"lg"}
              boxShadow={"lg"}
            >
              <Text fontSize={"18px"} margin={"48px 48px 24px 48px"}>
                Access these features when you get this pricing package for your
                business
              </Text>
              <List spacing={3} margin={"24px 48px 24px 48px"}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="#6763b3" />
                  International calling and messaging API
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="#6763b3" />
                  Additional phone numbers
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="#6763b3" />
                  Automated messages via Zapier
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="#6763b3" />
                  24/7 support and consulting
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Center>
      </Box>
    </Container>
  );
}
