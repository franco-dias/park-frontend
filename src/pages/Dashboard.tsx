import React, { Suspense, lazy, useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  UserOutlined,
  BookOutlined,
  LaptopOutlined,
  UsergroupDeleteOutlined,
  SnippetsOutlined,
} from '@ant-design/icons'
import { HashLink as Link } from 'react-router-hash-link';

import { Route, Switch, useLocation } from 'react-router-dom';

function Dashboard() {

  const StudentPage = lazy(() => import('./StudentPage'))
  const TeacherPage = lazy(() => import('./TeacherPage'))
  const location = useLocation()

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
              defaultSelectedKeys={[location.pathname]}
              className="grow"
            >
              <Menu.Item key="/alunos">
                <Link to="/alunos">
                  <UserOutlined />
                  <span>
                    Alunos
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/professores">
                <Link to="/professores">
                  <LaptopOutlined />
                  <span>
                    Professores
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <UsergroupDeleteOutlined />
                <span>
                  Turmas
                </span>
              </Menu.Item>
              <Menu.Item key="4">
                <BookOutlined />
                <span>
                  Livros
                </span>
              </Menu.Item>
              <Menu.Item key="5">
                <SnippetsOutlined />
                <span>
                  Lições
                </span>
              </Menu.Item>
            </Menu>
          </Sider>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/alunos" component={StudentPage}/>
                <Route path="/professores" component={TeacherPage}/>
              </Switch>
            </Suspense>
        </Layout>
      </Content>
    </Layout>
  )
}

export default Dashboard