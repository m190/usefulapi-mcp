# Ragic MCP by usefulapi

Use your [Ragic](https://www.ragic.com) account from Claude, Cursor, or any MCP client. Read sheet schemas and records of your Ragic sheets, and create, update, lock or delete records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ragic.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ragic.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ragic https://ragic.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ragic&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fragic.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ragic": {
      "url": "https://ragic.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ragic credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ragic/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Ragic server** (the host in your Ragic URL), your **account name**, a **sheet** to test the key on (for example sales/1) and your **Ragic API key** (Personal Settings page). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ragic_get_sheet_schema` | read | Get sheet schema |
| `ragic_list_records` | read | List records |
| `ragic_get_record` | read | Get a record |
| `ragic_create_record` | **write** | Create a record |
| `ragic_update_record` | **write** | Update a record |
| `ragic_delete_record` | **write** | Delete a record |
| `ragic_set_record_lock` | **write** | Lock or unlock a record |
| `ragic_usage_status` | meta | Usage status (free-tier meter) |
| `ragic_request_feature` | meta | Request a missing feature |
| `ragic_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ragic_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ragic_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ragic_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ragic_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
