const menu = {
    _courses: {
       appetizers: [],
       mains: [],
       desserts: [],
    },
     get appetizers() {
       return this._courses.appetizers;
     },
     get mains() {
       return this._courses.mains;
     },
     get desserts() {
       return this._courses.desserts;
     },
     set appetizers(appetizers) {
       this._courses.appetizer = appetizers;
     },
     set mains(mains) {
       this._courses.appetizer = mains;
     },
     set desserts(appetizers) {
       this._courses.appetizer = desserts;
     },
     get courses() {
       return {
         appetizers: this.appetizers,
         mains: this.mains,
         desserts: this.desserts,
       };
     },
     addDishToCourse (courseName, dishName, dishPrice) {
       const dish = {
         name: dishName,
         price: dishPrice,
       }; 
       this._courses[courseName].push(dish); 
     },
     getRandomDishFromCourse (courseName) {
       const dishes = this._courses[courseName];
       const randomIndex = Math.floor(Math.random() *     dishes.length);
       return dishes[randomIndex];
     },
     generateRandomMeal() {
       const appetizer = this.getRandomDishFromCourse    ('appetizers');
       const main = this.getRandomDishFromCourse    ('mains');
       const dessert = this.getRandomDishFromCourse    ('desserts');
       const totalPrice = appetizer.price + main.price +
 dessert.price
       return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, The price is ${totalPrice}.`;
   }
 };
 
 menu.addDishToCourse('appetizers', 'a', 4.25)
 menu.addDishToCourse('appetizers', 'b', 6.5);
 menu.addDishToCourse('appetizers', 'c', 5.75);
 
 menu.addDishToCourse('mains', 'd', 5.5)
 menu.addDishToCourse('mains', 'e', 3.00);
 menu.addDishToCourse('mains', 'f', 9.00);
 
 menu.addDishToCourse('desserts', 'g', 7.00)
 menu.addDishToCourse('desserts', 'h', 6.00);
 menu.addDishToCourse('desserts', 'i', 2.75);
 
 let meal = menu.generateRandomMeal();
 console.log(meal);
 