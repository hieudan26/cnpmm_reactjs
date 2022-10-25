import React from 'react';
import PropTypes from 'prop-types';
import {Flex, Heading } from '@chakra-ui/react'
import { Link } from "react-router-dom";

Header.propTypes = {
    
};

function Header(props) {
    return (
        <Flex
        alignItems={"center"}
        justifyContent={"space-around"}
        width={"100%"}
        height={"80px"}
        backgroundColor={"#28EC9D"}
        position={"fixed"}
        marginTop = {"-80px"}
        zIndex="10"
        >
            <Heading as="h3">CNPMM</Heading>
            <Flex>
                <Link to={"/blogs"}>My Blogs</Link>
            </Flex>
            <Heading as="h3">Hello! 19110345- Nguyễn Hiếu Đan</Heading>
        </Flex>
    );
}

export default Header;