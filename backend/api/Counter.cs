using Newtonsoft.Json;

namespace Company.Function
{
    public class Counter
    {
        [JsonProperty(propertyName:"id")]
        public string id { get; set; }

        [JsonProperty(propertyName:"count")]
        public int Count { get; set; }
    }
}