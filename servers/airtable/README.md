# Airtable MCP by usefulapi

Use your [Airtable](https://airtable.com) account from Claude, Cursor, or any MCP client. Read bases, table schemas and records in Airtable, and create or update up to 10 records per call. The server has no delete tool. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://airtable.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://airtable.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http airtable https://airtable.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=airtable&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fairtable.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "airtable": {
      "url": "https://airtable.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Airtable credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/airtable/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Airtable personal access token** (created at airtable.com/create/tokens, with the scopes and bases you need). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `airtable_whoami` | read | Show the connected user |
| `airtable_list_bases` | read | List bases |
| `airtable_get_base_schema` | read | Get base schema |
| `airtable_list_records` | read | List records |
| `airtable_get_record` | read | Get a record |
| `airtable_create_records` | **write** | Create records |
| `airtable_update_records` | **write** | Update records |
| `airtable_usage_status` | meta | Usage status (free-tier meter) |
| `airtable_request_feature` | meta | Request a missing feature |
| `airtable_upgrade` | meta | Upgrade to Pro or Pro+ |
| `airtable_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `airtable_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `airtable_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `airtable_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
