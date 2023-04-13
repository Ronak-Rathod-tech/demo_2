import React from "react";
import { Breadcrumbs } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Index = () => {
    return (
        <>
            <div className="contianer mx-3 my-3">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Contacts
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                    >
                        Core
                    </Link>
                    <Typography color="text.primary">Jeff's Auto Parts</Typography>
                </Breadcrumbs>
            </div>
        </>

    );
};

export default Index
