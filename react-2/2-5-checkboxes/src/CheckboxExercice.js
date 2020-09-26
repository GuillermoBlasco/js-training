import React, {useState} from 'react';

const  Checkbox = () => {
  const [checkValue, setCheckValue] = useState(false);

  const handleChange = () => {
    // your code here
  }

  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" data-testid="checkbox"/>
        Check Me!
      </label>
    </div>
  );
}

export default Checkbox;
