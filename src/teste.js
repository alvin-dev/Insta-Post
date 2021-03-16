function notificacao() {
    
    if (Notification.permission === "granted") {
        let notification = new Notification("Ola")
    }

}

export { notificacao }