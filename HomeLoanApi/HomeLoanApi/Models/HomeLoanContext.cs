using System;
using HomeLoanApi.ViewModel;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace HomeLoanApi.Models
{
    public partial class HomeLoanContext : DbContext
    {
        public HomeLoanContext()
        {
        }

        public HomeLoanContext(DbContextOptions<HomeLoanContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Applicant> Applicants { get; set; }
        public virtual DbSet<Approval> Approvals { get; set; }
        public virtual DbSet<Bank> Banks { get; set; }
        public virtual DbSet<Cred> Creds { get; set; }
        public virtual DbSet<Doc> Docs { get; set; }
        public virtual DbSet<Emp> Emps { get; set; }
        public virtual DbSet<Loan> Loans { get; set; }
        public virtual DbSet<Prop> Props { get; set; }
        public virtual DbSet<UserPage_VM> UserPage_VMs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=DESKTOP-L8LN8LL;database=HomeLoan;trusted_connection=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("admin");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Applicant>(entity =>
            {
                entity.HasKey(e => e.UId);

                entity.ToTable("applicant");

                entity.Property(e => e.UId)
                    .ValueGeneratedNever()
                    .HasColumnName("U_Id");

                entity.Property(e => e.AadharNum)
                    .IsRequired()
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.Property(e => e.CId).HasColumnName("C_Id");

                entity.Property(e => e.Dob).HasColumnType("date");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.MiddleName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Nationality)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.PanNum)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.CIdNavigation)
                    .WithMany(p => p.Applicants)
                    .HasForeignKey(d => d.CId)
                    .HasConstraintName("FK_Applicant_Cred");
            });

            modelBuilder.Entity<Approval>(entity =>
            {
                entity.HasKey(e => e.AId);

                entity.ToTable("approval");

                entity.Property(e => e.AId)
                    .ValueGeneratedNever()
                    .HasColumnName("A_Id");

                entity.Property(e => e.Approved)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CId).HasColumnName("C_Id");

                entity.HasOne(d => d.CIdNavigation)
                    .WithMany(p => p.Approvals)
                    .HasForeignKey(d => d.CId)
                    .HasConstraintName("FK_Approval_Cred");
            });

            modelBuilder.Entity<Bank>(entity =>
            {
                entity.HasKey(e => e.BId);

                entity.ToTable("bank");

                entity.Property(e => e.BId)
                    .ValueGeneratedNever()
                    .HasColumnName("B_Id");

                entity.Property(e => e.AccNum)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.CId).HasColumnName("C_Id");

                entity.Property(e => e.Ifsc)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasOne(d => d.CIdNavigation)
                    .WithMany(p => p.Banks)
                    .HasForeignKey(d => d.CId)
                    .HasConstraintName("FK_Bank_Cred");
            });

            modelBuilder.Entity<Cred>(entity =>
            {
                entity.ToTable("cred");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.MobileNum)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Doc>(entity =>
            {
                entity.HasKey(e => e.DId);

                entity.ToTable("doc");

                entity.Property(e => e.DId)
                    .ValueGeneratedNever()
                    .HasColumnName("D_Id");

                entity.Property(e => e.Aadhaar)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Agreement)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.CId).HasColumnName("C_Id");

                entity.Property(e => e.Loa)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Noc)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Pan)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.SalarySlip)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Voter).IsUnicode(false);

                entity.HasOne(d => d.CIdNavigation)
                    .WithMany(p => p.Docs)
                    .HasForeignKey(d => d.CId)
                    .HasConstraintName("FK_Doc_Cred");
            });

            modelBuilder.Entity<Emp>(entity =>
            {
                entity.HasKey(e => e.EId);

                entity.ToTable("emp");

                entity.Property(e => e.EId)
                    .ValueGeneratedNever()
                    .HasColumnName("E_Id");

                entity.Property(e => e.CId).HasColumnName("C_Id");

                entity.Property(e => e.EmpName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.EmpType)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.OrgType)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.HasOne(d => d.CIdNavigation)
                    .WithMany(p => p.Emps)
                    .HasForeignKey(d => d.CId)
                    .HasConstraintName("FK_Emp_Cred");
            });

            modelBuilder.Entity<Loan>(entity =>
            {
                entity.HasKey(e => e.LId);

                entity.ToTable("loan");

                entity.Property(e => e.LId)
                    .ValueGeneratedNever()
                    .HasColumnName("L_Id");

                entity.Property(e => e.AccNum)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.CId).HasColumnName("C_Id");

                entity.HasOne(d => d.CIdNavigation)
                    .WithMany(p => p.Loans)
                    .HasForeignKey(d => d.CId)
                    .HasConstraintName("FK_Loan_Cred");
            });

            modelBuilder.Entity<Prop>(entity =>
            {
                entity.HasKey(e => e.PId);

                entity.ToTable("prop");

                entity.Property(e => e.PId)
                    .ValueGeneratedNever()
                    .HasColumnName("P_Id");

                entity.Property(e => e.CId).HasColumnName("C_Id");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Locality)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.CIdNavigation)
                    .WithMany(p => p.Props)
                    .HasForeignKey(d => d.CId)
                    .HasConstraintName("FK_Prop_Cred");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
