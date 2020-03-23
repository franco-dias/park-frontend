import React from 'react'
import {
  Form,
  Input,
  Select,
  Switch,
  Row,
  Col
} from 'antd'
import MaskedInput from 'antd-mask-input'

function Filters() {
  const { Option } = Select
  return (
    <>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={() => {}}
        onFinishFailed={() => { }}
        onValuesChange={(valuesChanged, allValues) => {console.log({valuesChanged, allValues})}}
      >
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              label="Nome"
              name="name"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Gênero"
              name="gender"
            >
              <Select
                placeholder="Selecione um gênero"
                onChange={() => {}}
                allowClear
              >
                <Option value="male">Masculino</Option>
                <Option value="female">Feminino</Option>
                <Option value="other">Outro</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="CPF"
              name="cpf"
            >
              <MaskedInput mask="111.111.111-11" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Apenas vigentes"
              name="activated"
            >
              <Switch />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Filters