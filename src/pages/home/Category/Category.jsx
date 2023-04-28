import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';

const Category = () => {
    let {id} = useParams()
    let categoryNews = useLoaderData()
    // console.log(categoryNews)
    return (
        <div>
            <h2>Category news: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsCart key={news._id} news={news}></NewsCart>)
            }
        </div>
    );
};

export default Category;