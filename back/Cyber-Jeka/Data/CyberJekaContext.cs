using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Cyber_Jeka;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cyber_Jeka.Data
{
    public class CyberJekaContext : DbContext
    {
        public CyberJekaContext (DbContextOptions<CyberJekaContext> options)
            : base(options)
        {
        }

        public DbSet<Cyber_Jeka.User> Users { get; set; }

        public DbSet<Cyber_Jeka.Report> Reports { get; set; }
    }
}
