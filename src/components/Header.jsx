
function Header({image, title}) {
    return (
        <div className="header">
            <img src={image} />
            <h1>{title}</h1>
        </div>
    )
}

export default Header