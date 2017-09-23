import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'antd'

import { Base as Layout } from '~/layouts/'
import { LangSwitch, Markdown } from '~/components'

const about = `

> Insta360 System Status. 😀
  
## Images

Docker 镜像列表

## Clusters

Docker 集群状态

## Discuss

- Report [https://community.arashivision.com/category/4/%E6%B5%8B%E8%AF%95-%E5%8F%8D%E9%A6%88](https://community.arashivision.com/category/4/%E6%B5%8B%E8%AF%95-%E5%8F%8D%E9%A6%88)
`

@inject('app')
@observer
class Home extends Component {
  render() {
    const { location, app } = this.props
    const { pathname } = location
    const breadcrumbs = pathname.split('/')
    const { menus: navMmenus, locale, changeLanguageTo } = app
    const menus = navMmenus.length > 0 ? navMmenus.peek() : []

    return (
      <Layout
        {...{
          menus,
          breadcrumbs,
        }}
        lang={
          <LangSwitch locale={locale} changeLanguageTo={changeLanguageTo} />
        }
      >
        <Helmet>
          <title>Status - Insta360</title>
        </Helmet>
        <div>
          <Row gutter={16}>
            <Col sm={16} xs={24}>
              <Markdown text={about} />
            </Col>
          </Row>
        </div>
      </Layout>
    )
  }
}

export default Home
