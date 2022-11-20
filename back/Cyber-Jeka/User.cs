using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Cyber_Jeka
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Nickname { get; set; }
        public string Password { get; set; }
        public string PassHash { get; set; }
        public decimal? Rating { get; set; }
        public string? ClanName { get; set; }
    }
}
