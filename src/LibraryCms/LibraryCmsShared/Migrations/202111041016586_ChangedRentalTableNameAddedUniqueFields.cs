namespace LibraryCmsShared.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangedRentalTableNameAddedUniqueFields : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.RentalTables", newName: "Rentals");
            CreateIndex("dbo.Books", "Title", unique: true);
            CreateIndex("dbo.Users", "Email", unique: true);
        }
        
        public override void Down()
        {
            DropIndex("dbo.Users", new[] { "Email" });
            DropIndex("dbo.Books", new[] { "Title" });
            RenameTable(name: "dbo.Rentals", newName: "RentalTables");
        }
    }
}
