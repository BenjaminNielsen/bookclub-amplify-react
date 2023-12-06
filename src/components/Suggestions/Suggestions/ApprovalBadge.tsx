import React from "react";
import {Badge} from "@aws-amplify/ui-react";

interface ApprovalBadgeProps {
    owner: string
    approved: boolean
}
export default function ApprovalBadge({owner, approved}: ApprovalBadgeProps): React.ReactElement {
    return <Badge size="small" variation={approved?'success':'error'}>{owner.substring(0,2)}</Badge>
}