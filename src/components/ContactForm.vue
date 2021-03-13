<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group>
                <b-form-row>
                    <b-col>
                        <label label-for="tribot-username">TRiBot Username</label>
                        <b-form-input
                                id="tribot-username"
                                v-model="form.tribotUsername"
                                type="text"
                                required
                                placeholder="Enter TRiBot Username"
                        ></b-form-input>
                    </b-col>

                    <b-col>
                        <label label-for="discord-username">Discord Username</label>
                        <b-form-input
                                id="discord-username"
                                v-model="form.discordUsername"
                                type="text"
                                required
                                placeholder="Enter Discord Username"
                        ></b-form-input>
                    </b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <b-form-row>
                    <b-col>
                        <label label-for="tribot-username">Email</label>
                        <b-form-input
                                id="email"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="Enter Email Address"
                        ></b-form-input>
                    </b-col>

                    <b-col>
                        <label label-for="reason-for-contact">Reason for Contact</label>

                        <b-form-select id="reason-for-contact" v-model="form.reasonForContact" :options="reasonOptions"
                                       required></b-form-select>
                    </b-col>
                </b-form-row>
            </b-form-group>

            <b-form-group>
                <label label-for="message">Message</label>
                <b-form-textarea
                        id="message"
                        v-model="form.message"
                        placeholder="Enter a message..."
                        rows="3"
                        max-rows="6"
                ></b-form-textarea>
            </b-form-group>

            <b-button block class="mt-5 btn-blue" type="submit">Send Message</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'ContactForm',
        data() {
            return {
                form: {
                    email: '',
                    tribotUsername: '',
                    discordUsername: null,
                    reasonForContact: 'Script Issue',
                    message: ''
                },
                reasonOptions: [
                    'Script Issue',
                    'Private Script Request'
                ],
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.email = '';
                this.form.tribotUsername = '';
                this.form.discordUsername = null;
                this.form.reasonForContact = [];

                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>


</style>
