import React from 'react'
import { Header, Divider, Table } from 'semantic-ui-react'
import Helmet from 'react-helmet'
export default ({
  description,
  material,
  max_watt,
  bulb_qty,
  finish,
  bulb,
}) => (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Titletttttt</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta property="og:url" content="https://marhenj.com/product/예약1차신상-15할인퍼참-증정-신디백-버건디/941/" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content="[예약1차][신상 15%할인+퍼참 증정] 신디백 버건디" />
        <meta property="og:site_name" content="마르헨제이" />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://www.marhenj.com/web/product/big/201909/e399986b2d580e4e00e274403eb0cf8e.jpg" />
        <meta property="product:price:amount" content="141100" />
        <meta property="product:price:currency" content="KRW" />
        <meta property="product:sale_price:amount" content="141100" />
        <meta property="product:sale_price:currency" content="KRW" />
      </Helmet>
      <Header as="h3">About this product</Header>
      <p>{description}</p>

      <Divider />

      <Table celled>
        <Table.Header style={{ background: '#f9fafb' }}>
          <Table.Row>
            <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Material</Table.Cell>
            <Table.Cell>{material}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Max watt.</Table.Cell>
            <Table.Cell>{max_watt}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bulb qty.</Table.Cell>
            <Table.Cell>{bulb_qty}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Finish</Table.Cell>
            <Table.Cell>{finish}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Fitting</Table.Cell>
            <Table.Cell>{bulb}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
