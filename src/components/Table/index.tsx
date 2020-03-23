import React, {useState, useMemo} from 'react'
import { Table } from 'antd'

import { TableProps } from './types'

import { studentHeaders } from './DataTypes/Student'
import { GenericType } from '../../types'

import ActionsHeader from './ActionsHeader'

function CustomTable({ data, tableType, handleDelete }: TableProps) {
  const [selectedRows, setSelectedRows] = useState<GenericType>([])
  const selectionType = 'checkbox'

  const tableHeaders = useMemo(() => {
    switch (tableType) {
      case 'student':
      case 'teacher':
        return studentHeaders
    }
  }, [tableType])

  return (
    <>
      <ActionsHeader selectedRows={selectedRows} handleDelete={handleDelete} />
      <Table
        columns={tableHeaders}
        dataSource={data}
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