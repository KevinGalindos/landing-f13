import { Button,Col, Row, Form, Input, Dropdown, Radio, Checkbox } from "antd"
import { DownOutlined,CloseOutlined } from '@ant-design/icons';
import React, { useState } from "react"

import idea from "../../../assets/images/Banners/great_idea.svg"
import consulting from "../../../assets/images/Banners/consulting.svg"

import { dummy } from "../../../assets/common/Utils/DummyHome"

const Quotation = () => {

  const option = (
    <div style={{display:"flex",flexDirection:'column',justifyContent:'center',backgroundColor:'#f9f6f6',height:'80px'}} >
      {dummy.service.map(item => (
        <a style={{margin:'5px 0'}} className="custom-select-link" key={item.id} href="/#">
            {item.name}
        </a>
      ))}
    </div>
  )

  const [sectionVisible, setSectionVisible] = useState("quotation")
  return (
    <div className="quotation">
      <div className="container">
        {sectionVisible === 'quotation' &&
          <>
            <div className="animate__animated animate__fadeIn quotation__image">
              <img alt={idea} src={idea} />
            </div>
            <div className="animate__animated animate__fadeIn quotation__main">
              <h2 className="primary-title">¿Quieres una cotización de tu idea? </h2>
              <p className="paragraphs">
                Te ayudamos a seguir el mejor camino para
                tu negocio. Solo necesitas continuar y asegurarte antes de empezar
              </p>
              <Button onClick={()=>setSectionVisible("quotationForm")} className="button--primary">Contáctanos</Button>
            </div>
          </>
        }
        {sectionVisible === 'quotationForm' &&
           <Row className="animate__animated animate__fadeIn quotationForm">
             <Col className="quotationForm__content" lg={12} xs={24}>
             <CloseOutlined onClick={()=>setSectionVisible("quotation")} />
               <h2 className="paragraphs">Soy</h2>
               <Form>
                 <Radio.Group>
                   <Row justify="space-between">
                   <Col lg={12} xs={24}>
                     <Form.Item>
                       <Radio value={1}>Persona natural</Radio>
                     </Form.Item>
                   </Col>
                   <Col lg={12} xs={24}>
                     <Form.Item>
                       <Radio value={2}>Empresa</Radio>
                     </Form.Item>
                   </Col>
                   </Row>
                 </Radio.Group>
                 <Row>
                   <Col lg={12} xs={24}>
                     <Form.Item 
                       label="Nombre"
                       name="name"
                       rules={[{ required: false, message: 'Tu Nombre es obligatorio!' }]}>
                       <Input placeholder="Ingrese su nombre" />
                     </Form.Item>
                     <Form.Item
                       label="Numero de documento"
                       name="document"
                       rules={[{ required: false, message: 'Tu contacto es obligatorio!', type: 'number' }]}>
                       <Input placeholder="Ingrese su número de documento" />
                     </Form.Item>
                   </Col>
                   <Col lg={12} xs={24}>
                     <Form.Item
                       label="Correo"
                       name="email"
                       rules={[{ required: false, message: 'Tu correo es obligatorio!', type: 'email' }]}>
                       <Input placeholder="Ingrese su número de Correo" />
                     </Form.Item>
                     <Form.Item
                     style={{display:'flex',flexDirection:'row'}}
                       label="¿Cómo te ayudamos?"
                       name="type"
                       rules={[{ required: false, message: 'Consulta obligatoría' }]}>
                       <Dropdown overlay={option} >
                         <a onClick={e => e.preventDefault()} className="ant-dropdown-link" >
                           Seleccionar servicio <DownOutlined />
                         </a>
                       </Dropdown>,
                     </Form.Item>
                   </Col>
                   <Row>
                     <Col lg={20}>
                       <Form.Item>
                         <Checkbox >Confirmo que conozco y acepto la Política de Tratamiento
                         de Datos, Terminos y Condiciones.</Checkbox>
                       </Form.Item>
                     </Col>
                   </Row>
                   <Col lg={24} className="content-submit">
                     <Form.Item >
                       <Button className="button--primary" htmlType="submit" >Enviar</Button>
                     </Form.Item>
                   </Col>
                 </Row>
               </Form>
             </Col>
             <Col lg={12} xs={24} className="content-image">
               <img alt={consulting} src={consulting}/>
             </Col>
           </Row>
        }
      </div>
    </div>
  )
}

export default Quotation
