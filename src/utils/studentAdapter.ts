import { format, parseISO } from 'date-fns'
import { StudentTypes } from '../components/Table/DataTypes/ModelTypes'

function studentAdapter(studentList: any): StudentTypes[] {
  console.log(studentList)
  const adapted: StudentTypes[] = studentList.data.map((item: any) => ({
    key: item.id,
    name: item.nome,
    gender: item.genero,
    cpf: item.cpf,
    rg: item.rg,
    birthDate: format(
      parseISO(item.dataNasc),
      'dd/MM/yyyy'
    ),
    address: item.endereco.rua,
  }))
  return adapted
}

export default studentAdapter