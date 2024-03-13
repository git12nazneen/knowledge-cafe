import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 max-w-5xl mx-auto border-b-2'>
             <h1 className='text-5xl text-center '>SPA knowledge cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;