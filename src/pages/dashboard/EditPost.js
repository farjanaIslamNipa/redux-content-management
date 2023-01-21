import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { editBlogData, updateBlogData } from '../../redux/thunk/fetchBlogData';

function EditPost() {
    const {blog} = useSelector(state => state.blogData);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tag:'',
        date: ''
    })

    const {title, description, tag, date} = formData;

    const dispatch = useDispatch();
    let {id} = useParams();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked');
        dispatch(updateBlogData(formData, id));
        navigate('/dashboard')
    }

    useEffect(() => {
        dispatch(editBlogData(id))
    }, [dispatch, id])
    useEffect(() => {
        if(blog){
            setFormData({...blog})
        }
    }, [blog])
  return (
    <div className='pt-4 ps-5'>
    <h4>Edit Post</h4>
    <div className='row'>
        <div className='col-md-8'>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label>Blog Title</label>
                    <input onChange={handleInputChange} name="title" type="text" className="form-control" value={title || ''}  />
                </div>
                <div className="form-group mb-3">
                    <label>Blog Description</label>
                    <textarea onChange={handleInputChange} name="description" className="form-control" value={description} rows="5"></textarea>
                </div>
                <div className="form-group mb-3">
                    <label>Select Tag</label>
                    <select onChange={handleInputChange} name="tag" className="form-control">
                        <option selected={tag === 'software'} value="software">Software</option>
                        <option selected={tag === 'management'} value="management">Management</option>
                        <option selected={tag === 'configure'} value="configure">Configure</option>
                    </select>
                </div>
                <div className='form-group mb-3'>
                    <label>Published</label>
                    <input onChange={handleInputChange} className='form-control' type="date" name="date" value={date || ''} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default EditPost
