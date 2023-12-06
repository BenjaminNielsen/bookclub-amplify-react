import {Grid, Heading, useTheme} from "@aws-amplify/ui-react";
import React from "react";
import BreadcrumbNavigation from "../../GeneralComponents/BreadcrumbNavigation/BreadcrumbNavigation";

interface ContentLayoutProps{
    title: string
    children: string | React.ReactElement | React.ReactElement[]
}
export default function ContentLayout({title, children}: ContentLayoutProps ):React.ReactElement{
    const {tokens} = useTheme();

    return (
        <Grid templateColumns={'1fr'} gap={tokens.space.small} padding={'small'}>
            <Heading columnStart={1} columnEnd={-1} level={2}>{title}</Heading>
            <BreadcrumbNavigation></BreadcrumbNavigation>
            {children}
        </Grid>
    )
}

