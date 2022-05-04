# Utils
Alguns códigos que podem ser reutilizados no futuro

Este repositório possui alguns códigos onde demorei algumas horas para criar a lógica ou encontrar exemplos que resolvessem meu problema, então o objeto é agilizar o desenvolvimento quando houver a necessidade de utilizar esses mesmo códigos

# Limitar a quantidade de casas decimais de um valor decimal

*Obs: Esse código diferente de muitos na net, não arredonda o valor com o Math.Round()*

 ~~~
public static decimal FormatarCasaDecimal(decimal valor, int quantidadeCasaDecimal)
    {
        var valorToString = valor.ToString().Replace(",", ".");
        var possuiCasaDecimal = valorToString.Contains(".");
        if (possuiCasaDecimal)
        {
            var casaAntesDaDecimal = Math.Truncate(valor);
            var casaDecimal = valorToString.Split('.')[1].ToString().Substring(0, quantidadeCasaDecimal);
            var valorFinal = casaAntesDaDecimal + "," + casaDecimal;
            var valorConvertido = Convert.ToDouble(valorFinal);
            return Convert.ToDecimal(valorConvertido);
        }
        var zeroString = ".".PadRight(quantidadeCasaDecimal + 1, '0');
        return Convert.ToDecimal(valorToString.Insert(valorToString.Length, zeroString));
    }
~~~
