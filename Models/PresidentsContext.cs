using Microsoft.EntityFrameworkCore;

namespace aspNetCoreGSheetReactReader.Models
{
    public class PresidentsContext : DbContext
    {
        public PresidentsContext(DbContextOptions<PresidentsContext> options)
            : base(options)
        {
        }

        public DbSet<President> Presidents { get; set; }
    }
}