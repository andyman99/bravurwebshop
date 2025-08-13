"use client"

import { Github } from "@medusajs/icons"
import { Heading } from "@medusajs/ui"
import Button from "@/modules/common/components/button"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-neutral-100">
      <Image
        src="/hero-image.jpg"
        alt="Hero background"
        layout="fill"
        quality={100}
        priority
      />
      <div className="absolute inset-0 z-1 flex flex-col justify-center items-center text-center small:p-32 gap-6">
 
        <Heading level="h1" className="text-6xl leading-10 text-ui-fg-base mt-10 mb-5 font-proxima font-semibold text-white">
          Our Bestsellers
        </Heading>
        <p className="text-base-regular small:text-lg-regular text-neutral-200 max-w-[32rem]">
          Discover products that enable AV-production, security solutions, information and communication and more.
        </p>
      </div>
    </div>
  )
}

export default Hero
