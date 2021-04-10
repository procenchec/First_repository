import Button from '@material-ui/core/Button';


function App({ handleClick }) {
    return (
        <Button onClick={handleClick} variant="contained" color="primary">
            Tap
        </Button>

    );
}

export default App;