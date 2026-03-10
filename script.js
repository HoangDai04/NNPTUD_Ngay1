// Student 1 (Template)
let student = {
    name: "Tung",
    family: "Nguyen",
    age: 18,
    scores: [9, 10, 8],
    birth: {
        year: 2008,
        month: 11,
        day: 1
    },
    getFullName: function () {
        return this.family + " " + this.name;
    },
    getBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },
    getAVGScore: function () {
        return this.scores.reduce(
            function (sum, e) {
                return sum += e;
            }
        ) / this.scores.length;
    }
};

// JSON string for Student 1 matching the log requirement
let jsons = '{"name":"Tung","family":"Nguyen","age":18,"scores":[9,10,8],"birth":{"year":2008,"month":11,"day":1}}';

console.log("--- Student 1 ---");
console.log(JSON.parse(jsons));


// Student 2 (User: Le Hoang Dai)
let student2 = {
    name: "Dai",
    family: "Le Hoang",
    age: 20,
    scores: [8, 9, 9],
    birth: {
        year: 2004,
        month: 1,
        day: 15
    },
    getFullName: function () {
        return this.family + " " + this.name;
    },
    getBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },
    getAVGScore: function () {
        return this.scores.reduce(
            function (sum, e) {
                return sum += e;
            }
        ) / this.scores.length;
    }
};

// JSON string for Student 2
let jsons2 = '{"name":"Dai","family":"Le Hoang","age":20,"scores":[8,9,9],"birth":{"year":2004,"month":1,"day":15}}';

console.log("--- Student 2 ---");
console.log(JSON.parse(jsons2));


// Student 3 (Another Example)
let student3 = {
    name: "Minh",
    family: "Tran",
    age: 19,
    scores: [7, 8, 8],
    birth: {
        year: 2005,
        month: 5,
        day: 20
    },
    getFullName: function () {
        return this.family + " " + this.name;
    },
    getBirthDay: function () {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },
    getAVGScore: function () {
        return this.scores.reduce(
            function (sum, e) {
                return sum += e;
            }
        ) / this.scores.length;
    }
};

// JSON string for Student 3
let jsons3 = '{"name":"Minh","family":"Tran","age":19,"scores":[7,8,8],"birth":{"year":2005,"month":5,"day":20}}';

console.log("--- Student 3 ---");
console.log(JSON.parse(jsons3));
