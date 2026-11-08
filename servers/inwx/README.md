# INWX MCP by usefulapi

Use your [INWX](https://www.inwx.com) account from Claude, Cursor, or any MCP client. Check domain availability, list domains, DNS zones and contacts, and change DNS records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://inwx.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://inwx.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http inwx https://inwx.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=inwx&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Finwx.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "inwx": {
      "url": "https://inwx.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your INWX credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/inwx/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **INWX username** and **INWX password**, and the **TOTP secret** (the setup key of your authenticator app) only if two-factor login is on. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `inwx_account_info` | read | Get account details |
| `inwx_domain_check` | read | Check domain availability |
| `inwx_domain_list` | read | List domains |
| `inwx_domain_info` | read | Get domain details |
| `inwx_nameserver_list` | read | List DNS zones |
| `inwx_nameserver_info` | read | Get DNS zone details |
| `inwx_contact_list` | read | List contact handles |
| `inwx_contact_info` | read | Get a contact handle |
| `inwx_nameserver_update` | **write** | Update DNS zone settings |
| `inwx_nameserver_create_record` | **write** | Add a DNS record |
| `inwx_nameserver_update_record` | **write** | Change a DNS record |
| `inwx_usage_status` | meta | Usage status (free-tier meter) |
| `inwx_request_feature` | meta | Request a missing feature |
| `inwx_upgrade` | meta | Upgrade to Pro or Pro+ |
| `inwx_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `inwx_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `inwx_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `inwx_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
