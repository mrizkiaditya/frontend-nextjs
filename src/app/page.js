import React from 'react'
import Layout, { Content, Header } from 'antd/es/layout/layout'
import Sidebar from './components/Sidebar'
import './page.css'

const page = () => {

  return (
    <Layout>
        <Sidebar />
        <Layout>
          <Header className='header'></Header>
          <Content className='content'></Content>
        </Layout>
      </Layout>
  )
}

export default page