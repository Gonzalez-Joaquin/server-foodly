import { Router } from 'express'

const index = Router()

index.route('/').get((_req, res) => {
    console.log(`API REST por Joaquin "Que habilidade" Gonzalez.`)
    res.send(`
    <style>
        * {
            user-select: none;
            padding: 0px;
            margin: 0px;
            box-sizing: border-box;
        }

        body {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--ba-somke, #f5f5f5);
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

        main {
            max-width: calc(100% - 100px);
            width: 100%;
            height: 100%;
            transition: ease .2s;
        }

        :root {
            --ba-somke: #f5f5f5;
            --color-font: #161616;
        }

        #div1 {
            width: 100%;
            padding-block: 20px;
        }

        #div1>h1 {
            font-size: 3rem;
        }

        #div1>h3 {
            font-weight: 300;
        }

        #div2 {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        #div2>div {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        div>a {
            text-decoration: none;
            color: var(--color-font);
            transition: ease .2s;
        }

        div>a:hover {
            cursor: pointer;
            color: var(--primary, #006eff);
        }

        @media (min-width: 800px) {
            main {
                max-width: calc(100% - 200px);
            }
        }
    </style>
    <main>
        <div id="div1">
            <h1>API: Food App</h1>
            <h3>API que conecta mi app con mi base de datos, y gestiona el ingreso de los usuarios</h3>
        </div>
        <div id="div2">
            <h4>Rutas de la API</h4>
            <div>
                <a href="http://localhost:5000">Home: /home</a>
                <a href="http://localhost:5000/users">Users: /users</a>
                <a href="http://localhost:5000/food">Food: /food</a>
            </div>
        </div>
    </main>
    `)
})

export default index