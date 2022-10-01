import React from 'react';

const Cards = () => {
    return (
        <div>
            <section className='inline-block justify-start'>
                <div class="carousel w-56">
                    <div id="item1" class="carousel-item">
                        {/* <input type="checkbox" class="checkbox mask mask-heart border border-gray-700 checkbox-secondary" /> */}
                        <img src="https://placeimg.com/800/200/arch" class="" />
                    </div>
                    <div id="item2" class="carousel-item">
                        <img src="https://placeimg.com/800/200/arch" class="" />
                    </div>
                    <div id="item3" class="carousel-item">
                        <img src="https://placeimg.com/800/200/arch" class="" />
                    </div>
                    <div id="item4" class="carousel-item">
                        <img src="https://placeimg.com/800/200/arch" class="" />
                    </div>
                </div>
                <div class="flex justify-center text-4xl">
                    <a href="#item1">.</a>
                    <a href="#item2">.</a>
                    <a href="#item3">.</a>
                    <a href="#item4">.</a>
                </div>
                <div className='text-xs text-start gap-y-2'>
                    <div className='inline-flex gap-10'>
                        <p className='font-semibold'>Peoksimonia, Fiendland</p>
                        <p className='inline-flex items-center gap-1'>
                            <span className=''> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg></span>
                            <span>4.44</span>
                        </p>
                    </div>
                    <p className='text-gray-400'>5.405 kilometers</p>
                    <p className='text-gray-400'>5-11 Jan</p>
                    <p className='font-bold mt-1 inline-flex items-center'> <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span> 11,454 <span className='text-gray-400 font-semibold'> night</span></p>
                </div>
            </section>
        </div>
    );
};

export default Cards;