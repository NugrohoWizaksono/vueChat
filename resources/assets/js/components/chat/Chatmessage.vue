<template>
    <div class="chat-list">
        <div class="messages" v-for="message in messages">
            <div class="users">{{message.user.name}}
                <span class="time">{{message.created_at}}</span>
            </div>
            <div class="message">
                 {{message.subject}}
            </div>
        </div>

    </div>
</template>
<style lang="scss">
    .messages{
        margin-top: 10px;
        .time{
            font-weight:600;
        }
        .message{
            font-size:2rem;
        }
    }
    .chat-list{
        max-height: 300px;
        overflow-y: scroll;
    }
</style>
<script>

    import Bus from '../../bus'


    export default {
        data() {
            return {
                messages: []
            }
        },
        mounted() {
            this.getMessage();

            Bus.$on('chat.sent', (newMessage) => {
                this.messages.push(newMessage)
                console.log('bus on')
                this.scrollBawah()
            });
        },
        methods: {
            getMessage() {
                axios.get('/message').then(response => {
                    this.messages = response.data.reverse()

                    this.scrollBawah()
                });
            },

            scrollBawah() {
                
                setTimeout(function(){
                    let Chatlist = document.getElementsByClassName('chat-list')[0]
                    Chatlist.scrollTop = Chatlist.scrollHeight
                }, 1)
            }
        }
    }
</script>
