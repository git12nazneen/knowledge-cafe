import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {name} = bookmark;
    
    return (
        <div>
            <h3 className='py-4 px-5 bg-slate-200 my-3 ml-5 rounded-2xl'>{name}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark:PropTypes.object
}
export default Bookmark;