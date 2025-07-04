-- Inserir dados de exemplo de clientes
INSERT INTO clientes (
    razao_social, 
    nome_fantasia, 
    cnpj, 
    inscricao_estadual,
    endereco_logradouro,
    endereco_numero,
    endereco_bairro,
    endereco_cidade,
    endereco_estado,
    endereco_cep,
    email,
    telefone
) VALUES 
(
    'Empresa Teste LTDA',
    'Empresa Teste',
    '12345678000199',
    '123456789',
    'Rua das Flores',
    '123',
    'Centro',
    'São Paulo',
    'SP',
    '01234-567',
    'contato@empresateste.com',
    '11999999999'
)
ON CONFLICT (cnpj) DO NOTHING;