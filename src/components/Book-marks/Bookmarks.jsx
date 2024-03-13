import PropTypes from 'prop-types';
import Bookmark from '../BookMark/Bookmark';


const Bookmarks = ({bookmarks, reading}) => {
    console.log(bookmarks)
    return (
        <div className="md:w-1/3">
            <div>
                <h3 className='text-3xl font-bold py-5 px-5 bg-slate-400 my-5 mx-5 rounded-xl'>Reading time:{reading}</h3>
            </div>
            <h1 className="text-3xl ml-5 my-5 font-bold ">Bookmarks:{bookmarks.length} </h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark
                key={idx}
                bookmark={bookmark}
                ></Bookmark> )
            }
        </div>
    );
};
Bookmarks.proptypes={
    bookmarks: PropTypes.array,
    reading:PropTypes.number
}

export default Bookmarks;