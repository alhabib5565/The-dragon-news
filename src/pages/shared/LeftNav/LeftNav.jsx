import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import EditorsInsight from '../../news/EditorsInsight/EditorsInsight';

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
                            to={`categories/${category.id}`} 
                            className={`text-decoration-none ${({ isActive}) =>
                            isActive
                                ? "text-decoration-underline"
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
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default LeftNav;