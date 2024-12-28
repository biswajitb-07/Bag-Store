import React from 'react'

export const Offer = () => {
    return (
        <div className="relative w-full">
            <img
                className="w-full min-h-[25rem] rounded-2xl object-cover"
                src="../images/bg-1.jpeg"
                alt="Background Image"
            />
            <div
                className="absolute inset-0 left-0 md:left-16 grid grid-cols-1 md:grid-cols-2 place-items-center px-6 gap-5 lg:gap-0 md:px-10"
            >
                {/* Left Section */}
                <div className="text-white flex flex-col gap-6 items-center md:items-start md:text-left">
                    <h1 className="text-2xl md:text-4xl font-black">Deal of the Day!</h1>
                    <p className="text-sm md:text-base text-center md:text-left pr-5">
                        Fringilla urna porttitor rhoncus dolor purus non. Nulla malesuada
                        pellentesque elit eget gravida cum.
                    </p>
                    <button
                        className="bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
                    >
                        Grab The Deal Now
                    </button>
                </div>

                {/* Right Section */}
                <div className="text-white text-center flex flex-col items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-black">70%</h1>
                    <p className="text-sm md:text-base mt-2">
                        Nulla malesuada pellentesque eget gravida
                    </p>
                </div>
            </div>
        </div>

    )
}