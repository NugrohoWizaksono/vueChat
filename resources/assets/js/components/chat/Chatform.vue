<template>
    <form action="#">
        <div class="form-group">
            <textarea name="message" id="message" rows="4" v-model="body" 
            @keydown="handleInput" placeholder="isi pesan disini"></textarea>
        </div>
    </form>
</template>

<script>
    import Bus from '../../bus'
    import moment from 'moment'

    export default {
        data() {
            return {
                body:null
            }
        },

        methods: {
            handleInput(e) {
                if(e.keyCode === 13 && !e.shiftKey ){
                    e.preventDefault()
                    this.submit()
                }
            },
             
            submit() {
                if( !this.body || this.body.trim() === '' ) {
                    return
                    console.log('pesan kosong')
                }

                let newMessage = {
                    subject: this.body.trim(),
                    create_at: moment().utc(0).format('YYYY:MM:DD HH:mm:ss'),
                    user : {
                        name: Laravel.user.name
                    }
                }

                axios.post('/message', {subject: this.body.trim()} )
                    .then(response => {                        
                        console.log('mulai post')
                        Bus.$emit('chat.sent', newMessage)
                        this.body=''
                    })
            }
        },

    }
</script>
