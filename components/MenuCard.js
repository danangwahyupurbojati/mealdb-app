import Image from 'next/image';
import Link from 'next/link';

const MenuCard = ({imageSrc, title, hrefLink, link}) => {
    return ( 
        <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="card">
                <div className="image-wrapper">
                    <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
                </div>
                <div className="card-body text-center">
                    <p><strong>{title}</strong></p>
                    <Link href={hrefLink} as={link}>
                        <a className="btn btn-dark">
                            View Menus
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default MenuCard;