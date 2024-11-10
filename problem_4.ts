{
    
type Circle = {
    shape: "circle";
    radius: number;
};

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

const calculateShapeArea = (shape: Circle | Rectangle): number => {
    if (shape.shape === "circle") {
        return Math.PI * Math.pow(shape.radius, 2); // Area of a circle: π * r²
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height; 
    }
    return 0;
};


const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });

console.log(circleArea); 
console.log(rectangleArea); 


}