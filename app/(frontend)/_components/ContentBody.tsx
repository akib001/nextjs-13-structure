'use client'
import React from 'react';
import Container from "@mui/material/Container";

const ContentBody = ({
                         children,
                     }: {
    children: React.ReactNode
}) => {
    return (
        <Container maxWidth={false} disableGutters={true} sx={{minHeight: '76vh'}}>
            {children}
        </Container>
    );
};

export default ContentBody;