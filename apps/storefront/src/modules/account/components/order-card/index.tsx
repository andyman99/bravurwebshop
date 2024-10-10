import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import { Button, Container } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useMemo } from "react"
import CalendarIcon from "../../../common/icons/calendar"
import DocumentIcon from "../../../common/icons/document"

type OrderCardProps = {
  order: HttpTypes.StoreOrder
}

const OrderCard = ({ order }: OrderCardProps) => {
  const createdAt = new Date(order.created_at)
  const numberOfLines = useMemo(() => {
    return (
      order.items?.reduce((acc, item) => {
        return acc + item.quantity
      }, 0) ?? 0
    )
  }, [order])

  return (
    <Container className="bg-white flex p-4 rounded-md justify-between align-center items-center">
      <div className="flex justify-between align-center items-center gap-4">
        <div className="flex">
          {order.items?.slice(0, 3).map((i) => {
            return (
              <div
                key={i.id}
                className="w-7 h-7 border-2 border-neutral-200 bg-cover bg-center rounded-md ml-[-5px]"
                style={{ backgroundImage: `url(${i.thumbnail})` }}
              />
            )
          })}
        </div>

        <div
          className="flex items-center pr-2 text-small-regular"
          data-testid="order-created-at"
        >
          <CalendarIcon className="inline-block mr-1" />
          {createdAt.getDate()}-{createdAt.getMonth()}-{createdAt.getFullYear()}
        </div>

        <div className="flex items-center text-small-regular">
          <DocumentIcon className="inline-block mr-1" />
          <span data-testid="order-display-id">#{order.display_id}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex items-center text-small-regular text-ui-fg-base">
          <span className="px-2" data-testid="order-amount">
            {convertToLocale({
              amount: order.total,
              currency_code: order.currency_code,
            })}
          </span>
          {"·"}
          <span className="px-2">{`${numberOfLines} ${
            numberOfLines > 1 ? "items" : "item"
          }`}</span>
          {"·"}
        </div>

        <div className="flex items-center gap-x-2">
          {/* <Button
            data-testid="card-details-link"
            variant="secondary"
            className="rounded-full text-xs"
          >
            Export to PDF
          </Button> */}
          <LocalizedClientLink href={`/account/orders/details/${order.id}`}>
            <Button
              data-testid="card-details-link"
              variant="secondary"
              className="rounded-full text-xs"
            >
              Details
            </Button>
          </LocalizedClientLink>
        </div>
      </div>
    </Container>
  )
}

export default OrderCard
