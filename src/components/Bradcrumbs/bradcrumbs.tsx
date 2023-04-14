import React from "react";
import { Breadcrumbs } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Bradcrumbs = () => {
    return (
        <>
            <div className="contianer" style={{margin:"20px 0px"}}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Contacts
                    </Link>
                    <Typography>Jeff's Auto Parts</Typography>
                </Breadcrumbs>
            </div>

        </>

    );
};

export default Bradcrumbs
