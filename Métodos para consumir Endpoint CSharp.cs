using System;
using System.Net.Http;
using System.Text;
using Corporate.DMHealth.Schedule.Infra.Mevo.Helpers;
using Newtonsoft.Json;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

public TModel POST<TModel>(string urlEndpoint, object objetoDeserializado, out string mensagemError)
        {
            try
            {
                mensagemError = string.Empty;
                var client = new HttpClient();
                client.DefaultRequestHeaders.Add("authorization", "Basic " + GetBasicAuthEncodeds());
                var url = new Uri(string.Format("{0}{1}", Constants.URL_BASE_API, urlEndpoint));
                var data = JsonConvert.SerializeObject(objetoDeserializado);
                var content = new StringContent(data, Encoding.UTF8, "application/json");
                var response = client.PostAsync(url, content).Result;
                var responseJsonApi = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();

                if (response.IsSuccessStatusCode)
                {
                    return JsonToObject<TModel>(responseJsonApi);
                }

                mensagemError = ErroValidacao(responseJsonApi);

                return default;
            }
            catch
            {
                mensagemError = string.Empty;
                return default;
            }
        }
		
public TModel GET<TModel>(string urlEndpointComParametros, out string mensagemError)
        {
            try
            {
                mensagemError = string.Empty;
                var client = new HttpClient();
                client.DefaultRequestHeaders.Add("authorization", "Basic " + GetBasicAuthEncodeds());
                var url = new Uri(string.Format("{0}{1}", Constants.URL_BASE_API, urlEndpointComParametros));
                var response = client.GetAsync(url).Result;
                var responseJsonApi = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();

                if (response.IsSuccessStatusCode)
                {
                    return JsonToObject<TModel>(responseJsonApi);
                }

                mensagemError = ErroValidacao(responseJsonApi);
                return default;
            }
            catch
            {
                mensagemError = string.Empty;
                return default;
            }
        }



private static TModel JsonToObject<TModel>(string json)
        {
            try
            {
                return string.IsNullOrEmpty(json)
                    ? default
                    : JsonConvert.DeserializeObject<TModel>(json);
            }
            catch
            {
                return default;
            }
        }