INSERT INTO produtos (
    nome,
    descricao,
    codigo_barras,
    ncm,
    unidade_medida,
    preco,
    peso
) VALUES 
(
    'Notebook Dell Inspiron 15',
    'Notebook Dell Inspiron 15 3000 com processador Intel Core i5, 8GB RAM, SSD 256GB',
    '7891234567890',
    '84713012',
    'UN',
    2500.00,
    2.100
),
(
    'Mouse Logitech MX Master',
    'Mouse wireless Logitech MX Master 3 com sensor de alta precisão',
    '7891234567891',
    '84716090',
    'UN',
    450.00,
    0.141
),
(
    'Teclado Mecânico Keychron K2',
    'Teclado mecânico sem fio Keychron K2 com switches Blue',
    '7891234567892',
    '84716090',
    'UN',
    650.00,
    0.960
),
(
    'Monitor LG UltraWide 29"',
    'Monitor LG UltraWide 29" Full HD IPS com entrada HDMI e USB-C',
    '7891234567893',
    '85285210',
    'UN',
    1200.00,
    5.800
),
(
    'Cabo HDMI 2.0 - 2m',
    'Cabo HDMI 2.0 de alta velocidade com 2 metros de comprimento',
    '7891234567894',
    '85444290',
    'UN',
    35.00,
    0.200
)
ON CONFLICT (codigo_barras) DO NOTHING; 