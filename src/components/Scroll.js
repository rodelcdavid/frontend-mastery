const Scroll = (props) => {
    return (
        <div style = {{ overflowY: 'scroll', border: '5px solid black', width: '90vw', height: '60vh', padding: '2rem', margin: '1rem auto' }}>
        {props.children}
        </div>
    );
}

export default Scroll;