import React from 'react';
import { useParams } from 'react-router';
export default function Category() {
  let { categoryName } = useParams();
  let displayName = formatCategoryName(categoryName);

  function formatCategoryName(slug) {
    return slug
      .split('_') // Split the slug by underscores
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' '); // Rejoin the words with spaces
  }

  return <div>{displayName}</div>;
}
