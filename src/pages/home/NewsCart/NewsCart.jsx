import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import moment from 'moment';
import Rating from 'react-rating';
const NewsCart = ({ news }) => {
    // console.log(news)
    let { _id, author, details, title, image_url, rating, total_view } = news
    return (
        <div>

            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center' >

                    <div className='me-4'>
                        <div>
                            <Image style={{ width: "60px" }} src={author.img} roundedCircle />
                        </div>
                    </div>
                    <div className='flex-grow-1'>
                        <h2>{author.name}</h2>
                        <p>{moment(author.published_date).format('YYYY-MM-DD')}</p>
                    </div>
                    <div>
                        <FaBookmark className='fs-2 me-3'></FaBookmark>
                        <FaShareAlt className='fs-2'></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} alt="Card image" />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> : <>{details.slice(0, 300)} <Link to={`/news/${_id}`}>...Read More</Link></>}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex  align-items-center justify-content-between">
                    <div><Rating
                        placeholderRating={ rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-danger'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating> <span>{rating.number}</span></div>
                    <div> <FaEye></FaEye> {total_view}</div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCart;