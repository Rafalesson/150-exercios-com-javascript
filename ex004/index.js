const areaTriangulo = (lado1, lado2, lado3) => {
  const perimetro = (lado1 + lado2 + lado3) / 2;

  const area = Math.sqrt(
    perimetro * (perimetro - lado1) * (perimetro - lado2) * (perimetro - lado3)
    );
    
    return area;
};

console.log(areaTriangulo(5, 6, 7));
