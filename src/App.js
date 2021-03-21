import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js'

const App = {
    async start() {
        try {

            Emitter.on

            Timer.init(0.1 * 60)
            // await Notifyer.init()
            // Notifyer.notify({
            //     title: "Hora de postar!!",
            //     body: "Corpo da mensagem."
            // })

        } catch (err) {
            console.log(err.message);
       }
    }
}

export { App }