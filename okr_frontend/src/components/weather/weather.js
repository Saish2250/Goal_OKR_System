import React from 'react'
import './weather.css'
import { HiSun } from 'react-icons/hi'
import { CgDropOpacity } from 'react-icons/cg'
import { BsWind } from 'react-icons/bs'
import { TiWeatherSnow } from 'react-icons/ti'

const Weather = () => {
  return (
    <div id='weather' >
        <div className='image-wrapper' >
            <img src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className='w-100 p-4' >
            <p className='bold-text mb-2 pt-2' >Weather's today</p>
            <div className='d-flex align-items-baseline' >
                <p className='bold-itim-text mb-0' >Monday</p><p className='mb-0 ps-2 light-text' >12 March 2022</p>
            </div>
            <div className='mt-2 weather-section d-flex' >
                <div className='weather-icon' >
                    <HiSun size={100} />
                </div>
                <div className='ps-2' >
                    <div className='pos-rel'><span className='degree-text' >10</span><div className='d-inline pb-3 degree' >o</div><span className='degree-text ps-2' >C</span></div>
                    <div className='d-flex weather-info align-items-baseline hours-section' >
                        <p>11.43 hours</p>
                        <p className='ps-2' >(7.43/18.53)</p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between mt-3 all-weather' >
                <div className='d-flex align-items-center' ><div className='all-weather-icon' ><CgDropOpacity /></div><p>22.3%</p></div>
                <div className='d-flex align-items-center' ><div className='all-weather-icon' ><BsWind /></div><p>8ms</p></div>
                <div className='d-flex align-items-center' ><div className='all-weather-icon' ><TiWeatherSnow /></div><p>8ms</p></div>
            </div>
        </div>
        <hr />
        <div className='w-100 p-4 mb-3' >
            <p className='bold-text mb-2 pt-2' >Weather's today</p>
            <div className='d-flex align-items-baseline' >
                <p className='bold-itim-text mb-0' >Monday</p><p className='mb-0 ps-2 light-text' >12 March 2022</p>
            </div>
            <div className='mt-2 weather-section d-flex' >
                <div className='weather-icon' >
                    <HiSun size={100} />
                </div>
                <div className='ps-2' >
                    <div className='pos-rel'><span className='degree-text' >10</span><div className='d-inline pb-3 degree' >o</div><span className='degree-text ps-2' >C</span></div>
                    <div className='d-flex weather-info align-items-baseline hours-section' >
                        <p>11.43 hours</p>
                        <p className='ps-2' >(7.43/18.53)</p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between mt-3 all-weather' >
                <div className='d-flex align-items-center' ><div className='all-weather-icon' ><CgDropOpacity /></div><p>22.3%</p></div>
                <div className='d-flex align-items-center' ><div className='all-weather-icon' ><BsWind /></div><p>8ms</p></div>
                <div className='d-flex align-items-center' ><div className='all-weather-icon' ><TiWeatherSnow /></div><p>8ms</p></div>
            </div>
        </div>
    </div>
  )
}

export default Weather