import Bus from './bus'

Echo.join('chatings')
    .here( (users) => {
    // siapa yang disini
        Bus.$emit('chat.here', users)
    })
    .joining( (user) => {
    // siapa yang gabung
        Bus.$emit('chat.joining', user)
    })
    .leaving( (user) => {
        // meninggalkan
        Bus.$emit('chat.leaving', user)
    })
    .listen('ChatCreated', (e) => {
        console.log(e.message )
        Bus.$emit('chat.sent', e.message)
    })