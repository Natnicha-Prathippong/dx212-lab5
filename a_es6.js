const greet = (name, faculty) => `สวัสดี ${name} จากคณะ ${faculty}!`;
console.log(greet("ฟ้า", "CITU"));
const student = { name: "ฟ้า", faculty: "CITU", year: 2 };
const { name, faculty } = student;          
const updated = { ...student, year: 3 };    
console.log(name, faculty, updated);
