import ProductDetails from "@/app/[locale]/products/[slug]/_components/ProductDetails";
import React from "react";
import Modal from "../elements/Modal";

const demoShortDetails =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in";
const ProductDetailsModal = ({product, showModal, setShowModal, settings, translations}) => {
  return (
    <div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title={"Product Details"}
      >
        <ProductDetails
          product={product}
          settings={settings}
          translations={translations}
          shortDetails={true}
          demoShortDetails={demoShortDetails}
        />
      </Modal>
    </div>
  );
};

export default ProductDetailsModal;
