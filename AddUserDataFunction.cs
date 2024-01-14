using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Newtonsoft.Json;

public static class AddUserDataFunction
{
    [FunctionName("AddUserData")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
        ILogger log)
    {
        string connectionString = Environment.GetEnvironmentVariable("SqlConnectionString");
        string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
        User data = JsonConvert.DeserializeObject<User>(requestBody);

        using (SqlConnection conn = new SqlConnection(connectionString))
        {
            conn.Open();
            var text = "INSERT INTO Users (Username, Email) VALUES (@Username, @Email)";

            using (SqlCommand cmd = new SqlCommand(text, conn))
            {
                cmd.Parameters.AddWithValue("@Username", data.Username);
                cmd.Parameters.AddWithValue("@Email", data.Email);
                await cmd.ExecuteNonQueryAsync();
            }
        }

        return new OkResult();
    }
}

public class User
{
    public string Username { get; set; }
    public string Email { get; set; }
}
