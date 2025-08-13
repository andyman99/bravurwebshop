"use client"

import React from "react"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@/modules/common/components/interactive-link"
import ProductPreview from "@/modules/products/components/product-preview"
import { useTranslation } from "@/lib/hooks/use-translation"

export default function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const t = useTranslation();
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-16">
      <div className="flex items-center justify-between mb-8">
        <Text className="txt-compact-xlarge text-ui-fg-base font-proxima font-semibold">
          {collection.title}
        </Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          {t.actions.viewAll}
        </InteractiveLink>
      </div>
      <div className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-4 gap-y-8 small:gap-y-12">
        {products.map((product) => (
          <ProductPreview key={product.id} product={product} region={region} />
        ))}
      </div>
    </div>
  )
}
