import {FC} from "react";
import { Stack, HStack} from '@chakra-ui/react'
import {Box, Button, Divider, Text, VStack} from "@chakra-ui/react";
import Comment from "./Comment";

interface Props {
    title: string;
    body: string;
    postedAt: Date;
}

const Post: FC<Props> = ({title, body, postedAt}) => {
    // TODO: Implemnt a Post!
   return(
  <Button colorScheme='teal' size='xs'>
  </Button>);
   }

export default Post;
