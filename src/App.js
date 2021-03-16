import {Notifyer} from './Notifyer.js'

const App = {
    async start() {
        try {
            await Notifyer.init()
            Notifyer.notify({
                title: "hora do post",
                body: "mensagem aqui"
            })

        } catch (err) {
            console.log(err.message);
       }
    }
}

export { App }