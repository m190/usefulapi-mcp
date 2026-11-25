# 1CRM MCP by usefulapi

Use your [1CRM](https://1crm-system.de/) account from Claude, Cursor, or any MCP client. It reads modules, records and linked records, and it creates or updates records but never deletes one. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://1crm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://1crm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http 1crm https://1crm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=1crm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2F1crm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "1crm": {
      "url": "https://1crm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your 1CRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/1crm/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **1CRM instance** (the `yourname` part of yourname.1crmcloud.com) and the **user name and password** of a 1CRM user (your administrator enables Basic authentication for the API). The server validates the login and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `onecrm_whoami` | read | Show the signed-in user |
| `onecrm_get_module_fields` | read | List the fields of a module |
| `onecrm_list_records` | read | List records |
| `onecrm_get_record` | read | Get a record |
| `onecrm_list_related_records` | read | List related records |
| `onecrm_create_record` | **write** | Create a record |
| `onecrm_update_record` | **write** | Update a record |
| `onecrm_usage_status` | meta | Usage status (free-tier meter) |
| `onecrm_request_feature` | meta | Request a missing feature |
| `onecrm_upgrade` | meta | Upgrade to Pro or Pro+ |
| `onecrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `onecrm_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `onecrm_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `onecrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
