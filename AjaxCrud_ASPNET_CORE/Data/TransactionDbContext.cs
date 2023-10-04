using AjaxCrud_ASPNET_CORE.Models;
using Microsoft.EntityFrameworkCore;

namespace AjaxCrud_ASPNET_CORE.Data
{
    public class TransactionDbContext:DbContext
    {
        public TransactionDbContext(DbContextOptions<TransactionDbContext> options): base(options)
        {

        }

        public virtual DbSet<TransactionModel> Transactions { get; set; }
    }
}
