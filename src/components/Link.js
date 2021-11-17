function Link(props) {
    return (
        <li> <a className="links" href={props.href}> {props.name} </a> </li>
    );
}

export default Link;