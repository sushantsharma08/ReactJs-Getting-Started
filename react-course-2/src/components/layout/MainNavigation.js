import {Link} from 'react-router-dom';
function MainNavigation(){
     return (
        <header>
            <div> React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to = '/'>Some link</Link>
                    </li>
                    <li>
                    <Link to = '/new-meetup'>new Meetup</Link>
                    </li>
                    <li>
                    <Link to = '/favorites'>favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
     )
}

export default MainNavigation;