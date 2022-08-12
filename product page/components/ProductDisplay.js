app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <a :href="url">
                        <img :class="{ 'out-of-stock-img': !inStock }" :src="image" alt="">
                    </a>
                </div>

                <div class="product-info">
                    <div class="product-name">
                        <h1>{{ title }} <span v-if="onSale">{{ onSaleMessage }}</span> </h1>
                    </div>

                    <p class="green" v-if="inStock">In Stock</p>
                    <!-- <p class="orange" v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p> -->
                    <p class="red" v-else>Out of Stock</p>

                    <p>Shipping: {{ shipping }} </p>

                    <p>{{ description }}</p>

                    <div class="flex-div">
                        <div class="flex-container">
                            <h3>Colors:</h3>
                            <ul>
                                <li v-for="(variant, index) in variants" :class="getClass(variant.color)" :id="variant.id" @mouseover="updateVariant(index)"></li>
                            </ul>
                        </div>

                        <div class="flex-container">
                            <h3>Materials:</h3>
                            <ul class="details">
                                <li v-for="detail in details">{{detail}}</li>
                            </ul>
                        </div>

                        <div class="flex-container">
                            <h3>Sizes:</h3>
                            <ul>
                                <li v-for="size in sizes">{{ size }}</li>
                            </ul>
                        </div>

                    </div>
                    <button 
						v-on:click="addToCart" 
						:disabled="!inStock" 
						:class="{ disabledButton: !inStock }" 
						class="button"
						>Add to Cart</button>

                </div>
            </div>
			<review-list v-if="reviews.length" :reviews="reviews"></review-list>
			<review-form @review-submitted="addReview"></review-form>
        </div>`,
    data() {
        return {
            url: 'https://www.shopee.com.ph',
            product: 'Socks',
            brand: 'Vue Mastery',
            inventory: 12,
            onSale: true,
            description: 'Comfy socks made up of 100% organic materials, in bright and fun colors to match any style.',
            selectedVariant: 0,
            details: ['80% cotton', '20% wool'],
            variants: [
                { id: 1123, color: 'Blue', image: './assets/images/socks_blue.jpg', quantity: 20 },
                { id: 1124, color: 'Green', image: './assets/images/socks_green.jpg', quantity: 20 }
            ],
            sizes: ['Small', 'Medium', 'Large', ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
            this.reviews.push(review)
        },
        getClass(color) {
            if (color == 'Blue') {
                return 'blue color-circle'
            } else {
                return 'green color-circle'
            }
        }
    },
    computed: {
        title() {
            return this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSaleMessage() {
            if (this.onSale) {
                return 'On Sale'
            } else {
                return ''
            }
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})