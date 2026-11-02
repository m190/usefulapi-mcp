# Retainful MCP by usefulapi

Use your [Retainful](https://retainful.com) account from Claude, Cursor, or any MCP client. Read contacts and lists, add contacts to lists, and record events. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://retainful.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://retainful.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http retainful https://retainful.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=retainful&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fretainful.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "retainful": {
      "url": "https://retainful.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Retainful credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/retainful/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Retainful API key**, created in Retainful under Integrations → your app → Create API key. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `retainful_list_contacts` | read | List contacts |
| `retainful_get_contact` | read | Get contact |
| `retainful_list_lists` | read | List lists and segments |
| `retainful_get_list` | read | Get list |
| `retainful_upsert_contact` | **write** | Create or update contact |
| `retainful_add_contact_to_list` | **write** | Add contact to list |
| `retainful_track_event` | **write** | Track event |
| `retainful_usage_status` | meta | Usage status (free-tier meter) |
| `retainful_request_feature` | meta | Request a missing feature |
| `retainful_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `retainful_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `retainful_upgrade` (it returns a Stripe Checkout link). Cancel any time with `retainful_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `retainful_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
