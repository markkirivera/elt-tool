const Comp = {
    template: '<div>Hello world</div>'
}

const app = Vue.createApp({
    data() {
        return {
            type: '',
            components: [Comp],
            activeSec: 0,
            activeDiv: 0,
            qData: {
                qSection: {
                    title: '',
                    description: '',
                    index: '',
                    qForm: []
                }
            }
        }
    },
    methods: {
        addForm: function(val) {
            let formObj = this.getFormObj(val);
            this.qData.qSection.qForm.push(formObj)

            console.log(this.qData)
        },
        getFormObj: function(val) {

            switch (val) {
                case 'title':
                    return {
                        tag: 'title',
                        order: this.qData.qSection.qForm.length + 1,
                        questionText: '',
                        answerText: '',
                        required: true
                    }
                case 'short':
                    return {
                        tag: 'short',
                        order: this.qData.qSection.qForm.length + 1,
                        questionText: '',
                        answerText: '',
                        required: true,
                        options: [
                            { optionText: '', optionSelected: false }
                        ]
                    }
                case 'section':
                    return {
                        tag: 'section',
                        order: this.qData.qSection.length + 1,
                        sectionTitle: '',
                        sectionDescription: []
                    }
                default:
                    return {
                        tag: 'short',
                        order: this.qData.qForm.length + 1,
                        questionText: '',
                        answerText: '',
                        required: true
                    }
            } // end switch

        }
    }
})

app.mount('#app');