import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import css1 from "./styles1.module.css"
import css2 from "./styles2.module.css"

const logoName = 'train';
const module = await import(`./images/${logoName}.jpeg`);
const modules = import.meta.glob<{default: string}>('./images/*.*', {eager: true});

function App() {

    return (
        <>
            {Object.values(modules).map(src => <img src={src.default}/>) }
            <div>
                <img src={module.default} alt="ttc-logo"/>
            </div>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1 className={css1.highlight} >Vite + React ...</h1>
            <h1 className={css2.highlight}>Vite + React ...</h1>
            <a href="../second-route/">Second route</a>
        </>
    )
}

export default App
