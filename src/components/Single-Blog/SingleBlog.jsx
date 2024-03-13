import PropTypes from 'prop-types';
import './SingleBlog.css'
import { FaBookmark } from "react-icons/fa";

const SingleBlog = ({blog, handleAddToBookMark,handleMarkAsRead}) => {
    // console.log(blog)
    const {name, image, author, img,rating,originalPrice,reviews} = blog;
    return (
        <div className='mb-20 bg-sky-100 py-4 rounded-2xl px-4'>
            <h2 className='text-2xl mb-5 mt-4  font-bold'>{name}</h2>
            <img className='w-full h-96 mb-8' src={image} alt={`Cover picture of the ${name}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={img} alt="" />
                    <div className='ml-3'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>Original Price: {originalPrice}</p>
                    </div>
                </div>
                <div>
                    <span>{rating}min</span> 
                    <button 
                    onClick={()=>handleAddToBookMark(blog)} className='ml-2'> <FaBookmark /></button>
                </div> 
            </div>
            <p>
                    {
                        reviews.map((rev, idx) => <span key={idx}><a href="">#{rev}</a></span>)
                    }
                </p>
                <button onClick={()=>handleMarkAsRead(rating)} className='text-purple-700 font-bold underline'>Mark as read</button>
        </div>
    );
};

SingleBlog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookMark:PropTypes.func
}

export default SingleBlog;