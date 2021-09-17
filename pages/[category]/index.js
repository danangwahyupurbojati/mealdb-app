import { useRouter } from 'next/router';
import MenuCard from '../../components/MenuCard';
import Head from 'next/head';

export async function getServerSideProps(context) {
    const categorySlug = context.params.category;
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorySlug}`);
    const data = await res.json();

    // throw to 404 page
    if (!data.meals) {
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

const CategoryDetail = ({data}) => {
    const router = useRouter();
    return ( 
        <>
            <Head>
                <title>MealDb | {router.query.category} - Category</title>
            </Head>

            <h1 className="text-center mt-3 mb-5">{router.query.category} Category</h1>
                <div className="row gx-3 gy-3 justify-content-center">
                    {
                        data.meals.map(meal => (
                           <MenuCard 
                               key={meal.idMeal}
                                imageSrc={meal.strMealThumb}
                                title={meal.strMeal}
                                hrefLink="/[category]/[menudetail]"
                                link={`/${router.query.category}/${meal.idMeal}`}
                           />
                        ))
                    }
                </div>
        </>
    );
}
 
export default CategoryDetail;