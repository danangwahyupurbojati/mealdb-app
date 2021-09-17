import Link from 'next/link';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">
                        MealDb
                    </a>
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;