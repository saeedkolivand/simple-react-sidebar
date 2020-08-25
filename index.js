import React from "react";
import "./style.scss";
import PropTypes from 'prop-types';

const Sidebar = props => {
    const {openSidebar, onClose, children} = props;

    return (
        openSidebar&&<div className="sidebar">
            <div className="sidebar--background" onClick={onClose} />
            <div className="sidebar--child">
                {children}
            </div>
        </div>
    )
};

Sidebar.propTypes = {
    openSidebar: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Sidebar;