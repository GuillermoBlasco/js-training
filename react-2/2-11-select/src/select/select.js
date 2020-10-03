import React, {useState} from "react";
import styles  from './select.module.css';
import info from './info.json';

const Select = props => {
	const {label, options, value} = props;
	const [selectedValue, setSelectedValue] = useState(value);
	const [renderedText, setRenderedText] = useState(label);

	const handleClickOption = (opt) => {
		if(opt.value === undefined){
			setSelectedValue(undefined);
			setRenderedText(label);
		}else{
			setSelectedValue(opt.value);
			setRenderedText(opt.text);
		}
	}

	const isSelected = (value) => value === selectedValue;

	return (
		<div className={styles.root}>
			<div className={styles.label}>
				{renderedText}
			</div>
			<div className={styles.dropdown}>
				<div className={styles.option}
						 style={isSelected(undefined) ? {backgroundColor: "red"} : undefined}
						 onClick={() => handleClickOption({text: "", value: undefined})}>
					{"Nothing Selected"}
				</div>
				{options && (options.map(opt => (
					<div className={styles.option}
							 style={isSelected(opt.value) ? {backgroundColor: "red"} : undefined}
							 onClick={() => handleClickOption(opt)}>
						{opt.text}
					</div>
				)))}
			</div>
		</div>
	)
};


export default Select;
