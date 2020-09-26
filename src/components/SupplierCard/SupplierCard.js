import React from "react";
import PropTypes from "prop-types";

import { supplierTypes } from "../..//utils";

import {
  SupplierCardContainer,
  SupplierCardTitle,
  SupplierCardImage,
  SupplierCardCategory
} from "./SupplierCard.styles";

const SupplierCard = ({ supplier }) => {
  if (!supplier) {
    return null;
  }

  const image =
    supplier.public && supplier.public.images && supplier.public.images[0].url;

  const category = supplier.tier2 && supplier.tier2[0].name;

  const categoryIcon =
    supplier.categoryTier1 &&
    supplierTypes.find(({ slug }) => slug === supplier.categoryTier1).icon;

  return (
    <SupplierCardContainer data-testid={`supplierCard-${supplier.slug}`}>
      <SupplierCardImage image={image} />
      <SupplierCardTitle>{supplier.name}</SupplierCardTitle>
      <SupplierCardCategory>
        {categoryIcon ? <i className={`la la-${categoryIcon}`} /> : null}
        {category}
      </SupplierCardCategory>
    </SupplierCardContainer>
  );
};

SupplierCard.propTypes = {
  supplier: PropTypes.object
};

export default SupplierCard;
