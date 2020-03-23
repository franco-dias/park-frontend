import React, { useState } from 'react'
import { Layout, Menu, Button} from 'antd'
import {
  UserOutlined,
  BookOutlined,
  LaptopOutlined,
  UsergroupDeleteOutlined,
  SnippetsOutlined,
  PlusOutlined
} from '@ant-design/icons'
import { data } from './mock'

import Table from '../components/Table'
import Filters from '../components/Filters'
import RegisterForm from '../components/RegisterForm'

function Dashboard() {
  const [drawerVisible, setDrawerVisible] = useState(false)
  
  const {
    Header, Content, Sider,
  } = Layout

  return (
    <Layout className="vh-100">
      <Header className="header">
        <div className="logo" />
      </Header>
      <Content className="flex grow">
        <Layout className="site-layout-background flex g">
          <Sider className="site-layout-background grow grow-ul">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              className="grow"
            >
              <Menu.Item key="1">
                <UserOutlined />
              Alunos
              </Menu.Item>
              <Menu.Item key="2">
                <LaptopOutlined />
              Professores
              </Menu.Item>
              <Menu.Item key="3">
                <UsergroupDeleteOutlined />
              Turmas
              </Menu.Item>
              <Menu.Item key="4">
                <BookOutlined />
              Livros
              </Menu.Item>
              <Menu.Item key="5">
                <SnippetsOutlined />
              Lições
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: '24px', flexGrow: 1 }}>
            <div className="flex items-center justify-between title-wrapper">
              <span className="title">
                Alunos
              </span>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setDrawerVisible(true)}
                shape="round"
              >
                Criar novo
              </Button>
            </div>
            <div className="content-wrapper">
              <Filters />
              <Table
                data={data}
                tableType="student"
                handleDelete={(selectedRows) => { console.log(selectedRows) }}
              />
            </div>
          </Content>
          <RegisterForm visible={drawerVisible} handleClose={() => setDrawerVisible(false)} />
        </Layout>
      </Content>
    </Layout>
  )
}

export default Dashboard
