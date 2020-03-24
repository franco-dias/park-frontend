import React, { useState } from 'react'
import { Button, Layout } from 'antd'
import {
  PlusOutlined,

} from '@ant-design/icons'

import Filters from '../components/Filters'
import Table from '../components/Table'
import RegisterForm from '../components/RegisterForm'

import { data } from './mock'


function TeacherPage() {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const {
    Content,
  } = Layout

  return (
    <>
      <Content style={{ padding: '24px', flexGrow: 1 }}>
      <div className="flex items-center justify-between title-wrapper">
        <span className="title">
          Professores
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
  </>   
  )
}

export default TeacherPage