import {Notifyer} from './Notifyer.js'

const App = {
    async start() {
        try {
            await Notifyer.init()
            Notifyer.notify({
                title: "Hora de postar!!",
                body: "Corpo da mensagem."
            })

        } catch (err) {
            console.log(err.message);
       }
    }
}

export { App }