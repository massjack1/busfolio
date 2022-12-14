import React from "react";
//Animations
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";
import styled from "styled-components";

const ContactUs = () => {
    return (
        <motion.div variants={pageAnimation} exit="exit" initial="hidden" animate="show" style={{background: "fff"}}
        >
            <h1>Contact</h1>
        </motion.div>
    );
};

export default ContactUs;