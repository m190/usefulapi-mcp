# SugarCRM MCP by usefulapi

Use your [SugarCRM](https://www.sugarcrm.com) account from Claude, Cursor, or any MCP client. List, filter and count records, read dropdown values, and create or update records in your Sugar instance. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sugarcrm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sugarcrm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sugarcrm https://sugarcrm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sugarcrm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsugarcrm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sugarcrm": {
      "url": "https://sugarcrm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SugarCRM credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sugarcrm/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **SugarCRM instance address** (the https address you open, for example `https://yourcompany.sugarondemand.com`), your **Sugar username** and your **Sugar password** (used once to sign in), and optionally an **OAuth key** (the default is `sugar`, or one you create under **Admin → OAuth Keys**). The server validates it and keeps only a refresh token per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sugarcrm_list_records` | read | List records |
| `sugarcrm_get_record` | read | Get a record |
| `sugarcrm_filter_records` | read | Filter records |
| `sugarcrm_count_records` | read | Count records |
| `sugarcrm_get_enum_values` | read | Get dropdown values |
| `sugarcrm_create_record` | **write** | Create a record |
| `sugarcrm_update_record` | **write** | Update a record |
| `sugarcrm_usage_status` | meta | Usage status (free-tier meter) |
| `sugarcrm_request_feature` | meta | Request a missing feature |
| `sugarcrm_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sugarcrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `sugarcrm_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `sugarcrm_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `sugarcrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
