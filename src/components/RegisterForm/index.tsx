import React from 'react'
import { Drawer, Button, Form, Row, Col, Input, Select, DatePicker } from 'antd'

import MaskedInput from 'antd-mask-input'
import { DrawerProps } from './types'

function RegisterForm({ visible, handleClose }: DrawerProps) {
  const { Option } = Select
  const { Item } = Form
  return (
    <Drawer
      title="Registrar um aluno"
      width={480}
      onClose={() => handleClose()}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
    >
      <Form layout="vertical" className="h-100 oy-auto" hideRequiredMark>
        <Row gutter={8}>
          <Col span={24}>
            <Item
              name="name"
              label="Nome"
              rules={[{ required: true, message: 'Por favor, digite o nome' }]}
            >
              <Input />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="cpf"
              label="CPF"
              rules={[{ required: true, message: 'Por favor, digite o CPF.' }]}
            >
              <MaskedInput mask="111.111.111-11" />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="rg"
              label="RG"
              rules={[{ required: true, message: 'Por favor, digite o RG.' }]}
            >
              <Input />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="birhtDate"
              label="Data de nascimento"
              rules={[{ required: true, message: 'Por favor, selecione uma data.' }]}
            >
              <DatePicker className="w-100" />
            </Item>
          </Col>
          <Col span={24}>
            <Item
              name="gender"
              label="Gênero"
              rules={[{ required: true, message: 'Por favor, selecione um gênero.' }]}
            >
              <Select placeholder="Por favor, selecione um gênero">
                <Option value="male">Masculino</Option>
                <Option value="female">Feminino</Option>
                <Option value="other">Outro</Option>
              </Select>
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="cep"
              label="CEP"
              rules={[{ required: true, message: 'Por favor, digite o CEP.' }]}
            >
              <MaskedInput mask="11111.111" />
            </Item>
          </Col>
          <Col span={18}>
            <Item
              name="address"
              label="Endereço"
              rules={[{ required: true, message: 'Por favor, digite o endereço.' }]}
            >
              <Input />
            </Item>
          </Col>
          <Col span={6}>
            <Item
              name="number"
              label="Número"
            >
              <Input />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="additional"
              label="Complemento"
            >
              <Input />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="reference"
              label="Referência"
            >
              <Input />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="district"
              label="Bairro"
              rules={[{ required: true, message: 'Por favor, digite o Bairro.' }]}
            >
              <Input />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="city"
              label="Cidade"
              rules={[{ required: true, message: 'Por favor, digite a cidade.' }]}
            >
              <Input />
            </Item>
          </Col>
          <Col span={18}>
            <Item
              name="email"
              label="E-mail"
              rules={[{ required: true, message: 'Por favor, digite o e-mail.' }]}
            >
              <Input />
            </Item>
          </Col>
          <Col span={18}>
            <Item
              name="telephone"
              label="Telefone"
            >
              <MaskedInput mask="(11) 1111-1111" />
            </Item>
          </Col>
          <Col span={18}>
            <Item
              name="cellphone"
              label="Telefone celular"
            >
              <MaskedInput mask="(11) 11111-1111" />
            </Item>
          </Col>
          <Col
            span={24}
            style={{
              position: 'sticky',
              bottom: 0,
              right: 0,
              background: '#fff'
            }}
          >
            <div
              className="text-right"
            >
              <Button
                onClick={() => handleClose()}
                style={{ marginRight: 8 }}
              >
                Cancelar
              </Button>
              <Button type="primary">
                Cadastrar
              </Button>
            </div>  
          </Col>
        </Row>
      </Form>
    </Drawer>
  )
}

export default RegisterForm