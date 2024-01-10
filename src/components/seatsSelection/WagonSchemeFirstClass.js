import img from "../../img/scheme-first.png";
import sort from "./additional/sort";

export default function WagonSchemeFrstClass(props) {

  const {seats, click}  = props; 
  
let block1 = [];
for (let i=1; i<=16; i+=1) {
  sort(i, block1, seats)
}

let block2 = [];
for (let i=1; i<=16; i+=1) {
  sort(i, block2, seats)
}
    return (
      <div className="wagon-scheme">
        <img className="wagon-scheme-img" src={img}></img>
        <div className="scheme-first-class">
          <div className="scheme-block1">{block1.map((el) => <div className={el.class} onClick={click} key={el.index} id={el.index}>{el.index}</div>)}</div>
          <div className="scheme-block3"></div>
          
          </div>
      </div>
    );
  }