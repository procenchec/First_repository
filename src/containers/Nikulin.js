// import logo from '../logo.svg';
import '../App.css';
import Button from '@material-ui/core/Button';

// function App() {
//     return (
//         <div className="Nikulin">
//             <img
//                 src={'https://steamuserimages-a.akamaihd.net/ugc/785232635610262393/78EC9906854B1C8C8EFBDC6DE0EE5DB073FCA35F/'}
//                 className="App-logo" alt="logo"/>
//             <img
//                 src={'https://media1.tenor.com/images/8ea91a8d7e4310051cbec63ae81be95a/tenor.gif?itemid=15029133'}
//                 className="App-logo" alt="logo"/>
//
//             Никулин ВВ Б-ИСиТ 41
//         </div>
//     );
// }

export default App;

function App() {
    return (
        <div className="App">
            <p>Никулин ВВ</p>
            <iframe width="1280" height="720" src="https://www.youtube.com/embed/kIaqZh_gGz4" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>
    );
}