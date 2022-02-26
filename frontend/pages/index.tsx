import type {NextPage} from 'next'
import {Button, Container, HStack, Spacer, Text, VStack} from "@chakra-ui/react";
import Post from "../components/Post";
import NewPostModal from "../components/NewPostModal";
import {useState} from "react";
import Card from '../components/Card';
import Comment from '../components/Comment';

//homepage component
const Home: NextPage = () => {

    
   return <Card/>;
    // TODO: Implement this NextPage!
    //return (<Post title="hi" body="hi" postedAt={new Date()}></Post>)
}
export default Home;
