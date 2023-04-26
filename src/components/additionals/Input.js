export default function Input(props) {
const {classContainer, classInput, type} = props;
      return (
        
          <div className={classContainer}>
            <input type={type} className={classInput}></input>
            <input type={type} className={classInput}></input>
          </div>
      )    
    }
    