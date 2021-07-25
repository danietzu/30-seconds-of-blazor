const Carousel = ({carouselItems, ...rest}) => {
    const [active, setActive] = React.useState(0);
    let scrollInterval = null;

    React.useEffect(() => {
        scrollInterval = setTimeout(() => {
            setActive((active + 1) % carouselItems.length);
        }, 2000);
        return () => clearTimeout(scrollInterval);
    });

    return (
        <div className="carousel">
            {carouselItems.map((item, index) => {
                const activeClass = active === index ? ' visible' : '';
                return React.cloneElement(item, {
                    ...rest,
                    className: `carousel-item${activeClass}`
                });
            })}
        </div>
    );
};
