CREATE TABLE [dbo].[Cliente] (
    [IdCliente]   INT             NOT NULL,
    [Nome]        NVARCHAR (50)   NOT NULL,
    [Cognome]     NVARCHAR (50)   NOT NULL,
    [DataNascita] DATE            NOT NULL,
    [Sesso]       CHAR (1)        NOT NULL,
    [CF]          CHAR (16)       NOT NULL,
    [PIVA]        CHAR (11)       NULL,
    [Attivo]      BIT             NOT NULL,
    [Saldo]       DECIMAL (18, 2) NOT NULL,
    PRIMARY KEY CLUSTERED ([IdCliente] ASC),
    UNIQUE NONCLUSTERED ([CF] ASC)
);

