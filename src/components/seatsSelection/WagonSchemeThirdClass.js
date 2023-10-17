import img from "../../img/image.png";
import sort from "./additional/sort";

export default function WagonSchemeThirdClass(props) {

  const {seats, click}  = props; 
 
let block1 = [];
for (let i=2; i<=32; i+=2) {
 sort(i, block1, seats)
}

let block2 = [];
for (let i=1; i<=31; i+=2) {
  sort(i, block2, seats)
}

let block4 = [];

for (let i=33; i<=48; i+=1) {
  sort(i, block4, seats)
}
let colorlass = "rgba(196, 196, 196, 1";


    return (
      <div className="wagon-scheme">
        <img className="wagon-scheme-img" src={img}></img>
        <div className="scheme-third-class">
          <div className="scheme-block1">{block1.map((el) => <div className={el.class} onClick={click} key={el.index} id={el.index}>{el.index}</div>)}</div>
          <div className="scheme-block2">{block2.map((el) => <div className={el.class} onClick={click} key={el.index} id={el.index}>{el.index}</div>)}</div>
          <div className="scheme-block3"></div>
          <div className="scheme-block4">{block4.map((el) => <div className={el.class} onClick={click} key={el.index} id={el.index}>{el.index}</div>)}</div>
          </div>
      </div>
    );
  }