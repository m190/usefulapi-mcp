# Senta MCP by usefulapi

Hosted at https://senta.usefulapi.io/mcp.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://senta.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http senta https://senta.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=senta&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsenta.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "senta": {
      "url": "https://senta.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Senta credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/senta/

<!-- connect:end (generated above, edit below) -->

Connect your Senta account using the credentials described on the login page.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `senta_search_clients` | read | Search clients |
| `senta_get_client` | read | Get a client |
| `senta_list_client_view` | read | List clients in a saved client list |
| `senta_list_jobs` | read | List jobs |
| `senta_create_client` | **write** | Create a client |
| `senta_update_client` | **write** | Update a client |
| `senta_add_note` | **write** | Add a note to a client |
| `senta_usage_status` | meta | Usage status (free-tier meter) |
| `senta_request_feature` | meta | Request a missing feature |
| `senta_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `senta_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per practice workspace) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `senta_upgrade` (it returns a Stripe Checkout link). Cancel any time with `senta_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `senta_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
