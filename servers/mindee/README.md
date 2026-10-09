# Mindee MCP by usefulapi

Extract structured data from any document with Mindee, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Mindee API key.

**Live endpoint:** `https://mindee.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/mindee

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mindee.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mindee https://mindee.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mindee&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmindee.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mindee": {
      "url": "https://mindee.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Mindee credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mindee/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Mindee API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mindee_list_models` | read | List extraction models |
| `mindee_get_job` | read | Get job status |
| `mindee_get_inference` | read | Get extraction result |
| `mindee_extract_document` | read | Extract data from a document |
| `mindee_usage_status` | meta | Usage status (free-tier meter) |
| `mindee_upgrade` | meta | Upgrade to Pro (unlimited) |
| `mindee_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `mindee_upgrade` (it returns a Stripe Checkout link). Cancel any time with `mindee_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `mindee_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
