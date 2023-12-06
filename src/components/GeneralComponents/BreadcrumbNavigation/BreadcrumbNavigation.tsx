import { Breadcrumbs } from "@aws-amplify/ui-react";
import {Link, useLocation} from "react-router-dom";

export default function BreadcrumbNavigation():React.ReactElement {
    let location = useLocation();

    const nestedRoutes = location.pathname
        .split('#')[0]
        .split('?')[0]
        .split('/')
        .filter((subpath) => subpath.length > 0);

    const breadcrumbs = [
        { href: '/', text: 'Home' },
        ...nestedRoutes.map((subpath, i) => {
            const href = '/' + nestedRoutes.slice(0, i + 1).join('/');

            const text = subpath;
            return { href, text };
        }),
    ];

    return (
        <Breadcrumbs.Container>
            {breadcrumbs.map(({ href, text }, i) => {
                const isCurrent = i === breadcrumbs.length - 1;
                return (
                    <Breadcrumbs.Item key={href}>
                        <Link to={href}>
                            <Breadcrumbs.Link isCurrent={isCurrent}>{text}</Breadcrumbs.Link>
                        </Link>
                        {isCurrent ? null : <Breadcrumbs.Separator />}
                    </Breadcrumbs.Item>
                );
            })}
        </Breadcrumbs.Container>
    );
}