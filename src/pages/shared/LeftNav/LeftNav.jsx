import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    let [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h2>All Caterogy</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <NavLink 
                            to={`categori/${category.id}`} 
                            className={`text-decoration-none ${({ isActive}) =>
                            isActive
                                ? "text-decoration-undarline"
                                : isPending
                                    ? "pending"
                                    : ""}
                            `}
                        >
                            {category.name}
                        </NavLink>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;