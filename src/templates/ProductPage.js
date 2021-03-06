/* eslint-disable */
import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import ProductSummary from '../components/ProductSummary'
import ProductAttributes from '../components/ProductAttributes'
import Layout from '../components/Layout'

class ProductPageTemplate extends React.PureComponent {
  render() {
    const productInfo = get(this, 'props.data.allMoltinProduct')
    const data = productInfo.edges[0].node
    const slug = data.slug
    const image = get(data, 'mainImageHref')
    const sizes = get(data, 'mainImage.childImageSharp.sizes')
    const product = {
      ...data,
      id: data.id,
      image,
      mainImage: data.mainImage,
      header: data.name,
      meta: data.meta,
      sku: data.sku,
    }

    if (!sizes) return null

    return (
      <Layout location={this.props.location}>
        <Helmet>

        <meta property="og:title" content={data.name} />
        <meta property="og:description" content={data.name} />
        <meta property="og:url" content={'https://agitated-pike-1d9669.netlify.com/product/'+data.id+'/'} />
        <meta property="og:image" content='https://agitated-pike-1d9669.netlify.com/static/8548dafdd6970611a732a4f53d420820/f3321/98bd6f42-6c3f-4db4-8c05-67add682ab8c.png' />
        <meta property="product:brand" content='Cheese Market' />
        <meta property="product:availability" content='in stock' />
        <meta property="product:condition" content='new' />
        <meta property="product:price:amount" content='1000' />
        <meta property="product:price:currency" content='KRW' />
        <meta property="product:retailer_item_id" content={data.id} />
        <title>Product_{data.name}</title>

        </Helmet>
        <ProductSummary {...product} />
        <ProductAttributes {...product} />
      </Layout>
    )
  }
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query ProductsQuery($id: String!) {
    allMoltinProduct(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          name
          description
          meta {
            display_price {
              with_tax {
                amount
                currency
                formatted
              }
            }
          }
          mainImageHref
          mainImage {
            childImageSharp {
              sizes(maxWidth: 400) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          slug
          material
          max_watt
          bulb_qty
          bulb
          sku
          finish
        }
      }
    }
  }
`
