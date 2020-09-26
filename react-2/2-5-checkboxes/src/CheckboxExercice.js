import React, {useState} from 'react';
import './CheckboxExercice.css';
const  CheckboxExercice = () => {
  const [checkValue, setCheckValue] = useState(false);

  const handleChange = () => {
    // your code here
  }

  /*do not change the data-testid values (we use them for the auto evaluation)*/
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" data-testid="checkbox"/>
        Check Me!
      </label>
      <div className="result"> The checkbox is: {checkValue ? 'Checked': 'Unchecked'}</div>
    </div>
  );
}

export default CheckboxExercice;