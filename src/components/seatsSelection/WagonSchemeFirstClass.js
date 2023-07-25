import img from "../../img/image.png"

export default function WagonSchemeFrstClass(props) {
    
let block1 = [];
for (let i=1; i<=16; i+=1) {
  block1.push(i)
}

let block2 = [];
for (let i=1; i<=16; i+=1) {
  block2.push(i)
}

let block4 = [];

for (let i=1; i<=8; i+=1) {
  block4.push(i)
}
let colorlass = "rgba(196, 196, 196, 1";


    return (
      <div className="wagon-scheme">
        <img className="wagon-scheme-img" src={img}></img>
        <div className="scheme">
          <div className="scheme-block1">{block1.map((el) => <div className="scheme-block-item" key={el} id={el}></div>)}</div>
          <div className="scheme-block2">{block2.map((el) => <div className="scheme-block-item scheme-block-item-first-class" key={el} id={el}>{el}</div>)}</div>
          <div className="scheme-block3-first-class"></div>
          <div className="scheme-block4">{block4.map((el) => <div className="scheme-block4-item-first-class" key={el} id={el}></div>)}</div>
          </div>
      </div>
    );
  }