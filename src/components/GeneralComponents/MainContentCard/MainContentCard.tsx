import React from "react";
import {Card} from "@aws-amplify/ui-react";

export default function MainContentCard({ children }:any):React.ReactElement{
    return <Card
        borderRadius="medium"
        variation="elevated"
        padding="small"
    >{ children }</Card>
}