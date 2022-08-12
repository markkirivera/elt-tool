const app = Vue.createApp({
    data() {
        return {
            type: '',
            activeSec: 0,
            activeDiv: 0,
            qData: {
                title: 'Form Title',
                description: 'This is a description.',
                qSection: [{
                    tag: 'section',
                    sectionTitle: '',
                    sectionDescription: '',
                    order: 1,
                    qForm: []
                }]
            }
        }
    },
    methods: {
        createForm() {
            console.log(this.qData)
        },
        addForm: function(val) {
            let formObj = this.getFormObj(val);

            if (val != 'section') {
                this.qData.qSection[0].qForm.push(formObj)
            } else {
                this.qData.qSection.push(formObj)
            }

            console.log(this.qData)
        },
        getFormObj: function(val) {

            switch (val) {
                case 'title':
                    return {
                        tag: 'title',
                        order: this.qData.qSection[0].qForm.length + 1,
                        questionText: '',
                        answerText: '',
                        required: true
                    }
                case 'short':
                    return {
                        tag: 'short',
                        order: this.qData.qSection[0].qForm.length + 1,
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
                        qForm: [],
                        sectionTitle: '',
                        sectionDescription: ''
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