# Hypertune MCP by usefulapi

Evaluate feature flags, inspect flag logic, and introspect your Hypertune schema from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Hypertune API token.

**Live endpoint:** `https://hypertune.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/hypertune

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hypertune.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hypertune https://hypertune.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hypertune&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhypertune.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hypertune": {
      "url": "https://hypertune.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hypertune/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Hypertune API token. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hypertune_evaluate` | read | Evaluate |
| `hypertune_get_logic` | read | Get logic |
| `hypertune_list_flags` | read | List flags |
| `hypertune_introspect` | read | Introspect |
| `hypertune_query` | read | Query |
| `hypertune_usage_status` | meta | Usage status (free-tier meter) |
| `hypertune_upgrade` | meta | Upgrade to Pro (unlimited) |
| `hypertune_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `hypertune_upgrade` (it returns a Stripe Checkout link). Cancel any time with `hypertune_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `hypertune_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
