import React from 'react'

const Messages = () => {
  return (
    <div className="px-6 py-4 flex-1 overflow-scroll-x">
      <div className="flex items-start mb-4">
        <img
          src="https://avatars2.githubusercontent.com/u/343407?s=460&v=4"
          className="w-10 h-10 rounded mr-3"
          alt=""
        />
        <div className="flex flex-col">
          <div className="flex items-end">
            <span className="font-bold text-md mr-2 font-sans">killgt</span>
            <span className="text-grey text-xs font-light">11:46</span>
          </div>
          <p className="font-light text-md text-grey-darkest pt-1">
            The slack from the other side.
          </p>
        </div>
      </div>

      <div className="flex items-start mb-4">
        <img src="https://i.imgur.com/8Km9tLL.jpg" className="w-10 h-10 rounded mr-3" alt="" />
        <div className="flex flex-col">
          <div className="flex items-end">
            <span className="font-bold text-md mr-2 font-sans">Olivia Dunham</span>
            <span className="text-grey text-xs font-light">12:45</span>
          </div>
          <p className="font-light text-md text-grey-darkest pt-1">
            How are we supposed to control the marquee space without an utility for it? I propose
            this:
          </p>
          <div className="bg-grey-lighter border border-grey-light font-mono rounded p-3 mt-2 whitespace-pre">
            .marquee-lightspeed -webkit-marquee-speed: fast; .marquee-lightspeeder
          </div>
        </div>
      </div>

      <div className="flex items-start">
        <img src="https://i.imgur.com/qACoKgY.jpg" className="w-10 h-10 rounded mr-3" alt="" />
        <div className="flex flex-col">
          <div className="flex items-end">
            <span className="font-bold text-md mr-2 font-sans">Adam Bishop</span>
            <span className="text-grey text-xs font-light">12:46</span>
          </div>
          <p className="font-light text-md text-grey-darkest pt-1">
            <a href="#" className="text-blue">
              @Olivia Dunham
            </a>
            the size of the generated CSS is creating a singularity in space/time, we must stop
            adding more utilities before its too late!
          </p>
        </div>
      </div>
    </div>
  )
}

Messages.propTypes = {}

export default Messages
