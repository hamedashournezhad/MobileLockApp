function Screen({children,classAttr,styleParam}) {
    return (
        <div className={classAttr} style={styleParam}>
            {children}
        </div>
    );
}

export default Screen;