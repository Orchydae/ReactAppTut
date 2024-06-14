import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {

    let cities = [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Paris'
    ];

    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    //return <div><ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem} /></div>
    return (
        <div>
            <Alert>
                My alert message
            </Alert>
        </div>
    );
}

export default App;