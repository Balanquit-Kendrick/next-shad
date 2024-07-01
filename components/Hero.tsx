import React from 'react'
import { Button } from './ui/button'
const Hero = () => {
  return (
    <div>
      <div className="flex flex-col max-w-[1200px] border border-foreground mx-auto">
          <h1 className="px-20 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">This is my first NEXT.js project</h1>
          <h5 className="px-20 pt-4 scroll-m-20 tracking-tight lg:text-3xl">I hope you like it</h5>
        </div>
        <div className="py-20 flex flex-col items-center">
          <Button variant={"secondary"}>Learn More</Button>
        </div>
    </div>
  )
}

export default Hero