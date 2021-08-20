import React from "react"

import { Form, Input, InputNumber, Button } from "antd"

const validateMessages = {
  required: "${label} no debe estar vacio!",
  types: {
    email: "${label} no es un correo válido!",
    number: "${label} no es un número válido!",
  },
  number: {
    range: "${label} Debe tener entre ${min} and ${max} números",
  },
}

export const FormWeTrain = () => {
  return (
    <div className="wrapper">
      <h1 className="primary-title">
        Capacitamos jóvenes antes de enfrentar al mundo laboral
      </h1>
      <Form
        name="nest-messages"
        validateMessages={validateMessages}
      >
        <h2 className="secondary-degree">¿Estás interesado?</h2>
        <div className="form-item">
          <label>Correo</label>
          <Form.Item
            name={["user", "email"]}
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="form-item">
          <label>Celular/Telefono</label>
          <Form.Item
            name={["user", "celular"]}
            rules={[{ type: "number", min: 8, max: 10 }]}
          >
            <InputNumber />
          </Form.Item>
        </div>

        <Form.Item className="cont-btn">
          <Button className="btn-send" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
