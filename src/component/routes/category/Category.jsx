import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../../contexts/Categories.context";
import ProductCard from "../../product-card/ProductCard";

import "./Category.styles.scss";

const Category = () => {
  const { category } = useParams();

  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </Fragment>
  );
};

export default Category;