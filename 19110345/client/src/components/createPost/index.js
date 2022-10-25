import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {Flex, Button, Image,Textarea, Box } from '@chakra-ui/react'
import SinglePost from '../post';

CreatePost.propTypes = {
    addBlog: PropTypes.func,
};

function CreatePost(props) {
    const {addBlog} = props
    const titleRef = useRef()
    const contentRef = useRef()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    return (
        <>
        <Flex
        alignItems="center"
        justifyContent = "center"
        width= "100%"
        h = "160px"
        marginTop={"80px"}
        paddingTop ="60px"
        >
            <Box
                padding= "20px"
                backgroundColor="#50C878"
                borderRadius="20px"
                w="80%"
            >
            <Flex
            maxWidth= "100%"
            h="100%"
            alignItems="center"
            justifyContent = "center"
            boxShadow= "2px 2px 2px"
            border="1px solid #fefefe" 
            padding="20px" 
            backgroundColor="#28EC9De"
            borderRadius="16px"
            >
                <Image
                borderRadius='100%'
                boxSize='50px'
                src='http://vn.blog.kkday.com/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg'
                alt='Dan Abramov'
                />
                <Box
                >    
                    <Textarea  
                    ref={titleRef}
                    margin='6px'
                    display="block"
                    backgroundColor="#d4ffbb"
                    borderRadius= "10px"
                    w="700px"
                    padding="6px"
                    marginLeft ="20px"
                    h="20px"
                    _focusVisible={{
                        outline: "none"
                    }}
                    border="none"
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    placeholder='Tiêu đề' />

                    <Textarea  
                    ref={contentRef}
                    margin='6px'
                    display="block"
                    backgroundColor="#d4ffbb"
                    borderRadius= "10px"
                    w="700px"
                    padding="6px"
                    marginLeft ="20px"
                    h="60px"
                    _focusVisible={{
                        outline: "none"
                    }}
                    border="none"
                    value={content}
                    onChange={(e) => setContent(e.currentTarget.value)}
                    placeholder='Nội dung bài post' />

                    <Flex alignItems= "center" justifyContent="end">
                        <Button
                        w="80px"
                        h="30px"
                        borderRadius = "6px"
                        backgroundColor='#d4ffbb'
                        border="none"
                        onClick={() => {
                            addBlog(title, content)
                            setContent("")
                            setTitle("")
                        }}
                        >
                            Post
                        </Button>
                    </Flex>
                </Box>
            </Flex>
            </Box>
        </Flex>
        </>
    );
}

export default CreatePost;