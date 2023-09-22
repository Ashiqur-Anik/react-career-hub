import banerImg from '../../assets/images/user.png'


const Baner = () => {
    return (
        <div className='lg:flex bg-white items-center max-w-7xl mx-auto gap-10'>
            <div className='p-8 lg:p-4'>
                <h1 className='md:text-5xl text-3xl'>One Step Closer To Your <br /> <span className='text-[#7E90FE]'>Dream Job</span></h1>
                <p className='my-7'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='p-3 text-black rounded-xl cursor-pointer bg-gradient-to-r from-[#4258ea] to-[#e641c5] hover:from-[#253bca] hover:to-[#b634b0]'>Get Started</button>
            </div>
            <img className='w-[650px] p-7' src={banerImg} alt="" />
        </div>
    );
};

export default Baner;