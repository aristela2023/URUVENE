class Proyecto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrar: false
        }; 
        
        this.cambiarMostrar= this.cambiarMostrar.bind(this);
 }   

 cambiarMostrar(){
    var mostrarActual=this.state.mostrar;
    this.setState({
        mostrar: !mostrarActual
    });
    
}
render() {
    var clase= "";
    var texto= "";
    if(this.state.mostrar){
        clase="d-block";
        texto= " mostar menos"
    } else {
        clase=" d-none";
        texto="mostar más"
    }
    return(
       <React.Fragment>
                    <img src={"imagen/"+ this.props.imagen} alt="GALERIA URUVENE.UY" width="200px" class=" mr-3 d-none d-sm-block"/>
                    
                    <div>
                     <h4>{this.props.titulo}</h4>
                     <button class="btn btn-primary" onClick={this.cambiarMostrar}> {texto} </button>
                     <p class={clase}>{this.props.descripcion}</p>   
                                           
                        <a href={this.props.link} target="_blank" className={'btn btn- +{this.props.boton} + clase}'}>
                             Entrar 
                    </a>
                </div>
        </React.Fragment>
    );
 }
}
ReactDOM.render(
    <Proyecto titulo="GALERIA URUVENE.UY" descripcion=" Permite mostrar que las oportunidades que apoyan a tu nuevo desarrollo de vida en Uruguay!" imagen="imagen/logogripoempleo.jpg" link="imagen/1.jpg" boton="primary" />,
     document.getElementById("proyecto-Biografia"));

ReactDOM.render(
    <Proyecto titulo="Sitio-web" descripcion="Son las diferentes publicaciones del cual presentamos nuestros grupos de oportunidades" imagen="imagen/sitiosweb.jpg" link="https://instagram.com/compras.pasoapaso/" boton="primary" />,
    document.getElementById("proyecto-Sitio-Web"));