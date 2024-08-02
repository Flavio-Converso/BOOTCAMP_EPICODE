CREATE TABLE [dbo].[Cantiere] (
    [IdCantiere]            INT            NOT NULL,
    [DenominazioneCantiere] NVARCHAR (100) NOT NULL,
    [Indirizzo]             NVARCHAR (255) NOT NULL,
    [Citta]                 NVARCHAR (50)  NOT NULL,
    [CAP]                   CHAR (5)       NOT NULL,
    [PersonaRiferimento]    NVARCHAR (100) NOT NULL,
    [DataInizioLavori]      DATE           NOT NULL,
    [DataFineLavori]        DATE           NULL,
    [LavoriTerminatiSI_NO]  BIT            NOT NULL,
    [IdCliente]             INT            NOT NULL,
    PRIMARY KEY CLUSTERED ([IdCantiere] ASC),
    FOREIGN KEY ([IdCliente]) REFERENCES [dbo].[Cliente] ([IdCliente])
);

