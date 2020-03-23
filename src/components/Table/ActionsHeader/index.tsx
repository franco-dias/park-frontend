import React from 'react'
import { ActionsHeaderProps } from './types'
import { Alert, Button, Popconfirm } from 'antd'
import {
  DeleteOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons'

import styles from './style.module.css'

function ActionsHeader({ selectedRows, handleDelete }: ActionsHeaderProps) {
  if (!selectedRows.length) return null
  
  const selectionInfoMessage = (
    <div className={styles.warningWrapper}>
      <span>Você selecionou {selectedRows.length} registro{selectedRows.length > 1 && 's'}.</span>
      <div>
        <Popconfirm
          title="Tem certeza?"
          icon={<QuestionCircleOutlined />}
          okText="Sim, desativar todos."
          cancelText="Não."
          onConfirm={() => handleDelete(selectedRows)}
        >
          <Button
            type="primary"
            shape="round"
            icon={<DeleteOutlined />}
          >
            Desativar todos
          </Button>
        </Popconfirm>
      </div>
    </div>
  )

  return (
    <div className={styles.alertWrapper}>
      <Alert message={selectionInfoMessage} type="info" />
    </div>
  )
}

export default ActionsHeader