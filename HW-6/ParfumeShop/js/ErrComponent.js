Vue.component('error-comp', {
    props: ['errorResult'],
    template: `
    <p v-if="errorResult" >Отсутствует связь с сервером</p>
`
})