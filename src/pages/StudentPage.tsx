import React, { useState, useEffect } from 'react'
import { Button, Layout, Spin } from 'antd'
import {
  PlusOutlined,

} from '@ant-design/icons'

import Filters from '../components/Filters'
import Table from '../components/Table'
import RegisterForm from '../components/RegisterForm'

import { data } from './mock'


function StudentPage() {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const {
    Content,
  } = Layout

  return (
    <>
      <Content style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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
        {
          loading && (
            <div className="loader-wrapper grow">
              <Spin size="large" />
            </div>
          )
        }

        {
          !loading && (
            <div className="content-wrapper grow">
              <Filters />
              <Table
                data={data}
                tableType="student"
                handleDelete={(selectedRows) => { console.log(selectedRows) }}
              />
            </div>
          )
        }
      </Content>
      <RegisterForm visible={drawerVisible} handleClose={() => setDrawerVisible(false)} />
    </>   
  )
}

export default StudentPage