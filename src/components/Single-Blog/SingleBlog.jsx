import PropTypes from 'prop-types';

const SingleBlog = ({blog}) => {
    console.log(blog)
    const {name, image, author, img,rating,originalPrice} = blog;
    return (
        <div>
            <h2 className='text-4xl'>{name}</h2>
            <img src={image} alt={`Cover picture of the ${name}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={img} alt="" />
                    <div className='ml-3'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>Original Price: {originalPrice}</p>
                    </div>
                </div>
                <div>
                    <span>{rating}star</span>
                </div>
            </div>
          
        </div>
    );
};

SingleBlog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default SingleBlog;