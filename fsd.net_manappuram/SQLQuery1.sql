CREATE DATABASE emp_new;
use emp_new;

create table users

 CREATE TABLE Users (
    Id UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, -- Maps to public Guid Id
    Name NVARCHAR(255) NOT NULL,              -- Maps to public required string Name
    Email NVARCHAR(255) NOT NULL,             -- Maps to public required string Email
    Password NVARCHAR(255) NOT NULL,          -- Maps to public required string Password
    Phone NVARCHAR(50) NOT NULL,              -- Maps to public required string Phone
    Status INT NOT NULL DEFAULT 1              -- Maps to public int status, with a default value
);
select * from registrations;
select * from Users;

insert into Users values(NEWID(),'sarath','sarath@gmail.com',
'eee','8547065017',1);

select *  from Users;
update Users    set  
Name='Reshma', Email='reshma@gmail.com'
where Phone='8547065017';
select *  from  AddtoCarts;

update  AddtoCarts set CustId= 'reshma@gmail.com'
where Quantity=1;
select *  from  Itemdetails;

CREATE TABLE AddToCarts (
    OrderNo UNIQUEIDENTIFIER PRIMARY KEY, -- Corresponds to Guid
    CustId NVARCHAR(255) NOT NULL,        -- Corresponds to string, assuming a maximum length of 255 characters
    ProductID INT,                        -- Corresponds to int
    ProductName NVARCHAR(255) NOT NULL,   -- Corresponds to string, assuming a maximum length of 255 characters
    Quantity INT NOT NULL,                -- Corresponds to int
    Price DECIMAL(18, 2),                 -- Corresponds to decimal, with 2 decimal places
    CartStatus INT NOT NULL               -- Corresponds to int
);

select * from AddToCarts;
delete from AddToCarts;

update Orders set CustId='reshma@gmail.com';






CREATE TABLE Itemdetails (
    ItemId INT PRIMARY KEY IDENTITY(1,1), -- Auto-incrementing primary key
    ItemName NVARCHAR(255) NOT NULL,      -- Corresponds to string, assuming a maximum length of 255 characters
    ItemCount INT,                        -- Corresponds to int
    Price DECIMAL(18, 2),                 -- Corresponds to decimal, with 2 decimal places
    ImagePath NVARCHAR(255) NULL,         -- For storing image file path, allowing NULL
    ImageData VARBINARY(MAX) NULL,        -- For storing image as binary data, allowing NULL
    ImageType NVARCHAR(50) NOT NULL       -- For storing image type, assuming a maximum length of 50 characters
);


CREATE TABLE Orders (
    OrderNo UNIQUEIDENTIFIER PRIMARY KEY, -- Corresponds to Guid
    CustId NVARCHAR(255) NOT NULL,        -- Corresponds to string, assuming a maximum length of 255 characters

    ProductName NVARCHAR(255) NOT NULL,   -- Corresponds to string, assuming a maximum length of 255 characters
    Quantity INT NOT NULL,                -- Corresponds to int
    Price DECIMAL(18, 2),                 -- Corresponds to decimal, with 2 decimal places
            
);

