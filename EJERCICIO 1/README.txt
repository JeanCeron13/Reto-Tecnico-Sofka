1.  INSTALACION DE CYPRESS

1.Instalar NodeJS
  Verificar si NodeJS esta instalado node -v npm -v
  Descargar NodeJS
  Instalar NodeJS
  Verificar si se instalo correctamente

2 Instalar Cypress
  Crear una carpeta donde trabajar
  Abrir un cmd como adminsitrador y dirigirse a la carpeta
  Iniciar un proyecto de NodeJs npm init -y
  Instalar Cypress npm install cypress@13.4.2 --save-dev

3 Instalar Visual Studio code
  Descargar visual studio code
  Instalar visual studio code
  Abrir la carpeta donde instalamos Cypress
  Abrir la terminal y ejecutar Cypress npx cypress open

4 Configurar Cypress
  Elegir e2e testing
  Click continue
  Elegir el navegador y empezar el testing
  Seleccionar scafold 
  Ejecutar el test que deseamos para verificar que funcione
  Cerrar la interfaz de cypress
  Verificar que se crearon las carpetas en el proyecto

5. Configurar cypress.config.js la base de la url para el acceso 
6. configurar en package.json el ambiente de ejecución

5 Instalar xpath para cypress y colocar en e2e.js  la importación de xpath

6. Creación de proyecto e22
	proyectoPrueba.cy.js

7. Creación de paginas 
	homePage y register 
	para segmentar las variables y los metodos que se van a utiliza en cada pagina 
8. Crear fixtures con la data a utilizar en cada pagina 

9. Importar las paginas en el proyecto 

10. crear el paso de prueba 

11 ejecutar el caso de prueba con nmp test 

12. ejecutar reporte con cypress run --browser chrome --spec */**/proyectoPrueba.cy.js


13. Generar el reporte con 
