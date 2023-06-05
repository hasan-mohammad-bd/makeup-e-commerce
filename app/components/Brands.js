import BrandSlider from "../elements/sliders/Brands";
const Brands = async () => {
  var data = [
    {
      id: 1,
      title: "Xiaomi",
      image: "xiaomi.png",
    },
    {
      id: 2,
      title: "Realme",
      image: "realme.png",
    },
    {
      id: 3,
      title: "One Plus",
      image: "oneplus.png",
    },
    {
      id: 4,
      title: "Lenovo",
      image: "lenovo.png",
    },
    {
      id: 5,
      title: "Asus",
      image: "asus.png",
    },
    {
      id: 6,
      title: "Oppo",
      image: "oppo.png",
    },
    {
      id: 7,
      title: "Dell",
      image: "dell.png",
    },
    {
      id: 8,
      title: "Hp",
      image: "hp.png",
    },
    {
      id: 9,
      title: "Walton",
      image: "hp.png",
    },
  ];

  return (
    <>
      <BrandSlider brands={data} />
    </>
  );
};

export default Brands;
