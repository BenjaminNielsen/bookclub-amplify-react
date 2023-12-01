import React from "react";
import ContentLayout from "../Layout/ContentLayout/ContentLayout";
import {Link, Outlet} from "react-router-dom";
import {Button} from "@aws-amplify/ui-react";
import MainContentCard from "../GeneralComponents/MainContentCard/MainContentCard";

export default function SuggestionsLayout(): React.ReactElement {
    return (
            <ContentLayout title={'Book Club Suggestions'}>
                <Link to={"add"}>
                    <Button variation='primary'>
                        Add Book
                    </Button>
                </Link>

                <MainContentCard>
                    <Outlet/>
                </MainContentCard>
            </ContentLayout>
    )
}
