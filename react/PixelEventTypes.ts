export type EventName =
  | 'addToCart'
  | 'cart'
  | 'cartChanged'
  | 'cartId'
  | 'cartLoaded'
  | 'categoryView'
  | 'checkout'
  | 'checkoutOption'
  | 'departmentView'
  | 'finishPayment'
  | 'homeView'
  | 'installWebApp'
  | 'internalSiteSearchView'
  | 'openDrawer'
  | 'orderPlaced'
  | 'otherView'
  | 'pageComponentInteraction'
  | 'pageInfo'
  | 'pageView'
  | 'productClick'
  | 'productComparison'
  | 'productImpression'
  | 'productView'
  | 'promotionClick'
  | 'promoView'
  | 'removeFromCart'
  | 'removeToWishlist'
  | 'sendPayments'
  | 'newsletterSubscription'

export interface PixelData {
  id?: string
  event?: EventName
  [data: string]: unknown
}
