import MenuCard from '../components/MenuCard';
import Head from 'next/head';

/* export const getStaticProps = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const { categories } = await res.json();
  
    return {
      props: { categories: categories }
    }
} */

export async function getServerSideProps() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const { categories } = await res.json();
  
    return {
      props: { categories: categories }
    };
}

export default function Home({categories}) {
    return (
        <>
            <Head>
                <title>MealDb | Home</title>
            </Head>
            
            <h1 className="text-center mt-3">Welcome to MealDB Restaurant</h1>
            <h2 className="text-center mt-3 mb-5">Select Your Menu</h2>
            <div className="row gx-3 gy-3 justify-content-center">
                {
                    categories.map(category => (
                        <MenuCard 
                            key={category.idCategory}
                            imageSrc={category.strCategoryThumb}
                            title={category.strCategory}
                            hrefLink="/[category]"
                            link={`/${category.strCategory}`}
                        />
                    ))
                }
            </div>
        </>
    )
}
