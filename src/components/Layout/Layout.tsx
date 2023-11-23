import {Link, Outlet} from "react-router-dom";

/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */
export default function Layout() {
    return (
        <div>

            <nav>
                <ul>
                    <li>
                        <Link to="/myBooks">My Books</Link>
                    </li>
                    <li>
                        <Link to="/suggestions">Club Suggestions</Link>
                    </li>
                    <li>
                        <Link to="/addBooks">AddBooks</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </div>
    );
}