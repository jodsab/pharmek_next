import React from 'react'

import ProductoClient from './page.client'

type PageProps = {
  params: { idProducto: string }
}

const ProductoPage = ({ params }: PageProps): React.JSX.Element => {
  return <ProductoClient params={params} />
}

export default ProductoPage
