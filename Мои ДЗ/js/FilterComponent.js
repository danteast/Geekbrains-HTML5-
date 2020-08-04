Vue.component('search-filter', {
    props: ['userSearch'],
    template: `
            <form action = '#' class = 'search-form'>
                <input type="text" class="search-field" v-model="userSearch">
                <button type="submit" class="btn-search" @click="$parent.$emit('filter')">
                    <i class="fas fa-search"></i>
                </button>
            </form> 
        `
})