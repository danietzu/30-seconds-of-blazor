const MappedTable = ({data, propertyNames}) => {
    let filteredData = data.map(v =>
        Object.keys(v)
            .filter(k => propertyNames.includes(k))
            .reduce((acc, key) => ((acc[key] = v[key]), acc), {})
    );
    return (
        <table>
            <thead>
                <tr>
                    {propertyNames.map(val => (
                        <th key={`h_${val}`}>{val}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredData.map((val, i) => (
                    <tr key={`i_${i}`}>
                        {propertyNames.map(p => (
                            <td key={`i_${i}_${p}`}>{val[p]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
