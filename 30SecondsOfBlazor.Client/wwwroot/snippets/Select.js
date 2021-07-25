const Select = ({values, onValueChange, selectedValue, ...rest}) => {
    return (
        <select
            defaultValue={selectedValue}
            onChange={({target: {value}}) => onValueChange(value)}{...rest}>
            {values.map(([value, text]) => (
                <option key={value} value={value}>
                    {text}
                </option>
            ))}
        </select>
    );
};
