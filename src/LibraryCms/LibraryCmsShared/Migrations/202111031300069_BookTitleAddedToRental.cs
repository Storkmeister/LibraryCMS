namespace LibraryCmsShared.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BookTitleAddedToRental : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.RentalTables", "BookTitle", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.RentalTables", "BookTitle");
        }
    }
}
