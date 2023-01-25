import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { readMoreData } from '../../redux/thunk/fetchBlogData';
import defaultImage from '../../images/category/management-2.jpg'

function ReadMore() {
    const { blogView } = useSelector((state) => state.blogData);
    const { title, description, image } = blogView;
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readMoreData(id))
    }, [dispatch, id])

    return (
        <div className='container pt-4 pb-5'>
            {image ?
                <div className='blog-img text-center'>
                    <img src={image} alt="" />
                </div>
                : <div className='blog-img text-center'><img src={defaultImage} alt="" /></div>
            }
            <h1 className="text-center py-4 mb-0">{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default ReadMore
