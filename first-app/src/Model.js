import "./FormStyle.css";
export default function Modal({isVisible ,title,style}) {
  if(isVisible){
      return (
      <div id="modal">
        <div id="modal-content" >
          <h2 style={style}>{title}</h2>
        </div>
      </div>
    );
  } 
  else {
    return null;
  }
}