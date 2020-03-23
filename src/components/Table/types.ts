import { GenericType } from '../../types'

export interface TableProps {
  data: GenericType,
  handleDelete: (selectedRows: GenericType) => void,
  tableType: String,
}