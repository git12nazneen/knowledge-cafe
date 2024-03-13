import PropTypes from 'prop-types';
import Bookmark from '../BookMark/Bookmark';


const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks)
    return (
        <div className="md:w-1/3">
            <h1 className="text-3xl ml-5 my-5 font-bold">Bookmarks:{bookmarks.length} </h1>
            {
                bookmarks.map(bookmark => <Bookmark
                key={bookmark.id}
                bookmark={bookmark}
                ></Bookmark> )
            }
        </div>
    );
};
Bookmarks.proptypes={
    bookmarks: PropTypes.array
}

export default Bookmarks;