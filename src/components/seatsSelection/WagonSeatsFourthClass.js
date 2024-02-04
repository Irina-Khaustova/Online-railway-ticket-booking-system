import img from "../../img/fourthClass.png";
import sort from "./additional/sort";

export default function WagonSchemeFourthClass(props) {

  const {seats, click} = props;
    
let block1 = [];
for (let i=2; i<=32; i+=2) {
  sort(i, block1, seats)
}

let block2 = [];
for (let i=1; i<=31; i+=2) {
  sort(i, block2, seats)
}

let block4 = [];

for (let i=34; i<=60; i+=2) {
  sort(i, block4, seats)
}

let block5 = [];

for (let i=33; i<=61; i+=2) {
  sort(i, block5, seats)
} 

sort(62, block5, seats);

let colorlass = "rgba(196, 196, 196, 1";

    return (
      <div className="wagon-scheme">
        <div className="number-seats-left-fourth-class"></div>
        <img className="wagon-scheme-img" src={img}></img>
        <div className="scheme-fourth-class">
          <div className="scheme-block1" >{block1.map((el) => <div className={el.class} onClick={click} key={el.index} id={el.index}>{el.index}</div>)}</div>
          <div className="scheme-block2" >{block2.map((el) => <div className={el.class} onClick={click} key={el.index} id={el.index}>{el.index}</div>)}</div>
          <div className="scheme-block3"></div>
          <div className="scheme-block4">{block4.map((el) => <div className={el.class} onClick={click} key={el.index} id={el.index}>{el.index}</div>)}</div>
          <div className="scheme-block5">{block5.map((el) => <div className={el.class} onClick={click} key={el.index} id={el.index}>{el.index}</div>)}</div>
          </div>
      </div>
    );
  }