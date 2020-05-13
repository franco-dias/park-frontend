import React, { useState, useEffect } from 'react'
import { Button, Layout, Spin } from 'antd'
import {
  PlusOutlined,
} from '@ant-design/icons'

import Filters from '../components/Filters'
import Table from '../components/Table'
import RegisterForm from '../components/RegisterForm'
import * as studentApi from '../api/student'
import studentAdapter from '../utils/studentAdapter'
import store from '../store'

const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch({
  type: 'LOGIN_USER',
  userData: {
    token: 'api token here',
    name: 'Gabriel',
    email: 'gabrielfdg10@gmail.com'
  }
})

store.dispatch({ type: 'LOGOUT_USER' })

unsubscribe()


function StudentPage() {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [studentList, setStudentList] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const {
    Content,
  } = Layout

  useEffect(() => {
    async function getStudents() {
      const students = await studentApi.get()
      setStudentList(studentAdapter(students))
      setLoading(false)
    }
    setLoading(true)
    getStudents()
  }, [])

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
        <div className="content-wrapper grow">
          <Filters />
          <Table
            data={studentList}
            loading={loading}
            tableType="student"
            handleDelete={(selectedRows) => { console.log(selectedRows) }}
          />
        </div>
      </Content>
      <RegisterForm visible={drawerVisible} handleClose={() => setDrawerVisible(false)} />
    </>   
  )
}

export default StudentPage