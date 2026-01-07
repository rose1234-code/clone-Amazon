import React from 'react'
import { ChevronsUpDown ,Globe} from 'lucide-react';

export default function Footer() {
  return (
    <div className=' mt-12  text-white'>
      <h1 className='text-center  text-lg font-semibold w-full h-16 bg-[#364463] p-4'>Back to top</h1>
      

      <div className='bg-[#1b263d]  '>

        <div className=' flex  lg:justify-center lg:gap-28 pt-14 w-full '>

            <div className='space-y-1 w-[45%]  lg:w-[21%] px-5 py-6'>
                <h1 className='text-2xl mb-3 font font-semibold'>Get to Know Us</h1>
                <p className='text-lg text-gray-300'>Careers</p>
                <p className='text-lg text-gray-300'>Blog</p>
                <p className='text-lg text-gray-300'>About Amazon</p>
                <p className='text-lg text-gray-300'>Investor Relations</p>
                <p className='text-lg text-gray-300'>Amazon Devices</p>
                <p className='text-lg text-gray-300'>Amazon Science</p>

            </div>

            <div className='space-y-1 hidden lg:w-[21%] lg:block px-5 py-6'>
                <h1 className='text-2xl mb-3 font font-semibold'>Make Money with Us</h1>
                <p className='text-lg text-gray-300'>Sell products on Amazon</p>
                <p className='text-lg text-gray-300'>Sell on Amazon Business</p>
                <p className='text-lg text-gray-300'>Sell apps on Amazon</p>
                <p className='text-lg text-gray-300'>Become an Affiliate</p>
                <p className='text-lg text-gray-300'>Advertise Your Products</p>
                <p className='text-lg text-gray-300'>Self-Publish with Us</p>
                <p className='text-lg text-gray-300'>Host an Amazon Hub</p>
                <p className='text-lg text-gray-300' >›See More Make Money <br /> with Us</p>

            </div>

            <div className='space-y-1 w-[45%] lg:w-[21%] px-5 py-6'>
                <h1 className='text-2xl mb-3 font font-semibold'>Amazon Payment Products</h1>
                <p className='text-lg text-gray-300'>Amazon Business Card</p>
                <p className='text-lg text-gray-300'>Shop with Points</p>
                <p className='text-lg text-gray-300'>About Amazon</p>
                <p className='text-lg text-gray-300'>Reload Your Balance</p>
                <p className='text-lg text-gray-300'>Amazon Currency Converter</p>

            </div>

            <div className='space-y-1 hidden lg:w-[21%] lg:block px-5 py-6'>
                <h1 className='text-2xl mb-3 font font-semibold'>Let Us Help You</h1>
                <p className='text-lg text-gray-300'>Amazon and COVID- <br /> 19</p>
                <p className='text-lg text-gray-300'>Your Account</p>
                <p className='text-lg text-gray-300'>Your Orders</p>
                <p className='text-lg text-gray-300'>Shipping Rates & <br /> Policies</p>
                <p className='text-lg text-gray-300'>Returns &  <br /> Replacements</p>
                <p className='text-lg text-gray-300'>Manage Your <br />  Content and Devices</p>
                <p className='text-lg text-gray-300'>Help</p>

            </div>

        </div>

        <hr  className='text-gray-500 my-0 lg:my-10 '/>

        <div className=' hidden lg:flex items-center h-24 justify-center gap-6'>
            <div className='w-[9%] h-16  '>
                <img className='w-full h-full object-contain' alt='none' src="/amazon1.png" width={'100%'}/>
            </div>

            <div className='flex items-center rounded-md gap-2 p-3 border'>
                 <Globe  size={24} />
                <span className='text-xl'>English</span>
                <ChevronsUpDown  size={24}/>
            </div>

            <div className='flex items-center rounded-md gap-2 p-3 text-xl border'>
                <span>$</span>
                <span>USD.US.Dollar</span>
            </div>

            <div className='flex items-center gap-2 rounded-md p-3 border'>
                <img className='object-cover h-8 w-[25%]' src="/state.jpg" alt=""  width={'100%'}/>
                <span className=' w-[150px] text-xl'>United State</span>
            </div>
        </div>

        <div className=' hidden  bg-[#080f20] lg:flex justify-center mt-10 gap-14  pb-8'>

            <div className='mt-10  space-y-12'>
                <div className=''>
                    <h1 className='text-lg'>Amazon Music</h1>
                    <p className='text-md text-gray-300'>Stream millions</p>
                    <p className='text-gray-300 text-md'>of songs</p>
                </div>
    
                <div className=''>
                    <h1 className='text-lg'>Amazon Business</h1>
                    <p className='text-md text-gray-300'>Everything For</p>
                    <p className='text-gray-300 text-md'>Your Business</p>
                </div>
    
                <div className=''>
                    <h1 className='text-lg'>IMDbPro</h1>
                    <p className='text-md text-gray-300'>Get Info Entertainment</p>
                    <p className='text-gray-300 text-md'>Professionals Need</p>
                </div>
                
            </div>

            <div className='mt-10  space-y-12'>
                <div className=''>
                    <h1 className='text-lg'>Amazon Ads</h1>
                    <p className='text-md text-gray-300'>Reach customers</p>
                    <p className='text-md text-gray-300'>wherever they</p>
                    <p className='text-md text-gray-300'>spend their time</p>
                </div>
    
                <div className=''>
                    <h1 className='text-lg'>AmazonGlobal</h1>
                    <p className='text-md text-gray-300'>Ship Orders</p>
                    < p className='text-md text-gray-300'>Internationally</p>
                </div>
    
                <div className=''>
                    <h1 className='text-lg'>Kindle Direct <br /> Publishing</h1>
                    <p className='text-md text-gray-300'>Indie Digital & Print Publishing</p>
                    <p className='text-md text-gray-300 '>Made Easy</p>
                </div>

                <div className=''>
                    <h1 className='text-lg'>eero WiFi</h1>
                    <p className='text-md text-gray-300'>Stream 4K Video</p>
                    <p className='text-gray-300 text-md'>Made Easyin Every Room</p>
                </div>
                
            </div>

            <div className='mt-10  space-y-12'>
                <div className=''>
                    <h1 className='text-lg'>6pm</h1>
                    <p className='text-md text-gray-300'>Score deals</p>
                    <p className='text-gray-300 text-md'>on fashion brands</p>
                </div>
    
                <div className=''>
                    <h1 className='text-lg'>Amazon Web Services</h1>
                    <p className='text-md text-gray-300'>Scalable Cloud</p>
                    <p className='text-gray-300 text-md'>Computing Services</p>
                </div>
    
                <div className=''>
                    <h1 className='text-lg'>Prime Video Direct</h1>
                    <p className='text-md text-gray-300'>Video Distribution</p>
                    <p className='text-gray-300 text-md'>Made Easy</p>
                </div>

                <div className=''>
                    <h1 className='text-lg'>Blink  </h1>
                    <p className='text-md text-gray-300'>Smart Security</p>
                    <p className='text-gray-300 text-md'>on fashion brands</p>
                </div>
                
            </div>

            <div className='mt-10  space-y-12'>
                <div className=''>
                    <h1 className='text-lg'>AbeBooks</h1>
                    <p className='text-md text-gray-300'>Books, art</p>
                    <p  className='text-gray-300 text-md'>& collectibles</p>
                </div>
    
                <div className=''>
                    <h1 className='text-lg'>Amazon Business</h1>
                    <p className='text-md text-gray-300'>Everything For</p>
                    <p className='text-gray-300 text-md'>Your Business</p>
                </div>
    
                <div className=''>
                    <h1 className='text-lg'>IMDbPro</h1>
                    <p className='text-md text-gray-300'>Get Info Entertainment</p>
                    <p className='text-gray-300 text-md'>Professionals Need</p>
                </div>
                
            </div>

            <div className='mt-10  space-y-12'>
                <div className=''>
                    <h1 className='text-lg'>Amazon Ads</h1>
                    <p className='text-md text-gray-300'>Reach customers</p>
                    <p className='text-md text-gray-300'>wherever they</p>
                    <p className='text-md text-gray-300'>spend their time</p>
                </div>
    
                <div className=''>
                    <h1 className='text-lg'>AmazonGlobal</h1>
                    <p className='text-md text-gray-300'>Ship Orders</p>
                    < p className='text-md text-gray-300'>Internationally</p>
                </div>
    
                <div className=''>
                    <h1 className='text-lg'>Kindle Direct <br /> Publishing</h1>
                    <p className='text-md text-gray-300'>Indie Digital & Print Publishing</p>
                    <p className='text-md text-gray-300 '>Made Easy</p>
                </div>

                <div className=''>
                    <h1 className='text-lg'>eero WiFi</h1>
                    <p className='text-md text-gray-300'>Stream 4K Video</p>
                    <p className='text-md text-gray-300'>Made Easyin Every Room</p>
                </div>
                
            </div>

            <div className='mt-10  space-y-12'>
                <div className=''>
                    <h1 className='text-lg'>Amazon Ads</h1>
                    <p className='text-md text-gray-300'>Reach customers</p>
                    <p className='text-md text-gray-300'>wherever they</p>
                    <p className='text-md text-gray-300'>spend their time</p>
                </div>
    
                <div className=''>
                    <h1 className='text-lg'>AmazonGlobal</h1>
                    <p className='text-md text-gray-300'>Ship Orders</p>
                    < p className='text-md text-gray-300'>Internationally</p>
                </div>
    
                <div className=''>
                    <h1 className='text-lg'>Kindle Direct <br /> Publishing</h1>
                    <p className='text-md text-gray-300'>Indie Digital & Print Publishing</p>
                    <p className='text-md '>Made Easy</p>
                </div>

                <div className=''>
                    <h1 className='text-lg'>eero WiFi</h1>
                    <p className='text-md text-gray-300'>Stream 4K Video</p>
                    <p className='text-md text-gray-300'>Made Easyin Every Room</p>
                </div>
                
            </div>
            
            
        </div>

      </div>


      {/* last part */}

        <div className='bg-[#080f20] py-6 px-10'>
            <div className='flex items-center justify-center gap-4 text-[15px] text-gray-300'>
                <div className='hidden lg:block'>Conditions of Use</div>
                <div className=' flex items-center gap-4'>
                    <div>Privacy Notice</div>
                    <div>Consumer Health Data Privacy Disclosure</div>
                </div>
                <div>Your Ads Privacy Choices</div>
            </div>
        <div className=' text-[15px] text-gray-300 flex items-center justify-center gap-7'>© 1996-2025, Amazon.com, Inc. or its affiliates</div>
      </div>
    </div>
  )
}
                 