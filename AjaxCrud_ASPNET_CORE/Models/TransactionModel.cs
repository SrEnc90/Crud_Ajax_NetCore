using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AjaxCrud_ASPNET_CORE.Models
{
    public class TransactionModel
    {
        [Key]
        public int TransactionId { get; set; }

        [MaxLength(12,ErrorMessage = "Máximo 12 caracteres")]
        [Required(ErrorMessage = "This field is required")]
        [DisplayName("Account Number")]
        [Column(TypeName = "nvarchar(12)")]
        public string AccountNumber { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [DisplayName("Beneficiary Name")]
        [Column(TypeName = "nvarchar(100)")]
        public string BeneficiaryName { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [DisplayName("Bank Name")]
        [Column(TypeName = "nvarchar(100)")]
        public string BankName { get; set; }

        [MaxLength(11, ErrorMessage = "Máximo 11 caracteres")]
        [Required(ErrorMessage = "This field is required")]
        [DisplayName("SWIFT code")]
        [Column(TypeName = "nvarchar(11)")]
        public string SWIFTcode { get; set; }

        [Required(ErrorMessage = "This field is required")]
        public int Amount { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime Date { get; set; }
    }
}
