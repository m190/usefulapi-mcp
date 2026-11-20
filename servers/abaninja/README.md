# AbaNinja MCP by usefulapi

Use your [AbaNinja](https://www.abaninja.ch) account from Claude, Cursor, or any MCP client. Read invoices, customers, products and employees, and list the accounts your token can access. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://abaninja.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://abaninja.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http abaninja https://abaninja.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=abaninja&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fabaninja.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "abaninja": {
      "url": "https://abaninja.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your AbaNinja credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/abaninja/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **AbaNinja API token** (Settings → Automation → API Tokens; a paid account is required, with the profile scope and the scopes you need) and your **account uuid** (Account Information on the same page). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `abaninja_get_profile` | read | Get my profile |
| `abaninja_list_accounts` | read | List accounts |
| `abaninja_list_invoices` | read | List invoices |
| `abaninja_get_invoice` | read | Get invoice |
| `abaninja_get_document_statistics` | read | Get document statistics |
| `abaninja_list_companies` | read | List company customers |
| `abaninja_get_company` | read | Get company customer |
| `abaninja_list_persons` | read | List person customers |
| `abaninja_list_products` | read | List products |
| `abaninja_get_product` | read | Get product |
| `abaninja_list_employees` | read | List employees |
| `abaninja_usage_status` | meta | Usage status (free-tier meter) |
| `abaninja_request_feature` | meta | Request a missing feature |
| `abaninja_upgrade` | meta | Upgrade to Pro or Pro+ |
| `abaninja_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `abaninja_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `abaninja_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `abaninja_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
