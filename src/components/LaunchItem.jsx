import { IoIosRocket, IoMdCalendar } from "react-icons/io";
import { Box, Text, Flex, Tag, Spacer, Button, Icon } from '@chakra-ui/react';

export function LaunchItem(item) {
    return (
        <Box key={item.flight_number} bg="gray.100" p="4" m="5" borderRadius="lg">
            <Flex display="flex" alignItems="center" justifyContent="space-between">
                <Icon as={IoIosRocket} mr="2" color="blue" />
                <Text fontSize="2x1" >
                    mision: <strong>
                        {item.mission_name}
                    </strong> (
                    {item.launch_year}
                    )
                </Text>
                <Spacer />
                <Tag p="4" colorScheme={
                    item.launch_success ? "green" : "red"
                }>
                    {item.launch_success ? "succes" : "failure"}
                </Tag>
            </Flex>

            <Flex display="flex" alignItems="center" justifyContent="start">
                <Icon as={IoMdCalendar} color="gray.500" />
                <Text ml="2" color="gray.500">
                    {item.launch_year}
                </Text>

            </Flex>
            <Flex display="flex" alignItems="center" justifyContent="start">
                <Button mt="2" colorScheme='purple' variant='solid'>More details</Button>
            </Flex>
        </Box>
    )
}
