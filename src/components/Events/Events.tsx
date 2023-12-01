import React from "react";
import {Button} from "@aws-amplify/ui-react";
import {Link, Outlet} from "react-router-dom";
import MainContentCard from "../GeneralComponents/MainContentCard/MainContentCard";
import ContentLayout from "../Layout/ContentLayout/ContentLayout";

export default function Events(): React.ReactElement | null {
    return (
        <ContentLayout title={'Events'}>
            <Link to={"add"}>
                <Button type="button" variation="primary">Add Event</Button>
            </Link>
            <MainContentCard>
                <Outlet/>
            </MainContentCard>
        </ContentLayout>
    )

}