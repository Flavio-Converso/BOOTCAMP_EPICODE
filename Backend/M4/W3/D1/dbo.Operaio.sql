CREATE TABLE [dbo].[Operaio] (
    [IdDipendente]        INT             NOT NULL,
    [Nome]                NVARCHAR (50)   NOT NULL,
    [Cognome]             NVARCHAR (50)   NOT NULL,
    [CF]                  CHAR (16)       NOT NULL,
    [FigliACarico]        INT             NOT NULL,
    [Sposato]             BIT             NOT NULL,
    [LivelloLavorativo]   NVARCHAR (50)   NOT NULL,
    [DescrizioneMansione] NVARCHAR (255)  NOT NULL,
    [Salario]             DECIMAL (18, 2) NOT NULL,
    [IdCantiere]          INT             NOT NULL,
    PRIMARY KEY CLUSTERED ([IdDipendente] ASC),
    UNIQUE NONCLUSTERED ([CF] ASC),
    FOREIGN KEY ([IdCantiere]) REFERENCES [dbo].[Cantiere] ([IdCantiere])
);

