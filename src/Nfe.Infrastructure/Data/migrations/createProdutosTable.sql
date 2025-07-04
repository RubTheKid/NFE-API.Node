CREATE TABLE IF NOT EXISTS produtos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    codigo_barras VARCHAR(50) UNIQUE NOT NULL,
    ncm VARCHAR(10) NOT NULL,
    unidade_medida VARCHAR(10) NOT NULL,
    preco DECIMAL(10,2) NOT NULL CHECK (preco > 0),
    peso DECIMAL(10,3) NOT NULL CHECK (peso >= 0),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ativo BOOLEAN DEFAULT TRUE
);

CREATE INDEX IF NOT EXISTS idx_produtos_codigo_barras ON produtos(codigo_barras);
CREATE INDEX IF NOT EXISTS idx_produtos_ncm ON produtos(ncm);
CREATE INDEX IF NOT EXISTS idx_produtos_nome ON produtos(nome);
CREATE INDEX IF NOT EXISTS idx_produtos_ativo ON produtos(ativo);