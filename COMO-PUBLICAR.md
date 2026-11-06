# Anne Bellini Nail Artist — versão de demonstração (Vercel)

Este projeto já está pronto para hospedar como site estático. Não precisa instalar React nem executar `npm run build`.

## Publicar diretamente pelo computador

1. Extraia o ZIP. Verifique que `index.html`, `styles.css`, `script.js`, `vercel.json`, `robots.txt` e a pasta `assets` fiquem **na mesma pasta**.
2. Abra um terminal **dentro da pasta** extraída.
3. Execute: `npx vercel` (a primeira execução solicitará login e as informações do projeto).
4. Confirme a conta/equipe, dê o nome `anne-bellini-apresentacao` e aceite `./` como diretório raiz.
5. Se pedir o framework, escolha **Other**; não defina comando de build e não use pasta `dist`. Aguarde o endereço `*.vercel.app`.
6. Para implantar o mesmo projeto como URL principal: `npx vercel --prod`.

Alternativa: envie os arquivos para um repositório privado no GitHub e, no painel Vercel, use **Add New > Project > Import Git Repository**. Escolha `Other`, root `./` e deixe o comando de build vazio.

## Proteções incluídas

- Banner e rodapé identificam claramente **demonstração não oficial**.
- HTML: `<meta name="robots" content="noindex,nofollow">`.
- `robots.txt`: `Disallow: /`.
- `vercel.json`: header `X-Robots-Tag: noindex, nofollow, noarchive`.
- Endereço exibido como **aproximado**, porque o número não foi confirmado.
- WhatsApp: https://wa.me/5515991160910 (confirmado pelo usuário).

**Atenção:** `noindex` reduz indexação, mas **não torna o site privado**. Pessoas com o link ainda podem acessá-lo. Se precisar de privacidade real, habilite proteção de acesso na Vercel conforme as opções do plano.

**Atenção sobre planos:** Vercel Hobby é para uso pessoal e não comercial. Como esta demo serve à prospecção de um serviço pago, prefira Vercel Pro (ou outro host cujo plano permita uso comercial).

## Após aprovação da Anne

Confirmar endereço completo, autorização de fotos, lista definitiva de serviços e identidade visual; somente então retirar os avisos e os bloqueios de indexação e publicar a versão oficial.
