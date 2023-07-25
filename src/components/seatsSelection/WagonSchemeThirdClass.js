import img from "../../img/image.png"

export default function WagonSchemeThirdClass(props) {
    
let block1 = [];
for (let i=2; i<=32; i+=2) {
  block1.push(i)
}

let block2 = [];
for (let i=1; i<=31; i+=2) {
  block2.push(i)
}

let block4 = [];

for (let i=33; i<=48; i+=1) {
  block4.push(i)
}
let colorlass = "rgba(196, 196, 196, 1";


    return (
      <div className="wagon-scheme">
        <img className="wagon-scheme-img" src={img}></img>
        <div className="scheme">
          <div className="scheme-block1">{block1.map((el) => <div className="scheme-block-item" key={el} id={el}>{el}</div>)}</div>
          <div className="scheme-block2">{block2.map((el) => <div className="scheme-block-item" key={el} id={el}>{el}</div>)}</div>
          <div className="scheme-block3-third-class"></div>
          <div className="scheme-block4">{block4.map((el) => <div className="scheme-block4-item" key={el} id={el}>{el}</div>)}</div>
          </div>
      </div>
    );
  }