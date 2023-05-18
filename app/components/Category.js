import CategorySlider from "../elements/sliders/Category";
const Category = async () => {

    var data = [
        {
            id: 1,
            title: "স্মার্ট ইলেকট্রনিক্স",
            image: "1.png",
        },
        {
            id: 2,
            title: "অডিও ডিভাইস",
            image: "2.png",
        },
        {
            id: 3,
            title: "ভিডিও গেমস",
            image: "3.png",
        },
        {
            id: 4,
            title: "একশন ক্যামেরা",
            image: "4.png",
        },
        {
            id: 5,
            title: "হেডফোন",
            image: "5.png",
        },
        {
            id: 6,
            title: "স্মার্ট ওয়াচ",
            image: "6.png",
        },
        {
            id: 7,
            title: "Smart Umbrella",
            image: "6.png",
        },
    ];
       

    async function fetchCategory() {
        const res  = await fetch(`${process.env.server}/products`, { cache: 'force-cache' });
        const allCategory = await res.json();
        
        // Recommendation: handle errors
        if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to fetch data');
        }

        return allCategory;
    }
        
    
    const allCategory = await fetchCategory()

    return (
        <>
            <CategorySlider category={data}/>
        </>
    )
}

export default Category;