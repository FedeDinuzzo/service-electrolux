import React from "react";
import { Link } from 'react-router-dom';

export default function NavItem({ content, to }) {
    return (
        <Link to={`${to}`}>{content}</Link>
    );
}