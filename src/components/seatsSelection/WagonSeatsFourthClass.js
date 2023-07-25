import img from "../../img/fourthClass.png"

export default function WagonSchemeFourthClass(props) {
    
let block1 = [];
for (let i=2; i<=32; i+=2) {
  block1.push(i)
}

let block2 = [];
for (let i=1; i<=31; i+=2) {
  block2.push(i)
}

let block4 = [];

for (let i=34; i<=60; i+=2) {
  block4.push(i)
}

let block5 = [];

for (let i=33; i<=61; i+=2) {
  block5.push(i)
} 

block5.push(62)
let colorlass = "rgba(196, 196, 196, 1";



    return (
      <div className="wagon-scheme">
        <div className="number-seats-left-fourth-class"></div>
        <img className="wagon-scheme-img" src={img}></img>
        <div className="scheme-fourth-class">
          <div className="scheme-block1-fourth-class">{block1.map((el) => <div className="scheme-block-item-fourth-class" key={el} id={el}>{el}</div>)}</div>
          <div className="scheme-block2-fourth-class">{block2.map((el) => <div className="scheme-block-item-fourth-class" key={el} id={el}>{el}</div>)}</div>
          <div className="scheme-block3-fourth-class"></div>
          <div className="scheme-block4-fourth-class">{block4.map((el) => <div className="scheme-block-item-fourth-class" key={el} id={el}>{el}</div>)}</div>
          <div className="scheme-block5-fourth-class">{block5.map((el) => <div className="scheme-block-item-fourth-class" key={el} id={el}>{el}</div>)}</div>
          </div>
      </div>
    );
  }