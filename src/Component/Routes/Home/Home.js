import React from 'react';
import Navbar from '../../SubComponent/Navbar';
import BannerSlider from './BannerSlider';
import LowerSection from './LowerSection';

const Home = () => {
    return (
        <>
                    <Navbar />
            <div className="Background">
                <div className=" Background1">
                    <div className="container marginLeftHead ">
                        <div className="row ">
                            <div className="col-12 col-md-6 center">
                                <div className="">
                                    <h2 className='header'>Assets Performance Comparator</h2>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation </p> */}

                                    {/* <form className="AddedButton mt-5">
                                        <input />
                                        <button className="px-3 py-2" >Notify</button>
                                    </form> */}
                                </div>
                            </div>
                            {/* <div className="col-12 col-md-6 center">
                                <BannerSlider />
                            </div> */}

                        </div>
                    </div>
                </div>
                <div className="">
                    <LowerSection />
                </div>
                {/* <LowerSection /> */}
            </div>
        </>
    );
}

export default Home;