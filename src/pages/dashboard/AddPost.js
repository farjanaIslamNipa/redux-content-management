import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addBlogData } from '../../redux/thunk/fetchBlogData';

function AddPost() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tag: '',
        date: ''
    })
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBlogData(formData))
        navigate('/dashboard')
    }
    return (
        <div className='container'>
            <div className='py-4 px-5'>

                <div className='row justify-content-center mb-5'>
                    <div className='col-md-8'>
                        <div className='d-flex justify-content-between dashboard-header py-2 px-4 mb-4'>
                            <h4 className='mb-0'>Add Blog</h4>
                            <div>
                                <Link to="/dashboard" className='dashboard-header-btn btn px-4'>All Blog</Link>
                            </div>
                        </div>
                        <div className='shadow rounded p-4'>
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
                                <div className='text-end'><button type="submit" className="btn dashboard-header-btn px-4">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost
