app.component('review-form',{
    template:
    /*html*/
    `<form class="review-form container" @submit.prevent="onSubmit">
    <h3> Leave a review</h3>
    <div class="row">
    <div class="col">
      <label for="name">Name:</label>
      <input id="name" v-model="name">
    </div>
  </div>

  <div class="row">
  <div class="col">
    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>
  </div>
</div>

    <label for="rating">Rating:</label>
    <div id="rating" class="row star-row">
    <div class="col star-rating">
      <span @click="gfg(1)"
          class="star" value='1'>★
    </span>
    <span @click="gfg(2)"
          class="star">★
    </span>
    <span @click="gfg(3)"
          class="star">★
    </span>
    <span @click="gfg(4)"
          class="star">★
    </span>
    <span @click="gfg(5)"
          class="star">★
    </span>
    </div>
  </div>

     <input id="rec" type="checkbox" v-model="recommend"> <label for="rec" > Would you reccomend this product? </label>

    <input class="button" type="submit" value="Submit"> 

  </form>`,
  data(){
    return{
        name: '',
        review: '',
        rating: null,
        reccomend: null
    }
  },
  methods:{
    onSubmit() {
      if (this.name==="" | this.review ==="" | this.rating ===""){
        alert("Review is incomplete. Please fill out all fields.")
        return;
      }
      
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        reccomend: this.recommend
        

      }
      this.$emit('review-submitted', productReview)
     

      name: ''
      review: ''
      rating: null
      reccomend: null
       document.getElementsByClassName("review-form")[0].reset;

    

    },
        gfg(n){
            // Funtion to update rating
            this.remove();
            for (let i = 0; i < n; i++) {
                if (n == 1) cls = "one";
                else if (n == 2) cls = "two";
                else if (n == 3) cls = "three";
                else if (n == 4) cls = "four";
                else if (n == 5) cls = "five";
                stars[i].className = "star " + cls;
            }
            console.log("Rating is: " + n + "/5")
        },
        remove(){
            // To remove the pre-applied styling
            let i = 0;
            while (i < 5) {
                stars[i].className = "star";
                i++;
            }
        }
  }
})