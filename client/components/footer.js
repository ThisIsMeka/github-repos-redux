import React from 'react'

const Footer = () => {
  return (
    <footer className="flex bg-gray-800 flex-col justify-around bg-gray-800 p-2">
      <div className="flex flex-col mt-4 md:m-0">
        <div className="mx-4">
          <div className="flex items-center text-white justify-between md:flex-col">
            <div className="flex items-center ">
              <div className="mx-4 my-2">
                <a href="https://linkedin.com/in/meerimabdinazarova" className="px-32 text-md">
                  LinkedIn
                </a>
                <a href="https://github.com/ThisIsMeka" className="px-32 text-md">
                  GitHub
                </a>
                <a href="https://twitter.com/IamMeerim" className="px-32 text-md">
                  Twitter
                </a>
                <a href="mailto:meerim@gmail.com" className="px-32 text-md">
                  Gmail
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="h-px mt-2 bg-gray-700 border-none" />
          <h1 className="text-center text-xs text-white py-2 pb-0">©2020 by Meerim Abdinazarova</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer
