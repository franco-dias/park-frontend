import { GenericType } from '../../types'

export interface TableProps {
  loading: boolean,
  data: GenericType,
  handleDelete: (selectedRows: GenericType) => void,
  tableType: String,
}