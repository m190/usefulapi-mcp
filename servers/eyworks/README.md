# eyworks MCP by usefulapi

Use your [eyworks](https://eyworks.co.uk) account from Claude, Cursor, or any MCP client. It reads companies, nurseries, rooms, employees, children and nursery availability, and it makes no writes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://eyworks.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://eyworks.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http eyworks https://eyworks.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=eyworks&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feyworks.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "eyworks": {
      "url": "https://eyworks.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your eyworks credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/eyworks/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **eyworks tenant**, **Client ID** and **Client secret** (eyworks support issues them; the tenant is the part before .eylog.co.uk). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `eyworks_list_companies` | read | List companies |
| `eyworks_get_company` | read | Get a company |
| `eyworks_list_company_nurseries` | read | List a company's nurseries |
| `eyworks_get_nursery` | read | Get a nursery |
| `eyworks_list_rooms` | read | List a nursery's rooms |
| `eyworks_list_employees` | read | List a nursery's employees |
| `eyworks_list_children` | read | List a nursery's children |
| `eyworks_get_availability` | read | Get nursery availability |
| `eyworks_usage_status` | meta | Usage status (free-tier meter) |
| `eyworks_request_feature` | meta | Request a missing feature |
| `eyworks_upgrade` | meta | Upgrade to Pro or Pro+ |
| `eyworks_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `eyworks_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `eyworks_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `eyworks_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
