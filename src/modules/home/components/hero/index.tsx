"use client"

import { Github } from "@medusajs/icons"
import { Heading } from "@medusajs/ui"
import Button from "@/modules/common/components/button"
import Image from "next/image"
import { useTranslation } from "@/lib/hooks/use-translation"

const Hero = () => {
  const t = useTranslation();

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
        <span>
          <p className="text-neutral-600 text-xs uppercase font-proxima font-thin">
            {t.hero.subtitle}
          </p>
        </span>
        <Heading level="h1" className="text-6xl leading-10 text-ui-fg-base mt-10 mb-5 font-proxima font-semibold text-white">
          {t.hero.title}
        </Heading>
        <p className="text-base-regular small:text-lg-regular text-neutral-200 max-w-[32rem]">
          {t.hero.description}
        </p>
        <div className="flex items-center gap-4">
          <Button size="large" variant="secondary">
            {t.hero.shopNow}
          </Button>
          <Button size="large" variant="transparent">
            {t.hero.learnMore}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
