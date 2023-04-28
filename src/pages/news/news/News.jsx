import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';
import { FaArrowLeft } from 'react-icons/fa';

const News = () => {
    let newsDetails = useLoaderData()
    console.log(newsDetails)
    let {image_url, title, details, category_id} = newsDetails
    return (
        <div>
            <h3 className='mb-3'>Dragon News</h3>
            <Card className='p-3'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       {details}
                    </Card.Text>
                    <Link to={`/categories/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;