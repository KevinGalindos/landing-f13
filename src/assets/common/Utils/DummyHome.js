// Images Component WhatDoWeDo 
import ecommerce from '../../images/Banners/ecommerce.svg'
import userInterface from '../../images/Banners/user_interface.svg'
import webDeveloper from '../../images/Banners/Web_developer.svg'

//Images Component flags
import spain from '../../../assets/images/Icons/espana.svg'
import UUEE from '../../../assets/images/Icons/ue.svg'

//Images Component OurClients
import Fex from '../../images/Brands/brand-1.png'
import DavidVas from '../../images/Brands/brand-2.png'
import Poetri from '../../images/Brands/brand-3.png'
import Nativo from '../../images/Brands/brand-4.png'
import Celagem from '../../images/Brands/brand-5.png'


//Images Component jobs
import fullStack from '../../../assets/images/Icons/coding.svg'
import backEnd from '../../../assets/images/Icons/coding2.svg'
import frontEnd from '../../../assets/images/Icons/code_css_.svg'
import MobileDeveloper from '../../../assets/images/Icons/frotend.svg'
import designer from '../../../assets/images/Icons/designer.svg'



export const dummy = {
  flag:[
    {
      id: '1',
      name: 'Español',
      image:spain
    },
    {
      id: '2',
      name: 'English',
      image:UUEE
    } 
  ],
  whatdowedo:[
    {
      id: '1',
      title: 'E-commerce',
      description:'Creación de tu tienda online, gestión de productos, clientes',
      image:ecommerce,
    },
    {
      id: '2',
      title: 'Diseño UI/UX',
      description:'Diseño de interfaces de usuario,páginas web, aplicaciones móviles, criterios de usabilidad.',
      image:userInterface,
    },
    {
      id: '3',
      title: 'Desarollo web/móvil',
      description:'Base de datos, programación, desarrollo de Fronted y Backend. Desarrollo de aplicaciones para   dispositivos Androi y ios.',
      image:webDeveloper,
    },
  ],
  service:[
    {
      id: '1',
      name: 'Consulta',
    },
    {
      id: '1',
      name: 'Reporte',
    },
  ],
  
  jobs:[
    {
      id: '1',
      title: 'Full Stack Developer ',
      img:fullStack,
      description:'Base de datos, programación, desarrollo de Fronted y Backend. Desarrollo de aplicaciones para dispositivos Androi y ios.',
    },
    { 
    id: '2',
    title: 'Back End Developer ',
    img:backEnd,
    description:'Base de datos, programación, desarrollo de Fronted y Backend. Desarrollo de aplicaciones para dispositivos Androi y ios.',
   },
   { 
    id: '3',
    title: 'Front End Developer  ',
    img:frontEnd,
    description:'Base de datos, programación, desarrollo de Fronted y Backend. Desarrollo de aplicaciones para dispositivos Androi y ios.',
   },
   { 
    id: '4',
    title: 'Mobile/Web Developer ',
    img:MobileDeveloper,
    description:'Base de datos, programación, desarrollo de Fronted y Backend. Desarrollo de aplicaciones para dispositivos Androi y ios.',
   },
   { 
    id: '5',
    title: 'Diseño UX/UI ',
    img:designer,
    description:'Base de datos, programación, desarrollo de Fronted y Backend. Desarrollo de aplicaciones para dispositivos Androi y ios.',
   },
  ],
  ourclients:[
    {
      id: '1',
      title: 'Fex',
      image:Fex,
    },
    {
      id: '2',
      title: 'DavidVas',
      image:DavidVas,
    },
    {
      id: '3',
      title: 'Poetri',
      image:Poetri,
    },
    {
      id: '4',
      title: 'Nativo',
      image:Nativo,
    },
    {
      id: '5',
      title: 'Celagem',
      image:Celagem,
    },
  ]
}