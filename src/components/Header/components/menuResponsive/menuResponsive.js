import React from "react";
import { Menu, Col } from "antd"
import { CloseOutlined } from "@ant-design/icons"
import { dummy } from "../../../../assets/common/Utils/DummyHome"
import Logo from "../../../../assets/images/Icons/LogoWhite.png"


export const menuHamburguer = ({setVisible}) => {
	return (
		<Menu>
			<div className="content-items">
			<img alt="logo" className="logo-resp" src={Logo}/>
				<CloseOutlined onClick={() => setVisible(false)} />
				<a href="/home" className="paragraphs ">
					Contáctanos
        </a>
				<a href="/home" className="paragraphs ">
					Nosotros
        </a>
				<a href="/home" className="paragraphs ">
					Servicios
        </a>
				<Col>
					{dummy.flag.map(item => (
						<Menu.Item key={item.id}>
							<img alt={item.name} src={item.image} />
						</Menu.Item>
					))}
				</Col>
			</div>
			<div className="content-promotion">
				<h2 className="secondary-degree">
					Estamos mejorando para brindarte un Excelente servicio
      </h2>
			</div>
		</Menu>
	);
}


