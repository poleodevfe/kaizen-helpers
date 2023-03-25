## Requisitos

1- Ten instalado el plugin de [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscodes)
2- Sigue las indicaciones del pluggin para habilitar el guardado automático al salvar tu archivo

## Reglas generales

1- Todo debe ser escrito en ingles, desde comentarios a nombre de funciones
2- Las ramas habilitadas para trabajar son `["feat", "fix", "perf", "docs", "ci"]` por ejemplo: ci/improvePipelines, feat/newHelper

## Sobre los tests

1- Hacemos tests para las [personas](https://97cosas.com/programador/escribe-pruebas-para-personas.html)
2- Usamos `it` y no `test`
3- Todos nuestros tests deben estar envueltos por un `describe`
4- Usamos SWA (Should when and) para describir nuestros tests
5- Usamos AAA (Arrange, Act y Assert) para estructurar nuestros tests
6- Todas las funciones deben cubrir el caso de error
7- Todas las funciones deben llevar JSDocs
