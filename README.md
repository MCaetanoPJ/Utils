# Utils
Alguns códigos que podem ser reutilizados no futuro

Este repositório possui alguns códigos onde demorei algumas horas para criar a lógica ou encontrar exemplos que resolvessem meu problema, então o objeto é agilizar o desenvolvimento quando houver a necessidade de utilizar esses códigos

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

# Obter o texto de um TextBox em aspx no C# caso o TextBox tenha sido criado via JavaScript

 ~~~
public string GetValueTextBox()
 {
   return Request.Form["TextBoxName"];
 }
~~~

# Executar código JavaScript de dentro do C#

 ~~~
 <script type="text/javascript">
        function GetValueTextBoxById(textboxId) {
            var texto = document.getElementById(textboxId).value;
            return texto;
        }
 </script>
 
public string AlertJS(string textboxId)
 {
   var s = new StringBuilder();
   s.Append(string.Format("GetValueTextBoxById('{0}');", textboxId));
   ScriptManager.RegisterStartupScript(this, this.GetType(), "GetValue", s.ToString(), true);
 }
~~~

# Validador de Placa (modelo Mercosul ou modelo antigo)
~~~
private bool ValidarPlaca(string placa)
    {
        System.Text.RegularExpressions.Regex regex = new System.Text.RegularExpressions.Regex(@"^[a-zA-Z]{3}\-\d{4}$");

        if (regex.IsMatch(placa))
            return true;

        System.Text.RegularExpressions.Regex regex02 = new System.Text.RegularExpressions.Regex(@"^[a-zA-Z]{3}\-[0-9]{1}[a-zA-Z]{1}[0-9]{2}$");
        if (regex02.IsMatch(placa))
            return true;

        return false;
    }
~~~
