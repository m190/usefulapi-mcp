# Max CRM MCP by usefulapi

Use your [Max CRM](https://maxoutinsurance.com) account from Claude, Cursor, or any MCP client. It reads leads, notes, appointments and activity, and creates or updates leads and adds notes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://max-crm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://max-crm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http max-crm https://max-crm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=max-crm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmax-crm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "max-crm": {
      "url": "https://max-crm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Max CRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/max-crm/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Max CRM API key** (Settings → Your API → Make a key in Max CRM). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `maxcrm_get_account` | read | Get account |
| `maxcrm_get_reference` | read | Get allowed values |
| `maxcrm_list_leads` | read | List leads |
| `maxcrm_get_lead` | read | Get a lead |
| `maxcrm_list_lead_notes` | read | List lead notes |
| `maxcrm_list_appointments` | read | List appointments |
| `maxcrm_list_activity` | read | List activity |
| `maxcrm_create_lead` | **write** | Create a lead |
| `maxcrm_update_lead` | **write** | Update a lead |
| `maxcrm_add_lead_note` | **write** | Add a lead note |
| `maxcrm_usage_status` | meta | Usage status (free-tier meter) |
| `maxcrm_request_feature` | meta | Request a missing feature |
| `maxcrm_upgrade` | meta | Upgrade to Pro or Pro+ |
| `maxcrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `maxcrm_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `maxcrm_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `maxcrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
