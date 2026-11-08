# Kommo MCP by usefulapi

Use your [Kommo](https://kommo.com) account from Claude, Cursor, or any MCP client. Read leads, contacts, companies, tasks and pipelines, and create or update leads. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://kommo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://kommo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http kommo https://kommo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=kommo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkommo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "kommo": {
      "url": "https://kommo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Kommo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/kommo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **account subdomain** (the `yourcompany` part of `yourcompany.kommo.com`) and a **long-lived token** (Settings → Integrations → a private integration → Keys and scopes → Generate long-lived token; only an account administrator can create it). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `kommo_get_account` | read | Get account |
| `kommo_list_pipelines` | read | List pipelines |
| `kommo_list_users` | read | List users |
| `kommo_list_custom_fields` | read | List custom fields |
| `kommo_list_leads` | read | List leads |
| `kommo_get_lead` | read | Get lead |
| `kommo_list_contacts` | read | List contacts |
| `kommo_get_contact` | read | Get contact |
| `kommo_list_companies` | read | List companies |
| `kommo_get_company` | read | Get company |
| `kommo_list_tasks` | read | List tasks |
| `kommo_list_notes` | read | List notes |
| `kommo_create_lead` | **write** | Create lead |
| `kommo_update_lead` | **write** | Update lead |
| `kommo_usage_status` | meta | Usage status (free-tier meter) |
| `kommo_request_feature` | meta | Request a missing feature |
| `kommo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `kommo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `kommo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `kommo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `kommo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
