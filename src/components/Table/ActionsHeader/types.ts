import { GenericType } from '../../../types'

export interface ActionsHeaderProps {
  selectedRows: GenericType,
  handleDelete: (selectedRows: GenericType) => void
}
