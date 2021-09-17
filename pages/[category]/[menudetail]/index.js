import Image from 'next/image';
import Head from 'next/head';

export async function getServerSideProps(context) {
    const id = context.params.menudetail;
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    const data = await res.json();

    // throw to 404 page
    if (!data.meals ) {
        return {
          notFound: true,
        }
    }

    return {
        props: {
            data
        }, 
    };
}

const MenuDetail = ({ data}) => {
    const menu = data.meals[0];

    return (  
        <>
            <Head>
                <title>MealDb | {menu.strMeal}</title>
            </Head>

            <h1 className="text-center mt-3 mb-3">Detail Menu</h1>
            <div className="row gx-5 gy-3 mb-3">
                <div className="col-lg-6 col-sm-12">
                    <div className="detail-image-wrapper">
                        <Image src={menu.strMealThumb} alt={menu.strMeal} layout="fill" objectFit="cover" />
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 text-center">
                    <h2>{menu.strMeal}</h2>
                    <h4 className="mt-3">Description:</h4>
                    <p>{menu.strInstructions}</p>
                </div>
            </div>


            {
                menu.strYoutube && (
                    <div className="text-center">
                        <h3>Tutorial:</h3>
                        <iframe width="420" height="345" src={menu.strYoutube.replace('watch', 'embed')}></iframe>                    
                    </div>
                )
            }

        </>
    );
}
 
export default MenuDetail;