import React from "react";

const CategoryTable = ({ category, rank, onEditCategory }: any) => {
  return (
    <tr>
      <td>{rank}</td>
      <td>{category.name}</td>
      <td>{new Date(category.createdAt).toLocaleDateString()}</td>
      <td>{category.isDeleted ? "Deleted" : "Active"}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => onEditCategory(category)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default CategoryTable;
