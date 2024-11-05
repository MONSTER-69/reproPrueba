function titulo(){

    const nombre="";
    //jsx <-parecido a HTML -> react.createElement
    if (nombre){
      return <p>Hola {nombre}</p>;
    }
  
    return <p>Hola Mundo</p>;
  
  }
  
  export default titulo;