function Message() {
    // JSX: JavaScript XML
    const name = 'David';
    if (name) {
        return <div>Hello {name}!</div>
    }
    return <div>Hello World!</div>
}

export default Message;