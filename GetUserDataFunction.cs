using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Collections.Generic;

public static class GetUserDataFunction
{
    [FunctionName("GetUserData")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
        ILogger log)
    {
        string connectionString = Environment.GetEnvironmentVariable("SqlConnectionString");
        List<User> users = new List<User>();

        using (SqlConnection conn = new SqlConnection(connectionString))
        {
            conn.Open();
            var text = "SELECT Username, Email FROM Users";

            using (SqlCommand cmd = new SqlCommand(text, conn))
            {
                SqlDataReader reader = await cmd.ExecuteReaderAsync();
                while (reader.Read())
                {
                    users.Add(new User() { Username = reader.GetString(0), Email = reader.GetString(1) });
                }
            }
        }

        return new OkObjectResult(JsonConvert.SerializeObject(users));
    }
}

public class User
{
    public string Username { get; set; }
    public string Email { get; set; }
}




{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "<your_storage_account_connection_string>",
    "FUNCTIONS_WORKER_RUNTIME": "dotnet",
    "SqlConnectionString": "<your_sql_database_connection_string>"
  }
}
