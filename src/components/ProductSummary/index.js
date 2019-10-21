import React from 'react'
import Img from 'gatsby-image'
import { Helmet } from "react-helmet"
import { Item, Label } from 'semantic-ui-react'

import AddToCart from '../AddToCart'

export default ({ id, name, meta, sku, mainImage }) => (
  <Item.Group>
    <Helmet>

        <meta property="og:title" content={name} />
        <meta property="og:description" content={name} />
        <meta property="og:url" content={'https://agitated-pike-1d9669.netlify.com/product/'+id+'/'} />
        <meta property="og:image" content={mainImage} />
        <meta property="product:brand" content='Cheese Market' />
        <meta property="product:availability" content='in stock' />
        <meta property="product:condition" content='new' />
        <meta property="product:price:amount" content='1000' />
        <meta property="product:price:currency" content='KRW' />
        <meta property="product:retailer_item_id" content={id} />
        <title>Product_{name}</title>

    </Helmet>
    <Item style={{ alignItems: 'center' }}>
      <Item.Image size="medium">
        <Img
          style={{ width: '250px' }}
          sizes={mainImage.childImageSharp.sizes}
          alt={name}
        />
      </Item.Image>
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Description>
          <p>{meta.display_price.with_tax.formatted}</p>
          <Label>SKU: {sku}</Label>
        </Item.Description>
        <Item.Extra>
          <AddToCart productId={id} />
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)
