<template>
    <div class="chat-lists">
        <div class="messages">
            <div class="users">oo</div>
            <div class="time">123</div>
            <div class="message">
                isi chat
            </div>
        </div>
        
        <div class="messages">
            <div class="users">oo</div>
            <div class="time">123</div>
            <div class="message">
                isi chat
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
<style lang="scss">
    .messages{
        margin-top:5px;
        .message{
            font-size:2rem;
        }
        .time{
            font-weight:800;
        }
    }
</style>
