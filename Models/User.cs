using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ang.Models
{
    public class User
    {
        [Key]
        public int? Id { get; set; }
        public string Name { get; set; }
        public long YearOfBirth { get; set; }
        public string PhoneNumber { get; set; }
    }
}
