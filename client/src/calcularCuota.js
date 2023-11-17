const calcularCuota = (valorCredito, tasaMensual, plazo) => {


  var valorUF = 1;

  //Pasar de pesos a UF
  valorCredito = valorCredito * valorUF;
  tasaMensual = tasaMensual * valorUF;

  //Calcular la cuota
  var cuota = valorCredito / (1 - ((1 + tasaMensual)**(-plazo)) / tasaMensual );

  return (cuota);

};

export { calcularCuota };
