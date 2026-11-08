# Zenkit MCP by usefulapi

Use your [Zenkit](https://zenkit.com) account from Claude, Cursor, or any MCP client. Read workspaces, lists, fields, members, activity and entries, and search entries. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://zenkit.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://zenkit.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http zenkit https://zenkit.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=zenkit&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fzenkit.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "zenkit": {
      "url": "https://zenkit.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Zenkit credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/zenkit/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Zenkit API key** (Zenkit → your profile → Integrations). The server validates it and keeps only a derived account id per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `zenkit_get_current_user` | read | Get current user |
| `zenkit_list_workspaces` | read | List workspaces with lists |
| `zenkit_get_workspace` | read | Get a workspace |
| `zenkit_get_list` | read | Get a list |
| `zenkit_get_list_elements` | read | Get list fields |
| `zenkit_get_list_users` | read | Get list members |
| `zenkit_get_list_activities` | read | Get list activities |
| `zenkit_get_entry` | read | Get a list entry |
| `zenkit_search_entries` | read | Search entries |
| `zenkit_usage_status` | meta | Usage status (free-tier meter) |
| `zenkit_request_feature` | meta | Request a missing feature |
| `zenkit_upgrade` | meta | Upgrade to Pro or Pro+ |
| `zenkit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `zenkit_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `zenkit_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `zenkit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
