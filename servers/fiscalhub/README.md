# FiscalHub MCP by usefulapi

Use your FiscalHub account from Claude, Cursor, or any MCP client. It reads authorized NF-e XML, received documents and NCM tax data, and it issues or cancels NF-e and NFC-e documents. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://fiscalhub.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fiscalhub.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fiscalhub https://fiscalhub.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fiscalhub&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffiscalhub.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fiscalhub": {
      "url": "https://fiscalhub.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your FiscalHub credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fiscalhub/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **FiscalHub API key**, created in the FiscalHub portal under **API Keys**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fiscalhub_get_nfe_xml` | read | Get an NF-e XML |
| `fiscalhub_list_received_nfe` | read | List received NF-e (DFe) |
| `fiscalhub_get_ncm` | read | Get an NCM code |
| `fiscalhub_search_ncm` | read | Search NCM codes |
| `fiscalhub_simulate_nfe_totals` | read | Simulate NF-e totals |
| `fiscalhub_emit_nfe` | **write** | Issue an NF-e |
| `fiscalhub_cancel_nfe` | **write** | Cancel an NF-e |
| `fiscalhub_emit_nfce` | **write** | Issue an NFC-e |
| `fiscalhub_cancel_nfce` | **write** | Cancel an NFC-e |
| `fiscalhub_usage_status` | meta | Usage status (free-tier meter) |
| `fiscalhub_request_feature` | meta | Request a missing feature |
| `fiscalhub_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fiscalhub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `fiscalhub_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `fiscalhub_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `fiscalhub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
