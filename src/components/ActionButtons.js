import React from "react";
import { TbPencil, TbEye, TbTrash } from "react-icons/tb";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ActionButtons = ({ onEdit, onView, onDelete }) => {
  return (
    <div className="action_btn">
      <Link onClick={onEdit}>
        <TbPencil size={18} />
      </Link>
      <Link onClick={onView}>
        <TbEye size={18} />
      </Link>
      <Link onClick={onDelete}>
        <TbTrash size={18} />
      </Link>
    </div>
  );
};

ActionButtons.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ActionButtons;
