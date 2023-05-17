import CategorySlider from "../elements/sliders/Category";
const Category = async () => {

    var data = [
        {
            id: 1,
            title: "Electronics",
            image: "1.png",
        },
        {
            id: 2,
            title: "Audio",
            image: "2.png",
        },
        {
            id: 3,
            title: "Games",
            image: "3.png",
        },
        {
            id: 4,
            title: "Camera",
            image: "4.png",
        },
        {
            id: 5,
            title: "Headphone",
            image: "5.png",
        },
        {
            id: 6,
            title: "Smart Watch",
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