const AccordionItem = ({label, isCollapsed, handleClick, children}) => {
    return (
        <>
            <button className="accordion-button" onClick={handleClick}>
                {label}
            </button>
            <div
                className={`accordion-item ${isCollapsed ? 'collapsed' : 'expanded'}`}
                aria-expanded={isCollapsed}
            >
                {children}
            </div>
        </>
    );
};

const Accordion = ({defaultIndex, onItemClick, children}) => {
    const [bindIndex, setBindIndex] = React.useState(defaultIndex);

    const changeItem = itemIndex => {
        if (typeof onItemClick === 'function') onItemClick(itemIndex);
        if (itemIndex !== bindIndex) setBindIndex(itemIndex);
    };
    const items = children.filter(item => item.type.name === 'AccordionItem');

    return (
        <>
            {items.map(({props}) => (
                <AccordionItem
                    isCollapsed={bindIndex !== props.index}
                    label={props.label}
                    handleClick={() => changeItem(props.index)}
                    children={props.children}
                />
            ))}
        </>
    );
};
