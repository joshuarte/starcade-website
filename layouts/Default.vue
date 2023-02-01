<template>
    <!-- <h2>Get ready to blast off into the gaming galaxy! </h2> -->
    <main>
        <slot />
    </main>
    <p>Get ready to blast off into the gaming galaxy!<br><br>
        Starcade's website is currently under construction,
        but sign up for our newsletter to stay informed about our next launch and receive exclusive intergalactic
        goodies.
    </p>

    <form @submit.prevent="subscribe">
        <label>Enter Company Name</label>
        <input type="email" v-model="form.email" />
        <button type="submit">REGISTRATI</button>
    </form>
</template>

<style lang="scss" scoped>
h2 {
    font-family: "Hogfish DEMO", sans-serif;
    max-width: 300px;
    line-height: 1.25;
    margin: 0 auto;
}

p {
    font-family: "Montserrat", sans-serif;
    max-width: 500px;
    font-weight: 300;
}

p,
h2 {
    text-align: center;
    color: white;
}
</style>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            form: {
                email: ''
            },
            response: {
                status: null,
                message: ''
            },
            cachedForm: {}
        }
    },
    methods: {
        async subscribe(event) {
            console.log(event)
            console.log({ ...this.form })
            const formData = { ...this.form }
            try {
                const { data, status } = await $fetch('/api/subscribe', formData)
                this.response.status = status
                this.response.message = `Thanks, ${data.email_address} is subscribed!`
                this.form = { ...this.cachedForm }
                this.$refs.subscribe.reset()
            } catch (e) {
                console.log(e)
            }
        }
    },
    mounted() {
        this.cachedForm = { ...this.form }
    }
}
</script>