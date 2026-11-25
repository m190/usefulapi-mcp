# FenoFin MCP by usefulapi

Use your [FenoFin](https://www.fenofin.nl) account from Claude, Cursor, or any MCP client. It reads administraties, ledger accounts, trial balances, invoices and projects, and it creates customers and draft sales invoices. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://fenofin.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fenofin.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fenofin https://fenofin.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fenofin&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffenofin.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fenofin": {
      "url": "https://fenofin.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your FenoFin credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fenofin/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **FenoFin API key** (created under your account's API settings in FenoFin; a `fenofin_test_` key reaches sandbox files only). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fenofin_api_key_status` | read | Check the API key |
| `fenofin_list_administraties` | read | List administraties |
| `fenofin_get_administratie` | read | Get an administratie |
| `fenofin_list_boekjaren` | read | List financial years (boekjaren) |
| `fenofin_get_saldibalans` | read | Get the trial balance (saldibalans) |
| `fenofin_list_grootboekrekeningen` | read | List ledger accounts (grootboekrekeningen) |
| `fenofin_list_btw_codes` | read | List VAT codes (btw-codes) |
| `fenofin_list_afnemers` | read | List customers (afnemers) |
| `fenofin_get_afnemer` | read | Get a customer (afnemer) |
| `fenofin_list_leveranciers` | read | List suppliers (leveranciers) |
| `fenofin_get_leverancier` | read | Get a supplier (leverancier) |
| `fenofin_list_verkoopfacturen` | read | List sales invoices (verkoopfacturen) |
| `fenofin_list_inkoopfacturen` | read | List purchase invoices (inkoopfacturen) |
| `fenofin_list_producten` | read | List active products |
| `fenofin_list_kasboeken` | read | List cash books (kasboeken) |
| `fenofin_list_projecten` | read | List projects |
| `fenofin_get_project` | read | Get a project |
| `fenofin_create_customer` | **write** | Create a customer (afnemer) |
| `fenofin_create_concept_invoice` | **write** | Create a draft sales invoice (concept) |
| `fenofin_usage_status` | meta | Usage status (free-tier meter) |
| `fenofin_request_feature` | meta | Request a missing feature |
| `fenofin_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fenofin_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `fenofin_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `fenofin_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `fenofin_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
