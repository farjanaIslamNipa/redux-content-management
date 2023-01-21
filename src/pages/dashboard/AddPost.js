import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBlogData } from '../../redux/thunk/fetchBlogData';

function AddPost() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tag: '',
        date: ''
    })
    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setFormData({...formData, [name]:value})
    }
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBlogData(formData))
        navigate('/dashboard')
    }
    return (
        <div className='pt-4 ps-5'>
            <h4>Add Post</h4>
            <div className='row'>
                <div className='col-md-8'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label>Blog Title</label>
                            <input onChange={handleInputChange} name="title" type="text" className="form-control" placeholder="Enter blog title" />
                        </div>
                        <div className="form-group mb-3">
                            <label>Blog Description</label>
                            <textarea onChange={handleInputChange} name="description" className="form-control" rows="5" placeholder="Enter description"></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <label>Select Tag</label>
                            <select onChange={handleInputChange} name="tag" className="form-control">
                                <option defaultValue="Choose an option">Choose an option</option>
                                <option value="software">Software</option>
                                <option value="management">Management</option>
                                <option value="configure">Configure</option>
                            </select>
                        </div>
                        <div className='form-group mb-3'>
                            <label>Published Date</label>
                            <input onChange={handleInputChange} className='form-control' type="date" name="date" id="" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPost
