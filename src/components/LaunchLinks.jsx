import { IoIosRocket } from "react-icons/io";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Button, Flex, Spacer, Tag, Text } from "@chakra-ui/react";
import * as API from "../services/launches";


export function LaunchLinks(item) {

    const wiki = item.links.wikipedia;
    const article_link = item.links.article_link;
    const youtube = item.links.video_link;
    return (
        <>
            <Box bg="gray.100" p={4} m={4} borderRadius="lg" display="flex" alignItems="center" justifyContent="space-between">
                <Text>{item.rocket?.rocket_name}
                </Text>

                <Box>
                    <a href={`${wiki}`} target="_blank">
                        <Button m="2" colorScheme='purple' variant='solid'>
                            wikipedia
                        </Button>
                    </a>
                    <a href={`${article_link}`} target="_blank">
                        <Button m="2" colorScheme='purple' variant='solid'>
                            articulo
                        </Button>
                    </a>
                    <a href={`${youtube}`} target="_blank">
                        <Button m="2" colorScheme='purple' variant='solid'>
                            youtube
                        </Button>
                    </a>
                </Box>

            </Box>
        </>
    );




}





