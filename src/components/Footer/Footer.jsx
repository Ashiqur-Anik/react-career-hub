import footerLogo from '../../assets/icons/social.png'


const Footer = () => {
    return (
        <div className="div p-10 bg-base-200 text-slate-50 justify-between ">
            <footer className='footer max-w-7xl mx-auto'>
                <aside className='md:w-80'>
                    <h1 className='text-3xl'>CareerHub</h1>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src={footerLogo} alt="" />
                </aside>
                <nav>
                    <header className="text-xl">Company</header>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav>
                    <header className="text-xl">Product</header>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <header className="text-xl">Support</header>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover">Developers</a>
                    
                </nav>
            </footer>
        </div>
    );
};

export default Footer;