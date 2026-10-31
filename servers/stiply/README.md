# Stiply MCP by usefulapi

Use your [Stiply](https://www.stiply.nl) account from Claude, Cursor, or any MCP client. Read sign requests, signers and audit trails, and send, remind, extend or cancel sign requests. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://stiply.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://stiply.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http stiply https://stiply.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=stiply&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstiply.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "stiply": {
      "url": "https://stiply.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Stiply credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/stiply/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Stiply Personal Access Token** (Stiply → Settings → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `stiply_list_sign_requests` | read | List sign requests |
| `stiply_get_sign_request` | read | Get a sign request |
| `stiply_get_sign_request_by_external_key` | read | Get a sign request by external key |
| `stiply_get_sign_request_progress` | read | Get sign request progress |
| `stiply_list_signers` | read | List signers |
| `stiply_list_documents` | read | List documents of a sign request |
| `stiply_create_sign_request` | **write** | Create and send a sign request |
| `stiply_send_reminder` | **write** | Send a reminder |
| `stiply_extend_term` | **write** | Extend the term |
| `stiply_cancel_sign_request` | **write** | Cancel a sign request |
| `stiply_usage_status` | meta | Usage status (free-tier meter) |
| `stiply_request_feature` | meta | Request a missing feature |
| `stiply_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `stiply_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `stiply_upgrade` (it returns a Stripe Checkout link). Cancel any time with `stiply_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `stiply_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
