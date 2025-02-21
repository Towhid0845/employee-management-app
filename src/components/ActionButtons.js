import React from "react";
import { TbPencil, TbEye, TbTrash } from "react-icons/tb";
import PropTypes from "prop-types";

const ActionButtons = ({ onEdit, onView, onDelete }) => {
  return (
    <div className="action_btn">
      <button onClick={onEdit} className="btn btn-light">
        <TbPencil size={24} />
      </button>
      <button onClick={onView} className="btn btn-light">
        <TbEye size={24} />
      </button>
      <button onClick={onDelete} className="btn btn-light text-danger">
        <TbTrash size={24} />
      </button>
    </div>
  );
};

ActionButtons.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ActionButtons;
