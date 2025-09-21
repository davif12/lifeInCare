// src/shim.ts
// Garante que crypto.randomUUID esteja disponível em ambientes Node que não expõem crypto globalmente (ex.: Node 18)
// Não afeta Node 20+, mas é seguro.

try {
  if (typeof globalThis.crypto === 'undefined' || typeof (globalThis as any).crypto?.randomUUID !== 'function') {
    // Importa o módulo nativo do Node
    // Usamos require para compatibilidade com o transpile/execução do Nest em dev
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const nodeCrypto = require('node:crypto');
    (globalThis as any).crypto = nodeCrypto;
  }
} catch (_) {
  // Silencioso: se algo falhar aqui, deixamos seguir para ver o erro real em runtime
}
