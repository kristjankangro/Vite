import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import css1 from "./styles/styles1.module.css"
import css2 from "./styles/styles2.module.css"
import "./styles/nested.css"
import {useEffect, useState} from "react";

const logoName = 'train';
const module = await import(`./images/${logoName}.jpeg`);
const modules = import.meta.glob<{ default: string }>('./images/*.*', {eager: true});

function App() {
    const [posts, setPosts] = useState<{ title: string }[]>([]);

    useEffect(
        () => {
            const url = import.meta.env.DEV
                ? "http://localhost:5173/posts.json"
                : "https://dummyjson.com/posts?skip=10&limit=10";
            fetch(url)
                .then(res => res.json())
                .then(json => {
                    setPosts(json.posts);
                })
        }
    );

    return (
        <>
            {Object.values(modules).map((src, idx) =>
                <img key={idx} src={src.default} alt={src.default}/>)}
            <div>
                <img src={module.default} alt="ttc-logo"/>
            </div>
            <h1>Posts list</h1>
            <ul className="styled-list">
                {posts.map((val, idx) => <li key={idx}>{val.title}</li>)}
                <li className="item selected">4</li>
            </ul>
            <div className="item selected">See pole stylitud nested styleg</div>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1 className={css1.styles1}>Vite + React ...</h1>
            <h1 className={css2["styles2-another"]}>Vite + React ...</h1>
            <a href="../second-route/">Second route</a>
        </>
    )
}

export default App
