const Today = () => {
    const date = new Date();

    return (
            <div style={{
                fontSize: '3em',
                textAlign: 'center',
                color: '#069',
                textShadow: '1px 1px #ccc',
                margin: '0 2em 2em 2em'
            }}>
                {date.toDateString()}
            </div>
            );
}

export default Today;