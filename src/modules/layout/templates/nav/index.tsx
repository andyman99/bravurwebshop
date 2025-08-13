import { retrieveCart } from "@/lib/data/cart"
import { retrieveCustomer } from "@/lib/data/customer"
import AccountButton from "@/modules/account/components/account-button"
import CartButton from "@/modules/cart/components/cart-button"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import FilePlus from "@/modules/common/icons/file-plus"
import LogoIcon from "@/modules/common/icons/logo"
import { MegaMenuWrapper } from "@/modules/layout/components/mega-menu"
import { RequestQuoteConfirmation } from "@/modules/quotes/components/request-quote-confirmation"
import { RequestQuotePrompt } from "@/modules/quotes/components/request-quote-prompt"
import SkeletonAccountButton from "@/modules/skeletons/components/skeleton-account-button"
import SkeletonCartButton from "@/modules/skeletons/components/skeleton-cart-button"
import { Suspense } from "react"
import LanguageSwitcher from "@/modules/common/components/language-switcher"

export default function NavigationHeader() {
  return (
    <div className="border-b border-ui-border-base">
      <div className="content-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center small:space-x-4">
            <LocalizedClientLink
              href="/"
              className="hover:text-ui-fg-base flex items-center w-fit"
            >
              <h1 className="small:text-base text-sm font-medium flex items-center font-proxima-nova">
                <LogoIcon className="inline mr-2" />
                Bravur System
              </h1>
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <RequestQuotePrompt />
            <Suspense fallback={<SkeletonCartButton />}>
              <CartButton />
            </Suspense>
            <Suspense fallback={<SkeletonAccountButton />}>
              <AccountButton />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
