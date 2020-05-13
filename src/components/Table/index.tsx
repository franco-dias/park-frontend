import React, {useState, useMemo} from 'react'
import { Table } from 'antd'
import {
  EditOutlined
} from '@ant-design/icons'

import { StudentTypes } from './DataTypes/ModelTypes'
import { TableProps } from './types'
import { studentHeaders } from './DataTypes/Student'
import { GenericType } from '../../types'
import ActionsHeader from './ActionsHeader'
import styles from './style.module.css'

function CustomTable({ loading, data, tableType, handleDelete }: TableProps) {
  const [selectedRows, setSelectedRows] = useState<GenericType>([])
  const selectionType = 'checkbox'

  const handleEdit = (name: String) => {
    console.log('edit '+ name)
  }

  const tableHeaders = useMemo(() => {
    switch (tableType) {
      case 'student':
      case 'teacher':
        return [
          ...studentHeaders,
          {
            title: 'Ações',
            key: 'actions',
            render: (text: String, record: StudentTypes): React.ReactElement => {
              return (
                <div className={styles.actionColumn}>
                  <EditOutlined onClick={() => handleEdit(record.name)}/>
                </div>
              )
            }
          }
        ]
    }
  }, [tableType])

  return (
    <>
      <ActionsHeader selectedRows={selectedRows} handleDelete={handleDelete} />
      <Table
        columns={tableHeaders}
        dataSource={data}
        loading={loading}
        rowSelection={{
          type: selectionType,
          onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRows(selectedRows)
          }
        }}
      />
    </>
  )
}

export default CustomTable