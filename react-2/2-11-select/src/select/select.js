import React, {useEffect, useRef, useState} from "react";
import styles  from './select.module.css';

const Select = props => {
	const {label, options, value} = props;
	const [selectedValue, setSelectedValue] = useState(value);
	const [renderedText, setRenderedText] = useState(label);
	const [openDrop, setOpenDrop] = useState(false);
	const refDrop = useRef(null);
	useEffect(() => {

		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (refDrop.current && !refDrop.current.contains(event.target)) {
				setOpenDrop(false);
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [refDrop]);
	const handleClickOption = (opt) => {
		if(opt.value === undefined){
			setSelectedValue(undefined);
			setRenderedText(label);
		}else{
			setSelectedValue(opt.value);
			setRenderedText(opt.text);
		}
		setOpenDrop(false);
	}

	const isSelected = (value) => value === selectedValue;

	return (
		<>
		<div className={styles.root}>
			<div className={styles.label} onClick={() => setOpenDrop(!openDrop)}>
				{renderedText}
			</div>
			<div className={styles.dropdown} style={{visibility: !openDrop ? "hidden" : undefined }} ref={refDrop}>
				<div className={styles.option}
						 onClick={() => handleClickOption({text: "", value: undefined})}>
					{" "}
				</div>
				{options && (options.map(opt => (
					<div className={styles.option}
							 style={isSelected(opt.value) ? {backgroundColor: "#d4cfcc"} : undefined}
							 onClick={() => handleClickOption(opt)}>
						{opt.text}
					</div>
				)))}
			</div>
		</div>
		</>
	)
};


export default Select;
