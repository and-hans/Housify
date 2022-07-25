import React from 'react';
import house1 from './images/house1.jpg';
import house2 from './images/house2.jpg';
import house3 from './images/house3.jpg';

const Slideshow:React.FC = () => {

    return (
        // <div>
        //     <h2 className="absolute text-white scale-200 md:my-10 md:mx-10 text-8xl text-center font-[disney]">Discover</h2>
        //     <h2 className="absolute text-white scale-200 md:my-40 mx-5 text-8xl text-center font-[disney]">Your Home</h2>
        //     <div className="max-w-full h-auto rounded-lg">
        //         <Card imgSrc={house2}>
        //         </Card>
        //     </div>
        // </div>
        <div className="relative">
            <div className="relative w-full overflow-hidden">
                <div className="relative float-left w-full">
                    <img
                        src={house3}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="absolute top-0 left-0 px-6 py-4">
                        <h2 className="absolute text-black scale-200 md:my-10 md:mx-10 text-8xl font-[Luminari] text-center">Discover</h2>
                    </div>
                </div>
                <div className="relative float-left w-full">
                    <img
                        src={house2}
                        className="block md:w-120"
                        alt="..."
                    />
                    <div className="absolute top-0 left-0 px-6 py-4">
                        <h2 className="absolute text-blue-500 scale-200 md:my-10 md:mx-10 text-8xl font-[Luminari] text-center">Your</h2>
                    </div>
                </div>
                <div className="relative float-left w-full">
                    <img
                        src={house1}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="absolute top-0 left-0 px-6 py-4">
                        <h2 className="absolute text-white scale-200 md:my-10 md:mx-10 text-8xl font-[Luminari] text-center">Home</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slideshow;