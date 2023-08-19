import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/flyweis_logo.png'


const NavCart = () => {
    return (
        <Box background="#fff" mb={"20px"}>
            <Flex w="80%" m={"auto"}  justifyContent={"space-around"}  gap="30%" align={"center"}>
            <Link to="/">
            <Image ml={"30%"} src={logo} alt='error'/>
            </Link>
            <Box display={"flex"} alignItems="center" justifyContent="flex-start"gap={"10px"}>
                <Image src={logo}/>
                <Text style={{fontSize:"18px"}}>100% safe and secure</Text>
            </Box>
        </Flex>
        </Box>
    );
};

export default NavCart;